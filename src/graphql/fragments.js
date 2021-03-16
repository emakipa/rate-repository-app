import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      id
      fullName
      url
    }
  }
`;

export const PAGE_INFO_DETAILS = gql`
  fragment PageInfoDetails on PageInfo {
    endCursor
    startCursor
    hasNextPage
    totalCount
  }
`;