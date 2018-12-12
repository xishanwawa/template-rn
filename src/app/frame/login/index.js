import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { List, InputItem, WhiteSpace, Button } from "antd-mobile-rn";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { PageBody } from "../../../common";
let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.autoFocusInst.focus();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageBody>
        <KeyboardAwareScrollView>
          <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: "center", height: ScreenHeight }}>
            <List>
              <InputItem clear placeholder="交出账号" ref={el => (this.autoFocusInst = el)}>
                <Text>账号</Text>
              </InputItem>
              <InputItem clear type="password" placeholder="交出银行密码" ref={el => (this.inputRef = el)}>
                <Text>密码</Text>
              </InputItem>
            </List>
            <WhiteSpace />
            <Button
              type="primary"
              onClick={() => {
                navigate("Main", {});
              }}>
              登录
            </Button>
            <WhiteSpace />
            <Button
              onClick={() => {
                navigate("Reg", {});
              }}>
              注册
            </Button>
          </View>
          {/* <Button
          onPress={() => {
            navigate("Form", {});
          }}
          title="点我看表单"
        />
        <Button
          onPress={() => {
            navigate("Main", {});
          }}
          title="点我进主页！"
        />
        <Button
          onPress={() => {
            navigate("Reg", {});
          }}
          title="点我进入注册！"
        /> */}
        </KeyboardAwareScrollView>
      </PageBody>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
