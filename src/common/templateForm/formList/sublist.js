import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { List, InputItem } from "antd-mobile-rn";
import Immutable from "immutable";

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
    this.watch = {
      required: [],
      objData: {}
    };
    this.state = {
      tplData: {},
      extraData: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tplData: nextProps.tplData,
      extraData: nextProps.extraData
    });
  }

  componentDidMount = () => {
    //计算字表都有哪些字段，存储起来
    if (this.props.tplData.itemList && this.props.tplData.itemList.length > 0) {
      this.props.tplData.itemList.map((item, index) => {
        this.watch.objData[item.key] = "";
      });
    }
  };

  methods = {
    onChange: (key, val) => {
      this.props.onChange(key, val);
    },
    onEdit: (childKey, val, childIndex) => {
      let newData = Immutable.fromJS(this.state.extraData).toJS();
      let key = this.props.tplData.key;

      newData[key][childIndex][childKey] = val;

      this.methods.onChange(key, newData[key]);
    },
    onDelete: childIndex => {
      let newData = Immutable.fromJS(this.state.extraData).toJS();
      let key = this.props.tplData.key;
      newData[key].splice(childIndex, 1);

      this.methods.onChange(key, newData[key]);
    },
    onAdd: childIndex => {
      let newData = Immutable.fromJS(this.state.extraData).toJS();

      let key = this.props.tplData.key;

      //字表添加项，字段为空字符串默认值的对象
      if (newData[key] && newData[key].length > 0) {
        //如果有就添加
        newData[key].push(this.watch.objData);
      } else {
        //如果没有赋值第一项
        newData[key] = [this.watch.objData];
      }

      this.methods.onChange(key, newData[key]);
    },
    getDefaultValue: () => {}
  };

  checkedRequired = (subItem, item, childIndex, subItemIndex) => {
    // console.log(subItem);
    // console.log(item);
    // console.log(childIndex);
    // console.log(subItemIndex);
    //如果必填并且字段为空，添加到必填校验池

    if (item.required && !subItem[item.key]) {
      this.props.pushRequired(this.props.tplData, item, subItemIndex);
    }
  };

  computed = {
    renderSubItem: (subItem, subItemIndex) => {
      let renderSubItem = null;
      if (this.props.tplData.itemList && this.props.tplData.itemList.length > 0) {
        renderSubItem = this.props.tplData.itemList.map((item, childIndex) => {
          //检测必填项
          this.checkedRequired(subItem, item, childIndex, subItemIndex);
          return (
            <SubFormCell
              key={childIndex}
              tplData={item}
              extraData={subItem}
              onChange={(key, val) => {
                this.methods.onEdit(key, val, subItemIndex);
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
              <Text style={{ color: "#E14C46" }}>{"删除"}</Text>
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
            <Text style={{ color: "#E14C46" }}>{"添加"}</Text>
          </TouchableOpacity>
        </List.Item>
      </View>
    );
  }
}
