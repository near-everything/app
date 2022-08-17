import Link from "next/link";
import React, { useState } from "react";
import PhoneNumberVerification from "../Register/PhoneNumberVerification";

function LoginForm({ recaptcha, auth }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleConfirmed = async () => {
    // check if user exists
    // if user doesn not exist, then create user and show modal on / asking for more info (or skip for now)
    // if user exsits, go to /
  };

  return (
    <>
      <h1 className="mb-4 text-xl">
        login to <span className="font-semibold">everything</span>
      </h1>
      <PhoneNumberVerification
        recaptcha={recaptcha}
        auth={auth}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handleConfirmed={handleConfirmed}
      />
      <p className="mt-2">
        or{" "}
        <Link href="/register">
          <a className="cursor-pointer text-blue-500 hover:underline">
            register an account
          </a>
        </Link>
        .
      </p>
    </>
  );
}

export default LoginForm;
