import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <Link href="/a">Go to A (SSG)</Link>
      <br />
      <Link href="/b">Go to B (SSG)</Link>
      <br />
      <Link href="/c">Go to C (SSR)</Link>
    </div>
  );
}
