import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setToLocalStorage } from "../../hooks/setToLocalStorage";

export const createUserService = (email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      if ("accessToken" in user) {
        if (user.accessToken) {
          setToLocalStorage("userInfo", {
            email: email,
            id: user.uid,
            token: user.accessToken,
          });
        }
      }
    })
    .catch(console.error);
};

export const signInService = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      setToLocalStorage("userInfo", { email: email });
    })
    .catch((error) => {
      console.log(error);
    });
};
