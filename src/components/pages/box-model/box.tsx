import styled from "styled-components";

import type { BorderState, MarginState, PaddingState } from "@/lib/hooks/useBox";

export default function Box({
  $padding,
  $borders,
  $margins,
  $noShowMargin,
  boxId,
}: {
  $padding: PaddingState;
  $borders: BorderState;
  $margins: MarginState;
  boxId: string;
  $noShowMargin?: boolean;
}) {
  return (
    <Style.Container
      key={boxId}
      className="box"
      $padding={$padding}
      $borders={$borders}
      $margins={$margins}
      $noShowMargin={$noShowMargin}
    >
      <p className="box-p">B</p>
      <p className="box-p">0</p>
      <p className="box-p">X</p>
      <p className="box-p">.</p>
      <div className="dummy-box" />
    </Style.Container>
  );
}

const OFFSET = 2;

const getPaddingHeight = ({ all, top, bottom }: PaddingState) =>
  all || (top && bottom) ? "145px" : top || bottom ? "88px" : "40px";

const getPaddingWidth = ({ all, left, right }: PaddingState) =>
  all || (left && right) ? "240px" : left || right ? "200px" : "160px";

const getPaddingTop = ({ all, top, bottom }: PaddingState) =>
  all || (top && bottom) ? "90px" : top ? "90px" : bottom ? "137px" : "137px";

const getPaddingSide = ({ all, left }: PaddingState) => (all || left ? "40px" : "80px");

const getMarginHeight = ({ all, top, bottom }: MarginState) =>
  all || (top && bottom) ? "190px" : top || bottom ? "170px" : "147px";

const getMarginWidth = ({ all, left, right }: MarginState) =>
  all || (left && right) ? "290px" : left || right ? "320px" : "242px";

const getMarginTop = ({ all, top, bottom }: MarginState) =>
  (all || (top && bottom) ? 66 : top ? 53 : 81) + OFFSET + "px";

const getMarginSide = ({ all, right, left }: MarginState) => (all || right ? 15 : left ? 35 : 36) + OFFSET + "px";

const Style = {
  Container: styled.div<{
    $padding: PaddingState;
    $borders: BorderState;
    $margins: MarginState;
    $noShowMargin?: boolean;
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
    border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid transparent")};
    border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};

    &::after {
      height: ${({ $padding }) => getPaddingHeight($padding)};
      top: ${({ $padding }) => getPaddingTop($padding)};
      left: ${({ $padding }) => getPaddingSide($padding)};
      width: ${({ $padding }) => getPaddingWidth($padding)};
      position: absolute;
      box-sizing: content-box;
      transition: all 0.25s linear;
      content: "";
      background-color: rgb(144, 238, 144);
      border: 1px
        ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid rgba(0, 0, 0, 0.1)")};
      border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
      margin: auto;
    }

    &::before {
      content: "";
      position: absolute;
      width: ${({ $margins }) => getMarginWidth($margins)};
      height: ${({ $margins }) => getMarginHeight($margins)};
      top: ${({ $margins }) => getMarginTop($margins)};
      left: ${({ $margins }) => getMarginSide($margins)};
      transition: all 0.25s linear;
      background-color: ${({ $noShowMargin }) => (!$noShowMargin ? "rgba(255, 71, 76, 0.25)" : "rgba(255, 71, 76, 0)")};
      transition: background-color 0.25s linear;
      box-sizing: content-box;
    }

    p.box-p {
      margin: unset;
      font-weight: 600;
      font-size: 40px;
      width: 40px;
      display: grid;
      place-items: center;
      z-index: 1;
      line-height: 40px;
      transition: border 0.25s ease-in;
      border: 1px ${({ $borders }) => ($borders.show ? `${$borders.stroke} ${$borders.color}` : "solid black")};
      border-radius: ${({ $borders }) => ($borders.showCurves ? "4px" : "0px")};
      background-color: white;

      &:nth-of-type(2),
      &:nth-of-type(3),
      &:nth-of-type(4) {
        border-left: unset;
      }

      &::after {
        content: unset;
      }
    }
  `,
};
