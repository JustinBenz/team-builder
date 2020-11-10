import React from "react"
import '../style/App.css'
export default function Form (props) {
    const { data, update, submit } = props;
    const changeHandle = (evt) => {
      const { name, value } = evt.target;
    }
    return(
        <div className="form">
            <div className="formholdr">
                <label for="fName">Name:</label>
                <input type="text" name="name" value={data.name} onChange={changeHandle} id="fName"></input>
                <label for="fEmail">Email:</label>
                <input type="email" name="email" value={data.email} onChange={changeHandle} id="fEmail"></input>
                <label for="fDD" name="role">Role:</label>
                <select name="role" id="fDD" value={data.role} onChange={changeHandle}>
                    <option value="">------</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Designer">Designer</option>
                </select>
                <button>Submit</button>
            </div>
            
        </div>
    );
}