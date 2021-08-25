<script>
	import Nav from '../components/nav.svelte';
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-col md:flex-row p-5 items-center justify-between">
		<div class="ml-3 text-xl title-font font-medium text-gray-900 mb-4">Anna's take home test</div>
		<Nav />
	</div>
</header>

<!-- Page content -->
<a name="top" />
<div class="lg:px-16">
	<slot />
	<a
		href="#top"
		class="text-indigo-500 inline-flex items-center hover:bg-indigo-500 hover:text-white"
		>^ Back to top</a
	>
</div>
