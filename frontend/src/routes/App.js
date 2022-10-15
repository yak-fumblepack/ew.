import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import PhotoPage from '../pages/photo';
import StatisticsPage from '../pages/statistics';



const App = () => {
    return (

        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>404</h1>} />
                    <Route path="/dashboard/upload" element={<PhotoPage />} />
                    <Route path="/dashboard" element={<StatisticsPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;