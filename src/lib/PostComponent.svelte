<script lang="ts">
	import { goto } from '$app/navigation';

	export let post: Post;
	export let index: number;
	function formatMediaURL(id: string): string {
		return `https://firebasestorage.googleapis.com/v0/b/sports-2d6ed.appspot.com/o/${id}?alt=media&token=bd14a400-80cd-4ff9-b434-4a01d699acbe`;
	}
	function formatDate(timestamp: number) {
		return new Date(timestamp * 1000).toLocaleDateString(undefined, {
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="post" on:click={() => goto(`/post/${index}`)}>
	<div
		class="header"
		on:click={() => {
			goto(`/profile/${post.user.toLowerCase()}`);
		}}
	>
		<img src={formatMediaURL(post.profile)} alt="" class="profile" />
		<div>
			<span class="name">{post.user}</span>
			<span> · {formatDate(post.date)}</span>
		</div>
	</div>
	<div class="content">
		{#if post.title}
			<span class="title">{post.title}</span>
		{/if}
		{#if post.photoID}
			{#if post.text}
				<span class="img-text">{post.text}</span>
			{/if}
			<img src={formatMediaURL(post.photoID)} alt="" class="media" />
		{:else}
			<span>{post.text}</span>
		{/if}
	</div>
</div>

<style>
	.name + span {
		color: #666b6a;
	}
	.img-text {
		margin-top: 10px;
	}
	.name {
		font-weight: bold;
	}
	.title {
		font-weight: bold;
		display: block;
		font-size: 20px;
	}
	.post {
		margin-bottom: 20px;
		border: 1px solid #666b6a;
		border-radius: 10px;
		padding: 20px;
	}
	.content {
		margin-top: 10px;
	}
	.header {
		display: grid;
		grid-template-columns: auto 1fr;
	}
	.header > div {
		padding: 10px;
		align-self: flex-start;
	}
	.media {
		height: 400px;
		aspect-ratio: 9/16;
		object-fit: cover;
		border-radius: 10px;
		margin-top: 10px;
	}
	.profile {
		width: 50px;
		border-radius: 50%;
		aspect-ratio: 1;
		object-fit: cover;
		image-rendering: pixelated;
	}
	.title:has(+ img) {
		justify-self: left;
	}
	.title:has(+ .img-text) {
		justify-self: left;
	}
	.content:has(img) {
		display: grid;
		place-items: center;
	}
</style>
