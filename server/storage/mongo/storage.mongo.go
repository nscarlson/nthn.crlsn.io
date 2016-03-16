package mongo

import (
	"gopkg.in/mgo.v2"
	"log"
	"time"
)

const (
	SERVER = "mongo1"
)

var conn *MongoConnection
var mongoDBDialInfo *mgo.DialInfo

func init() {
	conn = new(MongoConnection)

	mongoDBDialInfo = &mgo.DialInfo{
		Addrs:    []string{SERVER},
		Timeout:  30 * time.Second,
		Database: "test",
	}
}

// Returns the current global connection object
func GetMongoConnection() *MongoConnection {
	return conn
}

func GetDialInfo() *mgo.DialInfo {
	return mongoDBDialInfo
}

// Returns a the project database and the current session
func GetDatabase() (*mgo.Database, *mgo.Session) {
	s := conn.session.Copy()
	return s.DB("test"), s
}

// Stores the global mongo session
type MongoConnection struct {
	session *mgo.Session
}

// Connect to the dabase with defaults - localhost
func (m *MongoConnection) Connect() {

	//
	// Create a session which maintains a pool of socket connections
	// to our MongoDB
	//
	session, err := mgo.DialWithInfo(GetDialInfo())
	if err != nil {
		log.Fatalf("db.Connect() failed: %s\nServer: %s", err, SERVER)
	}

	// Reads may not be entirely up-to-date, but they will always see the
	// history of changes moving forward, the data read will be consistent
	// across sequential queries in the same session, and modifications made
	// within the session will be observed in following queries (read-your-writes).
	// http://godoc.org/labix.org/v2/mgo#Session.SetMode
	session.SetMode(mgo.Monotonic, true)

	m.session = session
}

// Close the stored session
func (m *MongoConnection) Close() {
	m.session.Close()
}
