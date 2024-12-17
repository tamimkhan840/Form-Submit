import { useState } from "react"
import Cards from "./Components/Cards"
import Form from "./Components/Form"


function App() {
  const [users, setUsers] =useState([])
  const handleFormSubmitDate = (data) =>{
   
    setUsers([...users, data])
  }
  const handleremove = (id) => {
    setUsers(() => users.filter((item, index) => index !==id))
  }
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center justify-center">
      <div className="container mx-auto p-3">
         <Cards onUsers={users} onRemove={handleremove}/>
        <Form onfandledat={handleFormSubmitDate}/>
      </div>

    </div>
  )
}

export default App
