import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen: FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
