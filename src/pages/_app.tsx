import type { AppProps } from "next/app";
import firebase from "firebase/app";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import "firebase/auth";

import Layout from "../containers/Layout";

import { UserContext, useUserProvider } from "../contexts/userContext";

import "../index.css";

// Firebase Config
const config = {
  apiKey: "AIzaSyA9GNRaa6woEUEEMOrS1UuqeUdToJn1dm0",
  authDomain: "budget-app-be403.firebaseapp.com",
  databaseURL: "https://budget-app-be403.firebaseio.com",
  projectId: "budget-app-be403",
  storageBucket: "budget-app-be403.appspot.com",
  messagingSenderId: "1098863190330",
  appId: "1:1098863190330:web:1be8d238e3193ae31c3003",
  measurementId: "G-5GT90GJD9F",
};

function MyApp({ Component, pageProps }: AppProps) {
  const userProvider = useUserProvider();

  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <UserContext.Provider value={userProvider}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </FirebaseAuthProvider>
  );
}

export default MyApp;
