import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles } from "../../../styles";
import { Grid } from "antd-mobile-rn";
export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "业务",
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return <Image style={styles.tabBarIcon} source={require("../../../img/tree.png")} />;
      }
      return <Image style={styles.tabBarIcon} source={require("../../../img/tree.png")} />;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "表单", route: "Form" },
        { text: "列表", route: "List" },
        { text: "详情列表", route: "Deteils" },
        { text: "权限", route: "Power" }
      ]
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={commonStyles.container}>
        <Grid
          data={this.state.data}
          columnNum={3}
          renderItem={dataItem => (
            <TouchableOpacity
              style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
              onPress={() => {
                navigate(dataItem.route, {});
              }}>
              <Text style={{ color: "#666666", fontSize: 14 }}>{dataItem.text}</Text>
            </TouchableOpacity>
          )}
        />
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
