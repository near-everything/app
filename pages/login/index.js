import Link from "next/link";
import Layout from "../../containers/Layout";

function Login() {
  return (
    <>
      <Link className="btn normal-case" href="/api/auth/login">
        login
      </Link>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
