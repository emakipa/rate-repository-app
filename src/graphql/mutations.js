import { gql } from 'apollo-boost';

// Authorize user
export const AUTHORIZE = gql`
  mutation Authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

// Create a review
export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      repositoryId
    }
  }
`;

// Delete a review
export const DELETE_REVIEW = gql`  
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;

// Create a user
export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;