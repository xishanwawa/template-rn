import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function RightBtn(Props) {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={() => {
        Props.onPress();
      }}>
      <Text>编辑</Text>
    </TouchableOpacity>
  );
}
