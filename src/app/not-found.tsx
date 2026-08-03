import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
      <span className="numeral text-7xl text-brass">404</span>
      <h1 className="display mt-8 text-4xl text-ink sm:text-5xl">Not on the menu</h1>
      <p className="lede mt-6 max-w-md text-stone">
        The page you were looking for isn&apos;t here. Let&apos;s get you back to something worth
        eating.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/recipes" variant="outline">
          The Recipe Archive
        </Button>
      </div>
    </div>
  );
}
