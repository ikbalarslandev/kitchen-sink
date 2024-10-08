'use client'
"use client";
import "../chunk-4SF65RZN.mjs";

// src/counter-button/index.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function CounterButton() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500
      },
      children: [
        /* @__PURE__ */ jsxs("p", { style: { margin: "0 0 1.5rem 0" }, children: [
          "This component is from",
          " ",
          /* @__PURE__ */ jsx(
            "code",
            {
              style: {
                padding: "0.2rem 0.3rem",
                background: `rgba(0,0,0,0.1)`,
                borderRadius: "0.25rem"
              },
              children: "ui"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setCount((c) => c + 1);
            },
            style: {
              background: "black",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              display: "inline-block",
              cursor: "pointer"
            },
            type: "button",
            children: [
              "Count: ",
              count
            ]
          }
        ) })
      ]
    }
  );
}
export {
  CounterButton
};
