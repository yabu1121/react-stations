// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  
  const randomApi = async () => {
    // APIを叩く
    const res = await fetch('https://dog.ceo/api/breeds/image/random'); // APIにリクエストを送信
    const data = await res.json(); // レスポンスをJSON形式に変換
    setDogUrl(data.message); // JSONデータから画像のURLを抽出して状態を更新
  }

  return (
    <div>
      <header>yabuのアプリ</header>
      <h2>Hello, world!</h2>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像" />
      <button onClick={randomApi}>更新</button>
    </div>
  )
}
