package main

import (
	"github.com/gin-gonic/contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/nscarlson/crlsn.io/server/core"
	"github.com/nscarlson/crlsn.io/server/middleware"
	"github.com/nscarlson/crlsn.io/server/models"
	"github.com/nscarlson/crlsn.io/server/resources"
	"github.com/nscarlson/crlsn.io/server/storage/mongo"
	"golang.org/x/crypto/bcrypt"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

const (
	//PORT under which the api runs
	PORT = ":3000"
)

func main() {
	// TODO: parse flags for port and environment mode (dev/production)

	db := mongo.GetMongoConnection()
	db.Connect()
	defer db.Close()

	gin.SetMode(gin.DebugMode)

	segment := new(resource.SegmentController)
	user := new(resource.UserController)

	// Default mode for Gin
	r := gin.Default()

	// "Global" Session Store
	//store, _ := sessions.NewRedisStore(10, "tcp", "localhost:6379", "", []byte("secret"))

	// r.Use(sessions.Sessions("mysession", store))
	r.Use(middleware.JsonAPI())

	userGroup := r.Group("/api/v1/user")
	userGroup.Use(middleware.Recover())
	{
		userGroup.GET("/", core.RestController(user))
		userGroup.GET("/:id", core.RestController(user))
		userGroup.POST("", core.RestController(user))
		userGroup.PUT("", core.RestController(user))
		userGroup.PATCH("", core.RestController(user))
		userGroup.DELETE("", core.RestController(user))
	}

	segmentGroup := r.Group("/api/v1/segment")
	segmentGroup.Use(middleware.Recover())
	{
		segmentGroup.GET("/", core.RestController(segment))
		segmentGroup.GET("/:id", core.RestController(segment))
		segmentGroup.POST("", core.RestController(segment))
		segmentGroup.PUT("", core.RestController(segment))
		segmentGroup.PATCH("", core.RestController(segment))
		segmentGroup.DELETE("/:id", core.RestController(segment))
	}

	loginGroup := r.Group("/api/v1/" + "login")
	//loginGroup.Use(middleware.Login())
	{

		loginGroup.POST("", func(c *gin.Context) {

			// params
			u := c.Params.ByName("username")
			p := c.Params.ByName("password")

			// db stuff
			db, conn := mongo.GetDatabase()
			defer conn.Close()

			col := db.C("segments")

			user := model.User{}

			// session
			session := sessions.Default(c)

			if session.Get("username") != nil {
				// error: already authenticated
			}

			if err := col.Find(
				bson.M{"username": u}).One(&user); err != nil {

				// error: user not found

			} else {
				if err := bcrypt.CompareHashAndPassword(user.Hash, []byte(p)); err != nil {
					// error: no matching credentials
					// 403 not authorized

					c.AbortWithError(http.StatusForbidden, err)
				} else {
					session.Set("username", u)
					session.Save()
				}
			}

			c.Next()
		})
	}

	r.Run(PORT)
}
