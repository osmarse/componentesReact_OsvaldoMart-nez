import React from "react";
import Button from 'react-bootstrap/Button';
import "./ButtonForm.css";

const ButtonForm = () => {
    const texto = "Iniciar Sesion"
  return (
    <>
      <Button variant="primary" type="submit">{texto}</Button>
    </>
  );
};

export default ButtonForm;