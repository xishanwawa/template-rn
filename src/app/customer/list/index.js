import React, { Component } from "react";
import { Drawer, Toast } from "antd-mobile-rn";
import {
  PageBody,
  Header,
  TopMenuCon,
  CommonList,
  QueryPlan,
  SortPlan,
  FilterBtn,
  FilterList,
  SearchPlan
} from "../../../common";
import { Cell } from "./common";
import { sections, initData } from "./mockData";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [{ name: "娃哈哈", id: "a" }]
    };
  }

  computed = {
    renderItem: ({ item, index }) => {
      return <Cell data={item} {...this.props} />;
    }
  };

  methods = {
    onChange: () => {},
    onOpenChange: isOpen => {
      this.setState({ open: isOpen });
    },
    open: () => {
      this.setState({ open: true });
    },
    filterOnOk: () => {
      Toast.loading("加载中...", 3);
      this.setState({ open: false });
    }
  };

  render() {
    return (
      <PageBody>
        <Drawer
          sidebar={
            <FilterList
              sections={sections}
              data={initData}
              onOk={() => {
                this.methods.filterOnOk();
              }}
            />
          }
          open={this.state.open}
          position={"right"}
          onOpenChange={isOpen => {
            this.methods.onOpenChange(isOpen);
          }}>
          <Header {...this.props} renderCenter={<QueryPlan />} />
          <TopMenuCon>
            <SortPlan />
            <FilterBtn
              onPress={() => {
                this.methods.open();
              }}
            />
            <SearchPlan />
          </TopMenuCon>
          <CommonList
            data={this.state.data}
            renderItem={this.computed.renderItem}
            onChange={this.methods.onChange}
            {...this.props}
          />
        </Drawer>
      </PageBody>
    );
  }
}
