import { signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SubmitPhoneNumberButton from "./SubmitPhoneNumberButton";

function PhoneNumberVerification({ recaptcha, auth }) {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    recaptcha.verify();
  }, [recaptcha]);

  const signIn = async () => {
    setConfirmationResult(
      await signInWithPhoneNumber(auth, phoneNumber, recaptcha)
    );
  };

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
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <div className="flex flex-row">
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={(phone) => {
                    setPhoneNumber(phone);
                  }}
                />
              </div>
              <br />
              <SubmitPhoneNumberButton
                phoneNumber={phoneNumber}
                signIn={signIn}
              />
              <br />
              {confirmationResult && (
                <div className="flex flex-row">
                  <Input
                    type="text"
                    value={code}
                    placeholder="XXXXXX"
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Button
                    className="mx-2"
                    onClick={verifyCode}
                    aria-live="polite"
                  >
                    Verify
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberVerification;
