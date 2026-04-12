import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-muted mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-orange hover:underline font-semibold">
        &larr; Back to Home
      </Link>
    </div>
  );
}
