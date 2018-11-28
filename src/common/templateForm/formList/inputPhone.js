import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { List, InputItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");

import inputItemStyle from "antd-mobile-rn/lib/input-item/style/index";
import { RenderFormTitle } from "./renderFormTitle";
import { inputItemStyleAssign, listItemStyleAssign } from "./style";
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

  render() {
    return (
      <List.Item styles={listItemStyleAssign}>
        <InputItem
          styles={inputItemStyleAssign}
          type="phone"
          placeholder="186 1234 1234"
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

InputPhone.propTypes = {};

const styles = StyleSheet.create({});
