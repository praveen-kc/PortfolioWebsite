import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <div className="font-[family-name:var(--font-display)] font-extrabold text-[120px] md:text-[140px] leading-none bg-gradient-to-br from-primary via-xr-purple to-primary bg-clip-text text-transparent">
          404
        </div>

        <h1 className="mt-4 font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl text-t1">
          Page not found
        </h1>

        <p className="mt-3 text-t2 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-7 font-[family-name:var(--font-body)] font-medium text-base bg-primary text-white rounded-lg hover:brightness-110 active:scale-95 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
