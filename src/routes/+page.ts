
import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const markdownFiles = import.meta.glob('/src/lib/posts/*.md');

    const posts: Post[] = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, resolver]) => {

            const { metadata } = (await resolver()) as { metadata: Omit<Post, 'slug'> };

            const slug = path.split('/').pop()?.slice(0, -3) ?? 'default-slug';
            
            return {
                slug,
                ...metadata
            };
        })
    );
    
    return {
        posts
    };
};