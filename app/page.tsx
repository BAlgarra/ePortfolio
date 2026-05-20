import { HeroImageRight } from "@/components/HeroImageRight/HeroImageRight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
        <HeroImageRight />

        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-10">
            <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">

              {/* Portrait */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/BrandonAlgarra_pic.png"
                  alt="Portrait"
                  width={224}
                  height={224}
                  className="h-56 w-56 rounded-2xl object-cover shadow-md"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  About Me
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  Computer Science student interested in research, software, and collaboration.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  <p>
                    I am a senior at California State University, Monterey Bay
                    pursuing a degree in Computer Science, with a strong
                    interest in interdisciplinary research, software
                    engineering, and collaborative problem-solving.
                  </p>

                  <p>
                    Early in my undergraduate career, I balanced interests
                    between biology and computer science. This experience
                    ultimately led me to fully commit to computer science while
                    maintaining my curiosity for biological applications.
                  </p>

                  <p>
                    Competitive programming through the International
                    Collegiate Programming Contest has been one of the most
                    influential experiences in my development. Working in a
                    team under time constraints taught me the importance of
                    communication, collaboration, and diverse problem-solving
                    approaches.
                  </p>

                  <p>
                    Beyond academics, I actively engage in professional and
                    research communities. Attending the Great Minds in STEM
                    Conference exposed me to a broader network of researchers
                    and professionals and reinforced the importance of
                    representation, mentorship, and communication in science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}