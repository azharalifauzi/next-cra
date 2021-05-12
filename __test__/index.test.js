import { getPage } from "next-page-tester";
import { screen } from "@testing-library/react";

describe("Home page", () => {
  it("has svg icon", async () => {
    const { render } = await getPage({
      route: "/",
    });

    render();
    expect(screen.getByTestId(/test svg/i)).toBeInTheDocument();
  });
});
