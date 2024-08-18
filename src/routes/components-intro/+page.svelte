<script>
	import { setContext } from 'svelte';
	import ComponentA from '../../components/ComponentA.svelte';
	import Greet from '../../components/Greet.svelte';
	const name = 'Dan';
	const gold = 400;

	const monster = {
		name: 'Goblin',
		gold: 5
	};

	// Example 2
	const userName = 'Dan';
    setContext("username-context", userName)
</script>

<h1>Introduction to Components</h1>
<h2>Example 1</h2>

<Greet />
<Greet name="Jeff Winger" />
<Greet {name} {gold} />
<Greet {name} {gold} />
<Greet name={monster.name} gold={monster.gold} />
<Greet {...monster} />

<h2>Example 2</h2>
<p>
	Context provides a way to pass data through the component tree without having to pass down props
	manually at each level.
</p>
<p>Printing from Top Level: Username is {userName}</p>
<ComponentA />
