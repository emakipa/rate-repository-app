import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS, REVIEW_DETAILS, PAGE_INFO_DETAILS } from './fragments';

// Get authorized user information
export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviewCount
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails  
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
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
  query GetRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(
          first: $first,
          after: $after
        ) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }      
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
`;