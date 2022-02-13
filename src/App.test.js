/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App'
import FilmesProvider from './context/FilmesProvider'
import '@testing-library/jest-dom'

test('Testa se o site renderiza', () => {
  const wrapper = ({children}) => (
    <MemoryRouter>
    <FilmesProvider>
      {children}
    </FilmesProvider>
    </MemoryRouter>
  )

  render(<App />, {wrapper})
  expect(screen.getByText(/Copa/).textContent).toBe(
    'Copa de Filmes',
  )
})