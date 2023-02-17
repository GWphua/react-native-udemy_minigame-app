import React from "react";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface IPrimaryButton {
  children: React.ReactNode;
}

const PrimaryButton: FC<IPrimaryButton> = ({ children }) => {
  const onButtonPress = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onButtonPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    // Any styling that goes outside of this container would not be shown.
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 6,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    // Making the button 25% opaque.
    opacity: 0.75,
  },
});
