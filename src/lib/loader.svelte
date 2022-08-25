<section class="loader">
    <div>
        <div></div>
    </div>
</section>

<style lang="scss">
  .loader {
    width: 100vw;
    height: -webkit-fill-available;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
    background-color: #0A0A0F;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 0 1.25rem rgb(0 0 0 / 12%);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideUp 2s cubic-bezier(.13,.95,.23,1.01) 2.05s forwards;

    > div {
      width: clamp(8rem, 10vw, 20rem);
      height: clamp(8rem, 10vw, 20rem);
      background-color: #FFFFFF;
      -webkit-mask-image: var(--preloader-image);
      -webkit-mask-size: contain;
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-image: var(--preloader-image);
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;

      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--accent-color);
        transform-origin: bottom;
        transform: scaleY(0.4); // 0.40-0.60
        animation: logoAnimation var(--preloader-transition) forwards;
      }
    }
  }

  @keyframes logoAnimation {
    0% {
      transform: scaleY(0.4);
    }
    100% {
      transform: scaleY(0.6);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-110%);
    }
  }
</style>