import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Echarts from "native-echarts";

export default class EchartsDemo extends Component {
  render() {
    const option = {
      title: {
        text: "柱状图",
        subtext: "--"
      },
      tooltip: {},
      legend: {
        data: ["销量"],
        bottom: 10
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    return (
      <View style={{ backgroundColor: "#fff", padding: 10 }}>
        <Echarts option={option} height={300} />
      </View>
    );
  }
}
