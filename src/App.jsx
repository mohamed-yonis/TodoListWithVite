
import React from 'react';
import { useState } from 'react';
const App = () => {
   const [todo, setTodo] = useState([])

   const [newtodo, setNewtodo] = useState([])

   function handletodo(){
    setTodo([...todo, newtodo])
   }

   function handleinput(event){
         setNewtodo(event.target.value);
   }
    
  return (
    <div className='con'>
     <div className="conatiner">
      <h1>TodoList App</h1>
      <input type="text" onChange={handleinput} placeholder='Add Task...' />
      <button onClick={handletodo}>+</button>
      {
        todo.map((t,index)=>{
              return  <h2 key={index}>{t}</h2>
        })
      }
     </div>
    </div>
  );
}
export default App;

