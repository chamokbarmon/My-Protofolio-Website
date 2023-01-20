import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Details from './Componed/Pages/Details/Details';
import Details2 from './Componed/Pages/Details/Details2';
import Details3 from './Componed/Pages/Details/Details3';
import Home from './Componed/Pages/Home/Home';
import Main from './Componed/Pages/Main/Main';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/details1',
        element:<Details></Details>
        
      },
      {
        path:'/details2',
        element:<Details2></Details2>
      },
      {
        path:'/details3',
        element:<Details3></Details3>
      }
     
    ]    

  }
])
function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default App;
