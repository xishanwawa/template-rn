import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PageBody, Header, TemplateForm } from "../../../common";
import RightBtn from "./rightBtn";
import Immutable from "immutable";
import { sections, initData } from "./mockData";

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
  };

  methods = {
    onChange: (key, val, childObj, templateDate) => {
      if (childObj.handleType) {
        if (childObj.handleType == "add") {
          if (this.watch.data[key] && this.watch.data[key].length > 0) {
            this.watch.data[key].push({ key1: "ytm", key2: "123" });
          } else {
            this.watch.data[key] = [{ key1: "ytm", key2: "123" }];
          }
          this.methods.changeaAndAgain();
        }
        if (childObj.handleType == "delete") {
          this.watch.data[key].splice(childObj.index, 1);
          this.methods.changeaAndAgain();
        }
        if (childObj.handleType == "edit") {
          this.watch.data[key][childObj.index][childObj.key] = val;
        }
      } else {
        this.watch.data[key] = val;
      }
    },
    changeaAndAgain: () => {
      let initData = this.state.initData;
      initData = Object.assign({}, initData, this.watch.data);
      this.setState({ initData });
    },
    submit: () => {
      let initData = this.state.initData;
      this.watch.data = Object.assign({}, initData, this.watch.data);
      console.log(this.watch.data);
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
          />
        </KeyboardAwareScrollView>
      </PageBody>
    );
  }
}
