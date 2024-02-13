import  { useState } from "react";

function TodoTrail() {
    let [todo, setTodo] = useState([{
        id: 1,
        title: 'himanshu',
        description:'good bouy'
    },
        {
            id: 2,
        title: 'shinde',
        description:'good bouy1'
        }])
    
        function addTodo() {
            let c={id: 3,
                title: Math.random(),
                description: 'bad bouy'
            }
            setTodo([...todo, c])
            console.log("dkshfiwoif")
        }
    
    return (
        <>
            <button onClick={addTodo}>Add Todo</button>
            {todo.map(todo =>
                <DisplayTodo key={todo.id} title={todo.title}
                description={todo.description}></DisplayTodo>
             
        )}
        </>

    )
}



function DisplayTodo({ title, description }) {
    return (
        <>
            <h1>{title}</h1>
            <h3>{description}</h3>
            
        </>
    )
}

export default TodoTrail