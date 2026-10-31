import { render, screen, waitFor } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      text: () => Promise.resolve("This is a dummy response"),
    }) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders Hello World!", () => {
    render(<Home />);

    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("displays the backend response once fetch resolves", async () => {
    render(<Home />);

    await waitFor(() =>
      expect(screen.getByText("This is a dummy response")).toBeInTheDocument()
    );

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:3008/api/home"
    );
  });
});
