import { Chapter } from "@/components/chapter/Chapter";
import { ExperienceEntry } from "@/components/experience-entry/ExperienceEntry";
import { ProfileHero } from "@/components/profile-hero/ProfileHero";
import { ScoreScene } from "@/components/score-scene/ScoreScene";
import {
  contactLinks,
  education,
  experiences,
  metrics,
  profile,
  projects,
  score,
  skillGroups,
  stats,
  summary,
} from "@/content/resume";
import "./page.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__progress" aria-hidden="true" />
      <ProfileHero
        eyebrow="About me"
        name={profile.name}
        role={profile.role}
        location={profile.location}
        photoSrc={profile.photo}
        photoAlt={profile.photoAlt}
        ctaLabel="Get in touch"
        ctaHref="#contact"
        cue="Scroll to read the story"
        ghost={String(score.to)}
      />
      <main>
        <Chapter id="summary" index="01" label="Summary" title="Fifteen years on the web. Ten of them in React.">
          <div className="home__prose">
            {summary.map((paragraph) => (
              <p className="home__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="home__stats">
            {stats.map((stat) => (
              <div className="home__stat" key={stat.label}>
                <dt className="home__stat-label">{stat.label}</dt>
                <dd className="home__stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Chapter>

        <ScoreScene
          id="proof"
          label="The proof"
          title="From 88 to a perfect 100."
          intro="A full performance overhaul of a production Web3 marketplace at Always Geeky Games. Keep scrolling to watch the numbers move."
          scoreLabel={score.label}
          scoreFrom={score.from}
          scoreTo={score.to}
          metrics={metrics}
        />

        <Chapter id="experience" index="02" label="Experience" title="Where the work happened.">
          {experiences.map((experience) => (
            <ExperienceEntry key={experience.role + experience.period} {...experience} />
          ))}
        </Chapter>

        <Chapter id="skills" index="03" label="Core skills" title="The toolbox.">
          <dl className="home__skills">
            {skillGroups.map((group) => (
              <div className="home__skill-group" key={group.name}>
                <dt className="home__skill-name">{group.name}</dt>
                <dd>
                  <ul className="home__chips">
                    {group.skills.map((skill) => (
                      <li className="home__chip" key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Chapter>

        <Chapter
          id="projects"
          index="04"
          label="AI engineering & independent projects"
          title="Building with agents."
        >
          <ul className="home__projects">
            {projects.map((project) => (
              <li className="home__project" key={project}>
                {project}
              </li>
            ))}
          </ul>
        </Chapter>

        <Chapter id="education" index="05" label="Education & languages" title="Where it started.">
          <dl className="home__education">
            {education.map((entry) => (
              <div className="home__school" key={entry.name}>
                <dt className="home__school-name">{entry.name}</dt>
                <dd className="home__school-detail">{entry.detail}</dd>
              </div>
            ))}
          </dl>
        </Chapter>
      </main>

      <footer className="home__footer" id="contact">
        <h2 className="home__footer-title">Let&apos;s talk.</h2>
        <p className="home__footer-text">
          {profile.name} · {profile.location}
        </p>
        <ul className="home__links">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a className="home__link" href={link.href}>
                <span className="home__link-label">{link.label}</span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
