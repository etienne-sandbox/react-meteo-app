import { PlaceItem } from "../src/components/PlaceItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";

test("Render PlaceItem without errors", () => {
  expect(() => render(<PlaceItem name="Lyon" onClick={() => {}} />)).not.toThrow();
});

test("onClick is called when clicking title", async () => {
  const onClick = vi.fn();
  render(<PlaceItem name="Lyon" onClick={onClick} />);
  const nameItem = screen.getByText("Lyon");
  expect(nameItem).toBeInTheDocument();
  await userEvent.click(nameItem);
  expect(onClick).toHaveBeenCalled();
});
