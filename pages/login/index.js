import Layout from "../../containers/Layout";

function Login() {
  return (
    <>
      <a className="btn normal-case" href="/api/auth/login">
        login
      </a>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
