export const BreedsSelect = ({breeds,selectedBreed,handleChange}) => {
  return (
  <select value={selectedBreed} onChange={handleChange}>
    <option> Select a breed</option>
    {breeds.map((breed,index) => (
      <option value={breed} key={index}>{breed}</option>
    ))}
  </select>
  )
}

export default BreedsSelect