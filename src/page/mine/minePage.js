import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { commonStyles } from "../../styles";

export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "我",
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Image style={styles.tabBarIcon} source={require("./../../img/mine.png")} />;
      }
      return <Image style={styles.tabBarIcon} source={require("./../../img/mine.png")} />;
    }
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <Text>这是我</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
