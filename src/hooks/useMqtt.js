import { useEffect, useState } from 'react';
import mqtt from 'mqtt';

const useMqtt = (host, topic) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const client = mqtt.connect(host);

        const handleConnect = () => {
            client.subscribe(topic);
        };

        const handleMessage = (topic, message) => {
            const jsonData = JSON.parse(message.toString());
            setData(prevData => [...prevData, jsonData]);
        };

        client.on('connect', handleConnect);
        client.on('message', handleMessage);

        return () => {
            client.off('connect', handleConnect);
            client.off('message', handleMessage);
            client.end();
        };
    }, [host, topic]);

    return data;
};

export default useMqtt;
