import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function PageBodyScroll(Props) {
  return <ScrollView style={styles.container}>{Props.children ? Props.children : null}</ScrollView>;
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
