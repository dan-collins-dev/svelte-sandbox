<script>
	// Example 1
	let firstName = 'Dan';
	let lastName = 'Collins';
	$: fullName = `${firstName} ${lastName}`;

    $: console.log(`Fullname is ${firstName} ${lastName}`)

	$: totalHealth = monsters.reduce((total, curr) => (total = total + curr.health), 0);
	// Example 2
	let monsters = [
		{
			name: 'Goblin',
			health: 3,
			drops: [
				{
					gold: 5,
					xp: 20
				}
			]
		},
		{
			name: 'Slime',
			health: 1,
			drops: [
				{
					gold: 1,
					xp: 5
				}
			]
		},
		{
			name: 'Goblin Boss',
			health: 10,
			drops: [
				{
					gold: 10,
					xp: 40
				}
			]
		}
	];
</script>

<h1>Reactivity</h1>
<h2>Example 1</h2>

<section>
	<p>
		Adds to declared variables, firstName and lastName, set to my name. Second occurance of name is
		a reactive declaration
	</p>
</section>

<section class="example-one">
	<p>{firstName} {lastName}</p>
	<p>{fullName}</p>
</section>

<h2>Example 2</h2>

<section class="example-two">
	{#each monsters as monster}
		<div class="info-card">
			<p>Name: {monster.name}</p>
			<p>Health: {monster.health}</p>
			<div class="drops">
				<!-- {#each monster.drops as drop}
					<p>Gold: {drop.gold}</p>
					<p>XP: {drop.xp}</p>
				{/each} -->
			</div>
		</div>
	{/each}

	<p>Monster HP Combined: {totalHealth}</p>
    <button on:click={() => (monsters =[...monsters, {name: "Behemoth", health: 9999, drops: {gold: 10000, xp: 20000}}])}>Add a Monster</button>
</section>

<style>
	.info-card {
		background-color: bisque;
	}

	.drops {
		background-color: chocolate;
		color: white;
	}
</style>
