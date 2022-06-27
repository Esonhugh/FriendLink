<script>
    import Card,{
        PrimaryAction
    } from '@smui/card';
    export let alias = "Google Service"
    export let url = "https://google.com/ncr";
    export let avatar = "/re.ico";
    export let remark = "Test";
    let other_attributes = $$props;
    import {
        Image,
        ImageAspectContainer
    } from '@smui/image-list';
</script>

<div class="flexy-element mdc-elevation--z10 padded">
    <Card>
        <PrimaryAction on:click={()=>window.open(url,"_blank")}>
            <div class="padded">
                <ImageAspectContainer style="border-color: black">
                    <Image
                            src="{avatar}"
                            alt="Image-{alias}"
                    />
                </ImageAspectContainer>
                <h3>{alias}</h3>
                <pre style="color: black">{remark}</pre>
            </div>
        </PrimaryAction>
    </Card>
</div>


<style>
    h3 {
        text-align: center;
    }
    .flexy-element {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 0;
    }
    .padded {
        margin: auto;
        padding: 10px;
    }
</style>