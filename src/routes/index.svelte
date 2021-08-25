<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		return {
			props: { posts: await fetchPosts() }
		};
	}
</script>

<script>
	import '../app.postcss';
	import Layout from './__layout.svelte';
	import ArticleCard from '../components/article-card.svelte';
	import { fetchPosts } from '$lib/content/posts';

	export let posts;
</script>

<svelte:head>
	<title>Anna's Take Home Test | Home</title>
</svelte:head>
<section class="text-gray-600 body-font">
	<div class="container px-5 py-6 mx-auto flex flex-wrap">
		<div class="py-4 md:py-8">
			<h1 class="font-bold text-xl">Articles</h1>
			<p>Showing {posts.length} articles..</p>
		</div>
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{#each posts as article}
				<ArticleCard articleContent={article} text={article.excerpt.rendered} preview={true} />
			{/each}
		</div>
	</div>
</section>
