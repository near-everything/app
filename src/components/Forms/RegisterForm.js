import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import PhoneNumberVerification from "../Register/PhoneNumberVerification";
import PrivacyPolicy from "../Register/PrivacyPolicy";

function RegisterForm({ recaptcha, auth }) {
  const [isAgree, setIsAgree] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async () => {};

  const handleConfirmed = async () => {
    // check if user exists
    // if user doesn not exist, then create user and send to /
    // if user exsits, show error
  };

  return (
    <>
      <h1 className="mb-4 text-xl">
        register for <span className="font-semibold">everything</span>
      </h1>
      <div className="flex flex-col gap-2">
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={"First Name"}
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={"Last Name"}
        />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={"Username"}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Email"}
        />
        <PhoneNumberVerification
          recaptcha={recaptcha}
          auth={auth}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleConfirmed={handleConfirmed}
        />
        <PrivacyPolicy isAgree={isAgree} setIsAgree={setIsAgree} />
        <Button className="h-16" disabled={true} onClick={handleRegister}>
          Register
        </Button>
      </div>
    </>
  );
}

export default RegisterForm;
