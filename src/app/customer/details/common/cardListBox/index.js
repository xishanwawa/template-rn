import React, { Component } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Card, WingBlank, WhiteSpace } from "antd-mobile-rn";
import { ICardStyleAssign } from "./style";

export default class CardList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};
  methods = {};

  computed = {};

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Card styles={ICardStyleAssign}>
          <Card.Header
            title={<Text style={{ fontSize: 13, color: "#999" }}>联系人</Text>}
            extra={
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={{ textAlign: "right", fontSize: 13, color: "#999" }}>新增</Text>
              </View>
            }
          />
          <Card.Body>
            <FlatList data={[{ key: "a" }, { key: "b" }]} renderItem={({ item }) => <Text>{item.key}</Text>} />
          </Card.Body>
          <Card.Footer
            content={<Text style={{ fontSize: 13, color: "#999" }}>注意：这是提示！</Text>}
            extra={<Text />}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
