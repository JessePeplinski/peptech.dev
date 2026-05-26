import Image from "next/image";
import Link from "next/link";
import { Radio } from "lucide-react";
import {
  activeStreamProjects,
  siteLinks,
  streamIdeas,
  streamNotes,
} from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="px-6 pb-12 pt-16 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <Image
            src="/images/headshot.png"
            alt="Jesse Peplinski"
            width={160}
            height={160}
            priority
            className="mb-6 h-32 w-32 rounded-full border-2 border-border object-cover"
          />
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="block md:inline">
              <span className="gradient-text">Jesse</span>.
            </span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-muted-strong md:text-2xl">
            I build <span className="gradient-text">AI products in public</span>{" "}
            live on Twitch.
          </p>

          <div className="mb-6">
            <a
              href={siteLinks.twitch}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient"
            >
              Watch on Twitch
              <Radio className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            About Me
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-strong">
            <p>
              I&apos;m a software engineer and founder/operator based in
              Syracuse, NY. I have spent 8+ years shipping production software,
              and I like building things where the useful part is visible fast.
            </p>
            <p>
              This website is where I keep the builder side: live streams,
              active projects, notes, and the messy parts of figuring things
              out.
            </p>
            <p>
              I stream because it keeps the work honest. If I can explain what
              I am building while I am building it, the scope gets clearer and
              the product gets sharper.
            </p>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-muted-strong">
            If you came here looking for my personal website, visit{" "}
            <a
              href={siteLinks.personal}
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline transition-all hover:brightness-125"
            >
              jessepeplinski.com
            </a>
            . If you came here for my business website, visit{" "}
            <a
              href={siteLinks.pepTechStudios}
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline transition-all hover:brightness-125"
            >
              peptechstudios.com
            </a>
            .
          </p>
        </div>
      </section>

      <section id="channel" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            What This Channel Is For
          </h2>
          <ul className="space-y-3 text-lg leading-relaxed text-muted-strong">
            <li>
              <span className="font-semibold text-foreground">
                Build real products in public
              </span>{" "}
              instead of talking around the work.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Show the AI-assisted engineering loop
              </span>{" "}
              with real constraints, testing, and cleanup.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Ship one meaningful thing per stream
              </span>{" "}
              even if the final answer is smaller than the first idea.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Create a practical room for builders
              </span>{" "}
              to compare workflows, ask concrete questions, and learn together.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Active Stream Projects
            </h2>
          </div>

          <div className="divide-y divide-border">
            {activeStreamProjects.map((project) => (
              <article key={project.name} className="py-8 first:pt-0 last:pb-0">
                <h3 className="mb-2 text-xl font-semibold">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-orange underline transition-all hover:brightness-125"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="mb-3 leading-relaxed text-muted-strong">
                  {project.summary}
                  {project.collaborator ? (
                    <>
                      {" "}
                      Building this one with{" "}
                      <a
                        href={project.collaborator.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-orange underline transition-all hover:brightness-125"
                      >
                        {project.collaborator.name}
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stream-notes" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold md:text-3xl">Stream Notes</h2>
          </div>

          <div className="divide-y divide-border">
            {streamNotes.map((note) => (
              <article key={note.date} className="py-8 first:pt-0 last:pb-0">
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {note.date}
                </h3>
                <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-strong">
                  {note.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ideas" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Stream Ideas
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-lg leading-relaxed text-muted-strong">
            {streamIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="merch" className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Merch
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-strong">
            This is still a maybe. I am keeping the page simple for now: a
            place to collect a few stream-native ideas without pretending there
            is a store yet.
          </p>
          <Link
            href="/merch"
            className="text-sm font-medium text-brand-orange underline transition-all hover:brightness-125"
          >
            View placeholder merch ideas
          </Link>
        </div>
      </section>
    </div>
  );
}
