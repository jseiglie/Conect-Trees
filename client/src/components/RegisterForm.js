import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = () => {
  const initialValues = {
    nombre: "",
    apellidos: "",
    user: "",
    password: "",
    permisos: "",
    avatar: "",
    publicar: "SI",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().max(15).required("Debe de introducir el nombre"),
    apellidos: Yup.string().max(15).required("Debe de introducir el apellido"),
    user: Yup.string().min(3).max(15).required("Debe de introducir el usuario"),
    password: Yup.string().min(6).required("Debe de introducir la contraseña"),
    permisos: Yup.string()
      .max(2)
      .required("Debe de introducir el nivel de acceso"),
    avatar: Yup.string(),
    publicar: Yup.string().max(2).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/api/register", data).then((response) => {
      console.log("IT WORKED");
    });
  };
  return (
    <div className="RegisterForm__wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="RegisterForm__Container">
          <label>Nombre: </label>
          <ErrorMessage name="nombre" component="span" />
          <Field
            autoComplete="on"
            id="inputCreatePost"
            name="nombre"
            placeholder="(nombre...)"
          />
          <label>Apellidos</label>
          <ErrorMessage name="apellidos" component="span" />
          <Field
            autoComplete="on"
            id="inputCreatePost"
            name="apellidos"
            placeholder="(apellidos...)"
          />
          <label>User: </label>
          <ErrorMessage name="user" component="span" />
          <Field
            autoComplete="on"
            id="inputCreatePost"
            name="user"
            placeholder="(usuario...)"
          />
          <label>Contraseña: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            type="password"
            autoComplete="off"
            id="inputCreatePost"
            name="password"
            placeholder="(Ex. password...)"
          />
          <label>Permisos: </label>
          <ErrorMessage name="permisos" component="span" />
          <Field
            autoComplete="on"
            id="inputCreatePost"
            name="permisos"
            placeholder="(Ex. N5 a N3...)"
          />
          <label>Avatar: </label>


          <button type="submit">Registrar usuario</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
