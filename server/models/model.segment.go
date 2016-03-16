package model

import (
	_ "github.com/derekdowling/go-json-spec-handler"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Segment struct {
	Id     bson.ObjectId `bson:"_id,omitempty"                           json:"-"`
	Name   string        `bson:"name"   form:"name" binding:"required"   json:"name"`
	Teaser string        `bson:"teaser" form:"teaser" binding:"required" json:"teaser"`
	Wiki   string        `bson:"wiki"   form:"wiki" binding:"required"   json:"wiki"`

	// Beginning date
	Begin int64 `bson:"begin"  form:"begin" json:"begin"`
	End   int64 `bson:"end"    form:"end"   json:"end"`

	//
	//	Go's time.Time object is robust enough to provide a validand unique represention for ANY segment needed,
	//	plus or minus many billions of years.
	//

	Date time.Time `bson:"date" form:"date" json:"date"`
}

type SegmentResource struct {
	Data Segment `json:"data"`
}

// Insert the Segment in the db
func (segment *Segment) Insert(db *mgo.Database) error {
	collection := db.C("segments")
	// Generate the ObjectId
	segment.Id = bson.NewObjectId()
	return collection.Insert(segment)
}

// Update the Segment in the db
func (b *Segment) Update(db *mgo.Database) error {
	collection := db.C("segments")
	return collection.UpdateId(b.Id, b)
}

// Remove the Segment in the db
func (t *Segment) Delete(db *mgo.Database) error {
	collection := db.C("segments")

	return collection.RemoveId(t.Id)
}
