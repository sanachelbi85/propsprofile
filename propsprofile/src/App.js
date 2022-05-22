import './App.css';
import ProfileComponent from './Profile/ProfileComponent';


function App() {
  const personne={  
    FullName: "Sana Chelbi",
    Bio:"I believe in smiling and being happy",
    Profession: "I am a student ",
    imgr:"photo2.jpg"
}
   const handleName = (x)=> alert(x);
  return (
    <div className="App">
    <ProfileComponent  personne={personne} handleName= {handleName}/>

    </div>
  );
}

export default App;
