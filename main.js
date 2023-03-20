let Phrase = require("rakuda_san_desu-palindrome");

let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}"はパリンドロームです`);
} else {
  alert(`"${phrase.content}"はパリンドロームではありません`)
}
