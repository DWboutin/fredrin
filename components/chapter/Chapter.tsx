import type { ReactNode } from "react";
import "./Chapter.scss";

export type ChapterProps = {
  id: string;
  /** Decorative chapter number, for example "01". */
  index: string;
  label: string;
  title: string;
  children: ReactNode;
};

export function Chapter(props: ChapterProps) {
  const titleId = `${props.id}-title`;

  return (
    <section className="chapter" id={props.id} aria-labelledby={titleId}>
      <div className="chapter__head">
        <p className="chapter__index" aria-hidden="true">
          {props.index}
        </p>
        <p className="chapter__label">{props.label}</p>
        <h2 className="chapter__title" id={titleId}>
          {props.title}
        </h2>
      </div>
      <div className="chapter__body">{props.children}</div>
    </section>
  );
}
