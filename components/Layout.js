import { useEffect } from "react";

import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

import NProgress from "nprogress";

const Layout = ({ children, footer = true, dark = false }) => {
  const router = useRouter();

  const handleRouteChange = (url) => {
    console.log(url);
    NProgress.start();
  };

  const handleRouteComplete = () => NProgress.done();

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="bg-dark">
      <Navbar />
      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="text-white text-center bg-primary mb-3">
          <div className="container p-4">
            <h1>&copy; Jesus Vargas Porffolio</h1>
            <p>2018 - {new Date().getFullYear()}</p>
            <p>ALl rights Reserved</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
