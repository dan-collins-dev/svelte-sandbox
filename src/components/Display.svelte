<script>
    import {count} from "../store/stores"
    // import {onDestroy} from "svelte"
    // let counter;
    // const unsubscribe = count.subscribe((value) => {
    //     counter = value
    // })

    // onDestroy(unsubscribe)
</script>

<!-- <h2>Current count is {counter}</h2> -->
<h2>Current count is {$count}</h2>