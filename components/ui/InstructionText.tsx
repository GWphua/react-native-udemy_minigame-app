import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface IInstructionText {
  children: React.ReactNode;
  style: any;
}

const InstructionText: FC<IInstructionText> = ({ children, style = {} }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
