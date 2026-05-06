import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testing in the Age of GenAI",
  description:
    "A veteran technology executive breaks down how generative AI is reshaping software testing — not by replacing best practices, but by making them faster, smarter, and more enforceable than ever.",
  openGraph: {
    type: "article",
    title: "Testing in the Age of GenAI: Why the Pyramid Still Matters (But the Timeline Changed)",
    description:
      "A veteran technology executive breaks down how generative AI is reshaping software testing — not by replacing best practices, but by making them faster, smarter, and more enforceable than ever.",
  },
};

const reviewSteps = [
  {
    label: "Agent implementation",
    detail: "The agent writes the code based on well-specified stories.",
  },
  {
    label: "Agent code review — security pass",
    detail:
      "A separate agent reviews the code with fresh eyes, specifically looking for security vulnerabilities: injection risks, authentication gaps, insecure data handling, anything that would fail a security audit.",
  },
  {
    label: "Agent code review — quality and standards pass",
    detail:
      "Another pass checking that the code follows the conventions established in the project's Cursor and Claude markdown files. Is this consistent with how we've done everything else? Does it follow the patterns we've set? Does it read like it belongs here?",
  },
  {
    label: "Agent bug review",
    detail:
      "One more pass just looking for logical errors, edge cases, null handling, off-by-one issues. The things that don't cause test failures but show up in production at the worst possible time.",
  },
  {
    label: "Unit test validation",
    detail: "All new tests and all existing tests must pass.",
  },
  {
    label: "Agent test review",
    detail:
      "A dedicated pass reviewing the quality of the tests themselves. Not just coverage — quality. Are these tests actually verifying the right behavior? Are they testing logic or testing noise? This is where you catch the \"assertTrue(true)\" problem before it makes it into your codebase.",
  },
  {
    label: "Human final review",
    detail:
      "I go through everything one last time before merge. By this point, the obvious issues are already caught. My review is focused on whether the overall solution is right, not whether the individual lines are clean.",
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
        <p className="text-xs font-light tracking-widest uppercase text-sky-400 mb-4">Deep Dive · Testing &amp; Quality</p>
        <h1 className="text-3xl sm:text-4xl font-light text-slate-100 leading-tight tracking-wide mb-5">
          Testing in the Age of GenAI: Why the Pyramid Still Matters (But the Timeline Changed)
        </h1>
        <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
          A veteran technology executive breaks down how generative AI is reshaping software testing &mdash; not by
          replacing best practices, but by making them faster, smarter, and more enforceable than ever.
        </p>
        <p className="text-sm text-slate-400 font-light">
          By Jon Sinclair &nbsp;&middot;&nbsp; Founder, ClinRS AI &nbsp;&middot;&nbsp; Former VP of Engineering, Advarra
          &nbsp;&middot;&nbsp; <time dateTime="2026-05-06">May 6, 2026</time>
        </p>
      </header>

      {/* Body */}
      <div className="prose-article">

        {/* Section 1 */}
        <Section title="The question keeps coming up">
          <p>
            After publishing my piece on{" "}
            <Link
              href="/articles/from-skeptic-to-convert/"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors duration-200"
            >
              building ClinRS with generative AI
            </Link>
            , I heard similar questions from at least three different people in my network:{" "}
            <em>
              &ldquo;What about testing? Where do they fit with the changing model?&rdquo;
            </em>
          </p>
          <p>
            It&apos;s a fair question &mdash; and an important one. When you&apos;re moving fast with GenAI tools,
            testing is the first thing people assume you&apos;re skipping. The assumption is that speed and quality are
            in tension. In my experience, that&apos;s exactly backwards. You cannot blindly accept that code written by
            LLMs is done well and free of bugs. GenAI doesn&apos;t give you an excuse to skip testing. It gives you the
            tools to do it better and more consistently than ever before.
          </p>
          <p>Here&apos;s how I think about it.</p>
        </Section>

        <Divider />

        {/* Section 2 */}
        <Section title="Start with the plan — not the code">
          <p>
            Before any of this matters, you need a solid plan. I&apos;ll be covering this in depth in a future article,
            but the short version is this: I don&apos;t let agents run at a vague description. I (assisted by GenAI
            tools) build out architecture documents, design specs, and granular Jira stories &mdash; reviewed for
            security and threat modeling &mdash; before a single line of code gets written. The quality of what comes
            out of the AI is directly proportional to the quality of what goes in.
          </p>
          <p>
            That foundation is what makes everything else in this article work. Keep that in mind as we walk through the
            execution phase.
          </p>
        </Section>

        <Divider />

        {/* Section 3 */}
        <Section title="The testing pyramid still applies">
          <p>
            Let&apos;s be clear: the fundamentals haven&apos;t changed. The testing pyramid &mdash; lots of unit tests
            at the base, integration tests in the middle, UI tests at the top &mdash; is still the right model. GenAI
            didn&apos;t invalidate 30 years of software engineering wisdom. What it changed is the{" "}
            <em>speed</em> at which you can build and maintain tests at each level, and the <em>timing</em> of when
            certain types of tests make sense to invest in.
          </p>
        </Section>

        <Divider />

        {/* Section 4 */}
        <Section title="Unit tests: your foundation, built in from day one">
          <p>
            Unit tests are non-negotiable. They&apos;re built into the implementation process &mdash; not added
            afterward. When I&apos;m working with an agent to implement a feature, one of the standing rules in my
            workflow is that tests get written alongside the code, not as an afterthought.
          </p>
          <p>
            GenAI is genuinely good at generating unit tests. But here&apos;s the catch: it can also generate tests that{" "}
            <em>look</em>
            {" "}
            like they&apos;re testing something without actually doing so. Trivial assertions. Tests that
            pass by design rather than by verification. Coverage that checks a box without checking the logic.
          </p>
          <p>This is where the agent test review comes in &mdash; more on that shortly.</p>
        </Section>

        <Divider />

        {/* Section 5 */}
        <Section title="Integration tests and mock systems: where GenAI really shines">
          <p>
            This is the area I&apos;m most excited about, and the one that <em>should</em> change how engineering teams
            handle integration testing.
          </p>
          <p>
            Integration testing has always required access to the systems you&apos;re integrating with &mdash; or a
            high-fidelity mock of those systems. Building and maintaining those mocks used to be expensive. It took real
            engineering time to create a mock backend that accurately simulated an external system&apos;s behavior, and
            even more time to keep it up to date as that system evolved.
          </p>
          <p>GenAI has essentially solved this problem.</p>
          <p>
            If a third-party system has a public-facing API &mdash; whether documented via Swagger, OpenAPI, or any
            other public specification &mdash; tools like Cursor or Claude can access that documentation and generate a
            fully functional mock backend in a fraction of the time it used to take. The mock persists data, responds
            correctly to API calls, and gives me a realistic integration testing harness without needing access to the
            actual system.
          </p>
          <p>
            The backend of the mock doesn&apos;t need to be sophisticated. It doesn&apos;t need to replicate every
            business rule of the source system. It just needs to respond with the right shape of data at the right
            endpoints. That&apos;s something GenAI handles extremely well, especially when the API specification is
            clearly defined.
          </p>
          <PullQuote>
            This is a great place to start for engineers who want to build something useful with generative AI that is
            relatively low-risk. Mock systems use fake data, and if you miss something in a mock you will hopefully come
            across it in end-to-end testing prior to launch.
          </PullQuote>
          <p>
            The result: higher fidelity integration tests, maintained more easily, at a fraction of the cost. This is a
            genuinely transformative capability for teams building integrations &mdash; which in healthcare and life
            sciences, is almost everyone.
          </p>
        </Section>

        <Divider />

        {/* Section 6 */}
        <Section title="UI tests: wait until you're stable">
          <p>
            This is the most important timing decision in the whole pyramid, and one that trips up a lot of teams
            adopting GenAI development.
          </p>
          <p>
            When you&apos;re iterating quickly on a UI &mdash; which you will be, because that&apos;s one of the things
            GenAI makes extremely fast &mdash; your interface is a moving target. Writing comprehensive UI tests against
            a UI that&apos;s going to change significantly next week is expensive and demoralizing. You&apos;ll spend
            more time fixing tests than building features.
          </p>
          <p>
            The right approach: hold off on heavy UI test investment until you&apos;re genuinely happy with the
            interface. Once the UX stabilizes, that&apos;s when you invest in UI automation. At that point, those tests
            are valuable &mdash; they protect something you want to protect, and they won&apos;t need constant revision.
          </p>
          <p>This isn&apos;t a reason to skip UI tests. It&apos;s a reason to sequence them correctly.</p>
        </Section>

        <Divider />

        {/* Section 7 */}
        <Section title="Compliance and accessibility: bake it in, don't bolt it on">
          <p>
            There&apos;s been significant attention in the academic medical center and healthcare community around WCAG
            accessibility compliance. The rules are in place. Enforcement is coming. And for patient-facing platforms,
            accessibility isn&apos;t optional &mdash; it&apos;s a requirement.
          </p>
          <p>
            There are a number of solid libraries out there to assist teams in ensuring their applications are
            compliant. I implemented{" "}
            <a
              href="https://github.com/dequelabs/axe-core"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              axe-core
            </a>{" "}
            on the ClinRS corporate site to evaluate how well it would work as part of an automated compliance strategy.
            The short verdict: it&apos;s genuinely useful, and I&apos;d recommend it &mdash; but go in with realistic
            expectations. The tool covers a meaningful portion of WCAG criteria automatically, and having it run in your
            CI/CD pipeline means you catch a real class of problems on every commit rather than discovering them in an
            audit.
          </p>
          <p>
            What they don&apos;t do is cover everything. Automated tools are only as good as what they&apos;re designed
            to check &mdash; and experienced engineers know there&apos;s often a gap between what&apos;s technically
            flagged and what&apos;s actually the right thing to do for your users. Knowing that the automated tools have
            a ceiling, I had GenAI generate a manual review checklist to supplement them &mdash; a structured set of
            checks covering the scenarios the automated tools can&apos;t evaluate. That checklist runs after the
            automated pass and fills in the gaps.
          </p>
          <p>
            To give a tangible example, I&apos;ll point to the option <code className="text-sky-300 text-sm bg-slate-800 px-1.5 py-0.5 rounded">prefers-reduced-motion</code>. It wasn&apos;t
            flagged by axe, and correctly so &mdash; it isn&apos;t a requirement under WCAG AA compliance. But it
            appeared on the manual checklist as a best practice consideration for users with motion sensitivity settings
            enabled in their browser. Recognizing it as a simple, meaningful improvement for my site, I had GenAI
            implement the CSS changes necessary to honor that browser preference and reduce unnecessary motion on the
            site. A quick, targeted change that took minutes and made the experience meaningfully better for users who
            would never have complained, but who benefit from the consideration.
          </p>
          <PullQuote>
            Automated suites enforce the baseline continuously. A GenAI-generated manual checklist covers what
            automation can&apos;t. And human judgment &mdash; informed by domain knowledge and genuine care for the end
            user &mdash; decides what&apos;s worth acting on.
          </PullQuote>
          <p>
            GenAI makes all three layers practical. Setting up the automated suites, generating the manual checklist,
            and implementing the fixes &mdash; none of it requires the kind of time investment that used to make
            thorough accessibility work a luxury.
          </p>
        </Section>

        <Divider />

        {/* Section 8 — numbered review steps */}
        <Section title="Agent-driven code and test review: a second pair of eyes, always">
          <p>
            This is the piece that goes beyond the standard testing conversation &mdash; and it&apos;s become one of
            the most valuable parts of my workflow as a solo engineer.
          </p>
          <p>
            When you&apos;re the only human on the project, there&apos;s no code review culture. No one to catch the
            thing you missed. No senior engineer looking over your shoulder. That&apos;s a real risk, and I take it
            seriously.
          </p>
          <p>
            What I&apos;ve built instead is a layered agent review process that runs before I ever take my own pass at
            the code. Here&apos;s the order of operations:
          </p>
        </Section>

        <ol className="mb-12 space-y-4 ml-1">
          {reviewSteps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full border border-sky-700 text-sky-400 text-xs font-light flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div className="text-slate-400 font-light leading-relaxed">
                <span className="text-slate-200">{step.label}</span> &mdash; {step.detail}
              </div>
            </li>
          ))}
        </ol>

        <div className="mb-12 flex flex-col gap-4 text-slate-400 font-light leading-relaxed">
          <p>
            The economics of this are compelling. Each of these agent passes takes a few minutes. If any of them surface
            something real, that&apos;s time well spent. If they don&apos;t, you&apos;ve lost a few minutes and gained
            confidence. Iterate on which passes yield value for your specific context &mdash; and drop the ones that
            don&apos;t.
          </p>
        </div>

        <Divider />

        {/* Section 9 */}
        <Section title="Where do testers fit in?">
          <p>
            If you&apos;ve read this far and you work in testing, you might be wondering where you fit in a world where
            agents are writing tests, reviewing test quality, and flagging coverage gaps automatically.
          </p>
          <p>The answer is: in a more important role than before.</p>
          <p>
            In larger engineering organizations, a test lead isn&apos;t just someone who writes test cases. They&apos;re
            the person who understands the full picture of what&apos;s covered, where the test suite is brittle, and
            where the gaps are most likely to cause production incidents. They bring a systems-level view to quality that
            individual engineers &mdash; focused on their own features &mdash; can&apos;t always maintain.
          </p>
          <p>
            That role doesn&apos;t go away with GenAI. If anything, it becomes more critical. The agents can execute
            the testing strategy, but someone still needs to <em>own</em> it. Someone needs to evaluate bugs that slip
            through and ask: how did our tests miss this? What does that tell us about where our coverage is weak? How
            do we make the agent review prompts smarter next time?
          </p>
          <p>
            For engineers who specialize in testing, this is actually an opportunity. The repetitive, mechanical parts
            of the job get automated. What remains is the judgment work &mdash; understanding the system holistically,
            identifying the brittle seams, and continuously improving the testing infrastructure so that the agents are
            working from better inputs. That&apos;s a high-value, high-impact role in any engineering organization, and
            it&apos;s one that GenAI makes more visible, not less necessary.
          </p>
        </Section>

        <Divider />

        {/* Section 10 */}
        <Section title="The through-line">
          <p>
            What ties all of this together is the same principle from my{" "}
            <Link
              href="/articles/from-skeptic-to-convert/"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors duration-200"
            >
              first article
            </Link>
            : GenAI amplifies the engineer, it doesn&apos;t replace them. A disciplined testing approach doesn&apos;t
            become less important when you&apos;re moving fast &mdash; it becomes more important, because you&apos;re
            shipping more, faster, and the surface area for problems expands.
          </p>
          <p>
            What GenAI gives you is the ability to maintain that discipline without the overhead that used to make it
            painful. Mocks that used to take days to build. Accessibility tests that used to require external audits.
            Code reviews that used to require a second engineer. Agent test reviews that used to require a QA lead.
          </p>
          <p>All of that is now available to a team of one &mdash; or a small team that used to have to choose which corners to cut.</p>
          <p className="font-normal text-slate-200">You don&apos;t have to cut corners anymore. That&apos;s the point.</p>
        </Section>

        <Divider />

        {/* Section 11 */}
        <Section title="What's next">
          <p>
            In an upcoming article, I&apos;ll go deep on the planning and story-building process that makes all of this
            work &mdash; how I architect features, break them into security-reviewed stories, and use that structured
            input to get consistent, auditable output from the agents. If the testing process is the engine, the
            planning process is the fuel.
          </p>
        </Section>

        <Divider />

        {/* CTA Section */}
        <section className="mt-12 rounded border border-sky-900/50 bg-sky-950/20 px-8 py-10">
          <h3 className="text-xl font-light text-slate-100 tracking-wide mb-3">
            This is what ClinRS is built to do
          </h3>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            ClinRS applies an AI-first engineering philosophy to help healthcare and life sciences companies build with
            high influence and high impact &mdash; without the overhead of a traditional engineering build-out. Whether
            you need fractional CTO leadership, a technical partner for a specific build, or a strategic sounding board
            for your engineering roadmap, the model is the same: senior judgment, AI-amplified velocity,
            domain-grounded precision.
          </p>
          <p className="text-slate-400 font-light leading-relaxed mb-6">
            If you&apos;re scaling a healthcare or life sciences product and you&apos;re thinking through how to build a
            testing strategy that holds up under compliance scrutiny &mdash; let&apos;s talk.
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
