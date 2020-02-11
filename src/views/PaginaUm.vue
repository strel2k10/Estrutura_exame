<template>
    <div id="PaginaUm">
        <h1 font-size="30">♥♥♥ Su ♥♥♥</h1>
        <ComponenteUm text="Ola" link="https://www.google.com" />
        
       

        <router-view />
    </div>
</template>

<script>
    import ComponenteUm from "@/components/ComponenteUm.vue";

    export default {
        name: "Su",
        components: {
           ComponenteUm
        }
    }
</script>