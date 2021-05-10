
import './App.css';
import React,{useEffect}  from 'react'

function App() {

  let data={title:'waiting for server'}
  const [todo,settodo]=React.useState(data)
  const [isfetching,setfetching]=React.useState(false)
  useEffect(()=>{
    // const response=fetch('https://jsonplaceholder.typicode.com/todos/1')
    // response.then((response)=>response.json())
    // .then((json)=>console.log(json))
 async function fetchdata(){
   setfetching(true)
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data=await response.json();
   
   
   settodo(data)
   setfetching(false)
    console.log('data = ',data)
    // console.log('data2 = ',data2)
    console.log('todo = ',todo)
 }
 fetchdata()
},[settodo])

if(isfetching){
  return <div>loading.....</div>
}

  return (
   <div>
     hello fetch
     <br/>
     {todo.title}
   </div>
  );
}

export default App;
