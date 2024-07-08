// DO NOT DELETE

import './App.css'
import { useState } from 'react';
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  return (
    <div>
      <header>yabuのアプリ</header>
      <h2>Hello, world!</h2>
      <p>犬の画像を表示するサイトですう</p>
      <img src={dogUrl} />
      <button onClick={()=>{setDogUrl('https://dog.ceo/api/breeds/image/random/3')}}>更新</button>
    </div>
  )
}
