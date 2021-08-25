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
	import ArticleCard from '../components/articleCard.svelte';
	import { fetchPosts } from '$lib/content/posts';

	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div class="container px-5 py-12 mx-auto ">
	<h1 class="font-bold text-2xl">Welcome to Anna Do's Take home test</h1>
	<p>Link to repo here: <a href="/link">Github repo</a></p>
</div>
<div>
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto flex flex-wrap">
			<div>
				<h2 class="font-bold text-xl">Articles</h2>
				<p>Showing {posts.length} articles..</p>
			</div>
			<div class="flex flex-wrap -m-4">
				{#each posts as article}
					<ArticleCard articleContent={article} text={article.excerpt.rendered} preview={true} />
				{/each}
			</div>
		</div>
	</section>
</div>
