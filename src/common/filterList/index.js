import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import VerticalLine from "../verticalLine";
import { TemplateForm } from "../../common";

export default class FilterList extends Component {
  static defaultProps = {
    sections: [],
    data: [],
    onChange: (key, val, childObj, templateDate) => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onOk = () => {
    this.setState({ modalVisible: false });
    this.props.onChange(item, index);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.eventBtn}
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>{"筛选"}</Text>
        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}>
          <TouchableOpacity onPress={() => {}} activeOpacity={1} style={styles.modelBg}>
            <View style={styles.modelCon}>
              <View style={{ flex: 1 }}>
                <TemplateForm
                  sections={this.props.sections}
                  extraData={this.props.data}
                  onChange={(key, val, childObj, templateDate) => {
                    this.props.onChange(key, val, childObj, templateDate);
                  }}
                />
              </View>
              <View style={styles.bottomBtnCon}>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={styles.bottomBtn}>
                  <Text style={styles.onOk}>确定</Text>
                </TouchableOpacity>
                <VerticalLine />
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={styles.bottomBtn}>
                  <Text style={styles.onCancel}>取消</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

FilterList.propTypes = {};

const styles = StyleSheet.create({
  modelBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  eventBtn: { flex: 1, justifyContent: "center", alignItems: "center" },
  bottomBtnCon: {
    flexDirection: "row",
    height: 40,
    alignSelf: "flex-end",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd"
  },
  bottomBtn: { flex: 1, justifyContent: "center", backgroundColor: "#ffffff", alignItems: "center" },
  modelCon: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  onOk: {
    color: "red"
  },
  onCancel: {}
});
