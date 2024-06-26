import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Sensor = ({ sensors }) => {
    const { sensorId } = useParams();

    // Identify the initial sensor based on the sensorId
    const initialSensor = sensors.find(sensor => sensor.id === sensorId);

    // State to monitor the current sensor
    const [currentSensor, setCurrentSensor] = useState(initialSensor);

    // State to keep track of the history of values
    const [history, setHistory] = useState([]);

    // Create a Map of sensors with matching sensorId
    const filteredSensors = sensors.filter(sensor => sensor.id === sensorId);
    const sensorMap = new Map(filteredSensors.map(sensor => [sensor.id, sensor]));

    const sensorsArray = Array.from(sensorMap.values());

    useEffect(() => {
        // Function to update the current sensor and its history
        const updateSensorData = () => {
            const sensor = sensorsArray.find(sensor => sensor.id === sensorId);
            setCurrentSensor(sensor);  // Update the current sensor data

            if (sensor && sensor.value !== history[history.length - 1]) {
                setHistory(prevHistory => [...prevHistory, sensor.value]);
            }
        };

        // Call updateSensorData on mount and whenever the sensors data or sensorId changes
        updateSensorData();
    }, [sensors, sensorId]);  // Only re-run the effect if sensors or sensorId changes

    return (
        <div>
            <header>
                <button><Link to="/">Retour</Link></button>
            </header>
            <h1>{currentSensor ? currentSensor.name : 'Sensor Not Found'}</h1>
            <h2>Current Information</h2>
            <ul>
                {sensorsArray.map(sensor => (
                    <li key={sensor.id}>
                        {sensor.value}
                    </li>
                ))}
            </ul>

            <h2>History</h2>
            <ul>
                {history.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sensor;
