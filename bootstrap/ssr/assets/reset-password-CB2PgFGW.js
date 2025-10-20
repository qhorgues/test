import { jsxs, jsx } from "react/jsx-runtime";
import { q as queryParams, a as applyUrlDefaults } from "./index-NXMefbOa.js";
import { Head, Form } from "@inertiajs/react";
import { I as InputError } from "./input-error-Byi2d8FG.js";
import { B as Button } from "./app-logo-icon-CoogQ1E6.js";
import { I as Input } from "./input-D9SvqnoE.js";
import { L as Label } from "./label-CDkJ2Fjm.js";
import { S as Spinner } from "./spinner-mEDEVZdr.js";
import { A as AuthLayout } from "./auth-layout-DeewP3Sy.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "lucide-react";
const create = (args, options) => ({
  url: create.url(args, options),
  method: "get"
});
create.definition = {
  methods: ["get", "head"],
  url: "/reset-password/{token}"
};
create.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { token: args };
  }
  if (Array.isArray(args)) {
    args = {
      token: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    token: args.token
  };
  return create.definition.url.replace("{token}", parsedArgs.token.toString()).replace(/\/+$/, "") + queryParams(options);
};
create.get = (args, options) => ({
  url: create.url(args, options),
  method: "get"
});
create.head = (args, options) => ({
  url: create.url(args, options),
  method: "head"
});
const createForm = (args, options) => ({
  action: create.url(args, options),
  method: "get"
});
createForm.get = (args, options) => ({
  action: create.url(args, options),
  method: "get"
});
createForm.head = (args, options) => ({
  action: create.url(args, {
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
create.form = createForm;
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/reset-password"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
const NewPasswordController = { store };
function ResetPassword({ token, email }) {
  return /* @__PURE__ */ jsxs(
    AuthLayout,
    {
      title: "Reset password",
      description: "Please enter your new password below",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Reset password" }),
        /* @__PURE__ */ jsx(
          Form,
          {
            ...NewPasswordController.store.form(),
            transform: (data) => ({ ...data, token, email }),
            resetOnSuccess: ["password", "password_confirmation"],
            children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    value: email,
                    className: "mt-1 block w-full",
                    readOnly: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.email,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "password",
                    type: "password",
                    name: "password",
                    autoComplete: "new-password",
                    className: "mt-1 block w-full",
                    autoFocus: true,
                    placeholder: "Password"
                  }
                ),
                /* @__PURE__ */ jsx(InputError, { message: errors.password })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm password" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "password_confirmation",
                    type: "password",
                    name: "password_confirmation",
                    autoComplete: "new-password",
                    className: "mt-1 block w-full",
                    placeholder: "Confirm password"
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.password_confirmation,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  className: "mt-4 w-full",
                  disabled: processing,
                  "data-test": "reset-password-button",
                  children: [
                    processing && /* @__PURE__ */ jsx(Spinner, {}),
                    "Reset password"
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  ResetPassword as default
};
