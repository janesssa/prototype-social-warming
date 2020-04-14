import { createContext } from "react";

// This context will change when the handleNext() is triggered
export const ValueContext = createContext(0)
// This context will change when the person switches between answers
export const PreValueContext = createContext(0)