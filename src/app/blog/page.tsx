export const metadata = {
  title: "Blog",
  description: "Technical articles, tutorials, and insights on Unity, XR, and creative development.",
};

export default function Blog() {
  return (
    <div className="pt-16">
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-page">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-4xl text-t1">
            Blog
          </h1>
          <p className="mt-4 text-t2">
            Blog posts coming in 2026. Follow{' '}
            <a
              href="https://linkedin.com/in/praveenkc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>{' '}
            for updates.
          </p>
        </div>
      </section>
    </div>
  );
}
