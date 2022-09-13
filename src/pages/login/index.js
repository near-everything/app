import "react-phone-input-2/lib/style.css";
import CenteredContainer from "../../containers/CenteredContainer";

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
  return <CenteredContainer>{page}</CenteredContainer>;
};
