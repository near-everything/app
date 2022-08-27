import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

function Logout({ children }) {
  const auth = getAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("successfully signed out");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className="" onClick={handleSignOut}>
      {children}
    </button>
  );
}

export default Logout;
