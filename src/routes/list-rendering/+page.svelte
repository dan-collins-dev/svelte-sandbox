<script>
	import { base } from '$app/paths';

	const shows = ['Community', 'Avatar: The Last Airbender', 'Star Trek: Deep Space Nine'];
	const characterNames = [
		{ first: 'Jeff', last: 'Winger' },
		{ first: 'Toph', last: 'Beifong' },
		{ first: 'Benjamin', last: 'Sisko' }
	];
</script>

<a href="/">Home</a>
<h1>List Rendering</h1>

<h2>Example 1</h2>
<p>An array of shows are iterated through using an "#each items as item, index (optional)"</p>

<ul>
	{#each shows as show, index}
		<li>{index + 1} - {show}</li>
	{/each}
</ul>

<h2>Example 2</h2>
<p>An array of objects that contain the first and last name of a character on the show"</p>

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
