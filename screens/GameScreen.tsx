import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const GameScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>

      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
