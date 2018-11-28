import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default class CommonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: "娃哈哈", id: "a" }, { name: "乐呵呵", id: "b" }]
    };
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={{ height: 100, backgroundColor: "#ffffff", borderBottomColor: "#ddd", borderBottomWidth: 0.5 }}
        onPress={() => {
          navigate("Deteils", {});
        }}>
        <View style={{ padding: 20 }}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return <FlatList data={this.state.data} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />;
  }
}
