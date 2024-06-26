import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Sensor from './Sensor';

describe('Sensor Component', () => {
  const sensors = [
    { id: '1', name: 'Sensor 1', value: 'Value 1' },
    { id: '2', name: 'Sensor 2', value: 'Value 2' },
  ];

  it('renders sensor name', () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Route path="/:sensorId">
          <Sensor sensors={sensors} />
        </Route>
      </MemoryRouter>
    );

    const sensorNameElement = screen.getByText('Sensor 1');
    expect(sensorNameElement).toBeInTheDocument();
  });

  it('renders sensor value links', () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Route path="/:sensorId">
          <Sensor sensors={sensors} />
        </Route>
      </MemoryRouter>
    );

    const sensorValueLinks = screen.getAllByRole('link');
    expect(sensorValueLinks).toHaveLength(sensors.length);
    expect(sensorValueLinks[0]).toHaveTextContent('Value 1');
    expect(sensorValueLinks[1]).toHaveTextContent('Value 2');
  });

  it('navigates to correct sensor when value link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Route path="/:sensorId">
          <Sensor sensors={sensors} />
        </Route>
        
      </MemoryRouter>
    );

    const sensorValueLink = screen.getByText('Value 2');
    expect(sensorValueLink).toBeInTheDocument();

    userEvent.click(sensorValueLink);

    const newSensorNameElement = await screen.findByText('Sensor 2');
    expect(newSensorNameElement).toBeInTheDocument();
  });
});
