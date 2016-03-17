package model_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/nscarlson/crlsn.io/server/models"
)

var _ = Describe("User", func() {
	u := new(model.User)

	BeforeEach(func() {
		u := new(model.User)
		Expect(u).NotTo(BeNil())
	})

	Describe("Full Name", func() {
		Context("With a first and last name", func() {
			It("should concatenate the names with a ' '", func() {
				u.Firstname = "Peyton"
				u.Lastname = "Manning"
				Expect(u.FullName()).To(Equal("Peyton Manning"))
			})
		})

		Context("With only a first name", func() {
			It("should return the last name", func() {
				u.Firstname = "Peyton"
				u.Lastname = ""
				Expect(u.FullName()).To(Equal("Peyton"))
			})
		})

		Context("With only a first name", func() {
			It("should return the last name", func() {
				u.Firstname = ""
				u.Lastname = "Manning"
				Expect(u.FullName()).To(Equal("Manning"))
			})
		})

		Context("When first and last name are missing", func() {
			It("should return the empty string", func() {
				u.Firstname = ""
				u.Lastname = ""
				Expect(u.FullName()).To(BeEmpty())
			})
		})
	})
})
