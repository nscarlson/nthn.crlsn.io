package main

import (
	"bytes"
	"fmt"
	"github.com/nscarlson/crlsn.io/server/core"
)

type errorMsgs []core.ErrorMsg

func (a errorMsgs) String() string {
	if len(a) == 0 {
		return ""
	}
	var buffer bytes.Buffer
	for i, msg := range a {
		text := fmt.Sprintf("Error #%02d: %s \n     Meta: %v\n", (i + 1), msg.Err, msg.Meta)
		buffer.WriteString(text)
	}
	return buffer.String()
}
