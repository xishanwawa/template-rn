import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PageBody, Header, TemplateView } from "../../../common";
import Comp from "./comp";
import RightBtn from "./rightBtn";
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
    this.watch.data.key7 = <Comp />;
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
        <KeyboardAwareScrollView>
          <TemplateView sections={sections} extraData={this.state.initData} />
        </KeyboardAwareScrollView>
      </PageBody>
    );
  }
}
