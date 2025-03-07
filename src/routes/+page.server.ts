// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(
			'https://api.nasa.gov/planetary/apod?api_key=F4u0jBIbzVmzNX8zGwGsHVZLyjaOW8NSg3HArCYf'
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
