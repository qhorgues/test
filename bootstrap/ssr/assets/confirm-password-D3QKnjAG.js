import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./input-error-Byi2d8FG.js";
import { B as Button } from "./app-logo-icon-CoogQ1E6.js";
import { I as Input } from "./input-D9SvqnoE.js";
import { L as Label } from "./label-CDkJ2Fjm.js";
import { S as Spinner } from "./spinner-mEDEVZdr.js";
import { A as AuthLayout } from "./auth-layout-DeewP3Sy.js";
import { s as store } from "./index-DqawoI4q.js";
import { Head, Form } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "lucide-react";
import "./index-NXMefbOa.js";
function ConfirmPassword() {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Confirm your password",
      description: "This is a secure area of the application. Please confirm your password before continuing.",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Confirm password" }),
        /* @__PURE__ */ jsx(Form, { ...store.form(), resetOnSuccess: ["password"], children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                placeholder: "Password",
                autoComplete: "current-password",
                autoFocus: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(
            Button,
            {
              className: "w-full",
              disabled: processing,
              "data-test": "confirm-password-button",
              children: [
                processing && /* @__PURE__ */ jsx(Spinner, {}),
                "Confirm password"
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}
export {
  ConfirmPassword as default
};
