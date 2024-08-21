import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";


export const DogListContainer = () => {
  const [breeds,setbreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState('');

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
  }

  return (
    <BreedsSelect
    breeds={breeds}
    selectedBreed={selectedBreed}
    handleChange={handleChange}
    />
  )
}

export default DogListContainer;