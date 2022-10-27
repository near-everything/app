import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import CenteredContainer from "../../containers/CenteredContainer";

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
  return <CenteredContainer>{page}</CenteredContainer>;
};
