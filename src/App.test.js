import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MutationObserver from 'mutation-observer'
import { getByTestId } from "@testing-library/dom"
import {PersonalWord} from "./components/Dashboard";
import InsightCard from "./components/InsightCard";
import { results } from "./config"

global.MutationObserver = MutationObserver 

let container = null;

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
      expect(container.children[0].children[0].innerHTML).toBe("Test woord");
      expect(container.children[0].classList.toString()).toBe("camResults camRes2");
    });
    it("renders results per question", () => {
        act(() => {
            render(<InsightCard content={results[2]} answer={2} />, container)
        })
        expect(getByTestId(container, 'results-par').innerHTML).toBe('Dit antwoord laat wit brood zien. Wit brood bevat reguliere tarwe. Dit leidt tot overmatige consumptie van koolhydraten. Op hun beurt worden koolhydraten omgezet tot suikers. Teveel suikers bevorderen de gezondheid niet. Aangezien dit Nederlandse data is en Nederlanders over het algemeen veel brood eten is dit een risico factor die weer invloed kan hebben.')
    })
})
