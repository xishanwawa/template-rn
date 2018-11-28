import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { List, Checkbox, Icon } from "antd-mobile-rn";
const CheckboxItem = Checkbox.CheckboxItem;
import { commonStyles } from "../../styles";
import Header from "../../common/header";
import CommonList from "../../common/commonList";

function Power(props) {
  return props.power == 1 ? props.children : null;
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  computed = {};

  render() {
    return (
      <View style={commonStyles.container}>
        <Header
          {...this.props}
          renderCenter={
            <Text
              style={{
                fontSize: 16,
                color: "#666666"
              }}>
              列表
            </Text>
          }
        />
        <CommonList {...this.props} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
