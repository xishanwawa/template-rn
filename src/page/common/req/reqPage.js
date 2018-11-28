import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Header from "../../../common/header";
import { commonStyles } from "../../../styles";

export default class ReqPage extends Component {
  static navigationOptions = {
    title: "注册"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={commonStyles.container}>
        <Header
          {...this.props}
          renderCenter={
            <Text
              style={{
                fontSize: 16,
                color: "#666666"
              }}>
              注册
            </Text>
          }
        />
        <Button
          onPress={() => {
            const { navigate } = this.props.navigation;
            navigate("Login", {});
          }}
          title="点我进入登录！"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
