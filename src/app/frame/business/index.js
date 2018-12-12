import React, { Component } from "react";
import { PageBodyScroll } from "../../../common";
import { Grid, WhiteSpace } from "antd-mobile-rn";
import { Cell } from "./common";
export default class Index extends Component {
  static navigationOptions = {
    tabBarLabel: "业务"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [{ text: "客户列表", route: "List" }, { text: "客户新增", route: "Form" }]
    };
  }

  renderItem = dataItem => {
    return <Cell data={dataItem} {...this.props} />;
  };

  render() {
    return (
      <PageBodyScroll>
        <Grid data={this.state.data} renderItem={this.renderItem} columnNum={2} />
        <WhiteSpace />
        <Grid data={this.state.data} renderItem={this.renderItem} columnNum={2} />
      </PageBodyScroll>
    );
  }
}
