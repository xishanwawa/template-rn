import React, { Component } from "react";
import { ScrollView } from "react-native";
import { WhiteSpace } from "antd-mobile-rn";
import { PageBody } from "../../../common";

import { EchartsDemo, EchartsDemo1 } from "./common";

export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "看板"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageBody>
        <ScrollView>
          <EchartsDemo />
          <WhiteSpace />
          <EchartsDemo1 />
        </ScrollView>
      </PageBody>
    );
  }
}
