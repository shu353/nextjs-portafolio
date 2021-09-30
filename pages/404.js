import Layout from "../components/Layout";
import Link from "next/link";
const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h4>404</h4>
      <p>
        This page does not exists. Return to
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
