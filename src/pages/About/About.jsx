// import HeroImg from "@/assets/images/hero.jpg";
import HeroImg from "@/assets/images/hero1.jpeg";
import logo from "@/assets/logo.svg";
import Meteors from "@/components/ui/meteors";


export default function About() {
  return (
    <>
          
      <section id="about" className="relative py-16 md:py-32 text-white bg-[#04081A] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <Meteors number={30} />
          </div>
        <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer · Designer · Builder
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Zohaib Aslam"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m <span className="font-semibold">Zohaib Aslam</span> — a
                passionate JavaScript developer focused on building clean,
                scalable, and user-friendly web applications. I enjoy crafting
                thoughtful interfaces and writing code that’s easy to maintain
                and extend.
              </p>

              <p className="text-white">
                I work primarily with the MERN stack and modern frontend tools
                like React and Next.js. Alongside frontend development, I’m
                actively strengthening my backend skills to design complete,
                production-ready systems.
              </p>

              <p className="text-white">
                I love experimenting, learning new technologies, and turning
                ideas into real products. My goal is to grow as a full-stack
                developer while contributing meaningful projects to the
                developer community.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-blue-400/60 pl-4">
                  <p className="text-white">
                    “I believe great software is built at the intersection of
                    clean design, solid architecture, and continuous learning.
                    I’m always pushing myself to improve — one project at a
                    time.”
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    {/* <cite className="block font-medium text-white">
                      Zohaib Aslam
                    </cite> */}

                    {/* BIGGER LOGO */}
                    <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0">
                      <img
                        src={logo}
                        alt="Zohaib Logo"
                        className="absolute inset-0 h-full w-full object-contain scale-[1.4]"
                      />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
