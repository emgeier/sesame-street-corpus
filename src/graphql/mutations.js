/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSSImageMetadata = /* GraphQL */ `
  mutation CreateSSImageMetadata(
    $input: CreateSSImageMetadataInput!
    $condition: ModelSSImageMetadataConditionInput
  ) {
    createSSImageMetadata(input: $input, condition: $condition) {
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
export const deleteSSImageMetadata = /* GraphQL */ `
  mutation DeleteSSImageMetadata(
    $input: DeleteSSImageMetadataInput!
    $condition: ModelSSImageMetadataConditionInput
  ) {
    deleteSSImageMetadata(input: $input, condition: $condition) {
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
export const updateSSImageMetadata = /* GraphQL */ `
  mutation UpdateSSImageMetadata(
    $input: UpdateSSImageMetadataInput!
    $condition: ModelSSImageMetadataConditionInput
  ) {
    updateSSImageMetadata(input: $input, condition: $condition) {
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
