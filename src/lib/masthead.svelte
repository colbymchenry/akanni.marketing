<script>
    import {iconArrowDown} from "./icons.js";
</script>

<section>

    <div class="grey-circle"></div>
    <div class="clear-circle"></div>

    <div class="content" data-split="lines" data-split-page-reveal>
        <h1>We scale brands profitably through</h1>
        <h1 id="typing-masthead"></h1>
        <p>Our roles are simple. We generate the revenue.<br/>You perfect the product.</p>
        <a href="#" class="btn">Let's Chat</a>
    </div>

    <div class="scroll-down">
        Scroll Down <span class="arrow-down">{@html iconArrowDown}</span>
    </div>

    <div class="leads">
        Creating, driving, converting, and retaining leads.
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
    animation: fadeIn 1s ease 3.2s forwards;
    opacity: 0;
  }

  .leads {
    position: absolute;
    bottom: 4rem;
    right: 3rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 2rem;
    color: var(--font-light);
    animation: fadeIn 1s ease 3.2s forwards;
    opacity: 0;
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
      margin-right: 20%;
      gap: 2rem;
      opacity: 0;
      animation: fadeIn 1s ease 3.2s forwards;

      h1 {
        line-height: 1.2;
        font-size: 6vw;
        color: #FFFFFF;
        font-weight: 700;
      }

      p {
        max-width: 35.75rem;
        color: var(--font-light);
        line-height: 1.8;
        font-size: 1.2rem;
      }


    }
  }

  .grey-circle {
    background-color: #17171C;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.35);
    width: clamp(400px, 64vw, 4000px);
    height: clamp(400px, 64vw, 4000px);
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
    width: clamp(400px, 68.4vw, 4000px);
    height: clamp(400px, 68.4vw, 4000px);
    border-radius: 100%;
    transform: translate(0px, 0%);
    opacity: 1;
  }

  // mobile breakpoint
  @media screen and (max-width: 640px) {
    #typing-masthead {
      margin-top: -2rem;
    }

    .content {
      margin-left: 5% !important;
      margin-right: 5% !important;

      h1 {
        font-size: 10.5vw !important;
      }

      p {
        font-size: 1rem !important;
      }

      a {
        font-size: 0.9rem !important;
      }
    }

    .clear-circle {
      right: -50vw !important;
    }

    .scroll-down {
      left: 5%;
    }

    .leads {
      bottom: 8rem;
      left: 5%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      margin-bottom: -5rem;
    }
    to {
      opacity: 1;
      margin-bottom: 0;
    }
  }

</style>
