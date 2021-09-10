
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./components/routing";
import  Header  from "./components/header";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routing/>      
    </BrowserRouter>
  );
}

export default App;
