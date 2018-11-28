import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { List, DatePicker } from "antd-mobile-rn";
import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";
export default class CDatePicker extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      value: new Date()
    };
  }

  componentDidMount = () => {
    if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
      return this.setState({ value: new Date(this.props.extraData[this.props.tplData.key]) });
    }
  };

  methods = {};

  computed = {
    getMinDate: () => {
      let minDate = this.props.tplData.minDate;
      let minDateKey = this.props.tplData.minDateKey;

      if (minDate) {
        return new Date(minDate);
      }

      if (minDateKey) {
        return new Date(this.props.extraData[this.props.tplData.minDateKey]);
      }
    },
    getMaxDate: () => {
      let maxDate = this.props.tplData.maxDate;
      let maxDateKey = this.props.tplData.maxDateKey;

      if (maxDate) {
        return new Date(maxDate);
      }
      if (maxDateKey) {
        return new Date(this.props.extraData[this.props.tplData.maxDateKey]);
      }
    }
  };

  render() {
    return (
      <DatePicker
        mode="date"
        value={this.state.value}
        minDate={this.computed.getMinDate()}
        maxDate={this.computed.getMaxDate()}
        disabled={this.props.tplData.disabled}
        onChange={val => {
          this.setState({ value: val });
          this.props.onChange(this.props.tplData.key, val);
        }}>
        <List.Item styles={listItemStyleAssign}>{<RenderFormTitle {...this.props} />}</List.Item>
      </DatePicker>
    );
  }
}

CDatePicker.propTypes = {};

const styles = StyleSheet.create({});
