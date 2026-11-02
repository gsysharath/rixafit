'use client';

import { useSyncExternalStore } from 'react';

function subscribeToHistory(callback) {
	window.addEventListener('popstate', callback);
	return () => window.removeEventListener('popstate', callback);
}

const noopSubscribe = () => () => {};

// Reads a ?query parameter on the client. Server render (and hydration) see `fallback`,
// so static pages stay cacheable and never hit a hydration mismatch.
export function useQueryParam(name, fallback = '') {
	return useSyncExternalStore(
		subscribeToHistory,
		() => new URLSearchParams(window.location.search).get(name) ?? fallback,
		() => fallback
	);
}

// Computes a browser-only value (e.g. today's local date) after hydration.
export function useClientValue(getValue, serverValue) {
	return useSyncExternalStore(noopSubscribe, getValue, () => serverValue);
}
