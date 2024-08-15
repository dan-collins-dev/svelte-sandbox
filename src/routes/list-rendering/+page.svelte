<script>
	const shows = ['Community', 'Avatar: The Last Airbender', 'Star Trek: Deep Space Nine'];
	const characterNames = [
		{ first: 'Jeff', last: 'Winger' },
		{ first: 'Toph', last: 'Beifong' },
		{ first: 'Benjamin', last: 'Sisko' }
	];
</script>

<h1>List Rendering</h1>

<ul>
	{#each shows as show, index}
		<li>{index + 1} - {show}</li>
	{/each}
</ul>

<ul>
	{#each characterNames as characterName, index}
		<li>{index + 1} - {characterName.first} {characterName.last}</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	li {
		background-color: rgb(204, 255, 0);
	}
	li:nth-of-type(2n) {
		background-color: cadetblue;
	}
</style>
