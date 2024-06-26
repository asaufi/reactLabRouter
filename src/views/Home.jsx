import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';

const Home = ({ sensors }) => {
    // Utilisation d'un Map pour filtrer les doublons
    const uniqueSensors = new Map();
    sensors.forEach(sensor => {
        if (!uniqueSensors.has(sensor.id)) {
            uniqueSensors.set(sensor.id, sensor);
        }
    });
    

    // Conversion du Map en Array pour le rendu
    const sensorsArray = Array.from(uniqueSensors.values());

    return (
        <div className="home-container">
            <header className="home-header">
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <div className="main-content">
                <h1>Sensors</h1>
                <ul>
                    {sensorsArray.map(sensor => (
                        <li key={sensor.id}>
                            <Link to={`/${sensor.id}`}>{sensor.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
