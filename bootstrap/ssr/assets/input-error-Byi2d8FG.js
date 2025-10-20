import { jsx } from "react/jsx-runtime";
import { c as cn } from "./app-logo-icon-CoogQ1E6.js";
function InputError({
  message,
  className = "",
  ...props
}) {
  return message ? /* @__PURE__ */ jsx(
    "p",
    {
      ...props,
      className: cn("text-sm text-red-600 dark:text-red-400", className),
      children: message
    }
  ) : null;
}
export {
  InputError as I
};
