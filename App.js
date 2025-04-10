import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";
import AppNavigator from "./app/Navigation/AppNavigator";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { Authenticator } from "@aws-amplify/ui-react-native";

// Configure Amplify
Amplify.configure(amplifyconfig);

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = Font.useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Pop-reg": require("./assets/fonts/Poppins-Regular.ttf"),
    "Pop-bold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Pop-med": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Authenticator.Provider>
      <AppNavigator />
    </Authenticator.Provider>
  );
}
