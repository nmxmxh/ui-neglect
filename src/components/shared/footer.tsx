"use client";

import Link from "next/link";
import styled from "styled-components";

export function Footer() {
  return (
    <Style.Container>
      <Link href="/">ui neglect. nobert momoh</Link>
    </Style.Container>
  );
}

const Style = {
  Container: styled.footer`
    width: var(--width);
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
  `,
};
