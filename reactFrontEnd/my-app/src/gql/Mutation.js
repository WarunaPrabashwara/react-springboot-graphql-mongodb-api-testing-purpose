
import gql from "graphql-tag";


export const GET_GEN_4 = gql`
mutation newBook( $title: String! , $isbn: String! , $pageCount: Int! , $author: Int! )  {
  newBook(title:$title  , isbn:$isbn , pageCount:$pageCount ,author:$author  ) {
        title   
  }
}
`;



export const POST_GEN_5 = gql`
  mutation newuser( $firstName: String! , $password: String!  )  {
    newuser(firstName:$firstName  , password:$password  ) {
          firstName   
          password
    }
  }
`;



export const deletee = gql`
    mutation deleteBook( $id: ID!)  {
        deleteBook(  id :$id ) 
    }
  
`;
