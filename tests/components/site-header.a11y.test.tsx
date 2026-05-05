import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import SiteHeader from "../../components/SiteHeader";

describe("SiteHeader accessibility", () => {
  it("does not have detectable axe violations", async () => {
    const { container } = render(<SiteHeader />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
