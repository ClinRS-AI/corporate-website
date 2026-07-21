import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Is Not the Documentation",
  description:
    "A veteran technology executive on why letting the code speak for itself falls short, and how Spec Driven Development with Spec Kit is filling the gap on real projects.",
  openGraph: {
    type: "article",
    title: "Code Is Not the Documentation",
    description:
      "A veteran technology executive on why letting the code speak for itself falls short, and how Spec Driven Development with Spec Kit is filling the gap on real projects.",
  },
};

const audiences = [
  {
    label: "Engineers",
    detail:
      "coming onto a project need to get up to speed quickly. They need to understand the structure, the decisions that were made, and where things live.",
  },
  {
    label: "Support teams and end users",
    detail: "need to understand what a feature is supposed to do without wading through technical implementation details.",
  },
  {
    label: "Auditors",
    detail: "in a regulated environment need documentation in a specific format that maps cleanly to compliance requirements.",
  },
  {
    label: "Agents",
    detail:
      "would be aided by context about the project, but also about a specific feature. Focused documentation means they don't have to read an entire project, saving time and money.",
  },
];

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/articles/"
          className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to articles
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b border-slate-800 pb-10">
        <p className="text-xs font-light tracking-widest uppercase text-sky-400 mb-4">
          Deep Dive · Documentation &amp; AI-First Engineering
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-slate-100 leading-tight tracking-wide mb-5">
          Code Is Not the Documentation
        </h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
          Why &ldquo;the code is the documentation&rdquo; falls apart once a project has any history &mdash; and how
          Spec Driven Development is helping close the gap without slowing anything down.
        </p>
        <p className="text-sm text-slate-400 font-light">
          By Jon Sinclair &nbsp;&middot;&nbsp; Founder, ClinRS AI &nbsp;&middot;&nbsp; Former VP of Engineering, Advarra
          &nbsp;&middot;&nbsp; <time dateTime="2026-07-21">July 21, 2026</time>
        </p>
      </header>

      {/* Body */}
      <div className="prose-article">

        {/* Section 1 */}
        <Section title="The code knows best">
          <p>
            A few weeks ago I was having a healthy debate with a CTO friend of mine over a couple beers about code
            documentation. He was arguing that there is no need to maintain any separate documentation for your code
            now that coding agents are so good at generating the documentation on the fly. The code is the most
            accurate representation of what your system does. Everything else is just an approximation of it. Why
            waste time writing a bunch of documentation that is immediately out of date?
          </p>
          <p>It was a reasonable argument. I couldn&apos;t dismiss it outright. But something about it didn&apos;t sit right with me. 
            I found myself thinking about it for a few days and going back and forth in my head about whether I agree or not.
          </p>
          <p>
            The problem I kept coming back to is that code tells you what it does, not what it was supposed to do.
            Those two things aren&apos;t always the same. That&apos;s the real rub. If the code is wrong, and you have
            nothing else to reference, you might not even know it&apos;s wrong.
          </p>
          <p>
            Not long after that conversation I came across an article in the TLDR newsletter about spec driven
            development and a tool called{" "}
            <a
              href="https://github.com/github/spec-kit"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spec Kit
            </a>
            . It sounded intriguing, so I checked out the project on GitHub, and decided to try it on a couple of
            projects I was already working on. I found it very useful, so I thought I would share it, and more
            importantly, I&apos;m wondering if others are landing in the same place, or if you&apos;ve found something
            different.
          </p>
        </Section>

        <Divider />

        {/* Section 2 */}
        <Section title="The problem with letting the code speak for itself">
          <p>
            It is certainly an appealing argument to not have to write down what you intended to code and simply
            build fast and move onto the next feature, but will that really work in the long run?
          </p>
          <p>
            The most obvious problem that comes to mind is that code is sometimes just wrong. Bugs exist. And you
            don&apos;t want your documentation to canonize a bug as intended behavior. If the only record of what a
            feature is supposed to do is what the code currently does, you&apos;ve lost the ability to distinguish
            between a bug and a feature.
          </p>
          <p>
            It gets more complicated as projects grow and time passes. The original intent behind a decision gets
            further and further away from anyone who can speak to it. The subject matter experts who were in the room
            when a feature was designed move on, and what&apos;s left is the implementation without the reasoning
            behind it. The same problem exists when there is a gap between what was originally designed and what
            actually got built. How many times have we as engineers built out an MVP to meet a deadline fully
            intending to come back to improve a feature, never to return again? Too many times I&apos;d wager.
          </p>
          <p>
            I saw this play out regularly leading engineering teams. The support team would come to engineering and
            ask what a particular feature was supposed to do, and we&apos;d look at the code and give them the most
            honest answer we could.
          </p>
          <PullQuote>
            &ldquo;This is what it does, but don&apos;t ask me what it&apos;s supposed to do.&rdquo;
          </PullQuote>
          <p>
            There was more than one time where we&apos;d find UI elements that weren&apos;t wired up to anything at
            all. Sometimes that would mean a feature had been stubbed out and never intended to be
            released, but it could have just as easily been stripped away at some point by mistake. Sometimes we
            could find record of what happened in the git repo, but even that has its limitations in an old enough
            codebase.
          </p>
        </Section>

        <Divider />

        {/* Section 3 */}
        <Section title="What I found instead">
          <p>
            If the code isn&apos;t enough, then what other options are there? In traditional engineering teams
            we&apos;d build out requirements and design documents ahead of writing any code, but with the speed that
            code can be written now with generative AI, that doesn&apos;t seem like the right approach anymore. This was on my mind when I
            saw the article about Spec Kit and Spec Driven Development in the TLDR newsletter. I decided to put it
            into practice with a couple of the projects I&apos;ve been working on. After working with it for several
            weeks and sharing it with a few colleagues, I&apos;ve found it very useful and the response from others
            seeing the result has been really positive. Here&apos;s what it actually looks like in practice.
          </p>
          <p>
            It&apos;s a relatively simple install catered to whatever agent / IDE you&apos;re using. I&apos;ve been
            using Claude in VS Code, which was simple to get going. Once installed, the first thing Spec Kit has you
            do is write a project constitution. This is a high level document that captures the core tenets of what
            you&apos;re building. It covers the non-negotiable, guiding principles of a project that should never be
            violated regardless of what feature you&apos;re working on. For anyone building in a regulated space,
            this is where things like HIPAA requirements or security constraints around PHI live. Every feature you
            build after that gets checked against the constitution automatically. If any of you have ever had a
            requirements checklist that you ran against your Jira Epics or Stories, this is something you can bake
            right in at the top level.
          </p>
          <p>
            From there, the workflow follows a clear progression. You describe what you&apos;re intending to
            implement and Spec Kit generates a spec markdown file. This file will be familiar to anyone that&apos;s
            had a well structured requirements document. I found the default structure solid, but you can also
            update the format to whatever suits your teams&apos; needs.
          </p>
          <p>
            Once the spec is in place you generate a plan, which is also a markdown file. That&apos;s where the
            implementation details live, including user stories and functional requirements. Those of you that have
            a design document process, this will look familiar. It covers big picture changes for exactly
            what&apos;s going to change in the code and how. The next step takes the plan.md and breaks it down even
            further into tasks, which are the specific actions that need to happen to get the feature built.
          </p>
          <p>
            At each of those steps (spec, plan, tasks) there&apos;s a natural pause to review what the generative AI
            has put together before moving forward. This helps find gaps or areas that need clarification before the
            code is implemented, just to keep everything on the rails and headed in the right direction.
          </p>
          <p>
            The implementation phase then works through those tasks, which keeps things organized and makes it easy
            to see where you are at any point. And all of this documentation, the constitution, the spec, the plan,
            and the tasks, lives right in the codebase. No external systems, no separate documentation platform. You
            could very easily adapt this to work with a Jira flow, but I&apos;ve found it useful to have it all
            together and not have to leave the codebase for my own development.
          </p>
        </Section>

        <Divider />

        {/* Section 4 */}
        <Section title="Why it works well with generative AI">
          <p>
            After using Spec Kit on a couple of projects I started adapting it to better fit how I actually work. The
            default structure for features as you build them is chronological. That&apos;s useful if you ever need to
            reimplement something from exactly as you described it originally, but it has a limitation. If you go
            back and change something you built three features ago, the chronological record doesn&apos;t reflect the
            current state of the application. It reflects the history of how you got there. To know how a feature
            works, I don&apos;t want to have to read each spec to see if it changed over time. And if I ever wanted to
            rebuild an application, I wouldn&apos;t want to reimplement features that I then later changed. I only
            want to know about or re-implement the &ldquo;final product.&rdquo;
          </p>
          <p>So I started thinking about the audience for the project documentation. Who needs to read it and what they need to get out of it. I landed on four audiences.</p>

          <ul className="flex flex-col gap-4 mb-4">
            {audiences.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5" aria-hidden="true" />
                <p className="text-slate-400 font-light leading-relaxed">
                  <span className="text-slate-200">{item.label}</span> {item.detail}
                </p>
              </li>
            ))}
          </ul>

          <p>
            What I&apos;ve done in one of my most recent projects is adapt Spec Kit to produce documentation for each
            of those audiences as part of the stepwise process for each feature. Rather than maintaining four
            separate documentation streams after the fact, it gets generated as part of the build.
          </p>
          <PullQuote>
            The feature isn&apos;t done until the documentation for all four audiences exists.
          </PullQuote>
          <p>
            I&apos;ve added extensions to Spec Kit that are then included in the polish phase at the end of the
            feature&apos;s development to ensure that the documentation is up-to-date prior to it being marked as
            complete. This helps keep everything documented well without adding much burden at all to the process. I
            simply review the documentation changes along with other changes in my final pull request to make sure
            they&apos;re solid. AI is handling all the heavy lifting and I&apos;m just (once again) keeping it on the
            rails and moving in the right direction.
          </p>
        </Section>

        <Divider />

        {/* Section 5 */}
        <Section title="What I'm still figuring out">
          <p>
            To be clear, I&apos;m still figuring all of this out with Spec Kit. So please take this with a grain of salt. I like what I&apos;m seeing so far and
            it seems to be working well, but I haven&apos;t put it to the commercial test yet. The first audit I go
            through using this approach is going to be very telling. Is the documentation actually up to snuff or
            not? Same goes for the engineering side. As soon as another engineer comes onto a project, will the
            documentation be useful to them, or will they just ignore it and read through the code anyway? And the
            user facing documentation needs to be validated by actual users. All of it still needs to be proven out
            in the real world.
          </p>
          <p>
            I would genuinely love to hear from people who think this
            is useful&hellip; or not. I&apos;m thick skinned after a couple of decades working with prickly engineers.
            You know who you are. 🙂
          </p>
          <p>
            One of the projects I implemented Spec Kit on is available on a{" "}
            <a
              href="https://github.com/ClinRS-AI/mock-health-system"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              public GitHub repository
            </a>{" "}
            if anyone wants to take a look. It doesn&apos;t have the audience specific extensions in it yet, but if
            there&apos;s interest I&apos;m happy to add those. Let me know!
          </p>
          <p>
            I&apos;m curious to hear whether people think this approach makes sense, whether it would hold up under
            real scrutiny, and what you&apos;re doing about documentation in your own generative AI development work.
            The conversation is more useful than the article. Please feel free to message me on LinkedIn or email me
            directly. I love engaging with people about technology and AI topics.
          </p>
        </Section>

        <Divider />

        {/* CTA Section */}
        <section className="mt-12 rounded border border-sky-900/50 bg-sky-950/20 px-8 py-10">
          <h3 className="text-xl font-light text-slate-100 tracking-wide mb-3">
            This is what ClinRS AI is built to do
          </h3>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            ClinRS AI applies an AI-first engineering philosophy to help healthcare and life sciences companies build with
            high influence and high impact &mdash; without the overhead of a traditional engineering build-out. Whether
            you need fractional CTO leadership, a technical partner for a specific build, or a strategic sounding board
            for your engineering roadmap, the model is the same: senior judgment, AI-amplified velocity,
            domain-grounded precision.
          </p>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            If that sounds like what your organization needs...
          </p>
          <a
            href="mailto:info@clinrs.ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-sky-500 text-sky-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-colors duration-200 font-light text-sm"
          >
            Let&apos;s talk &rarr;
          </a>
        </section>

      </div>
    </article>
  );
}

/* ─── Small layout helpers ──────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-light text-slate-100 tracking-wide mb-5">{title}</h2>
      <div className="flex flex-col gap-4 text-slate-400 font-light leading-relaxed">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-800" />;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-5 border-l-2 border-sky-500 text-slate-300 font-light leading-relaxed italic text-base sm:text-lg">
      {children}
    </blockquote>
  );
}
