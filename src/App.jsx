// DO NOT DELETE

import React from 'react';
import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  //fetch('url').then(()=>{成功時の処理}).catch(()=>{失敗時の処理})
  //thenはPromiseと同じ感じ
  //処理の時の引数をいまいち理解できていない
  const reload = () =>{
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((res)=>{
    return res.json();
  })
  .then((data) => {
    setDogUrl(data.message);
  })
  }

  return (
    <div>
      <header>DOGアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} alt="犬の画像を表示するサイトです。" />
      <button onClick={reload}>更新</button>
    </div>
  )
}

export default App;