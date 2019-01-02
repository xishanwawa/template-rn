/**
 * 名称       含义         类型
 *
 * title     表单名称      string
 * type      类型         string    （input，textarea， number， percent， money，phone， bankCard，password，switch，date，radio，checkbox，picker，referRadio，referCheckbox， sublist）
 * key       对应返回数据   string
 * required  是否必填      boolean
 * disabled  是否可用      boolean
 * referType 参照接口类型   --     （type是referRadio，referCheckbox参照 的时候用）
 * params    参照接口参数   --     （type是referRadio，referCheckbox参照 的时候用）
 * itemList  包含的子项    array    （如果type是sublist 该项的内容为表单列表，如果是type是picker， 该项内容为枚举值{label:"--", value:"--"}）
 */
export const sections = [
  {
    title: "A",
    data: [
      { title: "单行文本", type: "input", key: "key1" },
      { title: "多行文本", type: "textarea", key: "key2" },
      { title: "数字", type: "number", key: "key3" },
      { title: "百分比", type: "percent", key: "key4" },
      { title: "货币(万元)", type: "money", key: "key5" },
      { title: "手机", type: "phone", key: "key51" },
      { title: "银行卡", type: "bankCard", key: "key52" },
      { title: "密码", type: "password", key: "key6" }
    ]
  },
  {
    title: "标题二",
    data: [
      { title: "开关", type: "switch", key: "key7" },
      {
        title: "日期",
        type: "date",
        key: "key8",
        minDate: "2018-11-11",
        maxDate: "2019-11-11"
      }
    ]
  },
  {
    title: "标题三",
    data: [
      {
        title: "单选",
        type: "radio",
        key: "key9",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      {
        title: "多选",
        type: "checkbox",
        key: "key10",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      {
        title: "枚举",
        type: "picker",
        key: "key11",
        itemList: [{ label: "项一", value: "1" }, { label: "项二", value: "2" }, { label: "项三", value: "3" }]
      },
      { title: "参照1", type: "referRadio", key: "key12", referType: 1, params: {} },
      {
        title: "参照2",
        type: "referCheckbox",
        key: "key13",
        referType: 1,
        params: {
          key: ["key12"]
        }
      }
    ]
  }
];

export let initData = {
  key1: "111",
  key2: "一三五七九",
  key3: "123",
  key4: "10",
  key5: "10",
  key6: "23",
  key7: "true",
  key8: "2018-10-11",
  key81: "2018-10-11",
  key9: "1",
  key10: "1,2",
  key11: "1",
  childList: []
};
