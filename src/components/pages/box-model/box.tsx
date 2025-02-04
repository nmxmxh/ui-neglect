import styled from "styled-components";

export default function Box({
  $padding,
  $showBorders,
}: {
  $padding: {
    left: number;
    right: number;
    bottom: number;
    top: number;
    all: number;
  };
  $showBorders: boolean;
}) {
  return (
    <Style.Container className="box" $padding={$padding} $showBorders={$showBorders}>
      <p>B</p>
      <p>0</p>
      <p>X</p>
      <p>.</p>
      <div className="dummy-box" />
    </Style.Container>
  );
}

function heightBasedOnPadding(padding: { left: number; right: number; bottom: number; top: number; all: number }) {
  if (padding.all || (padding.top && padding.bottom)) return "160px";
  else if (!padding.all && (padding.top || padding.bottom)) return "95px";
  else return "40px";
}

function widthBasedOnPadding(padding: { left: number; right: number; bottom: number; top: number; all: number }) {
  if (padding.all || (padding.left && padding.right)) return "240px";
  if (padding.left || padding.right) return "200px";
  else return "160px";
}

function topBasedOnPadding(padding: { left: number; right: number; bottom: number; top: number; all: number }) {
  if (padding.all || (padding.top && padding.bottom)) return "85px";
  if (!padding.all && padding.top && !padding.bottom) return "90px";
  if (!padding.all && !padding.top && padding.bottom) return "137px";
  else return "137px";
}

function sideBasedOnPadding(padding: { left: number; right: number; bottom: number; top: number; all: number }) {
  if (padding.all || padding.right) return "40px";
  else return "80px";
}

const Style = {
  Container: styled.div<{
    $padding: {
      left: number;
      right: number;
      bottom: number;
      top: number;
      all: number;
    };
    $showBorders: boolean;
  }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position: relative;
    z-index: 10;
    width: 320px;
    height: 320px;
    transition: border 0.25s ease-in;
    border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "black")};

    &::after {
      height: ${({ $padding }) => heightBasedOnPadding($padding)};
      box-sizing: content-box;
      width: ${({ $padding }) => widthBasedOnPadding($padding)};
      position: absolute;
      top: ${({ $padding }) => topBasedOnPadding($padding)};
      left: ${({ $padding }) => sideBasedOnPadding($padding)};
      transition: all 0.25s linear;
      content: "";
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "rgba(0, 0, 0, 0.1)")};
    }

    & > p {
      margin: unset;
      font-weight: 600;
      font-size: 40px;
      width: 40px;
      display: grid;
      place-items: center;
      z-index: 1;
      line-height: 40px;
      transition: border 0.25s ease-in;
      border: 1px solid ${({ $showBorders }) => ($showBorders ? "red" : "black")};
      background-color: white;

      &:nth-of-type(2) {
        border-left: unset;
        border-right: unset;
      }
    }
  `,
};
