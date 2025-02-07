"use client";

import styled from "styled-components";

export function Footer() {
  return (
    <Style.Container>
      <p>ui neglect. nobert momoh</p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.footer`
    width: var(--max-percentage-width);
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
};
