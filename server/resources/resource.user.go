package resource

import (
	"fmt"
	"github.com/derekdowling/go-json-spec-handler"
	"github.com/gin-gonic/gin"
	"github.com/nscarlson/crlsn.io/server/errors"
	"github.com/nscarlson/crlsn.io/server/models"
	"github.com/nscarlson/crlsn.io/server/storage/mongo"
	"github.com/shwoodard/jsonapi"
	"golang.org/x/crypto/bcrypt"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type UserController struct{}

func (s *UserController) Get(c *gin.Context) (int, interface{}) {
	db, conn := mongo.GetDatabase()
	col := db.C("users")

	var result model.User

	defer conn.Close()

	switch c.Params.ByName("id") {
	case "":

		result := make([]*model.User, 0)
		err := col.Find(nil).All(&result)

		document := jsh.New()

		for _, user := range result {
			object, jshErr := jsh.NewObject(user.Id.Hex(), "users", user)

			if jshErr != nil {
				fmt.Println(jshErr)
			}

			document.AddObject(object)
		}

		if err != nil {
			return http.StatusNotFound, nil
		}

		return http.StatusOK, document
	default:

		id := c.Params.ByName("id")

		err := col.FindId(bson.ObjectIdHex(id)).One(&result)
		doc, jshErr := jsh.NewObject(id, "users", result)

		document := jsh.New()

		document.AddObject(doc)

		fmt.Println(jshErr)

		if err != nil {
			fmt.Println("Not found here!")
			return http.StatusNotFound, nil
		}

		return http.StatusOK, &document
	}
}

// Create and initialize a new User
func (u *UserController) Post(c *gin.Context) (int, interface{}) {

	jsonapiruntime := jsonapi.NewRuntime().Instrument("users.create")
	user := new(model.User)

	if err := jsonapiruntime.UnmarshalPayload(c.Request.Body, model.User{}); err != nil {

	}

	db, conn := mongo.GetDatabase()
	defer conn.Close()

	if pass, err := c.Params.Get("password"); pass != "" && err == false {
		passwordSlice := []byte(pass)

		// Hashing the password with the cost of 10
		hash, err := bcrypt.GenerateFromPassword(passwordSlice, 10)
		errors.Check(err)

		fmt.Println(string(hash))

	}

	if username, defined := c.Params.Get("username"); username != "" && defined == true {
		user.Username = username
	}

	if err := user.Create(db); err != nil {
		return http.StatusBadRequest, nil
	}

	return http.StatusOK, user
}
