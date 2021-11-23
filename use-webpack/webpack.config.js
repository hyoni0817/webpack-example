const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    //__dirname은 현재 webpack.config.js가 위치하고 있는 경로를 알려주는 node.js의 약속된 변수
    //예저의 dist는 최종적인 결과물을 가져다 놓으라는 위치. 하지만 우리는 public에 위치 시킬 것임.
    filename: "index_bundle.js",
    //내가 원하는 파일 이름 적어주기.
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
