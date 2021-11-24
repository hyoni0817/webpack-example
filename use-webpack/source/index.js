import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from "lodash";
import css from "./style.css";

document.querySelector("#root").innerHTML = _.join([
  hello_word,
  world_word,
  " ",
]);

console.log("css", css); //css-loader만 사용했을 때 값이 출력됨.
