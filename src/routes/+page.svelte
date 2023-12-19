<script lang="ts">
	import PostComponent from '$lib/PostComponent.svelte';

	export let data;
	let posts = Object.values(data.posts);
	posts = posts.sort((a, b) => b.date - a.date);
</script>

<div id="header"><h1>My Feed</h1></div>
<button>New Post +</button>
<div class="section">
	{#each posts as post, i}
		<PostComponent {post} index={i}></PostComponent>
	{/each}
</div>

<style>
	button {
		margin: 20px;
		background-color: #e73725;
		color: white;
		border: none;
		width: calc(100% - 40px);
		border-radius: 5px;
		height: 50px;
		font-size: 20px;
		margin-bottom: 0;
        margin-top: calc(90px + 15%);
	}
	#header {
		height: 15%;
		display: grid;
		background-color: #e73725;
		color: white;
		view-transition-name: main-header;
		align-items: flex-end;
		justify-content: left;
		position: fixed;
		top: 0px;
        width:100%;
	}
	h1 {
		color: white;
		font-size: 40px;
		padding: 20px;
	}
	.section {
		padding: 20px;
        overflow: scroll;
	}
</style>
