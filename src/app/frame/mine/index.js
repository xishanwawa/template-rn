import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PageBody } from "../../../common";
export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "我"
  };

  render() {
    return (
      <PageBody>
        <Text>这是我</Text>
      </PageBody>
    );
  }
}
