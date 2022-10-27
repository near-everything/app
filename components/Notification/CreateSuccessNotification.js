import { useRouter } from "next/router";

function CreateSuccessNotification({ type, color, href, id }) {
  const router = useRouter();
  return (
    <>
      <span>
        {type}{" "}
        <a
          type={"button"}
          onClick={() =>
            router.push(href)
          }
          className={`text-${color}-600 pointer-cursor`}
        >
          #{id}
        </a>{" "}
        successfully created.
      </span>
    </>
  );
}

export default CreateSuccessNotification;