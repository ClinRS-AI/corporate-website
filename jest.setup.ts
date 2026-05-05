import React from "react";
import "@testing-library/jest-dom";

jest.mock("next/link", () => {
  function MockNextLink({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return React.createElement("a", { href, ...rest }, children);
  }

  MockNextLink.displayName = "MockNextLink";
  return MockNextLink;
});
