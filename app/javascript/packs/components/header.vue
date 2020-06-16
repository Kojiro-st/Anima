<template>
  <div class="header">
    <div class="header-left">
      <i class="fab fa-spotify"><span class="anima">Anima</span></i>
    </div>
    <div class="header-right">
      <a href="#" class="premium">Premium</a>
      <a href="#" class="premium">新規登録・ログイン</a>
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
  color: white;
}

.header-left{
  line-height: 80px;
  font-size: 30px;
}

.anima{
  margin: 0 0;
}

.header-right{
  line-height: 80px;
  font-size: 20px;
  display: flex;
}
.premium{
  margin-right: 40px;
  text-decoration: none;
  display: block;
  color: white;
}
</style>