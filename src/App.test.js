import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Dashboard, {PersonalWord} from "./components/Dashboard";

let container = null;
const results = (word, index) => {
    const className = `camResults${index === 0 ? '' : 'camRes' + (index + 1)}`
    return (
        // <div>
            <div class={className}>
                <p>{word}</p>
                <span class="line"> </span>
            </div>
        // </div>
    )
}


beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Results', () => {
    it("renders webcam words", () => {
      act(() => {
        render(<PersonalWord word="Test woord" index={1}  />, container);
      });
      console.log(container)
      expect(container.textContent).toBe("Test woord ");
      expect(container.classList).toContain("camResults camRes2");
    });
})
