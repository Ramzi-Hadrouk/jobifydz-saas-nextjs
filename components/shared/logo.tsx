import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold text-primary">
      <span>
        <span className="text-orange-400 font-bold text-2xl">j</span>obifyDz
      </span>
    </Link>
  );
}