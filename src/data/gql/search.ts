import { gql } from '@apollo/client';

const GetSearchQuery = gql`
  query GetQuery {
    query @client
  }
`;

const GetSearchResults = gql`
  query SearchQuery($query: String!) {
    search(query: $query) {
      content
    }
  }
`;

export { GetSearchQuery, GetSearchResults };
