import { gql } from 'react-apollo'

const book = gql`
  query book($isbn: String) {
    book(isbn: $isbn) {
      _id
      # amazonInfo {
      #   affiliateLink
      #   asin
      #   isAdultProduct
      #   largeImage
      #   lastUpdated
      #   mediumImage
      #   salesRank
      #   smallImage
      #   studio
      # }
      author
      isbn10
      isbn13
      lastUpdated
      publicationDate
      publisher
      releaseDate
      studio
      title
    }
  }
`

export default book
