<script>
    let hidden = false;

    let lastScrollTop = 0;


    function handleScroll(e) {
        let st = document.querySelector("BODY").scrollTop;
        if (st > lastScrollTop){
            hidden = true;
        } else {
            hidden = false;
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

</script>

<svelte:body on:scroll={handleScroll} />

<header>
    <img src="/loader-purple.svg" alt="" />
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    padding: 1rem 2rem;
    transition: box-shadow 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.05s, background-color 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0.05s, margin-top 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
    color: var(--accent-color);
    margin-top: -6rem;
    animation: fadeIn 1s ease 3.2s forwards;
    background-color: rgba(10, 10, 15, 0.96);

    > img {
      max-height: 100%;
    }

    &.is--hidden {
      margin-top: -6rem;
    }

  }

  @keyframes fadeIn {
    from {
      margin-top: -6rem;
    }
    to {
      margin-top: 0;
    }
  }
</style>
