import { FC } from "react";
import { Text, View } from "react-native";

interface IPrimaryButton {
  children: React.ReactNode;
}

const PrimaryButton: FC<IPrimaryButton> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;