import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
export default function Cell(Props) {
  const { navigate } = Props.navigation;
  let data = Props.data;
  return (
    <TouchableOpacity
      style={{ height: 100, backgroundColor: "#ffffff", borderBottomColor: "#ddd", borderBottomWidth: 0.5 }}
      onPress={() => {
        navigate("Deteils", {});
      }}>
      <View style={{ padding: 20 }}>
        <Text>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
