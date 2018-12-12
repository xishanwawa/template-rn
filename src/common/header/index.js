import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, Dimensions } from "react-native";
import { Button } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");
export default class Header extends Component {
  static defaultProps = {
    title: (
      <Text
        style={{
          fontSize: 16,
          color: "#666666"
        }}>
        标题
      </Text>
    )
  };
  constructor(props) {
    super(props);
    this.watch = {};
    this.state = {};
  }
  methods = {
    leftPress: () => {
      this.props.navigation.goBack();
    }
  };

  computed = {
    renderLeft: () => {
      if (typeof this.props.renderLeft === "string") {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#666" }}>{this.props.renderLeft}</Text>
          </View>
        );
      }
      if (this.props.renderLeft) {
        return this.props.renderLeft;
      }
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.methods.leftPress();
          }}>
          <Image style={styles.backImg} source={require("../../img/back.png")} />
        </TouchableOpacity>
      );
    },
    renderCenter: () => {
      if (typeof this.props.renderCenter === "string") {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#666" }}>{this.props.renderCenter}</Text>
          </View>
        );
      }
      if (this.props.renderCenter) {
        return this.props.renderCenter;
      }
      return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{this.props.title}</View>;
    },
    renderRight: () => {
      if (typeof this.props.renderRight === "string") {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#666" }}>{this.props.renderRight}</Text>
          </View>
        );
      }

      if (this.props.renderRight) {
        return this.props.renderRight;
      }
      return null;
    }
  };

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.leftCon}>{this.computed.renderLeft()}</View>
        <View style={styles.centerCon}>{this.computed.renderCenter()}</View>
        <View style={styles.rightCon}>{this.computed.renderRight()}</View>
      </View>
    );
  }
}

Header.propTypes = {
  title: PropTypes.element, //必需是组件
  renderLeft: PropTypes.element, //必需为组件
  renderRight: PropTypes.element, //必需为组件
  renderCentera: PropTypes.element //必需为组件
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: width,
    height: 50,
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd"
  },
  leftCon: {
    width: 50,
    height: 50
  },
  backImg: {
    height: 24,
    width: 24
  },
  centerCon: {
    flex: 1,
    alignItems: "center"
  },
  rightCon: {
    width: 50,
    height: 50
  }
});
