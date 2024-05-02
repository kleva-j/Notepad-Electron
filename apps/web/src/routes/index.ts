// Automatically generated by declarative-routing, do NOT edit
import { z } from "zod";
import { makeRoute } from "./makeRoute";

const defaultInfo = {
  search: z.object({})
};

import * as HomeRoute from "@/app/page.info";
import * as DashboardRoute from "@/app/dashboard/page.info";
import * as DashboardHeaderRoute from "@/app/dashboard/@header/page.info";
import * as SigninRoute from "@/app/sign-in/[[...sign-in]]/page.info";
import * as SignupRoute from "@/app/sign-up/[[...sign-up]]/page.info";

export const Home = makeRoute(
  "/",
  {
    ...defaultInfo,
    ...HomeRoute.Route
  }
);
export const Dashboard = makeRoute(
  "/dashboard",
  {
    ...defaultInfo,
    ...DashboardRoute.Route
  }
);
export const DashboardHeader = makeRoute(
  "/dashboard/@header",
  {
    ...defaultInfo,
    ...DashboardHeaderRoute.Route
  }
);
export const Signin = makeRoute(
  "/sign-in/[[...sign-in]]",
  {
    ...defaultInfo,
    ...SigninRoute.Route
  }
);
export const Signup = makeRoute(
  "/sign-up/[[...sign-up]]",
  {
    ...defaultInfo,
    ...SignupRoute.Route
  }
);

