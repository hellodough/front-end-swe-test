<script>
	export let articleContent;
	export let text;
	export let preview;
</script>

<div class="p-0 md:p-4 h-200">
	<div
		class="border-2 rounded-lg border-gray-200 border-opacity-50 p-4 md:p-8 min-h-full shadow-sm"
	>
		<article role="contentinfo" aria-label="article">
			<header>
				<h2 class="text-gray-900 text-lg title-font font-medium mb-3">
					{#if preview}
						<!-- header links to page with the whole article if it's an excerpt -->
						<a
							href={`/article/${articleContent.id}`}
							class="mt-3 text-indigo-500 inline-flex items-center hover:bg-indigo-500 hover:text-white"
						>
							{@html articleContent.title.rendered}
						</a>
					{:else}
						{@html articleContent.title.rendered}
					{/if}
				</h2>
				<div class="text-sm">Published on {articleContent.date}</div>
				<div class="text-sm">
					Edited on {articleContent.modifiedDate}
				</div>
			</header>
			<p class="leading-relaxed text-base">{@html text}</p>
		</article>
	</div>
</div>
