import listStyle from "antd-mobile-rn/lib/list/style/index";

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
