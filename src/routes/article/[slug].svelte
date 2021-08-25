<script context="module">
	
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const id = page.params.slug;
		return {
			props: {
				article: await fetchPost(id)
			}
		};
	}
</script>

<script>
	import { fetchPost } from '$lib/content/post';
	import ArticleCard from '../../components/articleCard.svelte';
	export let article;
</script>

<svelte:head>
	<title>slug page</title>
</svelte:head>
<div>
	Testing this page works
	<ArticleCard articleContent={article} text={article.content.rendered} preview={false} />
</div>
