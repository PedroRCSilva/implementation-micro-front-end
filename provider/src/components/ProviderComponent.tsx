import React from 'react';
import './ProviderComponent.css';
import { useNavigate } from 'react-router-dom';

const Provider: React.FC<{
  navigateRoot?:(value:string)=>void
}> = ({
  navigateRoot = ()=> {}
}) => {

  const navigate = useNavigate()
  return (
    <div className="container">
      <h2>Aplicação 1</h2>
      <button onClick={()=>{
        navigateRoot("/teste")
      }}>Redirecionar para aplicação principal</button>
      <button onClick={()=>navigate("/teste") }>Redirecionamento para o próprio MicroFront-end</button>
    </div>
  );
};

export default Provider;
