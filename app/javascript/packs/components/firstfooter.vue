<template>
  <div class="footer">
      <div class="footer-in">
      <div class="bottom-top">
        <div class="bottom-top-left">
          <div class="bottom-top-left1">
            <i class="fab fa-spotify"><span>Anima</span></i>
          </div>
          <div class="bottom-top-left2">
            <ul class="list">
              <li class="chil1 parent">会社情報</li>
              <li class="chil1"><span><a href="#" class="chil1">企業情報</a></span></li>
              <li class="chil1"><span><a href="#" class="chil1">採用情報</a></span></li>
              <li class="chil1"><span><a href="#" class="chil1">for the record</a></span></li>
            </ul>
          </div>
        </div>
        <div class="bottom-top-right">
          <ul class="list list2">
            <li><i class="fab fa-instagram"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-f"></i></li>
          </ul>
        </div>
      </div>
      <div class="bottom-bottom">
        <div class="bottom-bottom-left">
          <ul class="list list3">
            <li><span><a href="#" class="chil3">法的情報</a></span></li>
            <li><span><a href="#" class="chil3">Cookie</a></span></li>
            <li><span><a href="#" class="chil3">プライバシー</a></span></li>
          </ul>
        </div>
        <div class="bottom-bottom-right">
          <p>© 2020 Anima AB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer{
  background-color: black;
  padding-top: 60px;
  padding-bottom: 20px;
  color: white;
}

.list{
  list-style: none;
  text-decoration: none;
}

.footer-in{
  width: 80%;
  margin: 0 auto;
}

.title{
  font-size: 25px;
}

.bottom-top-left{
  display: flex;
  justify-content: space-around;
  width: 300px;
  float: left;
}

.bottom-top-right{
  float: right;
}

.list2{
  display: flex;
}

.fa-instagram{
  padding-right: 40px;
  font-size: 35px;
}

.fa-twitter{
  padding-right: 40px;
  font-size: 35px;
}

.fa-facebook-f{
  padding-right: 40px;
  font-size: 35px;
}

.bottom-bottom{
  padding-top: 240px;
  padding-bottom: 50px
}

.chil1{
  padding-bottom: 15px;
  display: block;
  color: white;
  text-decoration: none;
}

.parent{
  color: gray;
  font-size: 13px
}

.list3{
  display: flex;
  float: left;
}

.chil3{
  padding-right: 20px;
  font-size: 13px;
  display: block;
  color: white;
  text-decoration: none;
}

.bottom-bottom-right{
  float: right;
}
</style>