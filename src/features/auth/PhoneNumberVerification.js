import { signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useCreateUser } from "./authApi";

function PhoneNumberVerification({ recaptcha, auth }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState("");
  const createUser = useCreateUser();
  const router = useRouter();

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
        createUser.mutate(result.user.uid);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        recaptcha.reset(window.recaptchaWidgetId);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6">
      <div className="flex-1 h-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl">
                login to <span className="font-semibold">everything</span>
              </h1>
              <div className="flex flex-row dark:text-black">
                <PhoneInput
                  country={"us"}
                  containerStyle={{ width: "auto" }}
                  inputStyle={{ width: "auto" }}
                  value={phoneNumber}
                  onChange={(phone) => {
                    setPhoneNumber(`+${phone}`);
                  }}
                />
                <Button
                  className="mx-2"
                  aria-live="polite"
                  onClick={signIn}
                  disabled={confirmationResult}
                >
                  &#x2192;
                </Button>
              </div>
              <br />
              <div
                className={`flex flex-row ${
                  confirmationResult ? "" : "hidden"
                }`}
              >
                <Input
                  type="text"
                  value={code}
                  placeholder="XXXXXX"
                  style={{ width: "208px" }}
                  onChange={(e) => setCode(e.target.value)}
                />
                <Button
                  className="mx-2"
                  onClick={verifyCode}
                  aria-live="polite"
                >
                  &#x2192;
                </Button>
              </div>
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    type="button"
                    onClick={() => router.push("/privacy-policy.html")}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberVerification;
