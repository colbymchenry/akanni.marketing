<script>

import {iconLogo} from "./icons.js";
</script>

<section class="loader">
    <div>
        <div> </div>
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
          transform: scaleY(0.6); // 0.40-0.60
        }
      }
    }
</style>