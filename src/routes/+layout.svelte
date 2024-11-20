<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.css';
	let { children } = $props();

	import Footer from '../layout/footer/Footer.svelte';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<div class="flex min-h-screen items-center justify-center bg-[gray]">
		<div
			class="flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-white shadow-lg"
		>
			<main class="scrollbar-hide flex-grow overflow-y-auto">
				<div class="p-4 pb-20">
					{@render children()}
				</div>
			</main>

			<Footer />
		</div>
	</div>
</QueryClientProvider>
