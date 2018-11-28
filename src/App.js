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
import LoginPage from "./page/common/login/loginPage";
import RegPage from "./page/common/req/reqPage";

import FormPage from "./page/form/formPage";
import ListPage from "./page/list/listPage";
import DeteilsPage from "./page/details/detailsPage";

import PowerPage from "./page/power/powerPage";

const App = createStackNavigator(
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

export default App;
