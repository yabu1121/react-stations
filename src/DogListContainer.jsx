import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";


export const DogListContainer = () => {
  const [breeds,setbreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState('');
  const [breedsPics,setBreedsPics] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((data) => {
      const breedsName = Object.keys(data.message);
      setbreeds(breedsName);
    });
  },[]);

  const handleChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const fetchAPI = () => {
    if(!selectedBreed) return;
    fetch(`https://dog.ceo/api/${selectedBreed}/image/random/12`)
    .then(res => res.json())
    .then((data) => {
      setBreedsPics(data.message);
      console.log(breedsPics);
    });
  };

  return (
    <>
      <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      handleChange={handleChange}
      />

      <button onClick={fetchAPI}>表示</button>
      {breedsPics.map((url,index) => (
        <DogImage imgUrl={url} key={index} />
      ))}
    </>
  )
}

export default DogListContainer;