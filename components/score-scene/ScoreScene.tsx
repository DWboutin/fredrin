import type { Metric } from "@/content/resume";
import "./ScoreScene.scss";

export type ScoreSceneProps = {
  id: string;
  label: string;
  title: string;
  intro: string;
  scoreLabel: string;
  scoreFrom: number;
  scoreTo: number;
  metrics: Metric[];
};

export function ScoreScene(props: ScoreSceneProps) {
  const titleId = `${props.id}-title`;
  const scores = Array.from(
    { length: Math.max(props.scoreTo - props.scoreFrom, 0) + 1 },
    (_, step) => props.scoreFrom + step,
  );

  return (
    <section className="score-scene" id={props.id} aria-labelledby={titleId}>
      <div className="score-scene__stage">
        <div className="score-scene__dial">
          <svg className="score-scene__rings" viewBox="0 0 120 120" aria-hidden="true">
            <circle className="score-scene__ring" cx="60" cy="60" r="54" />
            <circle
              className="score-scene__ring score-scene__ring--before"
              cx="60"
              cy="60"
              r="54"
              pathLength={100}
              strokeDasharray={`${props.scoreFrom} 100`}
            />
            <circle
              className="score-scene__ring score-scene__ring--after"
              cx="60"
              cy="60"
              r="54"
              pathLength={100}
              strokeDasharray={`${props.scoreTo} 100`}
            />
          </svg>
          <p className="score-scene__score">
            <span className="score-scene__window" aria-hidden="true">
              <span className="score-scene__strip">
                {scores.map((value) => (
                  <span className="score-scene__digit" key={value}>
                    {value}
                  </span>
                ))}
              </span>
            </span>
            <span className="score-scene__caption">
              {props.scoreLabel}
              <span className="score-scene__sr">
                : from {props.scoreFrom} to {props.scoreTo}
              </span>
            </span>
          </p>
        </div>
        <div className="score-scene__story">
          <p className="score-scene__label">{props.label}</p>
          <h2 className="score-scene__title" id={titleId}>
            {props.title}
          </h2>
          <p className="score-scene__intro">{props.intro}</p>
          <dl className="score-scene__metrics">
            {props.metrics.map((metric, index) => (
              <div
                className={`score-scene__metric score-scene__metric--step-${index + 1}`}
                key={metric.label}
              >
                <dt className="score-scene__term">{metric.label}</dt>
                <dd className="score-scene__value">
                  {metric.before && metric.after && (
                    <>
                      <span className="score-scene__before">{metric.before}</span>
                      <span aria-hidden="true">→</span>
                      <span className="score-scene__sr"> to </span>
                      <span className="score-scene__after">{metric.after}</span>
                      <span className="score-scene__sr">, </span>
                    </>
                  )}
                  <span className="score-scene__change">{metric.change}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
