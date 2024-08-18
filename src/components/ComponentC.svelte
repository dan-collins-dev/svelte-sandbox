<script>
    import {getContext} from "svelte"

    const userName = getContext("username-context");
</script>

<h4>Component C printing {userName}</h4>