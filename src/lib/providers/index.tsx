"use client";

import type { ReactNode } from "react";
import StyledComponentsRegistry from "./styled-registry";

function Providers({ children }: { children: ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

export default Providers;
