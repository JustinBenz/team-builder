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
    setTeamList({...teamList, [inputName]: inputValue})
  }
  const submit = () => {
    const newMember = {
      name: teamList.name.trim(),
      email: teamList.email.trim(),
      role: teamList.role.trim(),
    }
    setTeamMembers([...teamMembers, newMember])
    setTeamList(initialTeamList);
  }
  const[teamList, setTeamList]= useState(initialTeamList);
  const [teamMembers, setTeamMembers] = useState([])

  
  return (
    <Form data={teamList} update={updateForm} submit={submit}/>
  );
}

export default App;
