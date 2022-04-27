import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";

import { GithubIcon, TwitterIcon } from "../icons";
import { db, firebase } from "../app/firebase";
import Button from "../components/Button";
import Input from "../components/Input";

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
      {recaptcha && <PhoneNumberVerification recaptcha={recaptcha} />}
      <div ref={element}></div>
    </>
  );
}

function PhoneNumberVerification({ recaptcha }) {
  const [digits, setDigits] = useState("");
  const [invited, setInvited] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState("");

  const auth = getAuth(firebase);
  let navigate = useNavigate();

  const phoneNumber = `+1${digits}`;

  // Step 1 - Verify Invite
  useEffect(() => {
    if (phoneNumber.length === 12) {
      const col = collection(db, "invites");
      const ref = doc(col, phoneNumber);
      getDoc(ref).then((it) => {
        if (it.exists()) {
          setInvited(true);
        } else {
          setInvited(false);
        }
      });
    }
  }, [phoneNumber]);

  useEffect(() => {
    recaptcha.verify();
  }, [recaptcha]);

  // Step 2 - Sign in
  const signIn = async () => {
    setConfirmationResult(
      await signInWithPhoneNumber(auth, phoneNumber, recaptcha)
    );
  };

  // Step 3 - Verify SMS code
  const verifyCode = async () => {
    await confirmationResult
      .confirm(code)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        recaptcha.reset(window.recaptchaWidgetId);
        console.log(error);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Input
                type="tel"
                value={digits}
                onChange={(e) => setDigits(e.target.value)}
              />
              <Button
                className={`${!invited ? "hidden" : ""}`}
                aria-live="polite"
                onClick={signIn}
              >
                Submit
              </Button>
              {confirmationResult && (
                <>
                  <Input
                    type="number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Button
                    onClick={verifyCode}
                    aria-live="polite"
                  >
                    Verify Code
                  </Button>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Login;
