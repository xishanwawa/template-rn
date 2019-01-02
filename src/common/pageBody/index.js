import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StateBar from "../stateBar";
export default function PageBody(Props) {
  return (
    <View style={styles.container}>
      <StateBar />
      {Props.children ? Props.children : null}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
