import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link className="hover:underline" href="/">
        STC Zpěvníček
      </Link>
    </h2>
  );
}
