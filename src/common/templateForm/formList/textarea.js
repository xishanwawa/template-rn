import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  DeviceEventEmitter,
  NativeEventEmitter
} from "react-native";
import { List, TextareaItem } from "antd-mobile-rn";
import listStyle from "antd-mobile-rn/lib/list/style/index";
import ITextareaItemStyle from "antd-mobile-rn/lib/textarea-item/style/index";

import { RenderFormTitle } from "./renderFormTitle";
export default class Textarea extends Component {
  timer = null;
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  componentDidMount() {
    if (NativeModules.EsnCrmCloud) {
      const EsnCrmCloudNoti = new NativeEventEmitter(NativeModules.EsnCrmCloud);
      //创建自定义事件接口
      if (Platform.OS === "ios") {
        //讯飞
        this.listener = EsnCrmCloudNoti.addListener("Esn_SpeechToText_Result_Notification", dataBack1 => {
          // console.log("友空间地图返回数据", JSON.stringify(dataBack));
          let dataBack = JSON.parse(dataBack1);
          if (!dataBack && !dataBack.data && !dataBack.data.text) {
            Toast.info("语音转化失败", 1);
            return;
          }
          let dateStr = dataBack.data.text;
          this.dealBackAreaData(dateStr);
        });
      } else {
        //讯飞
        DeviceEventEmitter.addListener("Esn_SpeechToText_Result_Notification", dataBack => {
          let data = JSON.parse(dataBack);
          if (!data && !data.data && !data.data.text) {
            Toast.info("语音转化失败", 1);
            return;
          }
          let dateStr = data.data.text;
          this.dealBackAreaData(dateStr);
        });
      }

      //讯飞
      this.listener = EsnCrmCloudNoti.addListener("Esn_SpeechToText_Result_Notification", dataBack1 => {
        // console.log("友空间地图返回数据", JSON.stringify(dataBack));
        let dataBack = JSON.parse(dataBack1);
        if (!dataBack && !dataBack.data && !dataBack.data.text) {
          Toast.info("语音转化失败", 1);
          return;
        }
        let dateStr = dataBack.data.text;
        this.dealBackAreaData(dateStr);
      });
    }
  }

  dealBackAreaData = dateStrBack => {
    let value = this.state.value;
    value = value + dateStrBack;
    this.setState({ value });
    this.props.onChange(this.props.tplData.key, value);
  };

  //处理讯飞语音输入
  dealAreaInput = () => {
    if (NativeModules.EsnCrmCloud) {
      NativeModules.EsnCrmCloud.speechToText();
    } else {
      alert("可以在友空间使用，当前环境不支持");
    }
  };

  methods = {};

  computed = {
    getDefaultValue: () => {
      if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
        return this.props.extraData[this.props.tplData.key];
      } else {
        return "";
      }
    }
  };

  render() {
    return (
      <View>
        <List.Item
          styles={{
            ...listStyle,
            Content: {
              fontSize: 14,
              color: "#333"
            },
            Line: {
              ...listStyle.Line,
              borderBottomWidth: 0,
              borderBottomColor: "#ffffff"
            }
          }}>
          {<RenderFormTitle {...this.props} />}
        </List.Item>
        <View style={{ paddingHorizontal: 16, backgroundColor: "#ffffff" }}>
          <TextareaItem
            rows={4}
            placeholder={"请输入多行文本"}
            defaultValue={this.computed.getDefaultValue()}
            editable={!this.props.tplData.disabled}
            disabled={this.props.tplData.disabled}
            onChange={val => {
              this.setState({ value: val });
              clearTimeout(this.timer);
              this.timer = setTimeout(() => {
                this.props.onChange(this.props.tplData.key, val);
              }, 500);
            }}
            styles={{
              ...ITextareaItemStyle,
              container: {
                borderBottomWidth: 0,
                borderBottomColor: "#ffffff"
              },

              input: {
                borderRadius: 4,
                padding: 4,
                marginBottom: 10,
                backgroundColor: "#f5f5f5",
                fontSize: 14,
                color: "#666666"
              }
            }}
          />
          <TouchableOpacity
            style={{ alignItems: "flex-end", padding: 10 }}
            onPress={() => {
              this.dealAreaInput();
            }}
            activeOpacity={0.7}
            focusedOpacity={0.5}>
            <Text>讯飞语言</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Textarea.propTypes = {};

const styles = StyleSheet.create({});
