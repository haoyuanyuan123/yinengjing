<template>
  <div>
    <!-- news.html 12~40 -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <span>{{ item.pubTime | date }}</span>
            <router-link :to="`/news_detail/${item.nid}`">{{ item.title }}</router-link>
          </li>
          <!--<li><span>2016-02-21</span><a href="">伊能净新风净化系统　助力校园新风行动</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推伊能净战略升级</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：伊能净能否领衔?</a></li>-->
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a @click="getData(pageNum-1)" v-if="pageNum>1">上一页</a>
        <a class="default" v-else>上一页</a>
        <!-- :class="{样式名: true/false}"   固定格式,  true代表样式有效, false则无效 -->
        <!-- item是当前显示的页数, pageNum是当前页 -->
        <a
          v-for="(item, index) in pageCount"
          :key="index"
          :class="{ cur: item == pageNum }"
          @click="getData(item)"
          >{{ item }}</a
        >
        <!-- <a href>2</a> -->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <a @click="getData(pageNum+1)" v-if="pageNum<pageCount" >下一页</a>
        <a class="default" v-else>下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      pageCount: 0,
      pageNum: 0,
      pageSize: 0,
      totalRecord: 0,
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    getData(pno) {
      // 我们的接口在服务器端有设计: 支持 post 和 get

      // 在 main.js 中配置了基础路径, 所以此处就可以忽略前缀路径
      this.axios
        .get("news_select.php?pageNum=" + pno)
        .then((res) => {
          console.log(res);

          this.data = res.data.data;
          this.pageCount = res.data.pageCount;
          this.pageNum = res.data.pageNum;
          this.pageSize = res.data.pageSize;
          this.totalRecord = res.data.totalRecord;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  // filters: {
  //   date(timestamp) {
  //     // 接口返回的时间戳是字符串类型: 具体看后台打印
  //     // Date() 只接收数字类型
  //     timestamp = parseInt(timestamp);

  //     let date = new Date(timestamp);
  //     let year = date.getFullYear();
  //     let month = date.getMonth() + 1;
  //     let day = date.getDate();

  //     return `${year}-${month}-${day}`;
  //   },
  // },
};
</script>

<style>
.pages{
    -webkit-user-select:none; 
    -moz-user-select:none; 
    -ms-user-select:none; 
    -khtml-user-select:none;
    user-select:none;
}
.pages>a{
  cursor:pointer;
}
</style>