import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //用于书写组件间共享的变量
  state: {
    uid:sessionStorage.getItem("uid"),
    uname:sessionStorage.getItem("uname"),
  },
  //专门书写更新state中的值的方法
  mutations: {
    updateUser(state,user){
      state.uid=user.uid;
      state.uname=user.uname;

      sessionStorage.setItem('uid',user.uid);
      sessionStorage.setItem('uname',user.uname);

      if (user.uid===null) sessionStorage.removeItem("uid");
      if (user.uname===null) sessionStorage.removeItem("uname");
    }
  },
  actions: {
  },
  modules: {
  }
})
