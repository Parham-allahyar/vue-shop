<template>
  <div>
    <!-- Product overview -->
    <div class="container">
      <div class="image-box">
        <img
          src="https://images.timcheh.com/1/fill/480/480/sm/true/plain/https://static.timcheh.com/uploads/product-gallery/d1/b8/5b/02/30/media-60222cbfabd3a.jpg?v=d46f6a6e5d4a17987c287bdc05774fa95c4d417d"
          alt="Nature"
          class="responsive-image"
        />
      </div>
      <div class="info-box">
        <h1>نام محصول</h1>
        <div class="overview">
          <div class="brand-name">نام فروشنده: نوکیا</div>
          <div class="comment-count">۱۸ نظر برای این محصول ثبت شده</div>
        </div>

        <hr />

        <h1>قیمت</h1>
        <h5>ویژگی های محصول</h5>
        <ul>
          <li>ویژگی ۱</li>
        </ul>
        <ul>
          <li>ویژگی ۲</li>
        </ul>
        <ul>
          <li>ویژگی ۳</li>
        </ul>
        <ul>
          <li>ویژگی ۴</li>
        </ul>
        <button>اضافه کردن به سبد خرید</button>
      </div>
      <div class="seller-box">
        <div><p>فروشنده:نوکیا</p></div>
        <hr />
        <ul>
          <li>تامین کالا تا ۳ روز دیگر</li>
          <li>ارسال به سراسر کشور</li>
          <li>اصالت و سلامت فیزیکی کالا</li>
        </ul>
      </div>
    </div>
    <!-- Product Info Table -->
    <div class="info-table">
      <h2 class="info-table-header">مشخصات محصول</h2>
      <div>
        <p class="product-field-key">نام</p>
        <p class="product-field-value">موبایل</p>
      </div>
      <div>
        <p class="product-field-key">نام</p>
        <p class="product-field-value">موبایل</p>
      </div>
      <div>
        <p class="product-field-key">نام</p>
        <p class="product-field-value">موبایل</p>
      </div>
      <div>
        <p class="product-field-key">نام</p>
        <p class="product-field-value">موبایل</p>
      </div>
    </div>
    <!-- Product Comments -->
    <div></div>
  </div>
</template>




<style scoped>
@media only screen and (min-width: 800px) {
  /* Product overview */
  .container {
    margin: 2% 5%;
    padding: 0;
    display: grid;

    grid-template-columns: 30vw 30vw 30vw;
    grid-template-rows: 70vh;
  }

  .responsive-image {
    width: 100%;
    height: 100%;
  }
  .image-box {
    margin-left: 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
  }
  .info-box {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .info-box > h1 {
    display: flex;
    font-size: 25px;
    text-align: center;
    margin: 1rem 0;
  }
  .info-box > h2 {
    display: flex;
    font-size: 25px;
    text-align: center;
    margin: 1rem 0;
    color: #000;
  }
  .brand-name {
    display: inline-block;
    margin-left: 20px;
  }
  .comment-count {
    display: inline-block;
  }
  .info-box > button {
    font-size: 1rem;
    width: 80%;
    margin-right: 10%;
    margin-top: 3%;
    margin-bottom: auto;
    color: #fff;
    text-align: center;
    line-height: 2;
    border-radius: 10px;
    border: none;
    background-color: blue;
  }

  .info-box > ul > li {
    margin: 0.5rem;
    color: #242424;
  }
  .seller-box {
    margin-right: 0.5rem;
    width: 70%;
    margin-right: 20%;
    margin-top: 20%;
    height: 60%;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    background-color: #d9d9d9;
  }
  .seller-box > div > p {
    margin: 2rem;
  }
.seller-box > ul >li {
    margin: 2rem;
  }
  /* Table Info */
  .info-table {
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    margin: 2% 5%;
  }

  .info-table-header {
    margin: 20px;
    text-align: center;
  }

  .product-field-key {
    display: inline-block;
    margin: 2% 5% 2% 1%;
    width: 20%;
    background: #f0f0f0;
    height: 2rem;
    border-radius: 20px;
    text-align: center;
    line-height: 2;
  }
  .product-field-value {
    display: inline-block;
    margin-right: 10px;
    width: 65%;
    margin: 2% 1% 2% 5%;
    background: #f0f0f0;
    height: 2rem;
    border-radius: 20px;
    text-align: center;
    line-height: 2;
  }
}

@media only screen and (max-width: 800px) {
  /* Product overview */

  .container {
    display: grid;
    grid-template-rows: 50vh 50vh 30vh;
    grid-template-columns: 70vw;
  }

  .image-box {
    margin-bottom: 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
  }
  .info-box {
    background-color: blue;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
  }
  .seller-box {
    background-color: yellow;
    margin-top: 0.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
  }

  /* Table Info */
  .info-table {
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    margin: 2% 5%;
  }

  .info-table-header {
    margin: 2%;
    text-align: center;
  }

  .product-field-key {
    margin: 2% 2% 2% 2%;
    width: 90%;
    background: #d9d9d9;
    height: 2rem;
    border-radius: 20px;
    text-indent: 1rem;
    line-height: 2;
  }
  .product-field-value {
    margin-right: 10px;
    width: 90%;
    margin: 2% 2% 10% 2%;
    height: 2rem;
    border-radius: 20px;
    text-indent: 1rem;
    line-height: 2;
  }
}
</style>