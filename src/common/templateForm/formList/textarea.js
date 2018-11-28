import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { List, TextareaItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");
import listStyle from "antd-mobile-rn/lib/list/style/index";
import ITextareaItemStyle from "antd-mobile-rn/lib/textarea-item/style/index";

import { RenderFormTitle } from "./renderFormTitle";
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
          {<RenderFormTitle {...this.props} />}
        </List.Item>
        <View style={{ paddingHorizontal: 16, backgroundColor: "#ffffff" }}>
          <TextareaItem
            rows={4}
            placeholder={"请输入多行文本"}
            defaultValue={this.computed.getDefaultValue()}
            editable={!this.props.tplData.disabled}
            disabled={this.props.tplData.disabled}
            onChange={val => {
              this.setState({ value: val });
              this.props.onChange(this.props.tplData.key, val);
            }}
            styles={{
              ...ITextareaItemStyle,
              container: {
                borderBottomWidth: 0,
                borderBottomColor: "#ffffff"
              },

              input: {
                borderRadius: 4,
                padding: 4,
                marginBottom: 10,
                backgroundColor: "#f5f5f5",
                fontSize: 14,
                color: "#333"
              }
            }}
          />
        </View>
      </View>
    );
  }
}

Textarea.propTypes = {};

const styles = StyleSheet.create({});
