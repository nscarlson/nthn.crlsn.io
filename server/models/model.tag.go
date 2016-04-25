package model

import "gopkg.in/mgo.v2/bson"

type Tag struct {
	Id   bson.ObjectId `bson:"_id,omitempty" json:"-"`
	Name string        `bson:"name"          json:"name"`
	Path string        `bson:"path"          json:"path"`
}
