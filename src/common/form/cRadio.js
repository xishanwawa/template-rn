import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { List, TextareaItem } from "antd-mobile-rn";
const { width, height } = Dimensions.get("window");
import { RenderFormTitle } from "./renderFormTitle";
import { listItemStyleAssign } from "./style";
export default class CRadio extends Component {
  static defaultProps = {
    data: {
      title: "表单",
      itemList: []
    }
  };

  constructor(props) {
    super(props);
    this.state = { active: "" };
  }

  componentDidMount = () => {
    let defaultValue = [];
    if (this.props.extraData && this.props.extraData[this.props.tplData.key]) {
      defaultValue = this.props.extraData[this.props.tplData.key];
      this.setState({ active: defaultValue });
    }
  };

  methods = {
    pressBtn: data => {
      this.setState({
        active: data
      });
      this.props.onChange(this.props.tplData.key, data);
    }
  };

  computed = {
    renderBtn: () => {
      let isDisabled = this.props.tplData.disabled;
      let nodeBtn = this.props.tplData.itemList.map((itemData, index) => {
        let style = styles.item;
        let styleText = styles.text;

        if (itemData.value == this.state.active) {
          style = styles.actionItem;
          styleText = styles.actionText;
        }
        if (isDisabled) {
          return (
            <View style={style} key={itemData.value}>
              <Text style={styleText}>{itemData.label}</Text>
            </View>
          );
        }

        return (
          <TouchableOpacity
            style={style}
            key={itemData.value}
            onPress={() => {
              this.methods.pressBtn(itemData.value);
            }}>
            <Text style={styleText}>{itemData.label}</Text>
          </TouchableOpacity>
        );
      });

      return nodeBtn;
    }
  };

  render() {
    return (
      <View>
        <List.Item styles={listItemStyleAssign}>{<RenderFormTitle {...this.props} />}</List.Item>
        <View style={styles.itemCon}>{this.computed.renderBtn()}</View>
      </View>
    );
  }
}

CRadio.propTypes = {};

const styles = StyleSheet.create({
  itemCon: {
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    paddingBottom: 10
  },
  item: {
    height: 30,
    width: 100,
    marginRight: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center"
  },
  actionItem: {
    height: 30,
    width: 100,
    marginRight: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#666666"
  },
  actionText: {
    color: "red"
  }
});
