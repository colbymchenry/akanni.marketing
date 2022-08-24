<script>
    import {iconArrowDown} from "./icons.js";
</script>

<section>

    <div class="grey-circle"></div>
    <div class="clear-circle"></div>

    <div class="content" data-split="lines" data-split-page-reveal>
        <h1>We scale brands profitably through</h1>
        <h1 id="typing-masthead"></h1>
        <p>Our roles are simple. We generate the revenue. You perfect the product.</p>
        <a href="#">Let's Chat</a>
    </div>

    <div class="scroll-down">
        Scroll Down <span class="arrow-down">{@html iconArrowDown}</span>
    </div>
</section>

<style lang="scss">

  .scroll-down {
    position: absolute;
    bottom: 4rem;
    left: 3rem;
    color: white;
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    height: 2rem;
  }

  section {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-dark);
    position: relative;

    .content {
      z-index: 1;
      display: flex;
      flex-direction: column;
      margin-left: 20%;
      gap: 2rem;

      h1 {
        line-height: 1.2;
        font-size: 6vw;
        color: #FFFFFF;
        font-weight: 700;
      }

      p {
        max-width: 18.75rem;
        color: var(--font-light);
        line-height: 1.8;
      }

      a {
        transition: background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1), color 300ms cubic-bezier(0.165, 0.84, 0.44, 1), border 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
        color: #FFFFFF;
        min-width: 8.25rem;
        padding: 1.125rem 1.875rem;
        font-size: 0.9375rem;
        line-height: 1;
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: 0.03em;
        text-align: center;
        border-radius: 3.75rem;
        background-color: transparent;
        border: 0.0625rem solid #ffffff;
        text-decoration: none;
        justify-self: flex-start;
        align-self: flex-start;

        &:hover {
          background-color: white;
          color: black;
          text-decoration: none;
        }

        &:visited {
          text-decoration: none;
        }
      }
    }
  }

  .grey-circle {
    background-color: #17171C;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.35);
    width: 64vw;
    height: 64vw;
    border-radius: 100%;
    transform: translate(0px, 0%);
    opacity: 1;
    position: absolute;
    top: -23.75vw;
    left: -28.75vw;
  }

  .clear-circle {
    bottom: -21.5625vw;
    right: -19.6875vw;
    position: absolute;
    background-color: var(--bg-dark);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.35);
    width: 68.4vw;
    height: 68.4vw;
    border-radius: 100%;
    transform: translate(0px, 0%);
    opacity: 1;
  }

</style>
