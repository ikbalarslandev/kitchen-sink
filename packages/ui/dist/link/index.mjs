'use client'
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "../chunk-4SF65RZN.mjs";

// src/link/index.tsx
import { jsx } from "react/jsx-runtime";
function Link(_a) {
  var _b = _a, {
    children,
    href,
    newTab
  } = _b, other = __objRest(_b, [
    "children",
    "href",
    "newTab"
  ]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      href,
      rel: newTab ? "noreferrer" : void 0,
      target: newTab ? "_blank" : void 0
    }, other), {
      children
    })
  );
}
export {
  Link
};
