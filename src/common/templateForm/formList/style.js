import listStyle from "antd-mobile-rn/lib/list/style/index";

import inputItemStyle from "antd-mobile-rn/lib/input-item/style/index";

import ICheckboxStyle from "antd-mobile-rn/lib/checkbox/style/index";

export const inputItemStyleAssign = {
  ...inputItemStyle,
  container: {
    marginLeft: 0,
    borderBottomWidth: 0,
    borderBottomColor: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    textAlign: "right",
    fontSize: 14,
    height: 30,
    color: "#666"
  },
  text: {
    fontSize: 14,
    color: "#333"
  }
};

export const listItemStyleAssign = {
  ...listStyle,
  Content: {
    fontSize: 14,
    color: "#333"
  },
  Line: {
    ...listStyle.Line,
    borderBottomWidth: 0
  },
  Extra: {
    fontSize: 14,
    textAlign: "right",
    color: "#666666"
  }
};

export const ICheckboxStyleAssign = {
  ...ICheckboxStyle
};
