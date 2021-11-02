import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://i.loli.net/2021/11/02/KytkvjUx851mpYb.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/zhongbaobao",
    qq: "931387569",
    qqQrCode:
      "https://i.loli.net/2021/11/02/Q5LBqVr38cFmtyf.png",
    weixin: "17519431153",
    weixinQrCode:
      "https://i.loli.net/2021/11/02/Q5LBqVr38cFmtyf.png",
    mail: "931387569@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "zhongbaobao",
    favicon: "https://i.loli.net/2021/11/02/KytkvjUx851mpYb.jpg",
  },
});
