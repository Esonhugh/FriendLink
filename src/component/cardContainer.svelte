<script>
    export let cards_data = [
        {
            alias: "Google",
            url: "https://google.com/ncr",
            avatar: "/favicon.png",
            remark: "Test",
        },
    ];

    import FlexCard from "./flexCard.svelte";
</script>

<div class="flexy-container">
    {#each cards_data as card}
        <FlexCard {...card}/>
    {/each}
</div>


<style>
    .flexy-container {
        display: flex;
        flex-wrap: wrap;
    }

</style>