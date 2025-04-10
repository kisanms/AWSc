import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthWelcome from "../Sreens/Auth/AuthWelcome";
import AuthScreen from "../Sreens/Auth/AuthScreen";
import Home from "../Sreens/Home";
const Stack = createStackNavigator();

export default function AppNavigator() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Once we know the auth status, stop loading
    if (authStatus !== 'configuring') {
      setIsLoading(false);
    }
  }, [authStatus]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={authStatus === 'authenticated' ? "Home" : "AuthWelcome"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthWelcome" component={AuthWelcome} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}