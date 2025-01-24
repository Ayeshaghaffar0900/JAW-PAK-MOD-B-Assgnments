import React, { useState } from 'react'

const TodoList = () => {
    const [todo,settodo] = useState('');
    const [todolist,settodolist] = useState([]);
    // const deleteTask =() =>{
        // console.log('delete task');
        
    // }
    const addTodo = () => {
        // settodolist([...todolist,todo]);
        // console.log(todolist)
        if (todo.trim() === '') return; 
        settodolist((todolist)=>{
        const list = [...todolist,todo];
        // console.log(list);
        settodo('');
        
        return list;

        })
    }
    function deleteTask(index){
        const finalList = todolist.filter((element,i)=>{
            return index!=i
        })
        settodolist(finalList)
    }
    function removeAll(){
        settodolist([])
    }
  return (
    <>
     <div className='container'>
        <div className='header'>
            <h1>Todo List</h1>
        </div>
            <input type='text' placeholder='Add task to your list' value={todo} onChange={(e)=>{settodo(e.target.value)}}/>
            <button onClick={addTodo}>Add</button>
            <h2 >YOUR TASKS</h2>
            {todolist !=[''] && todolist.map((task,index)=>{
                return(
                    <>
                    <p key={index}>
                    <div className='task' ><h1>{task}</h1></div>
                    <button onClick={()=>deleteTask(index)}>Delete Task</button>  
                    </p>
                    </>
                )
            })
        }
        {
            todolist.length===0 ? <p>No tasks</p> : <button onClick={removeAll}>Remove all </button>
        }
      </div>
      </>
  )
}


export default TodoList
