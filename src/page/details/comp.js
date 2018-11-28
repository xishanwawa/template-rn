import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default class Comp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};
  methods = {
    onpressClick: () => {
      Alert.alert(
        "",
        "自定义内容",
        [
          { text: "取消", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
          { text: "确定", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  };

  computed = {};

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.methods.onpressClick();
        }}>
        <View
          style={{
            flexDirection: "row"
          }}>
          <Text style={{ color: "#666666" }}>{"产品 "}</Text>

          <Image source={require("../../img/book.png")} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
