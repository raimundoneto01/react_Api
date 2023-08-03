import { useEffect, useState } from 'react'
import { TableApi } from './components/TableApi/TableApi'

function App() {
 const colunas =['id', 'name', 'email', 'username', 'website', 'address'];
 const [data, setData] = useState([])

 const getUsers= ()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setData(data)
  })
 }
 useEffect(()=>{
  getUsers()
 }, [])


  return (
    <>
      <TableApi 
              colunas = {colunas}
              data = {data} 
      />
    </>
  )
}

export default App
// instalar o bootstrap no react,,    terminal: PowerShel ou git bash. ( npm install i bootstrap )....
// inportar o bootstrap no main.jsx.....
// import 'bootstrap/dist/css/bootstrap.min.css'--    "CSS"