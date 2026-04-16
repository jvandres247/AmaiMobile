import {gql} from '@apollo/client';

export const USER_INFO_QUERY = gql`
  query Query {
    users {
      id
      email
      name
      role
      emailConfirmed
      createdAt
    }
  }
`;
