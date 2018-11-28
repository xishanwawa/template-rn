import React, { Component } from "react";
import PropTypes from "prop-types";

import { TextOneLine, Textarea, TextPercent, TextMoney, TextPhone } from "../viewList";

export default class TextCell extends Component {
  static defaultProps = {
    data: {
      title: "表单"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props.tplData;

    if (type == "text") {
      return <TextOneLine {...this.props} />;
    } else if (type == "textarea") {
      return <Textarea {...this.props} />;
    } else if (type == "percent") {
      return <TextPercent {...this.props} />;
    } else if (type == "money") {
      return <TextMoney {...this.props} />;
    } else if (type == "phone") {
      return <TextPhone {...this.props} />;
    }
    return <TextOneLine {...this.props} />;
  }
}

TextCell.propTypes = {
  data: PropTypes.object
};
