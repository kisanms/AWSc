import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

export default function Home({ navigation }) {
  const { user, signOut, authStatus } = useAuthenticator((context) => [
    context.user,
    context.signOut,
    context.authStatus
  ]);

  // Redirect to Auth screen if user is not authenticated
  useEffect(() => {
    if (authStatus !== 'authenticated') {
      navigation.replace("AuthWelcome");
    }
  }, [authStatus, navigation]);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to home after so much AWS struggle!</Text>
      <Text style={styles.subtitle}>
        {user?.attributes?.email ? `Logged in as: ${user.attributes.email}` : "You are signed in"}
      </Text>

      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
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
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Pop-med",
    fontSize: 18,
    color: "#666",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF3B30",
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