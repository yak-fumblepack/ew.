import React, { useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios'


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });

    const submitForm = (pic) => {
        if (!pic) return
        alert("Form submitted");
        console.log(pic);
    }


    return (
        <div className="webcam-container">
            <form className='form'>
                <div className="webcam-img">

                    {image == '' ? <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    /> : <img src={image} />}
                </div>
                <div>
                    {image != '' ?
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                            className="webcam-btn">
                            Retake Image</button> :
                        <button onClick={(e) => {
                            e.preventDefault();
                            capture();
                        }}
                            className="webcam-btn">Capture</button>
                    }
                </div>
                <button type="submit" id="login-button" onClick={(image) => submitForm(image)}>Submit</button>
            </form>
        </div>
    );
};