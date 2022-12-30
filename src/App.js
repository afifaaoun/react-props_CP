import './App.css';
import { Profile } from './profile/Profile';

function App() {
  let data ={ fullName : 'Juddy Abbott' ,
              bio : 'Student',
              profession :' Writer'
            }
  return (
    <div className="App">
      <Profile data= {data}>https://cdn.myanimelist.net/images/characters/12/347250.jpg</Profile>
    </div>
  );
}


export default App;
