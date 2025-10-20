import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(
      `./pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-D3QKnjAG.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-Dtde_l5g.js"), "./pages/auth/login.tsx": () => import("./assets/login-CLrVCuuk.js"), "./pages/auth/register.tsx": () => import("./assets/register-DKoSLqbg.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-CB2PgFGW.js"), "./pages/auth/two-factor-challenge.tsx": () => import("./assets/two-factor-challenge-Cd5rGrYC.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-BUelyIuw.js"), "./pages/dashboard.tsx": () => import("./assets/dashboard-BTDB-lGX.js"), "./pages/settings/appearance.tsx": () => import("./assets/appearance-Bbyx58sq.js"), "./pages/settings/password.tsx": () => import("./assets/password-DWVHAEoo.js"), "./pages/settings/profile.tsx": () => import("./assets/profile-BFzKMxUb.js"), "./pages/settings/two-factor.tsx": () => import("./assets/two-factor-CKeO88YH.js"), "./pages/welcome.tsx": () => import("./assets/welcome-DL1RVsPg.js") })
    ),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
