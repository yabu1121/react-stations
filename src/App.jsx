import './App.css'
import Header from './Header';
import Description from './Description';
import DogListContainer from './DogListContainer';

export const App = () => {
  return (
    <div>
      <div className='main'>
        <Header />
        <Description />
      </div>    
      <DogListContainer />
    </div>
  )
}

export default App;