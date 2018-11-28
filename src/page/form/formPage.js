import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import Header from "../../common/header";
import TemplateForm from "../../common/templateForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { commonStyles } from "../../styles";

import Immutable from "immutable";

/**
 * 名称       含义         类型
 *
 * title     表单名称      string
 * type      类型         string    （input，textarea， number， percent， money，phone， bankCard，password，switch，date，radio，checkbox，picker，referRadio，referCheckbox， sublist）
 * key       对应返回数据   string
 * required  是否必填      boolean
 * disabled  是否可用      boolean
 * referType 参照接口类型   --     （type是referRadio，referCheckbox参照 的时候用）
 * params    参照接口参数   --     （type是referRadio，referCheckbox参照 的时候用）
 * itemList  包含的子项    array    （如果type是sublist 该项的内容为表单列表，如果是type是picker， 该项内容为枚举值{label:"--", value:"--"}）
 */
const sections = [
  {
    title: "子表",
    data: [
      {
        title: "子表",
        type: "sublist",
        key: "childList",
        itemList: [
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
      { title: "手机", type: "phone", key: "key51" },
      { title: "银行卡", type: "bankCard", key: "key52" },
      { title: "密码", type: "password", key: "key6" }
    ]
  },
  {
    title: "标题二",
    data: [
      { title: "开关", type: "switch", key: "key7" },
      {
        title: "日期",
        type: "date",
        key: "key8",
        minDate: "2018-11-11",
        maxDate: "2019-11-11"
      }
    ]
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
        key8: "2018-10-11",
        key81: "2018-10-11",
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
    onChange: (key, val, childObj, templateDate) => {
      debugger;
      if (childObj.handleType) {
        if (childObj.handleType == "add") {
          if (this.watch.data[key] && this.watch.data[key].length > 0) {
            this.watch.data[key].push({ key1: "ytm", key2: "123" });
          } else {
            this.watch.data[key] = [{ key1: "ytm", key2: "123" }];
          }
          this.methods.changeaAndAgain();
        }
        if (childObj.handleType == "delete") {
          this.watch.data[key].splice(childObj.index, 1);
          this.methods.changeaAndAgain();
        }
        if (childObj.handleType == "edit") {
          this.watch.data[key][childObj.index][childObj.key] = val;
        }
      } else {
        this.watch.data[key] = val;
      }
    },
    changeaAndAgain: () => {
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
        <KeyboardAwareScrollView>
          <TemplateForm
            sections={sections}
            extraData={this.state.initData}
            onChange={(key, val, childObj, templateDate) => {
              this.methods.onChange(key, val, childObj, templateDate);
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
