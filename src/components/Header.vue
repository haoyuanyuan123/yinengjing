<template>
  <div>
    <header class="header container">
      <h1 class="logo"><router-link to="/" class="link"></router-link></h1>
      <div class="h_con">
        <ul class="clearfloat">
          <li class="phone">4000-585-116</li>
          <li><a href="#">中文</a></li>
          <li><em>|</em></li>
          <li><a href="#">English</a></li>
          <li><a href="#" class="weixin"></a></li>
          <li><a href="#" class="weibo"></a></li>
          <li v-if="!$store.state.uid">
            <router-link to="/login" class="h_login">登录</router-link>
          </li>
          <li v-if="!$store.state.uid"><em>|</em></li>
          
          <li v-if="!$store.state.uid"><router-link to="/register" class="h_register">注册</router-link></li>
          <li class="top_user" v-if="$store.state.uid"><a href="">{{$store.state.uname}}</a></li>
          <li class="top_quit" v-if="$store.state.uid" @click="doLogout"><a href="">退出</a></li>
        </ul>
        <div class="search clearfloat">
          <button type="button"></button>
          <input type="text" />
        </div>
      </div>
    </header>
    <!--nav-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <router-link to="/"
                ><span class="icon_home"></span>首页</router-link
              >
            </li>
            <li><router-link to="/about">关于伊能净</router-link></li>
            <li><router-link to="/news">公司动态</router-link></li>
            <li class="nav_pd">
              <router-link to="/product/1" :class="{navCur:$route.name=='Product'}"
                >产品中心<span class="icon_pd"></span
              ></router-link>
              <div class="pd_dropdown">
                <router-link to="/product/1"
                  >伊能净净化器</router-link
                >
                <router-link to="/product/2">伊能净滤网</router-link>
              </div>
            </li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="s_cart">
          <router-link to="/cart">
            <span class="icon_cart"></span>购物车(<strong id="cart_sum"
              >0</strong
            >)<span class="icon_sj"></span>
          </router-link>
          <div class="cart_dropdown">
            <!--<h3>您的购物车为空~</h3>-->
            <ul>
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
            </ul>
            <div class="cd_js clearfloat">
              <span>共计：<strong>0.00</strong></span>
              <a href="#">结算</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // watch:{
  //   $route(to){
  //     console.log(to)
  //   }
  // },
  methods: {
    doLogout() {
      // 退出
      this.$store.commit("updateUser", { uid: null, uname: null });
    },
  },
};
</script>

<style>
/*
routet-link 在选中状态会自动添加两个样式
router-link-exact-active:精确匹配
router-link-active:模糊匹配
 */
.nav a.router-link-exact-active{
  background-color:orange;
}
.nav a.router-link-exact-active:hover{
  background-color:orange;
}
.nav a.router-link-exact-active:hover,
.navCur:hover{
  background-color:orange;
}
</style>
