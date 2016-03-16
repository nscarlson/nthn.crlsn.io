package middleware

import (
	"log"
	"net/http"
	"runtime/debug"

	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/nscarlson/crlsn.io/server/models"
)

/*
func recoverHandler(next http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				log.Printf("panic: %+v", err)
				// http.Error(w, http.StatusText(500), 500) // What we had before
				jsonErr := &model.Error{"internal_server_error", 500, "Internal Server Error", "Something went wrong."}
				w.Header().Set("Content-Type", "application/vnd.api+json")
				w.WriteHeader(jsonErr.Status)
				json.NewEncoder(w).Encode(model.Errors{[]*model.Error{jsonErr}})
			}
		}()

		next.ServeHTTP(w, r)
	}

	return http.HandlerFunc(fn)
}

*/

func Recover() gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if rval := recover(); rval != nil {
				debug.PrintStack()

				log.Printf("panic: %+v", rval)

				jsonError := &model.Error{"internal_server_error",
					500,
					"Internal Server Error",
					"Something went wrong.",
				}

				c.Header("Content-Type", "application/vnd.api+json")
				c.Writer.WriteHeader(jsonError.Status)

				json.NewEncoder(c.Writer).Encode(model.Errors{[]*model.Error{jsonError}})
				c.AbortWithStatus(http.StatusInternalServerError)
			}
		}()

		c.Next()
	}
}
