<script>
    export let articleContent;
    export let text;
    export let preview;
</script>

<div class="p-4 lg:w-1/2 md:w-full">
    <div class="border-2 rounded-lg border-gray-200 border-opacity-50 p-8">
        <h3 class="text-gray-900 text-lg title-font font-medium mb-3">
            {@html articleContent.title.rendered}
        </h3>
        <div class="text-sm">Published on {articleContent.date}</div>
        <div class="text-sm">
            Edited on {articleContent.modifiedDate}
        </div>
        <p class="leading-relaxed text-base">{@html text}</p>
        {#if preview}
            <a
                href={`/article/${articleContent.id}`}
                class="mt-3 text-indigo-500 inline-flex items-center">Click to read more -></a
            >
        {/if}
    </div>
</div>