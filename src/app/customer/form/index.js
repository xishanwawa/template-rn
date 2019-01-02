import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Toast } from "antd-mobile-rn";

import { PageBody, Header, TemplateForm } from "../../../common";
import RightBtn from "./rightBtn";
import Immutable from "immutable";
import { sections, initData } from "./mockData";

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: initData
    };
  }

  componentDidMount = () => {};

  methods = {
    onChange: (key, val) => {
      let newData = Immutable.fromJS(this.state.initData).toJS();
      newData[key] = val;
      this.setState({ initData: newData });
    },

    submit: () => {
      //验证通过后提交
      this.template.validateFields(() => {
        Toast.loading("保存中...", 3);

        console.log(this.state.initData);
        setTimeout(() => {
          Toast.hide();
          Toast.info("提交成功！", 2);
        }, 1000);
      });
    }
  };

  render() {
    return (
      <PageBody>
        <Header renderCenter={"表单"} renderRight={<RightBtn onPress={this.methods.submit} />} {...this.props} />
        <KeyboardAwareScrollView>
          <TemplateForm
            sections={sections}
            extraData={this.state.initData}
            onChange={(key, val, childObj, templateDate) => {
              this.methods.onChange(key, val, childObj, templateDate);
            }}
            ref={comp => {
              this.template = comp;
            }}
          />
        </KeyboardAwareScrollView>
      </PageBody>
    );
  }
}
