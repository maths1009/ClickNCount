import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const App = () => (
  <>
    <Suspense>
      <TanStackRouterDevtools router={router} />
    </Suspense>
    <Toaster />
    <RouterProvider
      router={router}
      defaultErrorComponent={({ error }) => error.message}
    />
  </>
);

export default App;
