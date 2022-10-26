import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <h1>Login</h1>
      <button
        // Set the "auth" cookie with an api call
        onClick={async () => {
          await fetch("/api/setcookie");
          router.push("/protected");

          // Workaround to display the right page
          //router.reload()
        }}
      >
        Login Button
      </button>
      <br />
      <Link href="/">Go Home</Link>
    </>
  );
};
export default Login;
