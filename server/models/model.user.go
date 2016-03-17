package model

import (
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"fmt"
)

type User struct {
	Id        bson.ObjectId `bson:"_id,omitempty" json:"-"`
	Email     string        `bson:"email"         json:"email"`
	Username  string        `bson:"username"      json:"username"`
	Firstname string        `bson:"firstname"     json:"firstname"`
	Lastname  string        `bson:"lastname"      json:"lastname"`
	Activated bool          `bson:"activated"     json:"activated"`
	Hash      []byte        `bson:"hash"          json:"hash"`
}

type UserResource struct {
	Data *User `json:"data"`
}

var Collection string = "users"

// Insert the User in the db
func (user *User) Create(db *mgo.Database) error {
	collection := db.C(Collection)

	// Generate the ObjectId
	user.Id = bson.NewObjectId()
	return collection.Insert(user)
}

// Update the user in the db
func (user *User) Update(db *mgo.Database) error {
	collection := db.C(Collection)
	return collection.UpdateId(user.Id, user)
}

// Remove the user in the db
func (user *User) Delete(db *mgo.Database) error {
	collection := db.C(Collection)

	return collection.RemoveId(user.Id)
}

func (user *User) FullName() string {
	var spacer string
	if user.Firstname == "" || user.Lastname == "" {
		spacer = ""
	} else {
		spacer = " "
	}

	return fmt.Sprint(user.Firstname, spacer, user.Lastname)
}
