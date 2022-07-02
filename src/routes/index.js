import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Media = lazy(() => import("../features/collect/Media"));
const Category = lazy(() => import("../features/collect/Category"));
const Subcategory = lazy(() => import("../features/collect/Subcategory"));
const Attributes = lazy(() => import("../features/collect/Attributes"));
const Review = lazy(() => import("../features/collect/Review"));
const Complete = lazy(() => import("../features/collect/Complete"));
const Page404 = lazy(() => import("../pages/404"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/media",
    component: Media,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/subcategory",
    component: Subcategory,
  },
  {
    path: "/attributes",
    component: Attributes,
  },
  {
    path: "/review",
    component: Review,
  },
  {
    path: "/complete",
    component: Complete,
  },
  {
    path: "*",
    component: Page404,
  },
];

export default routes;
