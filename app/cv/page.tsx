export default function CVPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Curriculum Vitae
            </h1>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              View or download my resume below.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <iframe
            src="/Brandon_Algarra_Resume.pdf"
            className="h-[900px] w-full"
          />
        </div>
      </div>
    </main>
  );
}