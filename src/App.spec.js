/**
 * @jest-environment jsdom
 */

import App from "./App.svelte"
import { render, screen } from "@testing-library/svelte";

it("has Hello header", () =>{
	render(App);
	const header = screen.getAllByText("Hello word!");
	expect(header).toBeTruthy()
})