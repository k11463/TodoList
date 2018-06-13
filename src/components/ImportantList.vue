<template>
    <div class="bg">
            <ul class="list-soto" v-for="(item, id) in filterdItem" :key="item.id">
                <li class="list-naka" :class="{isStar: item.star}">
                    <div class="list-title">
                        <div class="title-name">
                            <div>
                                <el-checkbox id="elcheck" class="checkbox" v-model="item.checked" @change="clickCheckBox(id)"></el-checkbox>
                                <input class="title" v-model="item.title" placeholder="請輸入標題..." :disabled="!item.open">
                            </div>
                            <div>
                                <i class="fa-star" @click="item.star = !item.star, clickStar(id)" :class="{isStar: item.star, far: !item.star, fas: item.star}"></i>
                                <i class="fas fa-pencil-alt pencil" @click="chgOpen(id)" :class="{open: item.open}"></i>
                            </div>
                        </div>
                        <div class="components">
                            <i class="far fa-calendar-alt"></i>
                            <span class="date">{{ item.date }}</span>
                            <i class="far fa-file"></i>
                            <i class="far fa-comment-dots"></i>
                        </div>
                        </div>
                        <div class="list-content" v-if="item.open">
                        <div class="inputs">
                            <h6><i class="far fa-calendar-alt"></i><span>截止日期</span></h6>
                            <el-date-picker v-model="item.date" value-format="yyyy/MM/dd"></el-date-picker>
                            <h6><i class="far fa-file"></i><span>上傳檔案</span></h6>
                            <h6><i class="far fa-comment-dots"></i><span>事項內容</span></h6>
                            <el-input class="title" rows="5" type="textarea" placeholder="請在這輸入您的註記" @click="deadtime(id)"></el-input>
                        </div>
                        <div class="btns">
                            <div class="btn cancel" @click="items[id].open = false"><i class="fa fa-times"></i><span>取消</span></div>
                            <div class="btn task"><i class="fa fa-plus"></i><span>新增記事</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        for (let i = 0; i < this.$store.state.items.length; i++){
            this.filterdItem = this.$store.state.items.filter(el => (el.star));
        }
        for (let i = 0; i < this.filterdItem.length; i++){
            this.filterdItem = this.filterdItem.filter(el => (!el.checked));
        }
        //console.log(a);
    },
    data(){
        return {
            filterdItem: [],
            newTitle: ""
        }
    },
    methods: {
        clickCheckBox(id){
            this.filterdItem.splice(id, 1);
        },
        clickStar(id){
            this.filterdItem.splice(id, 1);
        },
        chgOpen(id){
            this.filterdItem[id].open = !this.filterdItem[id].open;
        },
        g(){
            console.log(this.filterdItem);
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");
*::placeholder {
    color: #c8c8c8;
}

span {
    font-family: "標楷體";
    font-weight: 700;
}

input {
    font-family: "標楷體";
    font-weight: 900;
    user-select: none;
}

.bg {
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
  padding-top: 2%;
}

.newTask {
    height: 65px;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
}

.newTask input {
    width: 580px;
    height: 65px;
    border-radius: 5px;
    font-size: 24px;
    background-image: url('../assets/plus.png');
    background-repeat: no-repeat;
    background-size: 34px;
    background-position-x: 24px;
    background-position-y: 13px;
    padding: 5px 76px;
}

.container {
    padding-top: 1.3%;
}

li {
  list-style: none;
  transition-duration: 0.8s;
}

li:hover {
    transform: scale(1.1);
    border: 2px solid #4a90e2;
}

ul {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 50%;
    transform: translateX(-53%);
}

.list-soto {
  width: 620px;
}

.list-naka {
  width: 100%;
  margin-bottom: 8px;
}
.list-naka .title-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title-name {
    z-index: -3;
}
.list-naka .title-name i {
  font-size: 24px;
  margin-right: 32px;
  cursor: pointer;
  transition-duration: 0.4s;
}
.list-naka .title-name i:last-child {
  margin-right: 0px;
}
.list-naka .title-name i.open {
  color: #4a90e2;
}
.list-naka .title-name i.isStar {
  color: #f5a623;
}
.list-naka .title-name .title {
  font-size: 24px;
  background-color: transparent;
  border: none;
  outline: none;
}
.list-naka .components {
  color: #757575;
  margin-top: 15px;
}
.list-naka .components i {
  margin-right: 16px;
}
.list-naka .components .date {
  margin-right: 16px;
}
.list-naka .list-title, .list-naka .list-content {
  padding-left: 40px;
  background-color: #f2f2f2;
  padding: 24px 32px;
}
.list-naka .list-title .checkbox, .list-naka .list-content .checkbox {
  margin-left: -16px;
  transform: scale(1.7) translateX(-8px);
}
.checkbox {
    bottom: 4px;
}
.list-naka .list-title {
  padding-left: 65px;
}
.list-naka .list-content {
  border-top: 1px solid #c8c8c8;
  padding-left: 85px;
}
.list-naka .list-content h6 {
  margin-top: 24px;
  margin-bottom: 8px;
}
.list-naka .list-content h6:first-child {
  margin-top: 0;
}
.list-naka .list-content h6 i {
  margin-right: 8px;
  margin-left: -20px;
}
.list-naka .btns {
  margin-left: -85px;
  margin-right: -32px;
  margin-bottom: -24px;
  margin-top: 24px;
  display: flex;
  border: 1px solid #c8c8c8;
}
.list-naka .btns .btn {
  padding: 16px;
  flex: 1;
  text-align: center;
  border-radius: 0px;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
}
.list-naka .btns .btn i {
  margin-right: 14px;
}
.list-naka .btns .btn.cancel {
  background-color: #fff;
  color: #d0021b;
}
.list-naka .btns .btn.cancel:hover {
  background-color: #ddd;
}
.list-naka .btns .btn.task {
  background-color: #4a90e2;
  color: #fff;
}
.list-naka .btns .btn.task:hover {
  background-color: #00408b;
}
.list-naka.isStar .list-title, .list-naka.isStar .list-content {
  background-color: #fff2dc;
}
</style>
