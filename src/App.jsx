import { useState } from 'react'; // Importamos useState para poder usarlo
import Header from './components/Header';
import UseSelector from './components/UserSelector';
import TaskList from './components/TaskList';

const App = ()=>{

  // Creación de usuarios
  const users =[
    {id:1, username:'Ismael'},
    {id:2, username:'Daniel'},
    {id:3, username:'Jonathan'},
    {id:4, username:'Joel'},
    {id:5, username:'Mario'},
  ]

  // Creación de tareas
  const allTasks ={
    1:["Hacer ejecicio", "Desplegar app en React", "Tumbar produccion"],
    2:["Depslegar app en angular", "Aprender PHP", "Hacer la tarea"],
    3:["Hacer API Dijkstra", "Desplegar app en Render"],
    4:["Manual de practicas de REACT", "Aprender MYSQL", "Hacer cursos de Udemy"],
    5:["Aprender ingles", "Desarrollar IA", "Crear una aplicacion REACT"],
  }

  // Estado para almacenar el usuario actual
  const [currentUserId, setCurrentUserId] = useState(1);

  // Función para cambiar el usuario
  const currentUser = users.find((usr)=>usr.id == currentUserId)

  // Función para guardar la tarea del usuario anterior
  const tasks = allTasks[currentUserId];


  
  return (
    <div className="bg-indigo-100 w-screen h-screen p-4" >
      <Header user = {currentUser}/>
      <section className="bg-white shadow rounded mt-4 p-2">
      <UseSelector users = {users} newUser = {setCurrentUserId}/>
      <TaskList tasks = {tasks} />
      </section>
    </div>
  )
}

export default App;