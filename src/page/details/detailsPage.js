import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity, Alert } from "react-native";
import Header from "../../common/header";
import TemplateView from "../../common/templateView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { commonStyles } from "../../styles";

import Immutable from "immutable";

const sections = [
  {
    title: "标题一",
    data: [
      { title: "单行文本", type: "text", key: "key1" },
      { title: "多行文本", type: "textarea", key: "key2" },
      { title: "百分比", type: "percent", key: "key3" },
      { title: "货币(万元)", type: "money", key: "key4" },
      { title: "手机", type: "phone", key: "key5" }
    ]
  },
  {
    title: "标题二",
    data: [{ title: "开关", type: "text", key: "key6" }],
    data: [{ title: "产品", type: "component", key: "key7" }]
  }
];

export default class FormPage extends Component {
  static navigationOptions = {
    title: "详情列表"
  };
  constructor(props) {
    super(props);
    global.watch = {
      data: {}
    };
    this.state = {
      initData: {
        key1: "111",
        key2: "一三五七九",
        key3: "123",
        key4: "10",
        key5: "18301442850",
        key6: "是",
        key7: "1"
      }
    };
  }

  componentDidMount = () => {
    global.watch.data = Immutable.fromJS(this.state.initData).toJS();

    global.watch.data.key7 = (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "",
            "自定义内容",
            [
              { text: "取消", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
              { text: "确定", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }}>
        <View
          style={{
            flexDirection: "row"
          }}>
          <Text style={{ color: "#666666" }}>{"产品 "}</Text>

          <Image source={require("../../img/book.png")} />
        </View>
      </TouchableOpacity>
    );

    this.methods.changeInit();
  };
  methods = {
    onChange: (key, val, childList) => {
      if (childList.key) {
        if (childList.handleType == "add") {
          if (global.watch.data[key] && global.watch.data[key].length > 0) {
            global.watch.data[key].push({ key1: "ytm", key2: "123" });
          } else {
            global.watch.data[key] = [{ key1: "ytm", key2: "123" }];
          }
          this.methods.changeInit();
        }
        if (childList.handleType == "delete") {
          global.watch.data[key].splice(childList.index, 1);
          this.methods.changeInit();
        }
        if (childList.handleType == "edit") {
          global.watch.data[key][childList.index][childList.key] = val;
        }
      } else {
        global.watch.data[key] = val;
      }
    },
    changeInit: () => {
      let initData = this.state.initData;
      initData = Object.assign({}, initData, global.watch.data);

      this.setState({ initData });
    },
    submit: () => {
      let initData = this.state.initData;
      global.watch.data = Object.assign({}, initData, global.watch.data);
      console.log(global.watch.data);
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
              {"详情列表"}
            </Text>
          }
          renderRight={this.computed.renderRight()}
          {...this.props}
        />
        <KeyboardAwareScrollView>
          <TemplateView
            sections={sections}
            extraData={this.state.initData}
            onChange={(key, val, childList) => {
              this.methods.onChange(key, val, childList);
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
