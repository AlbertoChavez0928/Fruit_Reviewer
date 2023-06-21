import React, { useState } from 'react';
import Home from './screens/home';
import { useFonts } from 'expo-font';
import  AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'



const getFont = () => useFonts({
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <
        Navigator />
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