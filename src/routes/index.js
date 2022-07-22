import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const CollectMain = lazy(() => import("../pages/Collect/CollectMain"));
const CollectReview = lazy(() => import("../pages/Collect/CollectReview"));
const CollectComplete = lazy(() => import("../pages/Collect/CollectComplete"));
const Item = lazy(() => import("../pages/Item"));
const Error = lazy(() => import("../pages/Collect/Error"));
const Page404 = lazy(() => import("../pages/404"));

const RequestMain = lazy(() => import("../pages/Request/RequestMain"));
// const ReviewRequest = lazy(() => import("../features/request/pages/Review"));

const OrganizeMain = lazy(() => import("../pages/Organize/OrganizeMain"));
const ProfileMain = lazy(() => import("../pages/Profile/ProfileMain"));

export const collectRoutes = [
  {
    path: "/",
    component: CollectMain,
  },
  {
    path: "/review",
    component: CollectReview,
  },
  {
    path: "/complete",
    component: CollectComplete,
  },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "*",
    component: Page404,
  },
];

export const requestRoutes = [
  {
    path: "/",
    component: RequestMain,
  },
  // {
  //   path: "/review",
  //   component: ReviewRequest,
  // },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "*",
    component: Page404,
  },
];

export const organizeRoutes = [
  {
    path: "/",
    component: OrganizeMain,
  },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "/item/:itemId",
    component: Item,
  },
  {
    path: "*",
    component: Page404,
  },
];

export const profileRoutes = [
  {
    path: "/",
    component: ProfileMain,
  },
  {
    path: "/error",
    component: Error,
  },
  {
    path: "*",
    component: Page404,
  },
];
