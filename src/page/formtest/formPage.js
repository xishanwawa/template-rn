import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import Header from "../../common/header";
import Template from "../../common/template";

import { commonStyles } from "../../styles";

import Immutable from "immutable";

const sections = [
  {
    title: "子表",
    data: [
      {
        title: "子表",
        type: "sublist",
        key: "childList",
        sublistItemData: [
          { title: "单行文本", type: "input", key: "key1", required: true },
          { title: "数字", type: "number", key: "key2" },
          { title: "参照1", type: "referRadio", key: "key12", referType: 1, params: {} }
        ]
      }
    ]
  },
  {
    title: "标题一",
    data: [
      { title: "单行文本", type: "input", key: "key1", required: true, disabled: true },
      { title: "多行文本", type: "textarea", key: "key2", required: true },
      { title: "数字", type: "number", key: "key3" },
      { title: "百分比", type: "percent", key: "key4" },
      { title: "货币(万元)", type: "money", key: "key5" },
      { title: "密码", type: "password", key: "key6" }
    ]
  },
  {
    title: "标题二",
    data: [{ title: "开关", type: "switch", key: "key7" }, { title: "日期", type: "date", key: "key8" }]
  },
  {
    title: "标题三",
    data: [
      {
        title: "单选",
        type: "radio",
        key: "key9",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      {
        title: "多选",
        type: "checkbox",
        key: "key10",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      {
        title: "枚举",
        type: "picker",
        key: "key11",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      { title: "参照1", type: "referRadio", key: "key12", referType: 1, params: {} },
      {
        title: "参照2",
        type: "referCheckbox",
        key: "key13",
        referType: 1,
        params: {
          key: ["key12"]
        }
      }
    ]
  }
];

export default class FormPage extends Component {
  static navigationOptions = {
    title: "表单"
  };
  constructor(props) {
    super(props);
    this.watch = {
      data: {}
    };
    this.state = {
      initData: {
        key1: "111",
        key2: "一三五七九",
        key3: "123",
        key4: "10",
        key5: "10",
        key6: "23",
        key7: "true",
        key8: new Date("2018-10-11"),
        key9: "1",
        key10: "1,2",
        key11: "1",
        childList: []
      }
    };
  }

  componentDidMount = () => {
    this.watch.data = Immutable.fromJS(this.state.initData).toJS();
  };
  methods = {
    onChange: (key, val, childList) => {
      if (childList) {
        if (childList.handleType == "add") {
          if (this.watch.data[key] && this.watch.data[key].length > 0) {
            this.watch.data[key].push({ key1: "ytm", key2: "123" });
          } else {
            this.watch.data[key] = [{ key1: "ytm", key2: "123" }];
          }
          this.methods.changeInit();
        }
        if (childList.handleType == "delete") {
          this.watch.data[key].splice(childList.index, 1);
          this.methods.changeInit();
        }
        if (childList.handleType == "edit") {
          this.watch.data[key][childList.index][childList.key] = val;
        }
      } else {
        this.watch.data[key] = val;
      }
    },
    changeInit: () => {
      let initData = this.state.initData;
      initData = Object.assign({}, initData, this.watch.data);

      this.setState({ initData });
    },
    submit: () => {
      let initData = this.state.initData;
      this.watch.data = Object.assign({}, initData, this.watch.data);
      console.log(this.watch.data);
    }
  };

  computed = {
    renderRight: () => {
      return (
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            this.methods.submit();
          }}>
          <Text>保存</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <Header
          renderCenter={
            <Text
              style={{
                fontSize: 16,
                color: "#666666"
              }}>
              表单
            </Text>
          }
          renderRight={this.computed.renderRight()}
          {...this.props}
        />
        <Template
          sections={sections}
          extraData={this.state.initData}
          onChange={(key, val, childList) => {
            this.methods.onChange(key, val, childList);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
