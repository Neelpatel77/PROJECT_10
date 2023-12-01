import { todoList, add } from "../TodoList";

describe("Todo list operations", ()=>{
    it("Add function", ()=>{   
        add("Do homework")
        add("Walk the dog")     
        expect(todoList.length).toBe(2)
    })
})