import React,{useState} from "react"
import AddIcon from '@mui/icons-material/Add';

import Todo from "./Todo";


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 flex flex-col max-w-[500px] w-full rounded-md shadow-xl p-4 `,
  heading: `text-3xl font-bold text-center mb-3 text-gray-800`,
  form:`flex justify-between`,
  input:`border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-500 hover:bg-purple-600 text-slate-100`,
  count:`text-center`
}


function App() {
const [todos, setTodos] = useState(['Learn React' , 'Grind Leetcode'])

  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <h3 className={style.heading}>Todo App</h3>
          <form className={style.form}>
              <input className={style.input} type="text" placeholder="Add Todo" />
              <button className={style.button}><AddIcon size={30} /></button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} />    
            ))}
          </ul>
          <p className={style.count}>You Have 2 Todos</p>
        </div>
      </div>
    </>
  )
}

export default App
