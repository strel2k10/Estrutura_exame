<template>
    <div>
        <a id="button1" target="_blank" v-bind:href="link">{{text}}</a>

    </div>
</template>

<script>
// ESTE COMPONENTE TEM PROPS, SE N FOR PRECISO, APAGAR OS PROPS :)
    export default {
        name: "ComponenteUm",
        props: ["text", "link"]
    };
</script>