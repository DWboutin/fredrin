import Image from "next/image";
import "./ProfileHero.scss";

export type ProfileHeroProps = {
  eyebrow: string;
  name: string;
  role: string;
  location: string;
  photoSrc: string;
  photoAlt: string;
  ctaLabel: string;
  ctaHref: string;
  cue: string;
  /** Decorative oversized figure behind the content. */
  ghost: string;
};

export function ProfileHero(props: ProfileHeroProps) {
  return (
    <header className="profile-hero">
      <div className="profile-hero__grid" aria-hidden="true" />
      <div className="profile-hero__glow" aria-hidden="true" />
      <p className="profile-hero__ghost" aria-hidden="true">
        {props.ghost}
      </p>
      <div className="profile-hero__layout">
        <div className="profile-hero__content">
          <p className="profile-hero__eyebrow">{props.eyebrow}</p>
          <h1 className="profile-hero__name">{props.name}</h1>
          <p className="profile-hero__role">{props.role}</p>
          <p className="profile-hero__location">{props.location}</p>
          <a className="profile-hero__cta" href={props.ctaHref}>
            {props.ctaLabel}
          </a>
        </div>
        <div className="profile-hero__portrait">
          <div className="profile-hero__ring" aria-hidden="true" />
          <Image
            className="profile-hero__photo"
            src={props.photoSrc}
            alt={props.photoAlt}
            width={380}
            height={380}
            priority
          />
        </div>
      </div>
      <p className="profile-hero__cue">{props.cue}</p>
    </header>
  );
}
