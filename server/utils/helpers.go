package utils

import "gopkg.in/mgo.v2/bson"

// Returns an ObjectId from string; else nil
func ParseObjectId(id string) bson.ObjectId {
	var oid bson.ObjectId

	if bson.IsObjectIdHex(id) {
		oid = bson.ObjectIdHex(id)
	}

	return oid
}
