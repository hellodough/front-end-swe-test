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
	import { base } from '$app/paths';
	import { fetchPost } from '$lib/content/post';
	import ArticleCard from '../../components/article-card.svelte';
	import BackArrowIcon from '../../components/icons/back-arrow.svelte';

	export let article;
</script>

<svelte:head>
	<title>{article.title.rendered}</title>
</svelte:head>
<div>
	<a href="/" class="text-indigo-500">
		<div class="flex gap-x-1">
			<span class="w-4"><BackArrowIcon /></span> <span>Go back</span>
		</div>
	</a>
	<ArticleCard articleContent={article} text={article.content.rendered} preview={false} />
</div>
