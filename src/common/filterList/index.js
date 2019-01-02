import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TemplateForm } from "../../common";

export default class FilterList extends Component {
  static defaultProps = {
    sections: [],
    data: [],
    onCancel: () => {},
    onOk: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  onChange = (key, val, childObj, templateDate) => {};

  onOk = data => {
    this.props.onOk();
  };

  onCancel = data => {
    this.props.onCancel();
  };

  render() {
    return (
      <TouchableOpacity onPress={() => {}} activeOpacity={1} style={styles.modelBg}>
        <View style={styles.modelCon}>
          <View style={{ height: 20, backgroundColor: "#ffffff" }} />
          <View style={{ flex: 1 }}>
            <TemplateForm
              sections={this.props.sections}
              extraData={this.props.data}
              onChange={(key, val, childObj, templateDate) => {
                this.onChange(key, val, childObj, templateDate);
              }}
            />
          </View>
          <View style={{ flexDirection: "row", height: 40, borderTopColor: "#dddddd", borderTopWidth: 0.5 }}>
            <TouchableOpacity
              onPress={() => {
                this.onCancel();
              }}
              style={styles.bottomBtn}>
              <Text style={styles.onCancel}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onOk();
              }}
              style={[styles.bottomBtn, { backgroundColor: "#E14C46" }]}>
              <Text style={styles.onOk}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
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
  bottomBtn: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" },
  modelCon: {
    flex: 1
  },
  onOk: {
    color: "#ffffff"
  },
  onCancel: {}
});
