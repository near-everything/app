import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

import { useClient } from "../context/DatabaseContext";
import { GithubIcon, TwitterIcon } from "../icons";

function Login() {
  const [recaptcha, setRecaptcha] = useState(null);
  const element = useRef(null);
  const firebase = useClient();
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

      verifier.verify().then(() => setRecaptcha(verifier));
    }
  });

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

  const firebase = useClient();
  const auth = getAuth(firebase);
  const firestore = getFirestore(firebase);

  const phoneNumber = `+1${digits}`;

  // Step 1 - Verify Invite
  useEffect(() => {
    if (phoneNumber.length === 12) {
      const col = collection(firestore, "invites");
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

  // Step 2 - Sign in
  const signIn = async () => {
    setConfirmationResult(
      await signInWithPhoneNumber(auth, phoneNumber, recaptcha)
    );
  };

  // Step 3 - Verify SMS code
  const verifyCode = async () => {
    const result = await confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log("loser")
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
              <input
                className="inputField"
                type="tel"
                value={digits}
                onChange={(e) => setDigits(e.target.value)}
              />
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                  !invited ? "hidden" : ""
                }`}
                aria-live="polite"
                onClick={signIn}
              >
                Submit
              </button>
              {invited ? (
                <p className="success">You are one of the cool kids! 👋</p>
              ) : (
                <p className="danger">This phone number is not cool 😞</p>
              )}

              {confirmationResult && (
                <>
                  <input
                    className="inputField"
                    type="number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <button
                    onClick={verifyCode}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    aria-live="polite"
                  >
                    Verify Code
                  </button>
                </>
              )}
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Login;