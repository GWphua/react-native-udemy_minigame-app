import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

interface ICard {
  children: React.ReactNode;
}

const Card: FC<ICard> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
