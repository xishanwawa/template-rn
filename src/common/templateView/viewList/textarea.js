import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { List, TextareaItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");
import listStyle from "antd-mobile-rn/lib/list/style/index";
import ITextareaItemStyle from "antd-mobile-rn/lib/textarea-item/style/index";

import { RenderViewTitle } from "./renderViewTitle";
export default class Textarea extends Component {
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
      <View>
        <List.Item
          styles={{
            ...listStyle,
            Content: {
              fontSize: 14,
              color: "#333"
            },
            Line: {
              ...listStyle.Line,
              borderBottomWidth: 0,
              borderBottomColor: "#ffffff"
            }
          }}>
          {<RenderViewTitle {...this.props} />}
        </List.Item>
        <View style={{ paddingHorizontal: 16, backgroundColor: "#ffffff" }}>
          <View style={{ padding: 4, paddingBottom: 20 }}>
            <Text style={{ color: "#666666" }}>{this.computed.getDefaultValue()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

Textarea.propTypes = {};

const styles = StyleSheet.create({});
