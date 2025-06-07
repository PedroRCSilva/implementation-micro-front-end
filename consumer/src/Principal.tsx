import { useNavigate } from 'react-router-dom';
import Teste from 'remote/Teste/Provider1';
import Teste2 from "remote2/Provider2"

export const Principal = () => {
  const navigate = useNavigate()

  return (
    <div className="content">
    <div>
      Esse é o cabeçalho principal da aplicação
    </div>
   <Teste navigateRoot={navigate} />
   <Teste2/>
  </div>
  )
}
