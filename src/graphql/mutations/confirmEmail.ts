import {gql} from '@apollo/client';

export const CONFIRM_EMAIL_MUTATION = gql`
  mutation ConfirmEmail($email: String!, $code: String!) {
    confirmEmail(email: $email, code: $code)
  }
`;
