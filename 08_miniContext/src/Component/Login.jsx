import React, {useState,useContext} from "react";
import UserContext from "../Context/UserContext";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let { setUser } = useContext(UserContext);
  let handelClick = (e) => {
    e.preventDefault()
    let user = { username, password };
    setUser(user);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">Login</div>
      <input
      className="border-2 border-black m-2 w-64"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
       className="border-2 border-black m-2 w-64"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input className="w-64 bg-blue-500 text-white px-2 py-1 rounded-md m-2 active:bg-slate-600"
       type="submit" onClick={handelClick}/>
    </div>
  );
}

export default Login;
