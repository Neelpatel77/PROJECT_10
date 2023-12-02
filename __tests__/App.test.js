import { render, screen, fireEvent } from '@testing-library/react-native'

import App from "../App"

describe("Testing the App.js screen", () => {
   it("On intial load, message shows that there are no tasks", async () => {
      render(<App />)
      const messageText = await screen.findByTestId("appJSMessageText")

      expect(messageText).toHaveTextContent("You have no tasks.")
   })

   it("After adding a task, the flatlist is updated", async () => {
      render(<App />)

      const taskInput = await screen.findByTestId("taskInputBox")
      const addButton = await screen.findByTestId("addBtn")
      const flatlist = await screen.findByTestId("taskFlatList")

      const flatlistCount = flatlist.props.data.length

      fireEvent.changeText(taskInput, "Bread")
      fireEvent.press(addButton)

      const newFlatlistCount = flatlist.props.data.length

      expect(newFlatlistCount).toBe(flatlistCount + 1)
   })
})
