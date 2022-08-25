<script>
    import {iconAutograph, iconFacebook, iconGlobeSearch, iconHandshake, iconMail, iconWeb} from "./icons.js";
    import Modal from "./modal.svelte";

    const services = [
        {
            name: "Facebook/IG Ads",
            icon: iconFacebook,
            description: "Through changes to each app's algorithm, the organic reach of posts has extremely diminished. Ads are the best way to increase brand exposure on each platform and reach your target audience."
        },
        {
            name: "SEO",
            icon: iconGlobeSearch,
            description: "The most direct and immediate form of communication with your customers. Through this channel subscribers can be directly notified about all announcements regarding the brand increasing their LTV."
        },
        {
            name: "Conversion Rate",
            icon: iconAutograph,
            description: "Improving conversion rate will result in lowering your customer's acquisition costs. The less you have to spend to acquire a customer the better. By optimizing your conversion rate you can increase revenue per visitor, acquire more customers, and grow your business."
        },
        {
            name: "Email & SMS",
            icon: iconMail,
            description: "Formulate a strategy to implement in order to reach goals in most efficient way."
        },
        {
            name: "Brand Direction",
            icon: iconHandshake,
            description: "Your website is your virtual store-front where customers are brought into the world of your brand/ company, so websites need to be designed with intention. Each page operates as a potential landing page. A high converting landing page is designed to get visitors to do a specific CTA."
        },
        {
            name: "Web Design",
            icon: iconWeb,
            description: "One of the best ways to organically drive traffic to website. By ranking higher in search results there will be an increase in brand exposure which boosts brand credibility and increase awareness."
        }
    ]

    let selectedService = null;
</script>


<section>

    <div class="heading">
        <span>SERVICES</span>
        <h1>We're <span>good</span> best at:</h1>
    </div>

    <div class="services">
        {#each services as service}
            <div class="service" on:click={() => selectedService = service}>
                <div>{@html service.icon}</div>
                <h5>{@html service.name}</h5>
            </div>
        {/each}
    </div>

</section>

{#if selectedService}
    <Modal title={selectedService.name} onClose={() => selectedService = null}>
        {selectedService.description}
    </Modal>
{/if}


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