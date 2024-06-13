/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSSImageMetadata = /* GraphQL */ `
  query GetSSImageMetadata($id: ID!) {
    getSSImageMetadata(id: $id) {
      id
      category
      annotation
      date
      episode
      time_in_episode
      attribute
      restricted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSSImageMetadata = /* GraphQL */ `
  query ListSSImageMetadata(
    $filter: ModelSSImageMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSSImageMetadata(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        annotation
        date
        episode
        time_in_episode
        attribute
        restricted
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
