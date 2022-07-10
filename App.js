import React, { useState } from "react";
import { useFonts } from "expo-font";
import Home from "./screen/home";
import AppLoading from "expo-app-loading";

const getFonts = () => useFonts({
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
})


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={setFontsLoaded(true)}
      />
    )
  }

}

