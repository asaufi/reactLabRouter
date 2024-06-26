import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  const sensors = [
    { id: '1', name: 'Sensor 1' },
    { id: '2', name: 'Sensor 2' },
  ];

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Home sensors={sensors} />
      </MemoryRouter>
    );
  });

  it('renders the correct number of sensor links', () => {
    render(
      <MemoryRouter>
        <Home sensors={sensors} />
      </MemoryRouter>
    );

    const sensorLinks = screen.getAllByRole('link');
    expect(sensorLinks).toHaveLength(sensors.length);
  });

  it('renders sensor links with correct text and URL', () => {
    render(
      <MemoryRouter>
        <Home sensors={sensors} />
      </MemoryRouter>
    );

    const sensorLinks = screen.getAllByRole('link');
    sensorLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(sensors[index].name);
      expect(link.getAttribute('href')).toBe(`/${sensors[index].id}`);
    });
  });
});
s