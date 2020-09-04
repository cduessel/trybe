import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { About } from './App';
import renderWithRouter from './renderWithRouter';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

afterEach(cleanup);

describe('teste da aplicação toda', () => {
it('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/i);
  expect(home).toBeInTheDocument();
});

it('deve renderizar o componente Sobre', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText(/Sobre/i));
  const pathname = history.location.pathname;
  expect(pathname).toBe('/about');
  const aboutAll = getByText(/Você está na página Sobre/i);
  expect(aboutAll).toBeInTheDocument();
});

it('deve testar um caminho não existente e a renderização do Not Found', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/pagina/que-nao-existe/');
  const noMatch = getByText(/Página não encontrada/i);
  expect(noMatch).toBeInTheDocument();
});
});

describe ('testes do componente About', () => {
  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText, getByTestId } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
    
    const inputNome = getByTestId('input-nome');
    expect(inputNome.value).toBe('');
    fireEvent.change(inputNome, { target: { value: 'batatinha' } });
    expect(inputNome.value).toBe('batatinha');
  
    const inputEmail = getByTestId('input-email');
    expect(inputEmail.value).toBe('');
    fireEvent.change(inputEmail, { target: { value: 'batatinha@trybe.com' } });
    expect(inputEmail.value).toBe('batatinha@trybe.com');

  });
});
