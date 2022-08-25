<script>
  import Header from "./lib/header.svelte";
  import Masthead from "./lib/masthead.svelte";
  import Services from "./lib/services.svelte";
</script>

<Header />
<Masthead />
<Services />

<div>
    <a class="btn" href="">Let's Work</a>
</div>

<style lang="scss">
    div {
      display: flex;
      justify-content: center;
      margin-bottom: 8rem;
    }
</style>
