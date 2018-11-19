import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions, FlatList, Modal, TouchableOpacity, Alert } from "react-native";
import { List, Checkbox } from "antd-mobile-rn";
const CheckboxItem = Checkbox.CheckboxItem;

import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";
import Header from "../header";
export default class ReferRadio extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      active: {},
      submitActive: {},
      dataList: []
    };
  }
  componentDidMount = () => {
    let mockData = [{ label: "项目一", value: "1" }, { label: "项目二", value: "2" }, { label: "项目三", value: "3" }];
    this.setState({ dataList: mockData });
  };
  methods = {
    setModalVisible: visible => {
      this.setState({ modalVisible: visible });
    },

    onChange: item => {
      this.setState({ active: item });
    },

    onOK: () => {
      this.setState({ submitActive: this.state.active, modalVisible: false });
      this.props.onChange(this.props.tplData.key, this.state.active);
    },
    onRequestClose: () => {
      Alert.alert(
        "",
        "确定隐藏？",
        [
          { text: "取消", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
          { text: "确定", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  };

  computed = {
    renderLeft: () => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.methods.setModalVisible(false);
          }}>
          <Image style={styles.backImg} source={require("../../img/back.png")} />
        </TouchableOpacity>
      );
    },
    renderCenter: () => {
      return <Text>{this.props.tplData.title}</Text>;
    },
    renderRight: () => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.methods.onOK(false);
          }}>
          <Text>{"确定"}</Text>
        </TouchableOpacity>
      );
    },
    renderItem: ({ item, index }) => {
      let boolean = this.state.active.value == item.value;
      return (
        <CheckboxItem checked={!!boolean} key={item.value} onChange={() => this.methods.onChange(item)}>
          <Text style={{ fontSize: 14, color: "#333333" }}>{item.label}</Text>
        </CheckboxItem>
      );
    },
    getValue: () => {
      let submitActive = this.state.submitActive;
      if (this.props.extraData[this.props.tplData.key]) {
        submitActive = this.props.extraData[this.props.tplData.key];
      }
      if ((submitActive && submitActive.label) || submitActive.label === "" || submitActive.label === 0) {
        return submitActive.label;
      } else {
        return "请选择";
      }
    }
  };

  render() {
    if (this.props.tplData.disabled) {
      return (
        <List.Item
          arrow="horizontal"
          styles={listItemStyleAssign}
          extra={
            <View
              style={{
                flex: 1,
                alignItems: "flex-end"
              }}>
              <Text style={{ color: "#666666" }}>{this.computed.getValue()}</Text>
            </View>
          }>
          {<RenderFormTitle {...this.props} />}
        </List.Item>
      );
    }
    return (
      <List.Item
        arrow="horizontal"
        styles={listItemStyleAssign}
        extra={
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "flex-end"
            }}
            onPress={() => {
              this.methods.setModalVisible(true);
            }}>
            <Text style={{ color: "#666666" }}>{this.computed.getValue()}</Text>
          </TouchableOpacity>
        }>
        {<RenderFormTitle {...this.props} />}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle={"fullScreen"}
          onRequestClose={this.onRequestClose}>
          <View style={{ marginTop: 22 }}>
            <Header
              renderLeft={this.computed.renderLeft()}
              renderCenter={this.computed.renderCenter()}
              renderRight={this.computed.renderRight()}
              {...this.props}
            />
            <FlatList
              data={this.state.dataList}
              extraData={this.state}
              renderItem={this.computed.renderItem}
              keyExtractor={this._keyExtractor}
            />
          </View>
        </Modal>
      </List.Item>
    );
  }

  _keyExtractor = (item, index) => item.value;
}

ReferRadio.propTypes = {};

const styles = StyleSheet.create({
  backImg: {
    height: 24,
    width: 24
  }
});
