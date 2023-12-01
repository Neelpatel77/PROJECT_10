// Import the functions from the testing-library
import {render, screen, fireEvent} from '@testing-library/react-native'

// Import the component to test
import RowComponent from "../components/RowComponent"

describe("Row Component test", () => { 
   it("Description of the test case should go here", () => {
         // programatically generate the component
         render(<RowComponent rowNumber={4}/>)
         // do something with the component using the "screen" variable
   })
})
