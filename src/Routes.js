const routes = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/flow/team/",
    component: "Team",
  },
  {
    path: "/flow/duration",
    component: "Duration",
  },
  {
    path: "/timer",
    component: "Timer",
  },
  {
    path: "/results",
    component: "Results",
  },
];

export const pathMap = routes.reduce((obj, { path, component }) => {
  obj[component] = path;
  return obj;
}, {});

export default routes;
