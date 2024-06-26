import React from 'react';
import AppRoutes from './routes';  // Ensure this points to the correct file
import useMqtt from './hooks/useMqtt';

const App = () => {
    const mqttData = useMqtt('wss://random.pigne.org', 'value/+');

    const sensors = mqttData.map(data => ({
        id: data.name.replace(/\s+/g, '_').toLowerCase(),
        ...data
    }));

    return <AppRoutes sensors={sensors} />;
};

export default App;
