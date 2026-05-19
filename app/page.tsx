import { HeroImageRight } from "@/components/HeroImageRight/HeroImageRight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black sm:items-start">
        <HeroImageRight/>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          About Me
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          I am a senior at California State University, Monterey Bay (CSUMB) pursuing a degree in Computer Science, with a strong interest in interdisciplinary research, software engineering, and collaborative problem-solving. My academic journey has been shaped by both exploration and determination.
Early in my undergraduate career, I navigated uncertainty while balancing interests and between biology and computer science. This experience ultimately led me to fully commit to computer science, while still maintaining my curiosity for biological applications. Rather than seeing this transition as a setback, I used it as motivation to strengthen my technical foundation through independent learning, hands-on projects, and participation in technical competitions.
One of the most influential experiences in my development has been competitive programming through the International Collegiate Programming Contest (ICPC). Working in a team environment under time constraints taught me the importance of communication, collaboration, and diverse problem-solving approaches. These experiences reinforced my belief that innovation is strongest when individuals bring different perspectives together.
Beyond academics, I try to actively engage in professional and research communities. Attending the Great Minds in STEM Conference exposed me to a broader network of researchers and professionals, highlighting the importance of representation, mentorship, and communication in science. These experiences continue to shape how I approach both learning and contributing to the field.

        </div>
      </main>
    </div>
  );
}
