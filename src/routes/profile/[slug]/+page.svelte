<script lang="ts">
	import PostFeed from '$lib/PostFeed.svelte';
	import TrophyRoom from '$lib/TrophyRoom.svelte';

	export let data;
	let user = data.user;
	let profileSection: string = 'posts';
</script>

<div class="container">
	<div id="header">
		<img
			src="https://firebasestorage.googleapis.com/v0/b/sports-2d6ed.appspot.com/o/{user.profileID}?alt=media&token=bd14a400-80cd-4ff9-b434-4a01d699acbe"
			alt="profile"
			id="profile"
		/>
		<div id="info">
			<h2>{user.firstName}</h2>
			<h1>{user.lastName}</h1>
		</div>
	</div>
	<div class="info">
		<div></div>
		<div id="stats">
			<span>Class:</span>
			<span>{user.class}</span>
			<span>Ht/Wt:</span>
			<span>{Math.floor(user.height / 12)}'{user.height % 12}", {user.weight} lbs</span>
		</div>
	</div>
	<div id="bio">
		{user.bio}
	</div>
	<div id="tags">
		<span class="tag">{user.sport}</span>
		{#each Object.keys(user.tags) as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
	<div id="actions">
		<button id="follow">Follow</button><button>Contact</button>
	</div>
	<div id="tabs">
		<input
			type="radio"
			name="section"
			id="posts"
			checked
			class="tab"
			value="posts"
			bind:group={profileSection}
		/><label for="posts">Posts</label><input
			type="radio"
			class="tab"
			name="section"
			id="trophy"
			value="trophy"
			bind:group={profileSection}
		/>
		<label for="trophy">Trophy Room</label>
	</div>
	<div class="section">
		{#if profileSection == 'posts'}
			<PostFeed posts={data.posts}></PostFeed>
		{:else}
			<TrophyRoom stats={user.stats} awards={user.awards}></TrophyRoom>
		{/if}
	</div>
</div>
<div id="back"><a href="/">&#10140;</a></div>

<style>
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
	#profile {
		border-radius: 50%;
		height: 100%;
		aspect-ratio: 1;
		overflow: hidden;
		object-fit: cover;
		transform: translateY(45%);
		margin-left: 20px;
	}
	#header {
		display: grid;
		grid-template-columns: auto 1fr;
		height: 15%;
		background-color: #e73725;
		color: white;
		view-transition-name: main-header;
	}
	#info {
		line-height: 1;
		display: grid;
		align-content: center;
		padding: 20px;
		font-size: 2.25cqh;
	}
	#stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 20px;
		margin-left: 20px;
	}
	#bio {
		padding: 20px;
		padding-top: 0;
		padding-bottom: 10px;
	}
	#tags {
		padding: 20px;
		padding-top: 10px;
	}
	#tabs {
		display: flex;
		margin-left: 20px;
	}
	#actions {
		display: flex;
		margin-left: 20px;
	}
	button {
		padding: 10px;
		margin: 10px;
		border-radius: 10px;
		color: #666b6a;
		border: 1px solid #666b6a;
		cursor: pointer;
	}
	#follow {
		margin: 10px 0;
		background: #e73725;
		color: white;
		border: 1px solid #e73725;
	}
	h1,
	h2 {
		text-transform: uppercase;
	}
	h2 {
		font-weight: 350;
	}
	.container {
		width: 100%;
		height: 100%;
	}
	#stats span:nth-of-type(odd) {
		text-transform: uppercase;
		font-weight: 350;
		color: #666b6a;
	}
	#stats span:nth-of-type(even) {
		font-weight: bold;
		color: #010000;
	}
	.tag {
		background-color: #e1e1e1;
		border-radius: 100px;
		padding: 8px;
		text-transform: uppercase;
		font-weight: 500;
		color: #666b6a;
		font-size: 12px;
		margin-right: 5px;
		border: 1px solid #666b6a;
	}
	.info {
		width: 100%;
		display: grid;
		grid-template-columns: 15vh 1fr;
		justify-content: end;
	}
	.tab {
		display: none;
	}
	label {
		padding: 10px 16px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: bold;
		color: #666b6a;
	}
	input[type='radio']:checked + label {
		color: #e73725;
		border-bottom: 2px solid #e73725;
	}
	.section {
		padding: 20px;
	}
</style>
