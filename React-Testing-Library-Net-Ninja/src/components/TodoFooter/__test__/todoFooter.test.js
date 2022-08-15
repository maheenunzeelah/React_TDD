import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';
const MockTodoFooter=({numberOfIncompleteTasks})=>{
  return(
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )
}
describe("testing todo footer",()=>{
  
  it('should render corrent amount of todo tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
    const paraElement = screen.getByText(/5 tasks left/i);
    expect(paraElement).toBeInTheDocument();
  });
  
  it('should render task when number of inclomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toBeVisible();
  });
}) 

// it('should render task when number of inclomplete tasks is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement).not.toBeVisible();
// });

// it('should render task when number of inclomplete tasks is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paraElement = screen.getByTestId("task-id");
//   expect(paraElement).toHaveTextContent("1 task left");
// });
// it('should render task when number of inclomplete tasks is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement).toContainHTML("p")
// });
// it('should render task when number of inclomplete tasks is one', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//   const paraElement = screen.getByText(/1 task left/i);
//   expect(paraElement.textContent).toBe("1 task left")
// });