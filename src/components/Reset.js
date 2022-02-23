import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Reset = () => {

    const [notification, setNotification] = useState(null);
    const [statusError, setStatusError] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const { token } = useParams();

    const onHandlerClick = () => {

        console.log("Reset button clicked");
        console.log(token);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "resetLink": token,
            "newPass": newPassword
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        //change the url to create http request
        // check the status of the response
        // check the method of http request
        // fetch(`http://${process.env.IP_ELASTICA_EC2_AWS}:3000/api/login/email-activate`, requestOptions)
        //fetch("http://3.23.34.169:3000/api/login/reset-password", requestOptions)
        //fetch("http://localhost:3000/api/login/reset-password", requestOptions)
        //fetch("http://3.23.34.169:3000/api/login/reset-password", requestOptions)
        fetch("http://q2appbackend-env.eba-r2bacqyp.us-east-2.elasticbeanstalk.com/api/login/reset-password", requestOptions)


            .then(response => {response.text()
            console.log(response)
            })
            .then(result => {
                console.log(result)
                setNotification("!Contraseña actualizada con éxito!");
                setStatusError(false);
            })
            .catch(error => {
                console.log('Error', error)
                setNotification("Error en la actualización");
                setStatusError(true);
            });
    }

    /*
    const onHandlerClickError = () => {
        setNotification("This is a error notification");
        setStatusError(true);
    }

    const onHandlerClickSuccess = () => {
        setNotification("This is a success notification");
        setStatusError(false);
    }
    */
    const onHandlerResetPassword= (event)=>{
        console.log(event.target.value)
        setNewPassword(event.target.value)
    };
    return (
        <div className="container mt-5">

            {notification && (
                <div className={
                    `alert ${statusError ?
                        'alert alert-danger' :
                        'alert-primary'}`
                }
                    role="alert">
                    {notification}
                </div>
            )}

            
            {/*
            <button className="btn btn-danger" onClick={onHandlerClickError}>Error</button>
            <button className="btn btn-success" onClick={onHandlerClickSuccess}>Success</button>
            */}
        
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Ingresa tu nueva contraseña</label>
            <input type="password" className="form-control" value={newPassword} onChange={onHandlerResetPassword}/>
            <div id="" className="form-text">Tu información se cifra y se guarda de forma segura.</div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onHandlerClick}>Actualizar contraseña</button>
        
        </div>
    )

}

export default Reset;
