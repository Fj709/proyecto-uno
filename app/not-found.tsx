import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh font-bold text-5xl">
      <br />
      <h2>Not Found</h2>
      <br />
      <p>Could not find requested resource</p>
      <br />
      <Link
        className="bg-sky-500/80 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
