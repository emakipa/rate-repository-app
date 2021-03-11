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