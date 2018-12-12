export let sections = [
  {
    title: "标题一",
    data: [
      { title: "单行文本", type: "text", key: "key1" },
      { title: "多行文本", type: "textarea", key: "key2" },
      { title: "百分比", type: "percent", key: "key3" },
      { title: "货币(万元)", type: "money", key: "key4" },
      { title: "手机", type: "phone", key: "key5" }
    ]
  },
  {
    title: "标题二",
    data: [{ title: "开关", type: "text", key: "key6" }],
    data: [{ title: "产品", type: "component", key: "key7" }]
  }
];

export let initData = {
  key1: "111",
  key2: "一三五七九",
  key3: "123",
  key4: "10",
  key5: "18301442850",
  key6: "是",
  key7: "1"
};
