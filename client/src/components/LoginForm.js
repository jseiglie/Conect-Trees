import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState} = useContext(AuthContext);
  let navigate = useNavigate();
  //useEffect(()=>{console.log(isAdmin)},[isAdmin])
navigate= useNavigate();
  useEffect(()=>{
    if (authState) navigate("/admin/dashboard");
  },[])

  const login = (e) => {
    e.preventDefault();
    const data = { usuario: user, password: password };

    axios.post("http://localhost:3001/digitalhub/login", data).then((res) => {
      //console.log(res);
      if (res.data.error) {
        alert( "Usuario y/o contraseña no validos" );
      } else {
        localStorage.setItem("accessToken", res.data);
        setAuthState(true)
        //console.log(res.data[1]);
        navigate("/admin/dashboard");
      }
    });
  };
  return (
    <>
    
      <div className="loginForm__Container text-center">
        <div className="row form_wrapper">
          <div className="col-12-md">
            <div className="row">
              <form className="form-control p-lg-5 form-card">
                <label className="login_label" htmlFor="user">
                  Usuario
                </label>
                <input
                  id="user"
                  className="form-control login_input"
                  type="text"
                  name="usuario"
                  required={true}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                />
                <label className="login_label" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  className="form-control login_input"
                  type="password"
                  required={true}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button className="btn btn-primary login_btn" onClick={login}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
