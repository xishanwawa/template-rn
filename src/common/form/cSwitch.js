import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions, Switch } from "react-native";
//import { List, Switch } from "antd-mobile-rn";
import { List } from "antd-mobile-rn";
import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";
export default class CSwitch extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = { value: false };
  }

  componentDidMount = () => {
    if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
      return this.setState({ value: this.props.extraData[this.props.tplData.key] });
    }
  };

  methods = {};

  computed = {};

  render() {
    return (
      <List.Item
        styles={listItemStyleAssign}
        extra={
          //antd 的switch有个不支持的警告
          // <Switch
          //   disabled={this.props.tplData.disabled}
          //   checked={this.state.value}
          //   onChange={val => {
          //     this.setState({ value: val });
          //     this.props.onChange(this.props.tplData.key, val);
          //   }}
          // />
          <Switch
            disabled={this.props.tplData.disabled}
            value={this.state.value}
            onValueChange={val => {
              this.setState({ value: val });
              this.props.onChange(this.props.tplData.key, val);
            }}
          />
        }>
        {<RenderFormTitle {...this.props} />}
      </List.Item>
    );
  }
}

CSwitch.propTypes = {};

const styles = StyleSheet.create({});
