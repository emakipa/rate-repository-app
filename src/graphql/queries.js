import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS } from './fragments';

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
  query getRepositories {
    repositories {
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
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
      url
    }
  }
  ${REPOSITORY_DETAILS}
`;