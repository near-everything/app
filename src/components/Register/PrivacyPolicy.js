import { useRouter } from "next/router";
import React from "react";

function PrivacyPolicy({ isAgree, setIsAgree }) {
  const { router } = useRouter();

  return (
    <>
      <div className="flex">
        <input
          id="link-checkbox"
          type="checkbox"
          value={isAgree}
          onChange={() => setIsAgree(!isAgree)}
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="link-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <span>
            I agree with the{" "}
            <a
              type="button"
              onClick={() => router.push("/privacy-policy.html")}
              className="text-blue-600 dark:text-blue-500 hover:underline after:content-['.']"
            >
              privacy policy
            </a>
          </span>
        </label>
      </div>
    </>
  );
}

export default PrivacyPolicy;
