import { getApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import "react-phone-input-2/lib/style.css";
import LoginForm from "../../components/Forms/LoginForm";
import CenteredContainer from "../../containers/CenteredContainer";

function Login() {
  const [recaptcha, setRecaptcha] = useState(null);
  const element = useRef(null);
  const auth = getAuth(getApp());

  if (process.env.NODE_ENV !== "production") {
    auth.settings.appVerificationDisabledForTesting = true;
  }

  useEffect(() => {
    if (!recaptcha) {
      const verifier = new RecaptchaVerifier(
        element.current,
        {
          size: "invisible",
        },
        auth
      );
      verifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
      setRecaptcha(verifier);
    }
  }, [recaptcha, auth]);

  return (
    <>
      {recaptcha && <LoginForm recaptcha={recaptcha} auth={auth} />}
      <div ref={element}></div>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <CenteredContainer>{page}</CenteredContainer>;
};
