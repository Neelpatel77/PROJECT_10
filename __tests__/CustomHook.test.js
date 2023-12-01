import { renderHook} from "@testing-library/react-native";

import useCustomHook from "../useCustomHook";

describe("useCustomHook tests", () => {
   it("the state variable is initially set to a value", ()=> {
       // render the hook
       const result = renderHook(useCustomHook, {initialProps:"hello world!"})
       // debug
       console.log(result)
       // do something
   })
})
