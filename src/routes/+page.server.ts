// src/routes/+page.server.ts
import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${env.NASA_APOD_API_KEY}`
		);
		const data = await response.json();
		return {
			data
		};
	} catch (error) {
		console.error('Failed to fetch APOD:', error);
		return {
			data: null
		};
	}
};
