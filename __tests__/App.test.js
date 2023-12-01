// Import the functions from the testing-library
import {render, screen, fireEvent} from '@testing-library/react-native'

// Import the component to test
import App from "../App"

describe("App.js Tests", () => { 
   it("Description of the test case should go here", () => {
        // programatically generate the component
        render(<App/>)
        // do something with the component using the "screen" variable
   })
})
