import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { List, InputItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");

import { RenderViewTitle } from "./renderViewTitle";
import { listItemStyleAssign } from "./style";
export default class inputMoney extends Component {
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

  render() {
    return (
      <List.Item styles={listItemStyleAssign} extra={this.computed.getDefaultValue() + " ￥"}>
        {<RenderViewTitle {...this.props} />}
      </List.Item>
    );
  }
}

inputMoney.propTypes = {};

const styles = StyleSheet.create({});
