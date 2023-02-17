import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

interface IGameOverScreen {
  onRestart: () => void;
}

const GameOverScreen: FC<IGameOverScreen> = ({ onRestart }) => {
  return (
    <View>
      <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({});
