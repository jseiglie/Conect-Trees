import React from "react";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
//import axios from "axios";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  // const initialValues = {
  //   nombre: "",
  //   apellidos: "",
  //   user: "",
  //   password: "",
  //   permisos: "",
  //   avatar: "",
  //   publicar: "SI",
  // };

  // const validationSchema = Yup.object().shape({
  //   nombre: Yup.string().max(15).required("Debe de introducir el nombre"),
  //   apellidos: Yup.string().max(15).required("Debe de introducir el apellido"),
  //   user: Yup.string().min(3).max(15).required("Debe de introducir el usuario"),
  //   password: Yup.string().min(6).required("Debe de introducir la contraseña"),
  //   permisos: Yup.string()
  //     .max(2)
  //     .required("Debe de introducir el nivel de acceso"),
  //   avatar: Yup.string(),
  //   publicar: Yup.string().max(2).required(),
  // });

  // const onSubmit = (data) => {
  //   axios.post("http://localhost:3001/api", data).then((response) => {
  //     console.log("IT WORKED");
    // });
  // };
  return (
    <div className="RegisterForm__wrapper">

      <RegisterForm/>

  
    </div>
  );
};
export default Register;
