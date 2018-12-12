import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import { VerticalLine } from "../../common";

export default function TopMenuCon(Props) {
  let newList = [];
  Props.children.map((item, index) => {
    newList.push(item);
    if (index == Props.children.length - 1) {
    } else {
      newList.push(<VerticalLine key={index} />);
    }
  });
  return <View style={styles.menu}>{newList}</View>;
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
