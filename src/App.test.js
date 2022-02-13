/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import App from './App'
import FilmesProvider from './context/FilmesProvider'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';

const wrapper = ({children}) => (
  <MemoryRouter>
  <FilmesProvider>
    {children}
  </FilmesProvider>
  </MemoryRouter>
)
describe('Testa renderização da aplicação', () => {
  test('Testa se o site renderiza o título', () => {
    render(<App />, {wrapper})
    expect(screen.getByText(/copa/i)).toBeInTheDocument()
  })
  test('Testa se o site renderiza o botão', () => {
    render(<App />, {wrapper})
    expect(screen.getByText(/Iniciar/i)).toBeDefined()
    expect(screen.getByText(/Iniciar/i)).toBeDisabled()
  })
  test('Testa se o site renderiza os filmes',async () => {
    render(<App />, {wrapper})
    const incriveis = await screen.findByText(/os incríveis 2/i)
    expect(incriveis).toBeInTheDocument()
    const checkbox = await screen.findAllByRole('checkbox')
    expect(checkbox).toHaveLength(16)
  })
})
describe('Testa interação com cards dos filmes', () => {
  test('Testa clique no card', async () => {
    render(<App />, {wrapper})
    const filme = await screen.findByText(/os incríveis 2/i)
    expect(filme).toBeInTheDocument()
    act(() => {
      fireEvent.click(filme)
    })
    const selecionados = screen.getByText(/selecionados/i)
    expect(selecionados.textContent).toBe("1 de 8 selecionados")
    act(() => {
      fireEvent.click(filme)
    })
    expect(selecionados.textContent).toBe("0 de 8 selecionados")
  })
})
describe('Testa funcionamento campeonato', () => {
  it('Testa funcionamento campeonato', async () => {
    render(<App />, {wrapper})
    const incriveis = await screen.findByText(/os incríveis 2/i)
    const jurassic = await screen.findByText(/jurassic/i)
    const oito = await screen.findByText(/oito mulhe/i)
    const hereditario = await screen.findByText(/heredit/i)
    const vingadores = await screen.findByText(/guerra infinita/i)
    const deadpool = await screen.findByText(/deadpool/i)
    const hansolo = await screen.findByText(/han solo/i)
    const thor = await screen.findByText(/thor/i)
    act(() => {
      fireEvent.click(incriveis)
      fireEvent.click(jurassic)
      fireEvent.click(oito)
      fireEvent.click(hereditario)
      fireEvent.click(vingadores)
      fireEvent.click(deadpool)
      fireEvent.click(hansolo)
      fireEvent.click(thor)
      fireEvent.click(screen.getByText(/Iniciar/i))
      expect(vingadores).toBeInTheDocument()
      expect(incriveis).toBeInTheDocument()
    })
  })
})