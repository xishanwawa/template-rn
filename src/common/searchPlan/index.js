import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Platform } from "react-native";
import { SearchBar } from "antd-mobile-rn";
import Header from "../header/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class SearchPlan extends Component {
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
      modalVisible: false
    };
  }

  componentDidMount() {}

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

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
    this.setState({ modalVisible: false });
  };

  goback = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.eventBtn}
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>{"搜索"}</Text>
        </TouchableOpacity>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}>
          <View style={styles.modelBg}>
            <View style={styles.modelCon}>
              <Header
                renderLeft={
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    onPress={() => {
                      this.goback();
                    }}>
                    <Image style={styles.backImg} source={require("../../img/back.png")} />
                  </TouchableOpacity>
                }
                renderCenter={"搜索"}
              />
              <View style={styles.searchView}>
                <KeyboardAwareScrollView>
                  <SearchBar
                    placeholder="搜索..."
                    autoFocus={true}
                    onCancel={() => {
                      this.goback();
                    }}
                  />
                </KeyboardAwareScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

SearchPlan.propTypes = {};

const styles = StyleSheet.create({
  modelBg: {
    marginTop: 22,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modelCon: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  eventBtn: { flex: 1, justifyContent: "center", alignItems: "center" },
  listItem: {
    height: 40,
    paddingLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5
  },
  searchView: {
    backgroundColor: "#fff",
    flex: 1,
    height: 50
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    ...Platform.select({
      android: {
        height: 36
      }
    }),
    borderColor: "#ddd",
    backgroundColor: "white",
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  cancelButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelButtonText: {
    color: "#E14C46"
  }
});
