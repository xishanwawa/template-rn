import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { List, Calendar } from "antd-mobile-rn";
import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";
export default class CCalendar extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: new Date(),
      config: {}
    };
  }

  componentDidMount = () => {
    if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
      return this.setState({ value: new Date(this.props.extraData[this.props.tplData.key]) });
    }
  };

  methods = {};

  computed = {};

  renderBtn(zh, en, config = {}) {
    config.locale = this.state.en ? enUS : zhCN;

    return (
      <List.Item
        arrow="horizontal"
        onClick={() => {
          this.setState({
            show: true,
            config
          });
        }}>
        {this.state.en ? en : zh}
      </List.Item>
    );
  }

  changeLanguage = () => {
    this.setState({
      en: !this.state.en
    });
  };

  onSelectHasDisableDate = dates => {
    console.warn("onSelectHasDisableDate", dates);
  };

  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName("body")[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime
    });
  };

  onCancel = () => {
    document.getElementsByTagName("body")[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined
    });
  };

  getDateExtra = date => extra[+date];

  render() {
    return (
      <View>
        {this.renderBtn("选择日期区间", "Select Date Range")}
        <Calendar
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          getDateExtra={this.getDateExtra}
          defaultDate={now}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
        />
      </View>
    );
  }
}

CCalendar.propTypes = {};

const styles = StyleSheet.create({});
