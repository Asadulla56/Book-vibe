import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PageToRead from './components/PageToRead/PageToRead';
import BookDitails from './components/BooksDitails/BookDitails';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
// import Readlist from './components/ReadList/Readlist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>

      },
      {
        path:'/contact',
        element:<Contact></Contact>

      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/books.json'),
        // children:[
        //   {
        //     path:'/book/:bookId',
        //     element:<Readlist></Readlist>,
        //     loader:()=>fetch('/books.json'),

        //   }
        // ]
      },
      
      {
        path:'/book/:bookId',
        element:<BookDitails></BookDitails>,
        loader:()=>fetch('/books.json')
      },
      {
        path:'/read',
        element:<PageToRead></PageToRead> 
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
