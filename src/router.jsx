import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy load components
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const Products = React.lazy(() => import("./pages/Product/Products"));
const ProductDetails = React.lazy(() => import("./pages/Product/ProductDetails"));
const Services = React.lazy(() => import("./pages/Service/Services"));
const IndividualServices = React.lazy(() => import("./pages/Service/IndividualServices"));
const GovernmentServices = React.lazy(() => import("./pages/Service/GovernmentServices"));
const CorporateServices = React.lazy(() => import("./pages/Service/CorporateServices"));
const Posts = React.lazy(() => import("./pages/Post/Posts"));
const PostDetail = React.lazy(() => import("./pages/Post/PostDetail"));
const ContactUs = React.lazy(() => import("./pages/Contact/ContactUs"));
const Layout = React.lazy(() => import("./components/Layout"));

// Import loader functions
import { loader as postsLoader } from "./pages/Post/Posts";
import { loader as postDetailLoader } from "./pages/Post/PostDetail";
import { productDetailsLoader } from "./pages/Product/ProductDetails"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: "products/:id",  // ✅ Corrected path (not nested)
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
          </React.Suspense>
        ),
        loader: productDetailsLoader, // ✅ Placed the loader correctly
      },
      {
        path: "services",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Services />
          </React.Suspense>
        ),
        children: [
          {
            path: "individual",
            element: (
              <React.Suspense fallback={<div>Loading...</div>}>
                <IndividualServices />
              </React.Suspense>
            ),
          },
          {
            path: "government",
            element: (
              <React.Suspense fallback={<div>Loading...</div>}>
                <GovernmentServices />
              </React.Suspense>
            ),
          },
          {
            path: "corporate",
            element: (
              <React.Suspense fallback={<div>Loading...</div>}>
                <CorporateServices />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "posts",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </React.Suspense>
        ),
        loader: postsLoader,
      },
      {
        path: "posts/:id",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <PostDetail />
          </React.Suspense>
        ),
        loader: postDetailLoader,
      },
      {
        path: "contactus",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </React.Suspense>
        ),
      },
    ],
  },
]);
