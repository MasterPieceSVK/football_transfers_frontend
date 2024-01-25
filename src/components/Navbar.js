import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-primary">
      <Link href="/" className="btn btn-ghost text-xl">
        Transfers
      </Link>
    </div>
  );
}
