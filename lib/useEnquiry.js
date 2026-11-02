'use client';

import { useCallback, useState } from 'react';

// Posts a form to /api/enquiry and tracks its status for the UI.
export function useEnquiry(type) {
	const [status, setStatus] = useState('idle');
	const [message, setMessage] = useState('');
	const [fieldErrors, setFieldErrors] = useState({});

	const submit = useCallback(
		async (fields) => {
			setStatus('submitting');
			setMessage('');
			setFieldErrors({});
			try {
				const res = await fetch('/api/enquiry', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ type, fields, page: window.location.pathname }),
				});
				const body = await res.json().catch(() => ({}));
				if (res.ok && body.ok) {
					setStatus('success');
					setMessage(body.message || 'Thank you!');
					return true;
				}
				setStatus('error');
				setMessage(body.error || 'Something went wrong. Please try again.');
				setFieldErrors(body.fieldErrors || {});
				return false;
			} catch {
				setStatus('error');
				setMessage('Network error. Please check your connection and try again.');
				return false;
			}
		},
		[type]
	);

	const reset = useCallback(() => {
		setStatus('idle');
		setMessage('');
		setFieldErrors({});
	}, []);

	return { status, message, fieldErrors, submit, reset, submitting: status === 'submitting' };
}

// Reads every named control in a form into a plain object.
export function formValues(form) {
	return Object.fromEntries(new FormData(form).entries());
}
