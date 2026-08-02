import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-script text-3xl text-terracotta">oops, order&apos;s not up</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-walnut-light">
        The page you&apos;re looking for isn&apos;t on the menu. Let&apos;s get you back to
        something delicious.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Back to Home
        </Link>
        <Link
          href="/recipes"
          className="rounded-full border border-walnut/20 px-7 py-3 text-sm font-semibold text-walnut transition-colors hover:border-walnut/40 hover:bg-walnut/5"
        >
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}
