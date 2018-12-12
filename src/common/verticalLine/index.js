import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";

export default function VerticalLine(Props) {
  return (
    <View style={styles.lineCon}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  lineCon: { width: 0.5 },
  line: { flex: 1, backgroundColor: "#ddd" }
});
