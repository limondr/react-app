import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from '../components/pages/sections/Map';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}));

test('testing map loading', () => {
  render(
    <Map />
  );
  const map = screen.getByTestId('map')
  expect(map).toBeInTheDocument();
});
