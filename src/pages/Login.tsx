import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="loginPage">
      <form className="login" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="userInput" >Login</label>
        <input id="userInput" onChange={(e) => {setName(e.target.value)}} placeholder="Enter your Name" value={name} type="text" />
        <label htmlFor="userPass" >Password</label>
        <input id="userPass" onChange={(e) => {setPass(e.target.value)}} placeholder="Enter your Password" value={pass} type="password" />
        <button className="sendBtn" type="submit">Send</button>
      </form>
    </div>
  );
}
