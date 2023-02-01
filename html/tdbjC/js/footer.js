Vue.component("footBar", {
  template: `
    <div class="foot">
    <div class="foot-box" :class="{active: activeBtn === 1}" @click="toPage(1)">
      <div class="foot-view"><i class="el-icon-s-home"></i></div>
      <div class="foot-text">首页</div>
    </div>
    <div class="foot-box" :class="{active: activeBtn === 2}" @click="toPage(2)">
      <div class="foot-view"><i class="el-icon-map-location"></i></div>
      <div class="foot-text">地图</div>
    </div>
    <div class="foot-box" @click="toPage(0)">
      <img class="add-btn" src="/imgs/add.png" alt="">
    </div>
    <div class="foot-box" :class="{active: activeBtn === 3}" @click="toPage(3)">
      <div class="foot-view"><i class="el-icon-chat-dot-round"></i></div>
      <div class="foot-text">消息</div>
    </div>
    <div class="foot-box" :class="{active: activeBtn === 4}" @click="toPage(4)">
      <div class="foot-view"><i class="el-icon-user"></i></div>
      <div class="foot-text">我的</div>
    </div>
  </div>
  `,
  data() {
    return {
      latitude: null,
      longitude: null
    }
  },
  props: ['activeBtn'],
  methods: {
    toPage(i) {
      if (i === 0) {
        location.href = "/blog-edit.html"
      } else if (i === 4) {
        location.href = "/info.html"
      } else if (i === 1){
        location.href = "/"
      }else if (i===2){
        this.onMapClick();
      } else if (i===3){
        this.onMessageClick();
      }
    },onMapClick() {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    },
    showPosition(position) {
      this.latitude= position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.$message({
        message: '定位成功',
        type: 'success'
      });
      axios.post("/user/savepos", {
        longitude: this.longitude,
        latitude: this.latitude
      })
    },
    onMessageClick(){
      this.$message({
        message: '暂无消息',
        type: 'success'
      });
    }
  }
})