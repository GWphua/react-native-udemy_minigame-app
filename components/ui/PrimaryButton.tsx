import React from "react";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface IPrimaryButton {
  children: React.ReactNode;
  onPress: (_: any) => void;
}

const PrimaryButton: FC<IPrimaryButton> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
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
    backgroundColor: Colors.primary500,
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
