/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSSImageMetadata = /* GraphQL */ `
  subscription OnCreateSSImageMetadata(
    $filter: ModelSubscriptionSSImageMetadataFilterInput
    $owner: String
  ) {
    onCreateSSImageMetadata(filter: $filter, owner: $owner) {
      id
      category
      annotation
      date
      episode
      time_in_episode
      attribute
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateSSImageMetadata = /* GraphQL */ `
  subscription OnUpdateSSImageMetadata(
    $filter: ModelSubscriptionSSImageMetadataFilterInput
    $owner: String
  ) {
    onUpdateSSImageMetadata(filter: $filter, owner: $owner) {
      id
      category
      annotation
      date
      episode
      time_in_episode
      attribute
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteSSImageMetadata = /* GraphQL */ `
  subscription OnDeleteSSImageMetadata(
    $filter: ModelSubscriptionSSImageMetadataFilterInput
    $owner: String
  ) {
    onDeleteSSImageMetadata(filter: $filter, owner: $owner) {
      id
      category
      annotation
      date
      episode
      time_in_episode
      attribute
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
