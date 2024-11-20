<script lang="ts">
	import type { TextProps } from '$lib/interface/shared.interface';

	let { value, variant, className }: TextProps = $props();

	const variantStyles = {
		header: 'text-[28px] font-bold',
		title: 'text-[23px] font-bold',
		headline: 'text-[20px] font-semibold',
		body: 'text-[15px] font-medium',
		caution: 'text-[13px] font-medium',
		description: 'text-[11px] font-medium',
		button: 'text-[14px] font-normal'
	};
</script>

<span class={`${variantStyles[variant]} ${className}`}>
	{value}
</span>
