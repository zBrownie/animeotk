import React from "react";
import Routes from "./routes";
import "./utils/styles/global.css";
import "firebase/firestore";
import "firebase/auth";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import "react-notifications-component/dist/theme.css";

const firebaseConfig = {
  apiKey: "AIzaSyCxSaRtixSzs9SkuTyhKT8L5DGa-h9FZww",
  authDomain: "otakulist-2e5c0.firebaseapp.com",
  databaseURL: "https://otakulist-2e5c0.firebaseio.com",
  projectId: "otakulist-2e5c0",
  storageBucket: "otakulist-2e5c0.appspot.com",
  messagingSenderId: "1044762241083",
  appId: "1:1044762241083:web:9b66c2b6e86585e381941e",
  measurementId: "G-CET524P744",
};

const fuego = new Fuego(firebaseConfig);

function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <Routes />
    </FuegoProvider>
  );
}

export default App;
