<script>
    import {nameArray} from "../store/stores"
    let name = ""
    const addName = () => {
        $nameArray = [...$nameArray, name]
        name = ""
    }
</script>

<div>
    <input type="text" bind:value={name}>
    <button on:click={addName}>Add Name</button>
</div>