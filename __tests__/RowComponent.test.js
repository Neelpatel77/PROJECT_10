// Import the functions from the testing-library
import { render, screen, fireEvent } from '@testing-library/react-native';

// Import the component to test
import RowComponent from "../components/RowComponent";

const mockTodo = {
  id: '1',
  name: 'Test Todo',
  isComplete: false
};

describe("RowComponent Tests", () => { 
   it("renders the todo item correctly", () => {
         // Programmatically generate the component with a mock todo item
         render(<RowComponent todo={mockTodo} onToggle={() => {}} />);
         
         // Check if the component displays the todo item name
         expect(screen.getByText('Test Todo')).toBeTruthy();
   });

   it("toggles the todo item status when the switch is clicked", () => {
         // Mock the onToggle function
         const onToggleMock = jest.fn();

         // Render the RowComponent with the mock function
         render(<RowComponent todo={mockTodo} onToggle={onToggleMock} />);

         // Find the switch and fire the value change event
         const toggle = screen.getByRole('switch');
         fireEvent(toggle, 'onValueChange', true);

         // Expect the onToggle function to have been called with the correct id
         expect(onToggleMock).toHaveBeenCalledWith(mockTodo.id);
   });
});
