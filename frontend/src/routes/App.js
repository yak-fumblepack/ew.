import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import PhotoPage from '../pages/photo';



const App = () => {
    return (

        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>404</h1>} />
                    <Route path="/dashboard/upload" element={<PhotoPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;