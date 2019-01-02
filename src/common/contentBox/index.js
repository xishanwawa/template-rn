import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
export default function ContentBox(Props) {
  return <View style={styles.container}>{Props.children ? Props.children : null}</View>;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
