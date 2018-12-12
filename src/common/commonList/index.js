import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default class CommonList extends Component {
  static defaultProps = {
    keyExtractor: (item, index) => index + "",
    renderItem: ({ item, index }) => {
      const { navigate } = this.props.navigation;
      return <View />;
    },
    data: [],
    ListEmptyComponent: () => {
      return (
        <View style={{ height: 200, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#666666" }}>{"😓空空如也！"}</Text>
        </View>
      );
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });

    this.props.onChange(1);
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };

  onEndReached = info => {};

  ListFooterComponent = () => {
    return (
      <TouchableOpacity
        style={{ height: 40, justifyContent: "center", alignItems: "center" }}
        onPress={() => {
          this.props.onChange();
        }}>
        <Text style={{ color: "#268bd2" }}>加载更多...</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <FlatList
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        data={this.props.data}
        keyExtractor={this.props.keyExtractor}
        renderItem={this.props.renderItem}
        ListEmptyComponent={this.props.ListEmptyComponent}
        ListFooterComponent={this.ListFooterComponent}
      />
    );
  }
}

CommonList.propTypes = {};
