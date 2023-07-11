import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { Toolbar } from "./index";

describe("Toolbar", () => {
  test("renders the logo text", async () => {
    const FAKE_EVENT = { name: "test event" };
    const routes = [
      {
        path: "/events",
        element: <Toolbar />,
        loader: () => FAKE_EVENT,
      },
      {
        path: "/",
        element: <Toolbar />,
        loader: () => FAKE_EVENT,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/events"],
    });

    render(<RouterProvider router={router} />);

    const logoText = await waitFor(() => screen.getByText(/Colmena/i));
    expect(logoText).toBeTruthy();

    expect(router.state.location.pathname).toBe("/events");

    logoText.click();

    await waitFor(() => screen.getByText(/Colmena/i));

    expect(router.state.location.pathname).toBe("/");
  });
});
