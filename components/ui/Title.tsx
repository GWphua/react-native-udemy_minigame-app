import React, { FC } from "react";
import { Platform, StyleSheet, Text } from "react-native";

interface ITitle {
  children: React.ReactNode;
}

const Title: FC<ITitle> = ({ children }) => {
  return <Text style={styles.title}>{children} </Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
