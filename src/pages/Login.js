import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { firebase } from "../app/firebase";
import PhoneNumberVerification from "../features/auth/PhoneNumberVerification";

function Login() {
  const [recaptcha, setRecaptcha] = useState(null);
  const element = useRef(null);
  const auth = getAuth(firebase);

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
      {recaptcha && (
        <PhoneNumberVerification recaptcha={recaptcha} auth={auth} />
      )}
      <div ref={element}></div>
    </>
  );
}

export default Login;
