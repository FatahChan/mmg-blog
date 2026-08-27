import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  variant?: "default" | "pear" | "cyan";
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  variant = "default",
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const cardClass =
    variant === "pear"
      ? "hum-card hum-card--pear"
      : variant === "cyan"
        ? "hum-card hum-card--cyan"
        : "hum-card";

  const titleClassName =
    "text-lg font-bold text-skin-base decoration-dashed hover:underline";

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: titleClassName,
  };

  return (
    <li className="my-4 list-none">
      <a href={href} className={`block ${cardClass} no-underline`}>
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p className="mt-2 text-skin-base opacity-90">{description}</p>
      </a>
    </li>
  );
}
