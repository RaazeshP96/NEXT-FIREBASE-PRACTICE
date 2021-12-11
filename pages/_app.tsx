import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCSUnzTF-IkdNthfhANkRqnnbnI8oZAsXQ",
    authDomain: "one-moon-253420.firebaseapp.com",
    projectId: "one-moon-253420",
    storageBucket: "one-moon-253420.appspot.com",
    messagingSenderId: "422810052937",
    appId: "1:422810052937:web:736f9475cadddea8841298",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
