import React from "react"
import { useState } from "react"
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min"
import Form from "./Form"
import MemberCard from './MemberCard'

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
  const [teamMembers, setTeamMembers] = useState([]);

  
  return (
  <>

    <Form data={teamList} update={updateForm} submit={submit}/>
    {teamMembers.map((member) => {
      return(<MemberCard key={member.id} data={member}/>);
      })}

  </>
  );
}

export default App;
