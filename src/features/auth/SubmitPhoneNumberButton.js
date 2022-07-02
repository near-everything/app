import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useInviteByPhoneNumber, useRequestInvite } from "./authApi";

function SubmitPhoneNumberButton({ phoneNumber, signIn }) {
  const [invited, setInvited] = useState(false);
  const {
    data: invite,
    isLoading,
    isError,
  } = useInviteByPhoneNumber(phoneNumber);
  const requestInvite = useRequestInvite(); // then force useInvite

  useEffect(() => {
    if (invite) {
      setInvited(true);
    } else {
      setInvited(false);
    }
  }, [invite]);

  return (
    <>
      {invited ? (
        <>
          <Button
            className="mx-2"
            disabled={!invite?.isApproved}
            aria-live="polite"
            onClick={signIn}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          <Button
            className="mx-2"
            aria-live="polite"
            onClick={() => requestInvite.mutate(phoneNumber)}
          >
            Request Invitation
          </Button>
        </>
      )}
    </>
  );
}

export default SubmitPhoneNumberButton;
