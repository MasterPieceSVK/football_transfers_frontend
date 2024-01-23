import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center w-screen h-16">
        <Link href="/all" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
}
