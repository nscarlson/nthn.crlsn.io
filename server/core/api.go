package core

import (
	//"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"time"
)

const (
	GET     = "GET"
	POST    = "POST"
	PUT     = "PUT"
	PATCH   = ""
	DELETE  = "DELETE"
	OPTIONS = "OPTIONS"
)

// Used internally to collect errors that occurred during an http request.
type ErrorMsg struct {
	Err  string      `json:"error"`
	Type uint32      `json:"-"`
	Meta interface{} `json:"meta"`
}

type Service struct {
	Name string
}

//
// serviceObjectMap maps each service to its DB model
//

func (s *Service) Get(int, interface{}) {

}

func (s *Service) Post(int, interface{}) {

}

func (s *Service) Put(int, interface{}) {

}

func (s *Service) Delete(int, interface{}) {

}

func (s *Service) Options(int, interface{}) {

}

type GetMethod interface {
	Get(*gin.Context) (int, interface{})
}

type PostMethod interface {
	Post(*gin.Context) (int, interface{})
}

type PutMethod interface {
	Put(*gin.Context) (int, interface{})
}

type DeleteMethod interface {
	Delete(*gin.Context) (int, interface{})
}

func RestController(i interface{}) gin.HandlerFunc {
	return func(context *gin.Context) {
		l := NewHttpLogger(*context.Request)
		defer l.Print()

		var handler func(*gin.Context) (int, interface{})

		switch context.Request.Method {
		case GET:
			if c, ok := i.(GetMethod); ok {
				handler = c.Get
			}
		case POST:
			if c, ok := i.(PostMethod); ok {
				handler = c.Post
			}
		case PUT:
			if c, ok := i.(PutMethod); ok {
				handler = c.Put
			}
		case DELETE:
			if c, ok := i.(DeleteMethod); ok {
				handler = c.Delete
			}
		case OPTIONS:
			handler = func(_ *gin.Context) (int, interface{}) {
				return http.StatusOK, ""
			}
		}

		// Abort with a 405 status
		if handler == nil {
			context.AbortWithStatus(http.StatusMethodNotAllowed)
			return
		}

		// Parse request data
		err := context.Request.ParseForm()
		if err != nil {
			context.AbortWithStatus(http.StatusBadRequest)
			return
		}

		// Create the params from GET and POST values
		/*params, _ := url.ParseQuery(fmt.Sprintf("%s&%s",
		context.Request.URL.Query().Encode(), context.Request.Form.Encode()))*/

		// Call the handler
		code, data := handler(context)
		// Set a default
		if data == nil {
			data = map[string]interface{}{
				"status": code,
				"text":   http.StatusText(code),
			}
		}

		//fmt.Println("DATA:")
		//fmt.Println(data)

		/*
			// Encode
			content, err := json.Marshal(data)
			if err != nil {
				context.AbortWithStatus(http.StatusInternalServerError)
				return
			}
		*/

		// Write to response
		context.JSON(code, data)
	}
}

// Simple HTTP request logger
type HttpLogger struct {
	initTime time.Time
	request  http.Request
}

// Print with the method, url and request time
func (l *HttpLogger) Print() {
	log.Printf("%s \t %s %s",
		time.Since(l.initTime).String(),
		l.request.Method,
		l.request.URL.Path)
}

// Return a new instance of the HTTP logger
func NewHttpLogger(r http.Request) *HttpLogger {
	l := new(HttpLogger)
	l.initTime = time.Now()
	l.request = r
	return l
}
