import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { List, InputItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");

import inputItemStyle from "antd-mobile-rn/lib/input-item/style/index";
import { RenderFormTitle } from "./renderFormTitle";
import { inputItemStyleAssign, listItemStyleAssign } from "./style";
export default class InputPercent extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.watch = {};
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
      <List.Item styles={listItemStyleAssign}>
        <InputItem
          styles={inputItemStyleAssign}
          extra={"%"}
          type="number"
          placeholder={"0"}
          editable={!this.props.tplData.disabled}
          disabled={this.props.tplData.disabled}
          defaultValue={this.computed.getDefaultValue()}
          onChange={val => {
            this.props.onChange(this.props.tplData.key, val);
          }}>
          {<RenderFormTitle {...this.props} />}
        </InputItem>
      </List.Item>
    );
  }
}

InputPercent.propTypes = {};

const styles = StyleSheet.create({});
