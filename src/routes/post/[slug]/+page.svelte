<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	let post = data;
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

<div id="header"><h1>Post</h1></div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="post">
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
<div id="comment-box">
	<input placeholder="Add Comment" />
</div>
<div id="comments">
	{#if post.comments}
		{#each Object.keys(post.comments) as comment}
			<div class="name">{comment}</div>
			<div class="content">{post.comments[comment]}</div>
		{/each}
	{/if}
</div>

<div id="back"><a href="/">&#10140;</a></div>

<style>
	#comments {
		padding: 20px;
	}
	.name {
		font-weight: bold;
        margin-top: 20px;
	}
    .name:first-child{
        margin-top: 0;
    }
	#back {
		position: absolute;
		top: 0px;
		left: 0px;
		transform: rotate(180deg);
		color: white;
		font-size: 30px;
		padding: 10px;
	}
	#back a {
		text-decoration: none;
		color: white;
	}
	#comment-box {
		display: grid;
		place-items: center;
	}
	input {
		border: 1px solid #666b6a;
		border-radius: 50px;
		padding: 20px;
		width: calc(100% - 40px);
		outline: none;
	}
	#header {
		height: 15%;
		display: grid;
		background-color: #e73725;
		color: white;
		view-transition-name: main-header;
		align-items: flex-end;
		justify-content: left;
	}
	h1 {
		color: white;
		font-size: 40px;
		padding: 20px;
	}
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
		border-radius: 10px;
		padding: 20px;
	}
	.content {
		margin-top: 5px;
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
