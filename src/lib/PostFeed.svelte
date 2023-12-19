<script lang="ts">
	import PostComponent from './PostComponent.svelte';

	export let posts: Post[];
	function formatMediaURL(id: string): string {
		return `https://firebasestorage.googleapis.com/v0/b/sports-2d6ed.appspot.com/o/${id}?alt=media&token=bd14a400-80cd-4ff9-b434-4a01d699acbe`;
	}
	posts = posts.sort((a, b) => b.date - a.date);
	console.log(formatMediaURL('test'));
</script>

<div>
	{#each posts as post, i}
		<PostComponent {post} index={i}></PostComponent>
	{/each}
</div>
