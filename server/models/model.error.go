package model

type Error struct {
	Id     string `json:"id"`
	Status int    `json:"status"`
	Title  string `json:"title"`
	Detail string `json:"detail"`
}

type Errors struct {
	Errors []*Error `json:"errors"`
}

func Check(e error) {
	if e != nil {
		panic(e)
	}
}
