import Link from "next/link";
import { useRouter } from "next/router";

const Protected = () => {
  const router = useRouter();
  return (
    <>
      <h1>Protected</h1>
      <button
        // Delete "auth" cookie with an api call
        onClick={async () => {
          await fetch("/api/deletecookie");
          router.push("/");
        }}
      >
        Logout Button
      </button>
      <br />
      <Link href="/">Go Home</Link>
    </>
  );
};
export default Protected;
