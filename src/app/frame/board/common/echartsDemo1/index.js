import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Echarts from "native-echarts";

export default class EchartsDemo1 extends Component {
  render() {
    const option = {
      title: {
        text: "漏斗图",
        subtext: "--"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false }
        }
      },
      legend: {
        data: ["展现", "点击", "访问", "咨询", "订单"],
        bottom: 10
      },
      calculable: true,
      series: [
        {
          name: "漏斗图",
          type: "funnel",
          left: "10%",
          top: 60,
          //x2: 80,
          bottom: 60,
          width: "80%",
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            normal: {
              show: true,
              position: "inside"
            },
            emphasis: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          labelLine: {
            normal: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "#fff",
              borderWidth: 1
            }
          },
          data: [
            { value: 60, name: "访问" },
            { value: 40, name: "咨询" },
            { value: 20, name: "订单" },
            { value: 80, name: "点击" },
            { value: 100, name: "展现" }
          ]
        }
      ]
    };
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <Echarts option={option} height={360} />
      </View>
    );
  }
}
