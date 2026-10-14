import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("admin shell", () => {
  it("renders the foundation status without implying implemented workflows", () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain("ChaseHorse Admin");
    expect(html).toContain("Approval workflows and task operations are not implemented.");
  });
});
