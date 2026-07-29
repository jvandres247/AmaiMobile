import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async () => {
  await GoogleSignin.hasPlayServices();

  const userInfo = await GoogleSignin.signIn();

  return userInfo;
};
