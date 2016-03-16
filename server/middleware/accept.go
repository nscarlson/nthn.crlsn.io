package middleware

import (
	"encoding/json"
	"github.com/nscarlson/crlsn.io/server/models"
	"net/http"
)

func acceptHandler(next http.Handler) http.Handler {

	fn := func(w http.ResponseWriter, r *http.Request) {
		// We send a JSON-API error if the Accept header does not have a valid value.
		if r.Header.Get("Accept") != "application/vnd.api+json" {
			jsonErr := &model.Error{"not_acceptable", 406, "Not Acceptable", "Accept header must be set to 'application/vnd.api+json'."}
			w.Header().Set("Content-Type", "application/vnd.api+json")
			w.WriteHeader(jsonErr.Status)
			json.NewEncoder(w).Encode(model.Errors{[]*model.Error{jsonErr}})
			return
		}

		next.ServeHTTP(w, r)
	}

	return http.HandlerFunc(fn)
}
