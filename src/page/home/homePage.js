import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { List, Checkbox } from "antd-mobile-rn";
const CheckboxItem = Checkbox.CheckboxItem;
import { commonStyles } from "../../styles";

function Power(props) {
  return props.power == 1 ? props.children : null;
}

export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "看板",
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Image style={styles.tabBarIcon} source={require("./../../img/home.png")} />;
      }
      return <Image style={styles.tabBarIcon} source={require("../../img/home.png")} />;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      powerList: [1, 0, 1, 0]
    };
  }

  computed = {};

  render() {
    return <View style={commonStyles.container} />;
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
