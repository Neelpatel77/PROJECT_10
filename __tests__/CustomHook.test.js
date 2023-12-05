import { renderHook, act } from "@testing-library/react-native";

import useCustomHook from "../useCustomHook";

describe("useCustomHook tests", () => {
  it("Can set the initial value of the custom hook's state variable", () => {
    const initialState = false;
    // render the hook
    const { result } = renderHook(useCustomHook, {
      initialProps: initialState,
    });
    // do something
    expect(result.current[0]).toBe(initialState);
  });

  it("The toggle function updates the state variable", () => {
    // Arrange
    const initialState = true;
    const { result } = renderHook(useCustomHook, {
      initialProps: initialState,
    });

    // Act
    act(() => {
      result.current[1](); // Call the toggle function
    });

    // Assert
    expect(result.current[0]).toBe(!initialState);
  });
});
