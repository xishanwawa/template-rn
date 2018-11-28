import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { List, InputItem } from "antd-mobile-rn";

import { RenderFormTitle } from "./renderFormTitle";
import SubFormCell from "./subFormCell";

import { listItemStyleAssign } from "./style";

export default class SubList extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  methods = {
    onChange: (childKey, val, childIndex) => {
      let key = this.props.tplData.key;
      this.props.onChange(key, val, childKey, childIndex, "edit");
    },
    onDelete: childIndex => {
      let key = this.props.tplData.key;
      this.props.onChange(key, null, null, childIndex, "delete");
    },
    onAdd: childIndex => {
      let key = this.props.tplData.key;
      this.props.onChange(key, null, null, childIndex, "add");
    },
    getDefaultValue: () => {}
  };

  computed = {
    renderSubItem: (subItem, subItemIndex) => {
      let renderSubItem = null;
      if (this.props.tplData.itemList && this.props.tplData.itemList.length > 0) {
        renderSubItem = this.props.tplData.itemList.map((item, childIndex) => {
          return (
            <SubFormCell
              key={childIndex}
              tplData={item}
              extraData={subItem}
              onChange={(key, val) => {
                this.methods.onChange(key, val, subItemIndex);
              }}
            />
          );
        });
      }

      return renderSubItem;
    },

    renderSubs: () => {
      let renderSubs = this.props.extraData[this.props.tplData.key].map((subItem, index) => {
        let renderSubItem = this.computed.renderSubItem(subItem, index);

        return (
          <View style={{ marginBottom: 0 }} key={index}>
            <TouchableOpacity
              style={{
                padding: 10
              }}
              onPress={() => {
                this.methods.onDelete(index);
              }}>
              <Text style={{ color: "red" }}>{"删除"}</Text>
            </TouchableOpacity>
            {renderSubItem}
          </View>
        );
      });
      return renderSubs;
    }
  };

  render() {
    let renderSubs = this.computed.renderSubs();
    return (
      <View>
        <List.Item styles={listItemStyleAssign}>{<RenderFormTitle {...this.props} />}</List.Item>
        <View>{renderSubs && renderSubs.length > 0 ? <View style={{ padding: 10 }}>{renderSubs}</View> : null}</View>
        <List.Item styles={listItemStyleAssign}>
          <TouchableOpacity
            onPress={() => {
              this.methods.onAdd(this.props.tplData.key);
            }}>
            <Text style={{ color: "red" }}>{"添加"}</Text>
          </TouchableOpacity>
        </List.Item>
      </View>
    );
  }
}
