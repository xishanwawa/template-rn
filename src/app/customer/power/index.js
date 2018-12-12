import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { List, Checkbox, Icon } from "antd-mobile-rn";
const CheckboxItem = Checkbox.CheckboxItem;
import { PageBody, Header, Power } from "../../../common";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerList: [0, 0, 0, 0, 0]
    };
  }

  computed = {
    onChange: (item, index) => {
      let powerList = this.state.powerList;
      if (item == 1) {
        powerList[index] = 0;
      } else {
        powerList[index] = 1;
      }

      this.setState({ powerList });
    }
  };

  render() {
    const powerList = this.state.powerList;
    return (
      <PageBody>
        <Header
          {...this.props}
          renderCenter={
            <Text
              style={{
                fontSize: 16,
                color: "#666666"
              }}>
              权限
            </Text>
          }
        />
        <View>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Text>{"设置页："}</Text>
          </View>
          {powerList.map((item, index) => {
            return (
              <CheckboxItem checked={item == 1} key={index} onChange={() => this.computed.onChange(item, index)}>
                <Text style={{ fontSize: 14 }}>{["新增", "编辑", "删除", "查看", "监测"][index]}</Text>
              </CheckboxItem>
            );
          })}
        </View>
        <View style={{ padding: 10, height: 40, alignItems: "center" }}>
          <Text>权限码：{this.state.powerList.join("")}</Text>
        </View>
        <View style={{ alignItems: "center", height: 100, marginTop: 10 }}>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Text>{"功能生效页："}</Text>
          </View>
          <Power power={powerList[0]}>
            <Text>新增</Text>
          </Power>
          <Power power={powerList[1]}>
            <Text>编辑</Text>
          </Power>
          <Power power={powerList[2]}>
            <Text>删除</Text>
          </Power>
          <Power power={powerList[3]}>
            <Text>查看</Text>
          </Power>
          <Power power={powerList[4]}>
            <Text>监测</Text>
          </Power>
        </View>
      </PageBody>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
