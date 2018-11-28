import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Input,
  Textarea,
  InputNumber,
  InputPercent,
  InputMoney,
  InputPassword,
  InputPhone,
  InputBankCard,
  CSwitch,
  CDatePicker,
  //CCalendar,
  CRadio,
  CCheckbox,
  CPicker,
  ReferRadio,
  ReferCheckbox,
  SubList
} from "../formList";

export default class FormCell extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  methods = {
    onChange: (key, val, childKey, childIndex, handleType) => {
      let childObj = {
        key: childKey,
        index: childIndex,
        handleType: handleType
      };

      let templateDate = this.props.tplData;

      this.props.onChange(key, val, childObj, templateDate);
    }
  };

  render() {
    const { type } = this.props.tplData;
    let data = this.props.extraData;
    if (type == "input") {
      return (
        <Input
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "textarea") {
      return (
        <Textarea
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "number") {
      return (
        <InputNumber
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "percent") {
      return (
        <InputPercent
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "money") {
      return (
        <InputMoney
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "password") {
      return (
        <InputPassword
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "phone") {
      return (
        <InputPhone
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "bankCard") {
      return (
        <InputBankCard
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "switch") {
      return (
        <CSwitch
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "date") {
      return (
        <CDatePicker
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "calendar") {
      return (
        <CCalendar
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "radio") {
      return (
        <CRadio
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "checkbox") {
      return (
        <CCheckbox
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "picker") {
      return (
        <CPicker
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "referRadio") {
      return (
        <ReferRadio
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "referCheckbox") {
      return (
        <ReferCheckbox
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val) => {
            this.methods.onChange(key, val);
          }}
        />
      );
    } else if (type == "sublist") {
      return (
        <SubList
          tplData={this.props.tplData}
          extraData={data}
          onChange={(key, val, childKey, childIndex, handleType) => {
            this.methods.onChange(key, val, childKey, childIndex, handleType);
          }}
        />
      );
    }

    return (
      <Input
        tplData={this.props.tplData}
        extraData={data}
        onChange={(key, val) => {
          this.methods.onChange(key, val);
        }}
      />
    );
  }
}

FormCell.propTypes = {
  data: PropTypes.object
};
