import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default function RightBtn(Props) {
  return (
    <ImageBackground
      source={require("../../../../../img/bgImage.png")}
      style={{ height: 166, width: width }}
      imageStyle={{ resizeMode: "stretch", width: width }}
    />
  );
}
