import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity, Alert } from "react-native";
import Header from "../../common/header";
import TemplateView from "../../common/templateView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { commonStyles } from "../../styles";
import Comp from "./comp";

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
    title: "详情"
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

    global.watch.data.key7 = <Comp />;

    this.methods.changeInit();
  };
  methods = {
    changeInit: () => {
      let initData = this.state.initData;
      initData = Object.assign({}, initData, global.watch.data);

      this.setState({ initData });
    }
  };

  computed = {
    renderRight: () => {
      return (
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            const { navigate } = this.props.navigation;
            navigate("Form", {});
          }}>
          <Text>编辑</Text>
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
              {"详情"}
            </Text>
          }
          renderRight={this.computed.renderRight()}
          {...this.props}
        />
        <KeyboardAwareScrollView>
          <TemplateView sections={sections} extraData={this.state.initData} />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
