import {gql} from '@apollo/client';

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword(
    $email: String!
    $code: String!
    $newPassword: String!
  ) {
    resetPassword(email: $email, code: $code, newPassword: $newPassword)
  }
`;
