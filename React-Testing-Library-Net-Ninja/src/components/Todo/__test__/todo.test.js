import { render, screen,fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';
const MockTodo=()=>{
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}
const addTask=(tasks)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement=screen.getByRole("button",{name:/Add/i});
    tasks.forEach((task)=>{
        fireEvent.change(inputElement,{target:{value:task}});
        fireEvent.click(buttonElement);
    })
}
it('task list renders todo entered', () => {
  render(<MockTodo/>);
  addTask(["Go Grocery Shopping"]);
  const divElement=screen.getByText(/Go Grocery Shopping/i);
  expect(divElement).toBeInTheDocument();
});
it('task list renders todos entered', () => {
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping","Pet a cat","Make your Bed"]);
    const divElements=screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it('Task not marked completed on first render', () => {
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping"]);
    const divElement=screen.getByText("Go Grocery Shopping");
    expect(divElement).not.toHaveClass('todo-item-active');
  });  
 
  it('Task marked completed on clicking', () => {
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping"]);
    const divElement=screen.getByText("Go Grocery Shopping");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  }); 