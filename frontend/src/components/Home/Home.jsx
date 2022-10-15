import React, { useState } from 'react'
import './homeStyles.css'
import { WebcamCapture} from '../Webcam/Webcam'
import axios from 'axios';


const Home = () => {


    const submitForm = (pic) => {
        if (!pic) return
        alert("Form submitted");
        console.log(document.getElementById('selfie').image);
        // axios.post("", pic)
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>ewmu</h1>
                    <form className="form">
                        <WebcamCapture id='selfie'/>
                        <button type="submit" id="login-button" onClick={(pic) => submitForm(pic)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home