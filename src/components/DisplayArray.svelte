<script>
    import {nameArray} from "../store/stores"
</script>

{#each $nameArray as name }
    <p>{name}</p>
{/each}

<style>
    p {
        background-color: rgb(29, 171, 218);
    }

    p:nth-of-type(2n) {
        background-color: rgb(233, 233, 159);
    }
</style>