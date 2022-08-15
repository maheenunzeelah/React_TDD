import { render, screen,fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodo=jest.fn();
describe('AddInput element testing',()=>{
    it('Input placeholder testing', () => {
        render(<AddInput
             todos={[]}
             setTodos={mockSetTodo}
          />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
      });
      it('Should be able to type in input', () => {
        render(<AddInput
             todos={[]}
             setTodos={mockSetTodo}
          />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement,{target:{value:"Go Grocery Shopping"}});
        expect(inputElement.value).toBe("Go Grocery Shopping");
      });
      it('Add button should clear input', () => {
        render(<AddInput
             todos={[]}
             setTodos={mockSetTodo}
          />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement= screen.getByRole("button",{name:/Add/i});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
      });
});


