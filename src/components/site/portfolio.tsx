import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { caseStudies, isPublishedCaseStudy } from "@/config/case-studies";

import styles from "./portfolio.module.css";

export function Portfolio() {
  const publishedCaseStudies = caseStudies.filter(isPublishedCaseStudy);

  return (
    <div className={styles.caseStudies} id="work">
      {publishedCaseStudies.map((caseStudy) => (
        <article className={styles.caseStudy} id={caseStudy.slug} key={caseStudy.slug}>
          <div className={styles.caseStudy__copy}>
            <p className={styles.caseStudy__category}>{caseStudy.category}</p>
            <h2>{caseStudy.title}</h2>
            <p className={styles.caseStudy__summary}>{caseStudy.summary}</p>
            <ul className={styles.caseStudy__deliverables} aria-label={`${caseStudy.title} included work`}>
              {caseStudy.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
            </ul>
            {caseStudy.liveUrl ? (
              <a className={styles.caseStudy__link} href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit live site <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : null}
          </div>
          <figure className={styles.caseStudy__media}>
            <Image
              alt={caseStudy.image.alt}
              height={caseStudy.image.height}
              loading="lazy"
              sizes="(max-width: 960px) calc(100vw - 2rem), 56vw"
              src={caseStudy.image.src}
              width={caseStudy.image.width}
            />
          </figure>
        </article>
      ))}
    </div>
  );
}
