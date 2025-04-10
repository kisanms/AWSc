import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function AuthWelcome({ navigation }) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  // If already authenticated, navigate to Home
  useEffect(() => {
    if (authStatus === 'authenticated') {
      navigation.replace("Home");
    }
  }, [authStatus, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("AuthScreen")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: "Pop-bold",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Pop-med",
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Pop-med",
    fontSize: 18,
    color: "white",
  },
});