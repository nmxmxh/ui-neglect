import { useReducer } from "react";

// Define types
export type BorderState = {
  show: boolean;
  showCurves: boolean;
  color: "red" | "grey" | "green";
  stroke: "solid" | "dotted" | "dashed";
};

export type PaddingState = {
  left: number;
  right: number;
  bottom: number;
  top: number;
  all: number;
};

export type MarginState = {
  left: boolean;
  right: boolean;
  bottom: boolean;
  top: boolean;
  all: boolean;
  show: boolean;
};

// Define Actions
type BorderAction =
  | { type: "TOGGLE"; key: "show" | "showCurves" }
  | { type: "CHANGE_COLOR" }
  | { type: "CHANGE_STROKE" };

type PaddingAction = { type: "TOGGLE_PADDING"; key: keyof PaddingState };
type MarginAction = { type: "TOGGLE_MARGIN"; key: keyof MarginState };

// Reducers
const borderReducer = (state: BorderState, action: BorderAction): BorderState => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: !state[action.key] };
    case "CHANGE_COLOR": {
      const colorCycle = ["red", "grey", "green"] as const;
      return { ...state, color: colorCycle[(colorCycle.indexOf(state.color) + 1) % colorCycle.length] };
    }
    case "CHANGE_STROKE": {
      const strokeCycle = ["solid", "dotted", "dashed"] as const;
      return { ...state, stroke: strokeCycle[(strokeCycle.indexOf(state.stroke) + 1) % strokeCycle.length] };
    }
    default:
      return state;
  }
};

const paddingReducer = (state: PaddingState, action: PaddingAction): PaddingState => {
  return {
    ...state,
    [action.key]: state[action.key] === 40 ? 0 : 40,
  };
};

const marginReducer = (state: MarginState, action: MarginAction): MarginState => {
  return {
    ...state,
    [action.key]: !state[action.key],
  };
};

export function useBox() {
  const [borderState, dispatchBorder] = useReducer(borderReducer, {
    show: false,
    showCurves: false,
    color: "red",
    stroke: "solid",
  });

  const [paddingState, dispatchPadding] = useReducer(paddingReducer, {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    all: 40,
  });

  const [marginState, dispatchMargin] = useReducer(marginReducer, {
    left: false,
    right: false,
    bottom: false,
    top: false,
    all: true,
    show: false,
  });

  return { borderState, dispatchBorder, paddingState, dispatchPadding, marginState, dispatchMargin };
}
