'use client';

import { useQueryParam } from '../lib/useClientValue';

function useSearchQuery() {
	return useQueryParam('q').trim().slice(0, 80);
}

function matches(query, text) {
	if (!query) return true;
	const haystack = text.toLowerCase();
	return query.toLowerCase().split(/\s+/).every((word) => haystack.includes(word));
}

// Hides a blog teaser when it does not match the ?q= search term.
export function SearchFilterItem({ text, children }) {
	const query = useSearchQuery();
	if (!matches(query, text)) return null;
	return children;
}

// Shows the active search term (and an empty state) above the blog grid.
export function SearchSummary({ texts }) {
	const query = useSearchQuery();
	if (!query) return null;
	const count = texts.filter((t) => matches(query, t)).length;
	return (
		<div className="pb-[50px] flex flex-wrap items-center gap-[20px]">
			<div className="font-teko font-semibold text-[28px] uppercase">
				{count ? `${count} result${count > 1 ? 's' : ''} for "${query}"` : `No articles found for "${query}"`}
			</div>
			<a className="border-[1px] border-[#E22C32] px-[15px] py-[5px] hover:bg-[#971A1E] hover:text-white transition-colors duration-[.3s]" href="/blog">Clear search</a>
		</div>
	);
}

// Sidebar search box: a plain GET form so it also works without JavaScript.
export default function BlogSearchForm() {
	return (
		<form action="/blog" method="get" role="search" className="flex justify-between items-center gap-[10px] border-[2px] border-[#D4D4D4] border-opacity-50 h-[60px] px-[30px]">
			<input className="flex-1 min-w-0 bg-transparent focus:outline-0" type="search" name="q" placeholder="Search ..." aria-label="Search the blog" maxLength={80} required />
			<button type="submit" aria-label="Search">
				<img className="w-[25px]" src="/images/gallery/zoom-in.svg" alt="" />
			</button>
		</form>
	);
}
