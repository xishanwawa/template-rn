import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import { Toast } from "antd-mobile-rn";
import FormCell from "./formList/formCell";

export default class TemplateForm extends Component {
  constructor(props) {
    super(props);
    this.watch = {
      required: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.watch.required = [];
  }
  validateFields = callback => {
    if (this.watch.required.length === 0) {
      callback();
    } else {
      let requiredTitle = this.watch.required[0];
      let massge = `* ${requiredTitle} 必填`;
      Toast.info(massge, 2);
    }
  };

  checkedRequired = item => {
    //如果必填并且字段为空，添加到必填校验池
    if (item.required && !this.props.extraData[item.key]) {
      this.watch.required.push(item.title);
    }
  };

  pushRequired = (tplData, item, subItemIndex) => {
    this.watch.required.push(`${tplData.title} 下的 第${subItemIndex + 1}项 ${item.title}`);
  };

  computed = {
    renderItem: ({ item, index, section }) => {
      //必填检验
      this.checkedRequired(item);
      return (
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#dddddd"
          }}>
          <FormCell
            key={index}
            extraData={this.props.extraData}
            tplData={item}
            pushRequired={(tplData, item, subItemIndex) => {
              this.pushRequired(tplData, item, subItemIndex);
            }}
            onChange={(key, val) => {
              this.props.onChange(key, val);
            }}
          />
        </View>
      );
    },
    renderSectionHeader: ({ section }) => {
      if (section.title == "A") {
        return <View />;
      }
      return (
        <View
          style={{
            height: 16,
            justifyContent: "center",
            paddingLeft: 20
          }}
        />
      );
    },
    keyExtractor: (item, index) => item + index
  };

  render() {
    return (
      <View style={styles.content}>
        <SectionList
          sections={this.props.sections}
          extraData={this.props.extraData}
          renderItem={this.computed.renderItem}
          renderSectionHeader={this.computed.renderSectionHeader}
          keyExtractor={this.computed.keyExtractor}
          initialNumToRender={15}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: { backgroundColor: "#f5f5f5" }
});
