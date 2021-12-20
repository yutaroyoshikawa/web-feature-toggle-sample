import { ParamValue, Router } from "@vaadin/router";

export const router = new Router();

router.setRoutes([
  {
    path: "/",
    action: async () => {
      await import("./pages/index");
    },
    component: "page-top",
  },
  {
    path: "/_debug/features",
    action: async () => {
      await import("./pages/_debug/features");
    },
    component: "debug-features",
  },
]);

export const getUrlParams = (param: ParamValue) => {
  if (Array.isArray(param)) {
    return param[0];
  }

  return param;
};
