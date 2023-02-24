const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// 一意の単語リストを保存するMapオブジェクトを定義する
let uniques = new Map();
// テキストから取り出した単語をすべて保存する変数を定義する
let words = sonnet.match(/\w+/g);

// words変数の内容をイテレートして
// 単語ごとのカウントを集計する
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques.has(word)) {
    uniques.set(word, uniques.get(word) + 1);
  } else {
    uniques.set(word, 1);
  }
}

console.log(uniques);