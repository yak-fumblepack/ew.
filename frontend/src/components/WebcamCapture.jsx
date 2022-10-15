import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1100, // 220*5 = 1100
  height: 1000, // 200*5 = 1000
  facingMode: "user"
};

export const WebcamCapture = () => {

  const [image, setImage] = useState('');
  const webcamRef = React.useRef(null);


  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
    }, []);

  const submitForm = () => {
    if (!image) return
    alert("Form submitted");
    console.log(image);
    alert(image);
  }


  return (

    <div className="container mx-auto px-96">


      <div className="py-4">

        <p className='p-4 border border-2 rounded-lg '>
          <h1 className='font-bold'>Take your photo</h1>
          <br />
          <Link to="/" className=''>👈 Go back</Link>
        </p>
      </div>

      <form className="pt-3">
        <div className="py-4">

          <p className='p-4 border border-2 rounded-lg '>
            <h1 className="font-bold">Note:</h1>
            For a more accurate diagnoses of your skin condition, the AI/ML Tool will require you to take a clear photo of your patch of skin. Please ensure that the photo is taken in <span className='underline decoration-[#79D1C3] decoration-4'>good lighting</span> and that the patch of skin is <span className='underline decoration-[#79D1C3] decoration-4'>clearly visible</span>.</p>
        </div>
        <div className="webcam-img">

          {image === '' ? <Webcam
            audio={false}
            height={1100}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1000}
            videoConstraints={videoConstraints}
          /> : <img src={image} alt="user" />}
        </div>

        <div className='text-center py-4'>
          {image !== '' ?
            <button onClick={(e) => {
              e.preventDefault();
              setImage('')
            }}
              className="w-full px-3 py-2 text-[#6892D5] bg-[#C9FDD7] hover:text-black rounded-lg">
              Retake Image</button> :
            <button onClick={(e) => {
              e.preventDefault();
              capture();
            }}
              className="w-full px-3 py-2 bg-[#79D1C3] text-[#C9FDD7] hover:text-white rounded-lg">Capture</button>
          }
        </div>
        <div className="py-4 inline-flex items-center">
          <input type="checkbox" name="" id="" className='form-checkbox rounded text-[#79D1C3]' />
          <span class="ml-2">I confirm this is the best quality image I have obtained to the most of my abilities</span>
        </div>
        <div className="text-center mb-24">
          <button type="submit" id="login-button" className="w-full px-3 py-2 bg-[#79D1C3] text-white hover:text-white rounded-lg" onClick={() => submitForm()}>Submit</button>
        </div>
      </form>
    </div>
  );
};