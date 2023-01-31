import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonForm from './ButtonForm.jsx';
import Alert from "react-bootstrap/Alert";
import './Form.css'

const Autentificacion = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [entrar, setEntrar] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
        if (email === "adl@gmail.com" && password === "252525") {
            setAlert(<Alert className="mb-3" key={"success"} variant={"success"}>
                <Alert.Heading className="mb-0">Clave correcta.</Alert.Heading>
            </Alert>);
            setEntrar(true);
        } else {
            console.log("Clave o usuario incorrectos.");
            setAlert(<Alert className="mb-3" key={"danger"} variant={"danger"}>
                <Alert.Heading className="mb-0">Clave o contraseña incorrrecta.</Alert.Heading>
            </Alert>);
            setEntrar(false);
        }
    };
    return (
        <div className='contenedor'>
        <Form onSubmit={enviarFormulario}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Escriba su correo" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            {alert}
        {email !== "" && password !== "" && (
            <ButtonForm  />
        )}
            </Form>
            </div>
    );
}

export default Autentificacion;