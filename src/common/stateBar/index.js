import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default function StateBar(Props) {
  return <View style={styles.stateBar} />;
}

export const styles = StyleSheet.create({
  stateBar: {
    height: 22
  }
});
