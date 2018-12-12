import React, { Component } from "react";
import { Drawer } from "antd-mobile-rn";
import {
  PageBody,
  Header,
  TopMenuCon,
  CommonList,
  QueryPlan,
  SortPlan,
  FilterList,
  SearchPlan,
  VerticalLine,
  TemplateForm
} from "../../../common";
import { Cell, FilterBtn } from "../common";
import { sections, initData } from "./mockData";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [{ name: "娃哈哈", id: "a" }, { name: "乐呵呵", id: "b" }, { name: "笑呵呵", id: "c" }]
    };
  }

  computed = {
    renderItem: ({ item, index }) => {
      return <Cell data={item} {...this.props} />;
    }
  };

  methods = {
    onChange: () => {},
    open: () => {
      this.setState({
        open: true
      });
    }
  };

  render() {
    let sidebar = (
      <TemplateForm
        sections={sections}
        extraData={initData}
        onChange={(key, val, childObj, templateDate) => {
          // this.props.onChange(key, val, childObj, templateDate);
        }}
      />
    );

    return (
      // <Drawer
      //   sidebar={sidebar}
      //   open={this.state.open}
      //   onOpenChange={isOpen => {
      //     this.setState({ open: isOpen });
      //   }}>
      <PageBody>
        <Header {...this.props} renderCenter={<QueryPlan />} />
        <TopMenuCon>
          <SortPlan />
          <VerticalLine />
          {/* <FilterBtn onPress={this.methods.open} /> */}
          <FilterList sections={sections} data={initData} onChange={this.onChange} />
          <VerticalLine />
          <SearchPlan />
        </TopMenuCon>
        <CommonList
          {...this.props}
          data={this.state.data}
          renderItem={this.computed.renderItem}
          onChange={() => {
            this.onChange();
          }}
        />
      </PageBody>
      // </Drawer>
    );
  }
}
