<template>
  <div>
    <header></header>
    <main>
      <!-- Slider -->
      <section class="slider-contaner">
        <div class="main-slider">s</div>
        <div class="second-slider">
          <div class="second-slider-item-top"></div>
          <div class="second-slider-item-bootom"></div>
        </div>
      </section>
      <!-- New Product -->
      <section>
        <div class="new-product"></div>
      </section>
      <!-- Category -->
      <section>
        <div class="category-contaner">
          <div class="category-card">e</div>
          <div class="category-card">e</div>
          <div class="category-card mobile-category">e</div>
          <div class="category-card mobile-category">e</div>
        </div>
      </section>
      <!-- Best Seller -->
      <section>
        <div class="best-seller"></div>
      </section>
    </main>
  </div>
</template>


<style scoped>
/* Mobile Style */
@media screen and (max-width: 800px) {
  /* Slider */
  .main-slider {
    display: block;
    width: 1fr;
    height: 60vh;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .second-slider {
    display: none;
  }

  /* Category */
  .category-contaner {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 1fr 1fr;
    height: 15rem;
  }

  .category-card {
    border-radius: 20px;
    background-color: #fff;
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .mobile-category {
    display: none;
  }
}

/* Decktop Style */

@media screen and (min-width: 800px) {
  /* Slider */
  .slider-contaner {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1;
    grid-gap: 20px;
    height: 65vh;
  }

  .main-slider {
    background-color: #fff;
    border-radius: 20px;
  }

  .second-slider {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    border-radius: 20px;
  }

  .second-slider-item-top {
    background-color: #fff;
    border-radius: 20px;
  }
  .second-slider-item-bootom {
    background-color: #fff;
    border-radius: 20px;
  }
  /* Category */
  .category-contaner {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 15rem;
    margin-top: 2rem;
  }

  .category-card {
    border-radius: 20px;
    background-color: #fff;

    margin-right: 1rem;
    margin-left: 1rem;
  }
}

.new-product {
  height: 50vh;
  width: 100%;
  background-color: red;
  margin-top: 2rem;
}

.best-seller {
  height: 50vh;
  width: 100%;
  background-color: green;
  margin-top: 2rem;
}
</style>