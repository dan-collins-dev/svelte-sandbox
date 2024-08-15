<script>
    let count = 0

    const handleClick = (e, stepSize) => {
        count += stepSize;
        // console.log(e);
    }
</script>


<h1>Event Handling</h1>
<h2>Counter Button</h2>
<p>
    Button is clicked and the count increases. The event directive syntax is "on:click" followed by 
    the assigned event handler in curlybraces
</p>
<section>
    <button on:click={() => { count +=1}}>Count: {count}</button>
    <!-- <button on:click={handleClick}>Count: {count}</button> -->
    <button on:click={(event) => handleClick(event, 5)}>Count: {count}</button>
    <button on:click={(event) => handleClick(event, 10)}>Count: {count}</button>
</section>

