import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default function FilterBtn(Props) {
  return (
    <TouchableOpacity
      style={styles.eventBtn}
      onPress={() => {
        if (Props.onPress) {
          Props.onPress();
        }
      }}>
      <Text>{"筛选"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventBtn: { flex: 1, height: 40, justifyContent: "center", alignItems: "center" }
});
