import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default class FilterBtn extends Component {
  static defaultProps = {
    onPress: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.eventBtn}
          onPress={() => {
            this.props.onPress();
          }}>
          <Text>{"筛选"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

FilterBtn.propTypes = {};

const styles = StyleSheet.create({
  eventBtn: { flex: 1, justifyContent: "center", alignItems: "center" }
});
