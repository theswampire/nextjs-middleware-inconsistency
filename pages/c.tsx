import Link from "next/link";

type CProps = {
  name: string;
};
const C = ({ name }: CProps) => {
  return (
    <>
      <h1>{name}</h1>
      <Link href="/">Home</Link>
    </>
  );
};

export default C;

export function getServerSideProps(context) {
  return { props: { name: "C" } };
}
