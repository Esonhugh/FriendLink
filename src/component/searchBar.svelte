<script>
    let filter = "";
    $: localStorage.setItem("filter",filter)
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
</script>

<div class="margins">
    <Textfield
            style="width: 100%;"
            helperLine$style="width: 100%;"
            bind:value={filter}
            label=""
    >
        <HelperText slot="helper">What you wanna find?</HelperText>
    </Textfield>
</div>

<style>
    div{
        padding: 20px;
    }
</style>

