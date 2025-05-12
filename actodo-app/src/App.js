import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginTodo from "./pages/LoginTodo";
import SignUpTodo from "./pages/SignUpTodo"
import Landing from "./pages/Landing";

function App() {

  const [usersArr, setUsersArr] = useState(
    [
      {
        uName: "",
        uPassword: ""
      }
    ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginTodo usersArr={usersArr} setUsersArr={setUsersArr} />} />
        <Route path={"/signUpTodo"} element={<SignUpTodo usersArr={usersArr} setUsersArr={setUsersArr} />} />
        <Route path='/landing' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
