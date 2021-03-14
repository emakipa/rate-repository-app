import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

// Get authorized user information
export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;

// Get repositories with detailed information
export const GET_REPOSITORIES = gql`
  query GetRepositories(
      $orderBy: AllRepositoriesOrderBy,
      $orderDirection: OrderDirection,
      $searchKeyword: String
    ) {
    repositories(
        orderBy: $orderBy,
        orderDirection: $orderDirection,
        searchKeyword: $searchKeyword
      ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }    
    }
  }
  ${REPOSITORY_DETAILS}
`;

// Get single repository with detailed information
export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }      
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;