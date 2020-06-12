<template>
  <div class="header text-white">
    <div class="header-left font-weight-bold">
      <i class="fab fa-spotify"><span>Anima</span></i>
    </div>
    <div class="header-right">
      <a href="#" class="text-white premium">Premium</a>
      <a href="#" class="text-white premium">新規登録・ログイン</a>
    </div>
  </div>
</template>

<style scoped>
.header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  background-color:black; 
}

.header-left{
  line-height: 80px;
  font-size: 30px;
}

.header-right{
  line-height: 80px;
  font-size: 20px;
}
.premium{
  padding-right: 20px;
  text-decoration: none;
}
</style>