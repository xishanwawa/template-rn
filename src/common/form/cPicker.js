import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import { List, Picker } from "antd-mobile-rn";
import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";

export default class CPicker extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      active: []
    };
  }

  componentDidMount = () => {
    let defaultValue = [];
    if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
      defaultValue = this.props.extraData[this.props.tplData.key];
      this.setState({ active: [defaultValue] });
    }
  };

  methods = {
    onChange: data => {
      this.setState({
        active: data
      });

      this.props.onChange(this.props.tplData.key, data[0]);
    }
  };

  computed = {};

  render() {
    return (
      <Picker
        value={this.state.active}
        data={this.props.tplData.itemList}
        disabled={this.props.tplData.disabled}
        cols={1}
        onChange={data => this.methods.onChange(data)}>
        <List.Item styles={listItemStyleAssign}>{<RenderFormTitle {...this.props} />}</List.Item>
      </Picker>
    );
  }
}

CPicker.propTypes = {};

const styles = StyleSheet.create({});
