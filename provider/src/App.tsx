import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Provider from './components/ProviderComponent';

const App:React.FC<{
  navigateRoot:(value:string)=>void
}> = ({
  navigateRoot
}) => {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Provider  navigateRoot={navigateRoot}/>}/>
          <Route path='/teste'  element={<>Teste</>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
