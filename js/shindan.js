
//要素取得
const omikuji = document.getElementById("omikuji");

//趣味
const unki = [ 
  "ダンス",
  "ヨガ",
  "音楽ライブ鑑賞",
  "オンライン謎解きゲーム",
  "刺繍",
  "瞑想",
  "クラシック鑑賞",
  "ソロゲーム"
]

//結果
function kekka(){
const nmb = Math.floor(Math.random() * unki.length );
omikuji.innerHTML = unki[nmb]; 
}

//イベント
omikuji.addEventListener("click", kekka, false);
