import React from "react"
import { useState } from "react"
import Form from "./Form"

const initialTeamList = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const updateForm = (inputName, inputValue) => {

  }
  const[teamList, setTeamList]= useState(initialTeamList);
  
  return (
    <Form data={teamList} update={updateForm}/>
  );
}

export default App;
