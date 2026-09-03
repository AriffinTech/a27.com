"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SolutionIcon } from "@/components/site/solution-icons";
import { GridCard } from "@/components/ui/grid-card";
import { getWhatsAppUrl } from "@/config/contact";
import { services } from "@/config/services";
import { solutions, type Solution } from "@/config/site";

const FEATURED_VIEW = "featured";
const SOLUTIONS_PER_PAGE = 6;

function matchesQuery(solution: Solution, query: string) {
  const normalizedQuery = query.toLowerCase();
  return solution.title.toLowerCase().includes(normalizedQuery)
    || solution.description.toLowerCase().includes(normalizedQuery)
    || solution.industry.toLowerCase().includes(normalizedQuery);
}

export function SolutionLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(FEATURED_VIEW);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsRef = useRef<HTMLElement>(null);
  const shouldScrollAfterPageChange = useRef(false);
  const showingSearchResults = Boolean(searchQuery.trim());

  const featuredSolutions = useMemo(() => solutions.filter((solution) => solution.featured), []);
  const matchedSolutions = useMemo(
    () => solutions.filter((solution) => matchesQuery(solution, searchQuery)),
    [searchQuery],
  );
  const displayedSolutions = useMemo(() => {
    if (showingSearchResults && activeCategory === FEATURED_VIEW) return matchedSolutions;
    if (activeCategory === FEATURED_VIEW) return featuredSolutions;
    return matchedSolutions.filter((solution) => solution.category === activeCategory);
  }, [activeCategory, featuredSolutions, matchedSolutions, showingSearchResults]);
  const totalPages = Math.max(1, Math.ceil(displayedSolutions.length / SOLUTIONS_PER_PAGE));
  const pagedSolutions = displayedSolutions.slice(
    (currentPage - 1) * SOLUTIONS_PER_PAGE,
    currentPage * SOLUTIONS_PER_PAGE,
  );

  const setCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    const nextUrl = category === FEATURED_VIEW
      ? window.location.pathname
      : `${window.location.pathname}#${category}`;
    window.history.replaceState(null, "", nextUrl);
  };

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const category = window.location.hash.slice(1);
      setActiveCategory(services.some((service) => service.slug === category) ? category : FEATURED_VIEW);
      setCurrentPage(1);
    };

    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);
    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, []);

  useEffect(() => {
    if (!shouldScrollAfterPageChange.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (resultsRef.current) {
      const headerOffset = 90; // sticky header height + spacing
      const targetY = resultsRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: reducedMotion ? "auto" : "smooth",
      });
      resultsRef.current.focus({ preventScroll: true });
    }
    shouldScrollAfterPageChange.current = false;
  }, [currentPage]);

  const changePage = (nextPage: number) => {
    shouldScrollAfterPageChange.current = true;
    setCurrentPage(nextPage);
  };

  const getWhatsAppLink = (solutionTitle: string) => getWhatsAppUrl(`Hi, I'm interested in: ${solutionTitle}`);
  const activeService = services.find((service) => service.slug === activeCategory);
  const heading = showingSearchResults
    ? `${displayedSolutions.length} matching solution${displayedSolutions.length === 1 ? "" : "s"}`
    : activeService?.title ?? "What we can build";

  return (
    <div id="solutions" className="mx-auto flex w-full max-w-[var(--page-max)] flex-col px-[var(--page-gutter)] pb-12 scroll-mt-32 md:pb-24">


      <div className="relative mx-auto mb-10 w-full max-w-2xl md:mb-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search aria-hidden="true" className="text-[var(--color-muted)]" size={20} />
        </div>
        <input
          aria-label="Search solutions or industries"
          className="w-full rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] py-4 pl-12 pr-4 font-medium text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-all duration-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          onChange={(event) => {
            setSearchQuery(event.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search a problem or industry..."
          type="text"
          value={searchQuery}
        />
      </div>

      <div className="relative mb-8 w-full md:mb-12">
        <div aria-label="Solution categories" className="mask-edges-x no-scrollbar flex w-full items-center gap-2 overflow-x-auto px-2 py-1 md:justify-center" role="group">
          <button
            aria-pressed={activeCategory === FEATURED_VIEW}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${
              activeCategory === FEATURED_VIEW
                ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-sm"
                : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)] hover:border-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)]"
            }`}
            onClick={() => setCategory(FEATURED_VIEW)}
          >
            All Featured
            <span className={`rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold transition-colors ${
              activeCategory === FEATURED_VIEW ? "bg-white/20 text-white" : "bg-[var(--color-paper-2)] text-[var(--color-muted)]"
            }`}>{featuredSolutions.length}</span>
          </button>
          {services.map((service) => {
            const count = solutions.filter((solution) => solution.category === service.slug).length;
            const isActive = activeCategory === service.slug;
            return (
              <button
                aria-pressed={isActive}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${
                  isActive
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-sm"
                    : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)] hover:border-[var(--color-ink-2)] hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)]"
                }`}
                key={service.slug}
                onClick={() => setCategory(service.slug)}
              >
                {service.title}
                <span className={`rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold transition-colors ${
                  isActive ? "bg-white/20 text-white" : "bg-[var(--color-paper-2)] text-[var(--color-muted)]"
                }`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {displayedSolutions.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-rule)] py-16 text-center md:py-24">
          <p className="mb-2 font-display text-[var(--text-lg)] font-semibold text-[var(--color-ink)]">No solutions found</p>
          <p className="max-w-md text-[var(--text-sm)] text-[var(--color-muted)]">We could not find an exact match. A27 can still build something around the way your business works.</p>
        </div>
      ) : (
        <section aria-labelledby="solution-results-heading" className="scroll-mt-24 md:scroll-mt-28 outline-none" ref={resultsRef} tabIndex={-1}>
          <div className="mb-6 max-w-3xl md:mb-8">
            <h2 className="mb-3 font-display text-[var(--text-2xl)] font-bold text-[var(--color-ink)]" id="solution-results-heading">{heading}</h2>
            {!showingSearchResults && activeService ? <p className="text-[var(--text-md)] text-[var(--color-muted)]">{activeService.summary}</p> : null}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {pagedSolutions.map((solution) => {
              const category = services.find((service) => service.slug === solution.category);
              return (
                <a
                  className="group block h-full rounded-[var(--radius-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  href={getWhatsAppLink(solution.title)}
                  key={solution.title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GridCard className="h-full p-6 hover:bg-[var(--color-paper-2)] lg:p-8">
                    <div className="flex h-full flex-col">
                      <div className="mb-6 flex flex-wrap items-center gap-2">
                        {solution.icons.map((icon, index) => <SolutionIcon className="ring-2 ring-[var(--color-paper)]" key={`${solution.title}-${index}`} name={icon} />)}
                      </div>
                      <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-muted)]">{category?.title ?? solution.industry} · {solution.industry}</p>
                      <h3 className="mb-3 font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] lg:text-xl">{solution.title}</h3>
                      <p className="flex-grow text-sm leading-relaxed text-[var(--color-muted)]">{solution.description}</p>
                    </div>
                  </GridCard>
                </a>
              );
            })}
          </div>
          {totalPages > 1 ? (
            <nav aria-label="Solution pages" className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                className="a27-button a27-button--secondary"
                disabled={currentPage === 1}
                onClick={() => changePage(Math.max(1, currentPage - 1))}
                type="button"
              >
                <ChevronLeft aria-hidden="true" size={16} />
                Previous
              </button>
              <p aria-live="polite" className="min-w-28 text-center text-[var(--text-sm)] text-[var(--color-muted)]">
                Page {currentPage} of {totalPages}
              </p>
              <button
                className="a27-button a27-button--secondary"
                disabled={currentPage === totalPages}
                onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                type="button"
              >
                Next
                <ChevronRight aria-hidden="true" size={16} />
              </button>
            </nav>
          ) : null}

        </section>
      )}
    </div>
  );
}
