import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";

export default class QueryPlan extends Component {
  static defaultProps = {
    keyExtractor: (item, index) => index + "",
    data: [{ label: "项一", value: 1 }, { label: "项二", value: 2 }, { label: "项三", value: 3 }],
    ListEmptyComponent: () => {
      return (
        <View style={{ height: 200, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#666666" }}>{"😓空空如也！"}</Text>
        </View>
      );
    },
    onChange: (item, index) => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      activity: {}
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.onOk(item, index);
        }}
        style={styles.listItem}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  onOk = (item, index) => {
    this.setState({ activity: item, modalVisible: false });
    this.props.onChange(item, index);
  };

  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            activeOpacity={1}
            style={styles.modelBg}>
            <View style={styles.modelCon}>
              <FlatList
                data={this.props.data}
                keyExtractor={this.props.keyExtractor}
                renderItem={this.props.renderItem ? this.props.renderItem : this.renderItem}
                ListEmptyComponent={this.props.ListEmptyComponent}
              />
            </View>
          </TouchableOpacity>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>{this.state.activity.label ? this.state.activity.label : "查询方案"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

QueryPlan.propTypes = {};

const styles = StyleSheet.create({
  modelBg: {
    marginTop: 72,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modelCon: {
    backgroundColor: "#fff"
  },
  listItem: {
    height: 40,
    paddingLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5
  }
});
