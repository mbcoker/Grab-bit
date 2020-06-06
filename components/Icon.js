import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";



const Icon = ({name, ...props}) => {
  return (
    <Ionicons
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      {...props}
    />
  );
}

export default Icon;
