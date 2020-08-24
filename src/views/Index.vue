<template>
  <div class="content">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block " src="../assets/images/banner_01.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block " src="../assets/images/banner_02.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block " src="../assets/images/banner_03.jpg" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block " src="../assets/images/banner_04.jpg" alt="4th slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    

    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title">
          <a href="#" class="more">more</a>伊能净产品
        </h2>
        <ul class="clearfloat">
          <li>
            <a href="#" class="link">
              <img src="../assets/images/01.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#" class="link">
              <img src="../assets/images/02.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#" class="link">
              <img src="../assets/images/03.jpg" alt />
            </a>
          </li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title">
            <a href="#" class="more">more</a>关于伊能净
          </h2>
          <p>
            北京伊能净环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
            <a
              href="#"
            >查看更多</a>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title">
            <a href="#" class="more">more</a>公司动态
          </h2>
          <ul>
            <li>
              <span>2016-02-21</span>
              <a href>空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>伊能净新风净化系统 助力校园新风行动</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>全国新风行动全面启动 助推伊能净战略升级</a>
            </li>
            <li>
              <span>2016-02-21</span>
              <a href>智能空气净化器翻盘：伊能净能否领衔?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

//  <script>
//  export default {
//     name: 'slider',
//     props: {
//       initialSpeed: {
//         type: Number,
//         default: 30
//       },
//       initialInterval: {
//         type: Number,
//         default: 3
//       }
//     },
//     data() {
//       return {
//         sliders: [
//           {
//             img:  require('../assets/images/banner_01.jpg')
//           },
//           {
//             img: require('../assets/images/banner_02.jpg')
//           },
//           {
//             img: require('../assets/images/banner_03.jpg')
//           },
//           {
//             img: require('../assets/images/banner_04.jpg')
//           }
//         ],
//         imgWidth: 600,
//         currentIndex: 1,
//         distance: -600,
//         transitionEnd: true,
//         speed: this.initialSpeed
//       }
//     },
//      computed: {
//       containerStyle() {
//         return {
//           transform: `translate3d(${this.distance}px, 0, 0)`
//         }
//       },
//       interval() {
//         return this.initialInterval * 1000
//       }
//     },
//     mounted() {
//       this.init()
//     },
//     methods: {
//       init() {
//         this.play()
//         window.onblur = function() { this.stop() }.bind(this)
//         window.onfocus = function() { this.play() }.bind(this)
//       },
//       move(offset, direction, speed) {
//         console.log(speed)
//         if (!this.transitionEnd) return
//         this.transitionEnd = false
//         direction === -1 ? this.currentIndex += offset / 600 : this.currentIndex -= offset / 600
//         if (this.currentIndex > 5) this.currentIndex = 1
//         if (this.currentIndex < 1) this.currentIndex = 5

//         const destination = this.distance + offset * direction
//         this.animate(destination, direction, speed)
//       },
//       animate(des, direc, speed) {
//         if (this.temp) {
//           window.clearInterval(this.temp)
//           this.temp = null
//         }
//         this.temp = window.setInterval(() => {
//           if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
//             this.distance += speed * direc
//           } else {
//             this.transitionEnd = true
//             window.clearInterval(this.temp)
//             this.distance = des
//             if (des < -3000) this.distance = -600
//             if (des > -600) this.distance = -3000
//           }
//         }, 20)
//       },
//       jump(index) {
//         const direction = index - this.currentIndex >= 0 ? -1 : 1
//         const offset = Math.abs(index - this.currentIndex) * 600
//         const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
//         this.move(offset, direction, jumpSpeed)
//       },
//       play() {
//         if (this.timer) {
//           window.clearInterval(this.timer)
//           this.timer = null
//         }
//         this.timer = window.setInterval(() => {
//           this.move(600, -1, this.speed)
//         }, this.interval)
//       },
//       stop() {
//         window.clearInterval(this.timer)
//         this.timer = null
//       }
//     }
//   }

//  </script>

 <style scoped>
.d-block{
  width:100%;
}
 </style>
