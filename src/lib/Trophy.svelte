<script lang="ts">
	export let award: Award;
	let color = getColor(award.level);
	function getColor(level: string) {
		switch (level) {
			case 'gold':
				return '#daa520';
			case 'silver':
				return '#cfcfcf';
			case 'bronze':
				return '#692f08';
		}
	}
</script>

<div class="container">
	<div class="medal" style="--color:{color}"></div>
	<div class="info">
		<span class="quantity">{award.quantity}×</span>
		<span>{award.title}</span>
	</div>
</div>

<style>
	.container {
		border: 1px solid #666b6a;
		border-radius: 10px;
		padding: 20px;
		display: grid;
        grid-template-columns: auto 1fr;
        place-items: center;
        margin-bottom: 20px;;
	}
	.medal {
		border-radius: 50%;
		height: 50px;
		aspect-ratio: 1;
		background-color: var(--color);
	}
    .info{
        justify-self: left;
        padding-left: 20px;
        font-size: 20px;
    }
    .quantity + span{
        font-weight: bold;
    }
</style>
