import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1100, // 220*5 = 1100
  height: 1000, // 200*5 = 1000
  facingMode: "user"
};

export const WebcamCapture = () => {
  const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

  const [image, setImage] = useState('');
  const webcamRef = React.useRef(null);
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);


  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
      setFile(dataURLtoFile(imageSrc, 'image.png'))
    }, []);

  function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3842/classify', {
      image: file
    }, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        console.log(res.data);
        setResult(res.data)
      })
  }

  useEffect(() => {
    console.log('image', file)
  }, [file])

  useEffect(() => {
    if (image) {
      setImage(image)
    }
  }, [image])

  return (

    <div className="container mx-auto px-96">

      <div className="py-4">

        <p className='p-4 border border-2 rounded-lg '>
          <h1 className='font-bold'>Take your photo</h1>
          <br />
          <Link to="/" className=''>👈 Go back</Link>
        </p>
      </div>

      <form className="pt-3" >
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
        <input type="file" value={""} onChange={(e) => setFile(e.target.files[0])} />
        <div className="text-center mb-24">
          <button type="submit" id="login-button" className="w-full px-3 py-2 bg-[#79D1C3] text-white hover:text-white rounded-lg" onClick={submitForm}>Submit</button>
        </div>

      </form>
    </div>
  );
};