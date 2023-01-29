import React,{useState , useEffect} from "react"
import AddIcon from '@mui/icons-material/Add';

import Todo from "./Todo";
import {db} from "./firebase";
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 flex flex-col max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 `,
  heading: `text-3xl font-bold text-center mb-3 text-gray-800`,
  form:`flex justify-between`,
  input:`border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-500 hover:bg-purple-600 text-slate-100`,
  count:`text-center mt-2`
}


function App() {
const [todos, setTodos] = useState([])
const [input, setInput] = useState('')


//create todo
const createTodo = async (e)=>{
  e.preventDefault(e);
  if(input === ''){
    alert('Please Enter A Valid Todo')
    return
  }
  await addDoc(collection(db,'todos'),{
    text:input,
    completed: false,
  })
  setInput('')
}


//read todo from firebase
useEffect(()=>{
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc)=>{
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
  },[])


//update todo in firebase
const toggleComplete = async (todo) =>{
  await updateDoc(doc(db,'todos',todo.id),{
      completed : !todo.completed
  })
 }

//delete todo
const deleteTodo = async (id) =>{
  await deleteDoc(doc(db,'todos',id))
}


  return (
    <>
      <div className={style.bg}>
        <div className={style.container}>
          <h3 className={style.heading}>To-Do App</h3>
          <form onSubmit={createTodo} className={style.form}>
              <input value={input} onChange={(e)=>setInput(e.target.value)} className={style.input} type="text" placeholder="Add Todo" />
              <button className={style.button}><AddIcon size={30} /></button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />    
            ))}
          </ul>
          {todos.length < 1 ? null : <p className={style.count}>{`You Have ${todos.length} Todos`}</p>  }
        </div>
      </div>
    </>
  )
}

export default App
