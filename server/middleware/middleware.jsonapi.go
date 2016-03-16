package middleware

import (
	"github.com/gin-gonic/gin"
)

func JsonAPI() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Content-Type", "application/vnd.api+json")

		c.Next()
	}
}
