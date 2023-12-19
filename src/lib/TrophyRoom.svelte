<script lang="ts">
	import Trophy from "./Trophy.svelte";

	export let stats: Stats;
    export let awards: Awards;

    let awardList = Object.values(awards);
</script>

<div id="stats">
	<span>PPG</span><span>APG</span><span>RPG</span><span>BPG</span><span
		>{stats.points / stats.games}</span
	><span>{stats.assists / stats.games}</span><span>{stats.rebounds / stats.games}</span><span
		>{stats.blocks / stats.games}</span
	>
</div>
<div class="trophies">{#each awardList as award}
		<Trophy {award}></Trophy>

	{/each}</div>
	

<style>
    .trophies{
        margin-top:20px;
    }
	#stats {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		place-items: center;
	}
	#stats span {
		font-size: 40px;
        font-weight: 600;
	}
	#stats span:nth-child(-n + 4) {
		font-weight: bold;
		font-size: 16px;
        color:#666b6a;
	}
</style>
