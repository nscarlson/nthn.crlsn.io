package resource

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/nscarlson/crlsn.io/server/storage/mongo"
	//"github.com/shwoodard/jsonapi"
	"github.com/derekdowling/go-json-spec-handler"
	"github.com/nscarlson/crlsn.io/server/models"
	"gopkg.in/mgo.v2/bson"
	"net/http"
)

type SegmentController struct{}

func (s *SegmentController) Get(c *gin.Context) (int, interface{}) {
	db, conn := mongo.GetDatabase()
	col := db.C("segments")

	var result model.Segment

	defer conn.Close()

	switch c.Params.ByName("id") {
	case "":

		result := make([]*model.Segment, 0)
		err := col.Find(nil).All(&result)

		document := jsh.New()

		for _, segment := range result {
			object, jshErr := jsh.NewObject(segment.Id.Hex(), "users", segment)

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
		doc, jshErr := jsh.NewObject(id, "segments", result)

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

func (s *SegmentController) Post(c *gin.Context) (int, interface{}) {
	db, conn := mongo.GetDatabase()
	defer conn.Close()

	var segment model.Segment

	var errors []string

	if c.Bind(&segment) == nil {
		if err := segment.Insert(db); err != nil {
			return http.StatusBadRequest, err
		}

	} else {
		errors = append(errors, "405")

		if segment.Name == "" {
			errors = append(errors, "name required")
		}

		if segment.Teaser == "" {
			errors = append(errors, "teaser required")
		}

		if len(errors) > 1 {
			return http.StatusBadRequest, errors
		}
	}

	//fmt.Println(segment)

	result := segment.Insert(db)

	return http.StatusOK, result
}
