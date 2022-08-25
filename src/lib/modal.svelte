<script>
    import {iconClose} from "./icons.js";
    import {onDestroy, onMount} from "svelte";

    export let title;
    export let onClose;

    onMount(() => {
        document.querySelector("BODY").style.overflowY = "hidden";
    });

    onDestroy(() => {
        document.querySelector("BODY").style.overflowY = "";
    })

    $: if (open) {
    } else {
        document.querySelector("BODY").style.overflow = "";
    }
</script>

<div class="backdrop"></div>

<div class="modal-container">

    <div class="modal">
        <div class="header">
            <h3>{title || ""}</h3>
            <span on:click={onClose}>
                {@html iconClose}
            </span>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>

</div>

<style lang="scss">

  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    opacity: 0;
    animation: fadeIn 0.5s ease 0.05s forwards;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(8px);
    z-index: 11;
    opacity: 0;
    animation: fadeIn 0.5s ease 0.05s forwards;
  }

  .content {
    padding: 1rem;
  }

  .modal {
    min-width: 200px;
    min-height: 200px;
    max-width: 60vw;
    background-color: #250a42;
    border-radius: 20px;
    color: var(--accent-color);
    font-size: clamp(16px, 6vw, 36px);
  }

  @media screen and (max-width: 600px) {
    .modal {
      max-width: 90vw;
    }
  }

  .header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--accent-color);

    > span {
      cursor: pointer;
    }

    > h3 {
      color: #fff;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


</style>