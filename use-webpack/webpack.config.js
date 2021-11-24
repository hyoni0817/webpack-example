const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
    //번들링할 각 파일들에 이름을 붙여줌.
  },
  output: {
    path: path.resolve(__dirname, "public"),
    //__dirname은 현재 webpack.config.js가 위치하고 있는 경로를 알려주는 node.js의 약속된 변수
    //예저의 dist는 최종적인 결과물을 가져다 놓으라는 위치. 하지만 우리는 public에 위치 시킬 것임.
    filename: "[name]_bundle.js",
    //내가 원하는 파일 이름 적어주기.
    //[name]로 해주면 entry에 작성한 파일의 이름이 들어가게 됨.
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
