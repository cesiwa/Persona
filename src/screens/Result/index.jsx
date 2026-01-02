import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
  },
  text: { fontSize: 20, fontWeight: "bold" },
});

export default ResultScreen;
