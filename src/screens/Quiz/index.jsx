import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quiz Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  text: { fontSize: 20, fontWeight: "bold", color: colors.primary },
});

export default QuizScreen;
