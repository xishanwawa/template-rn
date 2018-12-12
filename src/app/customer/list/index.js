import React, { Component } from "react";
import { PageBody, Header, TopMenuCon, CommonList, QueryPlan, SortPlan, FilterList, SearchPlan } from "../../../common";
import { Cell } from "../common";
import { sections, initData } from "./mockData";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: "娃哈哈", id: "a" }]
    };
  }

  computed = {
    renderItem: ({ item, index }) => {
      return <Cell data={item} {...this.props} />;
    }
  };

  methods = {
    onChange: () => {}
  };

  render() {
    return (
      <PageBody>
        <Header {...this.props} renderCenter={<QueryPlan />} />
        <TopMenuCon>
          <SortPlan />
          <FilterList sections={sections} data={initData} onChange={this.onChange} />
          <SearchPlan />
        </TopMenuCon>
        <CommonList data={this.state.data} renderItem={this.computed.renderItem} {...this.props} />
      </PageBody>
    );
  }
}
