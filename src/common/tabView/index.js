import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export default function TabView(Props) {
  return (
    <ScrollableTabView
      tabBarInactiveTextColor="#333333" // 没有被选中的文字颜色
      tabBarActiveTextColor="#D81E06" // 选中的文字颜色
      tabBarBackgroundColor="white" // 选项卡背景颜色
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle} //下划线的样式
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar style={styles.tabBar} tabStyle={{ height: 39 }} underlineHeight={2} />}>
      {Props.children ? Props.children : null}
    </ScrollableTabView>
  );
}

export const styles = StyleSheet.create({
  tabBarUnderlineStyle: {
    backgroundColor: "#D81E06",
    height: 1
  },
  tabBar: {
    height: 40,
    borderWidth: 0,
    elevation: 2
  }
});
