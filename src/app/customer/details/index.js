import React, { Component } from "react";
import { PageBody, ContentBox, Header, TemplateView, TabView } from "../../../common";
import { RightBtn, CompCell, HeadBoard, CardList } from "./common";
import { sections, initData } from "./mockData";
import Immutable from "immutable";
export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.watch = {
      data: {}
    };
    this.state = {
      initData: initData
    };
  }
  componentDidMount = () => {
    this.watch.data = Immutable.fromJS(this.state.initData).toJS();
    this.watch.data.key7 = <CompCell />;
    this.setState({ initData: this.watch.data });
  };

  methods = {
    onPressRight: () => {
      const { navigate } = this.props.navigation;
      navigate("Form", {});
    }
  };

  render() {
    return (
      <PageBody>
        <Header renderCenter={"详情"} renderRight={<RightBtn onPress={this.methods.onPressRight} />} {...this.props} />
        <HeadBoard />
        <TabView>
          <ContentBox tabLabel="详情">
            <TemplateView sections={sections} extraData={this.state.initData} />
          </ContentBox>
          <ContentBox tabLabel="相关">
            <CardList />
          </ContentBox>
        </TabView>
      </PageBody>
    );
  }
}
