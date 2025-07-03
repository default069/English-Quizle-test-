import { Route, Routes } from "react-router-dom"
import Main from "./view/main/Main"
import Quizle from "./view/quizle/Quizle"
import Cards from "./view/cards/Cards"
import Error from "./view/err/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ToDoList from "./view/todoList/ToDoList"

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/404" element={<Error/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/quizle" element={<Quizle/>}/>
        <Route path="/todoList" element={<ToDoList/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App