// src/routes/blog/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async ({ params }) => {
	try {
		const postModule = await import(`../../../lib/posts/${params.slug}.md`);

		const content = postModule.default;
		const metadata = postModule.metadata as Omit<Post, 'slug'>;
		
		return {
			content,
			meta: { slug: params.slug, ...metadata }
		};
	} catch (e) {
		throw error(404, `'${params.slug}' adında bir gönderi bulunamadı.`);
	}
};