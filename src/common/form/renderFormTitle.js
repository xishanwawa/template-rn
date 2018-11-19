import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
export function RenderFormTitle(props) {
  let required = null;
  if (props.tplData.required) {
    required = <Text style={styles.required}>{"*"}</Text>;
  } else {
    required = <Text>{""}</Text>;
  }

  return (
    <View style={styles.title}>
      {required}
      <Text>{props.tplData.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row"
  },
  required: {
    width: 10,
    color: "red"
  }
});
