import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from "react-native";
import { List, InputItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");

import { RenderViewTitle } from "./renderViewTitle";
import { listItemStyleAssign } from "./style";
export default class InputPhone extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  methods = {};

  computed = {
    getDefaultValue: () => {
      if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
        return this.props.extraData[this.props.tplData.key];
      } else {
        return "";
      }
    }
  };

  linking = url => {
    debugger;
    console.log(url);

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    let extra = (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.5}
        onPress={() => this.linking("tel:" + this.computed.getDefaultValue())}>
        <Text style={{ color: "#108ee9" }}>{this.computed.getDefaultValue()}</Text>
      </TouchableOpacity>
    );

    return (
      <List.Item styles={listItemStyleAssign} extra={extra}>
        {<RenderViewTitle {...this.props} />}
      </List.Item>
    );
  }
}

InputPhone.propTypes = {};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff"
  }
});
