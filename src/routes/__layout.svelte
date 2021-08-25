<script>
    import Nav from "../components/nav.svelte";
</script>
<header class="text-gray-600 body-font">
	<div class="container mx-auto flex p-5 items-center">
		<div class="ml-3 text-xl title-font font-medium text-gray-900 mb-4">
			Anna's take home test
		</div>
		<Nav />
	</div>
</header>

<!-- Page content -->
<div class="px-16">
	<slot />
</div>