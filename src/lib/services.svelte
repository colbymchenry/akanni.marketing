<script>
    import {
        iconArrowStars, iconAutograph, iconEarbuds,
        iconFacebook,
        iconGlobeSearch,
        iconGoogle,
        iconGraphUp, iconHandshake,
        iconMail,
        iconPen, iconWeb
    } from "./icons.js";

    const services = [
        {
            name: "Facebook &<br />Instagram Ads",
            icon: iconFacebook
        },
        {
            name: "SEO",
            icon: iconGlobeSearch
        },
        {
            name: "Conversion Rate",
            icon: iconAutograph
        },
        {
            name: "Email & SMS",
            icon: iconMail
        },
        {
            name: "Brand Direction",
            icon: iconHandshake
        },
        {
            name: "Web Design",
            icon: iconWeb
        }
    ]
</script>


<section>

    <div class="heading">
        <span>SERVICES</span>
        <h1>We're <span>good</span> best at:</h1>
    </div>

    <div class="services">
        {#each services as service}
            <div class="service">
                <div>{@html service.icon}</div>
                <h5>{@html service.name}</h5>
            </div>
        {/each}
    </div>

</section>

<style lang="scss">

  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 3rem;
    margin-top: 3rem;
  }

  .service {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--accent-color);
    padding: 1.875rem 1.5rem;
    cursor: pointer;

    &:hover {
        div {
          transform: scale(1.2);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          color: var(--bg-dark);
          background-color: var(--accent-color);
        }
    }

    div {
      width: 2.5rem !important;
      height: 2.5rem !important;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: var(--bg-dark);
      border-radius: 100%;
      padding: 1.25rem;
      box-sizing: content-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8rem;
      transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    h5 {
      margin-top: 2.5rem !important;
      color: var(--accent-color);
      font-weight: 400;
      font-size: 2rem;
      text-align: center;
    }
  }

  section {
    padding: 10rem 15%;
    position: relative;

    .heading {
      display: flex;
      flex-direction: column;

      > span {
        color: white;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
      }

      > h1 {
        line-height: 1.3;
        letter-spacing: 0;
        font-size: 3rem;
        color: white;
        font-weight: 600;

        span {
          text-decoration: line-through;
        }
      }
    }
  }

  // tablet breakpoint
  @media screen and (max-width: 1200px) {

    section {
      padding: 10rem 5%;
    }

    .services {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }

  // mobile breakpoint
  @media screen and (max-width: 640px) {
    .services {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-row-gap: 1rem;
    }

    .heading > span {
      font-size: 0.8rem !important;
    }

    .heading h1 {
      font-size: 1.75rem !important;
    }

    .service {
      justify-content: center;
      h5 {
        font-size: 1.5rem;
      }
    }
  }
</style>