<template>
  <div id="coupons">
    <div v-if="loading">
      Loading...
    </div>

    <div class="login">
      <div class="login-line">
         <i class="ico-password"></i>
         <input type="text" placeholder="输入手机号">
      </div>
      <div class="login-line">
        <i class="ico-password"></i>
        <input type="text" placeholder="输入验证码">
      </div>
      <div class="loing-line">
        <div class="button">下一步</div>
      </div>
    </div>


     <div v-if="error" class="error">
      {{ error }}
    </div>


    <div class="couponlist" v-if="coupon">
      <div class="coupon-card" v-for="item in coupon.items" :key="item.cardId">
          <h2>{{item.title}}</h2>
          {{item.description}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      loading: false,
      error: null,
      coupon:null,
    }
  },
  methods:{
    getCoupon (){
      // this.error = this.coupon = null
      // this.loading = true
      // this.$http.get('api/wechatAppCouponByCategory.htm?json={"categoryId":128,"memberId":64321,"currentPage":1}')
      // .then(res=>{
      //   this.loading = false
      //   this.coupon = res.data
      //   console.log(this.coupon)
      // })
    }
  },
  created(){
    this.getCoupon()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .coupon{
    &-card{
      border:1px solid #eee;
      margin:10px 0;
      padding:20px;
    }

  }
  .button{
    display: block;
    /* Rectangle 4: */
    background: #29292B;
    box-shadow: 0 26px 60px 0 rgba(0,0,0,0.13);
    border-radius: 6px;
  }
</style>
