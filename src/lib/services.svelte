<script>
    import {iconFacebook, iconGoogle, iconGraphUp, iconMail, iconPen} from "./icons.js";

    const services = [
        {
            name: "Facebook Ads",
            icon: iconFacebook
        },
        {
            name: "SEO",
            icon: iconGoogle
        },
        {
            name: "Conversion Rate",
            icon: iconGraphUp
        },
        {
            name: "Email & SMS",
            icon: iconMail
        },
        {
            name: "Brand Direction",
            icon: iconMail
        },
        {
            name: "Web Design",
            icon: iconPen
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
                <h5>{service.name}</h5>
            </div>
        {/each}
    </div>

</section>

<style lang="scss">

  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 2rem !important;
      height: 2rem !important;
      overflow: hidden;
    }

    h5 {
      margin-top: 2.5rem !important;
      color: var(--accent-color);
      font-weight: 500;
    }
  }

  section {
    padding: 10rem 15%;

    .heading {
      display: flex;
      flex-direction: column;

      > span {
        color: white;
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
      }

      > h1 {
        line-height: 1.3;
        letter-spacing: 0;
        font-size: 2.5rem;
        color: white;
        font-weight: 600;

        span {
          text-decoration: line-through;
        }
      }
    }
  }
</style>