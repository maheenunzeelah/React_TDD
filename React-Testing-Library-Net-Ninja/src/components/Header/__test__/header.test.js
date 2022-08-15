import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('header renders text past as prop to it', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
// it('checking for heading elements', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByRole("heading",{name:"My Header"});
//     expect(headingElement).toBeInTheDocument();
//   });

// it('checking for heading by title', () => {
//     render(<Header />);
//     const headingElement = screen.getByTitle("cats");
//     expect(headingElement).toBeInTheDocument();
//   });

// it('checking for heading elements', () => {
//     render(<Header />);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
//   });

// it('header renders text past as prop to it', async() => {
//     render(<Header title="My Header"/>);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
//   });

//   it('header renders text past as prop to it', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });

// it('header renders text past as prop to it', () => {
//     render(<Header title="My Header"/>);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
//   });  