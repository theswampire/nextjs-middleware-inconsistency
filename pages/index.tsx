import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Link href="/protected">Go to Protected</Link>
      <br />
      <Link href="/login">Go to Login</Link>
    </div>
  );
}
