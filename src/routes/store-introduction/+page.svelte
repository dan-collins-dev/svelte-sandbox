<script>
	import AddName from '../../components/AddName.svelte';
	import Decrement from '../../components/Decrement.svelte';
	import Display from '../../components/Display.svelte';
	import DisplayArray from '../../components/DisplayArray.svelte';
	import Increment from '../../components/Increment.svelte';
	import Reset from '../../components/Reset.svelte';
</script>

<main>
	<h1>Example 1: Counter</h1>
	<p>The increment/decrement button access the store and calls the update method on count.</p>
	<p>The reset button calls the set method and you provide the appropriate value, in this case 0</p>
	<p>
		The Display component creates a local variable that subscribes to count, in this case its value.
		Because Display subscribes to the store, we also need to unsubscribe from it using the onDestroy
		hook. If we don't, memory leaks could happen if the component was constantly being created and
		deleted.
	</p>
	<p>
		A short hand to doing the above repetitively, svelte provides a special syntax of prefixing the
		store name with a dollar sign ($)
	</p>
	<Display />
	<Increment />
	<Decrement />
	<Reset />
    <hr>
    <h1>Example 2: Let's try using arrays!</h1>
    <p>This example is expanding on the simple counter concept and moving to an array of names.</p>
    <p>This example has an easier way of handling updating the store value, in this case an arry of names</p>
    <AddName />
    <DisplayArray />
</main>

<style>
</style>
