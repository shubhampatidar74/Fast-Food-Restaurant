import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"
import BookTable from "./components/BookTable/BookTable"
import Layout from './Layout'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={ <Home /> }/>
      <Route path="menu" element={ <Menu /> }/>
      <Route path="about" element={ <About /> }/>
      <Route path="booktable" element={ <BookTable /> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
