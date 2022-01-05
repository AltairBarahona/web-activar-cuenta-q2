import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Activation = () => {

    const [notification, setNotification] = useState(null);
    const [statusError, setStatusError] = useState(null);
    const { token } = useParams();

    const onHandlerClick = () => {

        console.log("Activation button clicked");
        console.log(token);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": token
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
        fetch("http://3.23.34.169:3000/api/login/email-activate", requestOptions)

            .then(response => response.text())
            .then(result => {
                console.log(result)
                setNotification("Activation successful");
                setStatusError(false);
            })
            .catch(error => {
                console.log('error', error)
                setNotification("Activation failed, check the console for more details");
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

            <button className="btn btn-primary" onClick={onHandlerClick}>Activation</button>
            {/*
            <button className="btn btn-danger" onClick={onHandlerClickError}>Error</button>
            <button className="btn btn-success" onClick={onHandlerClickSuccess}>Success</button>
            */}
        </div>
    )

}

export default Activation;
