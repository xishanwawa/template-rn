/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator } from "react-navigation";
import { TabNav } from "./TabNav";
import LoginPage from "./page/login/loginPage";
import RegPage from "./page/req/reqPage";
import FormPage from "./page/formtest/formPage";
import PowerPage from "./page/power/powerPage";

const App = createStackNavigator(
  {
    Login: { screen: LoginPage }, // 登录页
    Reg: { screen: RegPage }, // 注册页
    Form: { screen: FormPage }, // 表单
    Power: { screen: PowerPage }, // 权限配置
    Main: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

export default App;
