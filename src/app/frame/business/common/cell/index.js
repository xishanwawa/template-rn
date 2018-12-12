import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function Cell(Props) {
  const { navigate } = Props.navigation;
  let data = Props.data;
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}
      onPress={() => {
        navigate(data.route, {});
      }}>
      <Text style={{ color: "#666666", fontSize: 14 }}>{data.text}</Text>
    </TouchableOpacity>
  );
}
