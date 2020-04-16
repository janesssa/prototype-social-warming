import { createContext } from "react";

// This context will change when the handleNext() is triggered
export const ValueContext = createContext({ value: 0, categories: {} })
// This context will change when the person switches between answers
export const PreValueContext = createContext({ value: 0, category: '' })