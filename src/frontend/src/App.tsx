import { Skeleton } from "@/components/ui/skeleton";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

// Lazy-load pages
const HomePage = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col gap-6">
      <Skeleton className="h-12 w-2/3 rounded-lg" />
      <Skeleton className="h-6 w-full rounded-lg" />
      <Skeleton className="h-6 w-4/5 rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {["sk1", "sk2", "sk3"].map((id) => (
          <Skeleton key={id} className="h-48 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <Navigate to="/" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  portfolioRoute,
  aboutRoute,
  contactRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
