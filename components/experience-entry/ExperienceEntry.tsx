import type { Experience } from "@/content/resume";
import "./ExperienceEntry.scss";

export type ExperienceEntryProps = Experience;

export function ExperienceEntry(props: ExperienceEntryProps) {
  return (
    <article className="experience-entry">
      <h3 className="experience-entry__role">
        {props.role}
        {props.company && <span className="experience-entry__company"> · {props.company}</span>}
      </h3>
      <p className="experience-entry__period">{props.period}</p>
      {props.context && <p className="experience-entry__context">{props.context}</p>}
      <ul className="experience-entry__list">
        {props.highlights.map((highlight) => (
          <li className="experience-entry__item" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
