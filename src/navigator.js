/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator } from "react-navigation";
import { TabNav } from "./tabNav";
import LoginPage from "./app/frame/login";
import RegPage from "./app/frame/req";

import FormPage from "./app/customer/form";
import ListPage from "./app/customer/list";
import DeteilsPage from "./app/customer/details";
import PowerPage from "./app/customer/power";

const Navigator = createStackNavigator(
  {
    Login: { screen: LoginPage }, // 登录页
    Reg: { screen: RegPage }, // 注册页
    Main: {
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },

    Form: { screen: FormPage }, // 表单
    List: { screen: ListPage }, //列表
    Deteils: { screen: DeteilsPage }, //详情

    Power: { screen: PowerPage } // 权限配置
  },
  {
    initialRouteName: "Login",
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

export default Navigator;
