"use client";

import { ChevronLeft, ChevronRight, Search, ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SolutionIcon } from "@/components/site/solution-icons";
import { GridCard } from "@/components/ui/grid-card";
import { getWhatsAppUrl } from "@/config/contact";
import type { Solution } from "@/config/site";

const FEATURED_VIEW = "featured";
const SOLUTIONS_PER_PAGE = 4;
const groups = [
  { slug: "websites", title: "Websites", categories: ["websites"] },
  { slug: "ai-automation", title: "AI Automation", categories: ["whatsapp-automation"] },
  { slug: "custom-solutions", title: "Custom Solutions", categories: ["business-automation", "internal-systems", "custom-software"] },
] as const;

function matchesQuery(solution: Solution, query: string) {
  const value = query.toLowerCase();
  return solution.title.toLowerCase().includes(value) || solution.description.toLowerCase().includes(value) || solution.industry.toLowerCase().includes(value);
}

export function SolutionLibrary({ initialSolutions }: { initialSolutions: readonly Solution[] }) {
  const [allSolutions, setAllSolutions] = useState<readonly Solution[]>(initialSolutions);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(FEATURED_VIEW);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const cataloguePromise = useRef<Promise<readonly Solution[]> | null>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const firstCardRef = useRef<HTMLAnchorElement>(null);
  const shouldScroll = useRef(false);

  const loadCatalogue = async () => {
    if (allSolutions.length > initialSolutions.length) return allSolutions;
    if (!cataloguePromise.current) {
      setLoading(true);
      cataloguePromise.current = import("@/config/solutions").then((module) => module.solutions);
    }
    const catalogue = await cataloguePromise.current;
    setAllSolutions(catalogue);
    setLoading(false);
    return catalogue;
  };

  const writeUrl = (category: string, query: string, page: number, replace = false) => {
    const params = new URLSearchParams();
    if (category !== FEATURED_VIEW) params.set("category", category);
    if (query) params.set("query", query);
    if (page > 1) params.set("page", String(page));
    const next = `${window.location.pathname}${params.toString() ? `?${params}` : ""}`;
    window.history[replace ? "replaceState" : "pushState"](null, "", next);
  };

  useEffect(() => {
    const sync = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash.slice(1);
      const legacyCategory = hash === "whatsapp-automation" ? "ai-automation" : hash === "internal-systems" || hash === "business-automation" || hash === "custom-software" ? "custom-solutions" : hash;
      const category = params.get("category") || legacyCategory || FEATURED_VIEW;
      const validCategory = category === FEATURED_VIEW || groups.some((group) => group.slug === category) ? category : FEATURED_VIEW;
      const query = params.get("query") ?? "";
      const page = Math.max(1, Number(params.get("page") || "1"));
      setActiveCategory(validCategory);
      setSearchQuery(query);
      setCurrentPage(page);
      if (validCategory !== FEATURED_VIEW || query) void loadCatalogue();
    };
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => { window.removeEventListener("popstate", sync); window.removeEventListener("hashchange", sync); };
  // The loader is intentionally stable for this mount; it memoises the catalogue request.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredSolutions = useMemo(() => {
    const query = searchQuery.trim();
    let list = allSolutions;
    if (activeCategory === FEATURED_VIEW && !query) list = allSolutions.filter((solution) => solution.featured);
    if (activeCategory !== FEATURED_VIEW) {
      const group = groups.find((item) => item.slug === activeCategory);
      list = group ? allSolutions.filter((solution) => group.categories.includes(solution.category as never)) : [];
    }
    return query ? list.filter((solution) => matchesQuery(solution, query)) : list;
  }, [activeCategory, allSolutions, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredSolutions.length / SOLUTIONS_PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const pagedSolutions = filteredSolutions.slice((page - 1) * SOLUTIONS_PER_PAGE, page * SOLUTIONS_PER_PAGE);

  useEffect(() => {
    if (page !== currentPage) writeUrl(activeCategory, searchQuery.trim(), page, true);
  }, [page, currentPage, activeCategory, searchQuery]);

  useEffect(() => {
    if (!shouldScroll.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultsRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    window.setTimeout(() => firstCardRef.current?.focus({ preventScroll: true }), reduced ? 0 : 350);
    shouldScroll.current = false;
  }, [page]);

  const chooseCategory = async (category: string) => {
    if (category !== FEATURED_VIEW) await loadCatalogue();
    setActiveCategory(category); setCurrentPage(1); shouldScroll.current = true; writeUrl(category, searchQuery.trim(), 1);
  };
  const chooseQuery = async (query: string) => {
    setSearchQuery(query); setCurrentPage(1); shouldScroll.current = true; writeUrl(activeCategory, query.trim(), 1);
    if (query.trim()) await loadCatalogue();
  };
  const changePage = (next: number) => { shouldScroll.current = true; setCurrentPage(next); writeUrl(activeCategory, searchQuery.trim(), next); };
  const heading = searchQuery.trim() ? `${filteredSolutions.length} matching solution${filteredSolutions.length === 1 ? "" : "s"}` : activeCategory === FEATURED_VIEW ? "Featured solutions" : groups.find((group) => group.slug === activeCategory)?.title ?? "Solutions";
  const group = groups.find((item) => item.slug === activeCategory);

  return (
    <div id="solutions" className="mx-auto flex w-full max-w-[var(--page-max)] flex-col px-[var(--page-gutter)] pb-12 scroll-mt-32 md:pb-24">
      <div className="relative mx-auto mb-8 w-full max-w-2xl md:mb-10">
        <label className="sr-only" htmlFor="solution-search">Search solutions</label>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"><Search aria-hidden="true" className="text-[var(--color-muted)]" size={20} /></div>
        <input id="solution-search" aria-label="Search solutions or industries" className="w-full rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] py-4 pl-12 pr-4 font-medium text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-all duration-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]" onChange={(event) => void chooseQuery(event.target.value)} placeholder="Search a problem or industry..." type="text" value={searchQuery} />
      </div>
      <div className="relative mb-8 w-full md:mb-10">
        <div aria-label="Solution categories" className="mask-edges-x no-scrollbar flex w-full items-center gap-2 overflow-x-auto px-2 py-1 md:justify-center" role="group">
          {[{ slug: FEATURED_VIEW, title: "Featured" }, ...groups].map((item) => <button key={item.slug} type="button" aria-pressed={activeCategory === item.slug} className={`flex min-h-11 shrink-0 items-center rounded-full border px-4 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] ${activeCategory === item.slug ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]" : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)] hover:border-[var(--color-ink-2)]"}`} onClick={() => void chooseCategory(item.slug)}>{item.title}</button>)}
        </div>
      </div>
      {loading ? <p className="mb-6 text-sm text-[var(--color-muted)]" role="status">Loading more solutions…</p> : null}
      {filteredSolutions.length === 0 ? <div className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-rule)] py-16 text-center"><p className="mb-2 font-display text-[var(--text-lg)] font-semibold">No solutions found</p><p className="max-w-md text-[var(--text-sm)] text-[var(--color-muted)]">A27 can customise these ideas or build another solution around how your business works.</p></div> : <section aria-labelledby="solution-results-heading" className="scroll-mt-24 outline-none" ref={resultsRef} tabIndex={-1}><div className="mb-6 max-w-3xl md:mb-8"><div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="mb-2 font-display text-[var(--text-2xl)] font-bold" id="solution-results-heading">{heading}</h2><p className="text-sm text-[var(--color-muted)]">Showing {filteredSolutions.length} solution{filteredSolutions.length === 1 ? "" : "s"}.</p></div>{activeCategory !== FEATURED_VIEW || searchQuery ? <button className="text-link min-h-11" onClick={() => { setSearchQuery(""); setActiveCategory(FEATURED_VIEW); setCurrentPage(1); writeUrl(FEATURED_VIEW, "", 1); }} type="button">Back to all solutions</button> : null}</div>{group ? <p className="mt-2 text-[var(--text-md)] text-[var(--color-muted)]">{group.title} ideas to help your business run better.</p> : null}</div><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">{pagedSolutions.map((solution, index) => <a ref={index === 0 ? firstCardRef : undefined} className="group block h-full rounded-[var(--radius-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]" href={getWhatsAppUrl(`Hi, I'm interested in: ${solution.title}`)} key={solution.title} rel="noopener noreferrer" target="_blank"><GridCard className="h-full p-6 hover:bg-[var(--color-paper-2)] lg:p-8"><div className="flex h-full flex-col"><div className="mb-6 flex flex-wrap items-center gap-2">{solution.icons.map((icon, iconIndex) => <SolutionIcon className="ring-2 ring-[var(--color-paper)]" key={`${solution.title}-${iconIndex}`} name={icon} />)}</div><p className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-muted)]">{solution.industry}</p><h3 className="mb-3 font-display text-lg font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-[var(--color-accent)] lg:text-xl">{solution.title}</h3><p className="flex-grow text-sm leading-relaxed text-[var(--color-muted)]">{solution.description}</p><span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">Discuss this solution <ArrowUpRight aria-hidden="true" size={16} /></span></div></GridCard></a>)}</div>{totalPages > 1 ? <nav aria-label="Solution pages" className="mt-8 flex flex-wrap items-center justify-center gap-3"><button className="a27-button a27-button--secondary" disabled={page === 1 || loading} onClick={() => changePage(Math.max(1, page - 1))} type="button"><ChevronLeft aria-hidden="true" size={16} />Previous</button><p aria-live="polite" className="min-w-28 text-center text-sm text-[var(--color-muted)]">Page {page} of {totalPages}</p><button className="a27-button a27-button--secondary" disabled={page === totalPages || loading} onClick={() => changePage(Math.min(totalPages, page + 1))} type="button">Next<ChevronRight aria-hidden="true" size={16} /></button></nav> : null}<p className="mt-8 text-center text-sm text-[var(--color-muted)]">Need something different? A27 can customise these ideas or build another solution around how your business works.</p></section>}
    </div>
  );
}
