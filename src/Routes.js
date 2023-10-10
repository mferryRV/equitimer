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
];

export const pathMap = routes.reduce((obj, { path, component }) => {
  obj[component] = path;
  return obj;
}, {});

console.log(pathMap);

export default routes;
