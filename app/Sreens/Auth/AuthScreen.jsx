import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuthenticator, Authenticator } from "@aws-amplify/ui-react-native";

export default function AuthScreen({ navigation }) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  // Navigate to Home screen when user is authenticated
  useEffect(() => {
    if (authStatus === 'authenticated') {
      navigation.replace("Home");
    }
  }, [authStatus, navigation]);

  return (
    <View style={styles.container}>
      <Authenticator
        loginMechanisms={['email']}
        signUpAttributes={['email']}
        components={{
          Header() {
            return (
              <View style={styles.header}>
                <Text style={styles.headerText}>My App Authentication</Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Pop-bold",
    fontSize: 24,
    color: "#007bff",
  },
});