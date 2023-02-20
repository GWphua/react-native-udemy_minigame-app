import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import Colors from "../../constants/colors";

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
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
