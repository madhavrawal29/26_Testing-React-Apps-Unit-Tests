import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("abcd");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see' you if the button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", {
      expect: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      expect: false,
    });
    expect(outputElement).toBeNull();
  });
});
