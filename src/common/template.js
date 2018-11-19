import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import FormCell from "./form/formCell";

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  computed = {
    renderItem: ({ item, index, section }) => {
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
            onChange={(key, val, childList) => {
              this.props.onChange(key, val, childList);
            }}
          />
        </View>
      );
    },
    renderSectionHeader: ({ section: { title } }) => {
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
      <SectionList
        sections={this.props.sections}
        extraData={this.props.extraData}
        renderItem={this.computed.renderItem}
        renderSectionHeader={this.computed.renderSectionHeader}
        keyExtractor={this.computed.keyExtractor}
        initialNumToRender={15}
        onEndReachedThreshold={0}
      />
    );
  }
}

const styles = StyleSheet.create({});
