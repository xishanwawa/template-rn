import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";

export default function TopMenuCon(Props) {
  return <View style={styles.menu}>{Props.children ? Props.children : null}</View>;
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5,
    height: 40,
    alignItems: "center"
  }
});
