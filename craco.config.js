const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");
module.exports = {
  babel: {
    //按需加载样式
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less
        },
      ],
    ],
  },
  //自定义主题
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...getThemeVariables({
                dark: false, // 开启暗黑模式
                compact: false, // 开启紧凑模式
              }),
              "@primary-color": "#1DA57A",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

