import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import StateBar from "../stateBar";
export default function PageBodyScroll(Props) {
  return (
    <ScrollView style={styles.container}>
      <StateBar />
      {Props.children ? Props.children : null}
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
