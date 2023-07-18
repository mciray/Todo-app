import React,{useState} from 'react'

export default function Chips() {
    const[todo,settodo]=useState("");
    const[items,setitems]=useState([])

    const addTodo=(e)=>{
      if(!todo){
        alert("Please enter todo")
        return;
      }
      const item ={
        id:Math.floor(Math.random()*1000),
        value:todo
      }
      setitems(olditems =>[...olditems,item])
      settodo("");
    }
    const deleteitem=(id)=>{
      const newArray = items.filter(item => item.id !==id);
      setitems(newArray);
    
    }
     
        return (
          <div>
            <h1>Todo App</h1>
            
              <label htmlFor="">Todo :</label>
              <input onChange={e=> settodo(e.target.value)} type="text" placeholder='Do it something'  value={todo}/>
              <button onClick={()=> addTodo()}>Add </button>
           

            <ul>
              {items.map(item=>{
                return(
                  <li key={item.id}>{item.value} <button onClick={()=>deleteitem(item.id)}>X</button></li>
                )
              })}
            </ul>
          </div>
        );
      }
 
