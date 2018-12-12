import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import HomePage from "./app/frame/board";
import TaskPage from "./app/frame/business";
import MinePage from "./app/frame/mine";

export const TabNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage
    },
    Task: {
      screen: TaskPage
    },
    Mine: {
      screen: MinePage
    }
  },
  {
    tabBarPosition: "bottom", // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName: "Task", // 设置默认的页面组件
    backBehavior: "none", // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      // iOS属性
      // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
      activeTintColor: "#E14C46", // label和icon的前景色 活跃状态下（选中）。
      inactiveTintColor: "#666666", // label和icon的前景色 不活跃状态下(未选中)。
      activeBackgroundColor: "white", //label和icon的背景色 活跃状态下（选中） 。
      inactiveBackgroundColor: "white", // label和icon的背景色 不活跃状态下（未选中）。
      showLabel: true, // 是否显示label，默认开启。
      showIcon: true, // 是否显示图标，默认关闭。
      upperCaseLabel: false, // 是否使标签大写，默认为true。
      style: {
        ...Platform.select({
          android: {
            height: 60,
            backgroundColor: "white"
          },
          ios: {
            backgroundColor: "white"
          }
        })
      },
      labelStyle: {
        fontSize: 10
      }
    }
  }
);
