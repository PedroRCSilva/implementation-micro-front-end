import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Principal } from './Principal';

const browserRoutes = createBrowserRouter([{
  path:"/teste",
  element:<>Redirecionou</>
},{
  path:"/",
  element:<Principal/>
}])

const App = () => {
  

  return (
   <RouterProvider router={browserRoutes}/>
  );
};

export default App;
