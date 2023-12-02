import { getTodoList, addTask, clearAll, changeStatus } from "../TodoList";

describe("Todo list operations", () => {
    it("Add function", () => {
        addTask("Do homework")
        addTask("Walk the dog")
        expect(getTodoList().length).toBe(2)
    })

    it("Delete all tasks", () => {
        addTask("Do homework")
        addTask("Walk the dog")
        clearAll()
        expect(getTodoList().length).toBe(0)
    })

    it("ChangeStatus can be used to mark a task as complete", () => {
        addTask("Do homework")
        changeStatus(0)
        expect(getTodoList()[0].isComplete).toBe(true)
    })

})