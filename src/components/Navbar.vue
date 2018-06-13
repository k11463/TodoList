<template>
    <div class="bg">
        <div class="container">
            <div class="tabs">
                <ul>
                    <li v-for="(tab, id) in navbarTabs" :key="tab"  @click="chgClick(id)">
                        <router-link :to="tab.url" class="rl">
                            <div :class="{link: tab.isClick}" class="label">{{tab.txt}}</div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listId: 0
        }
    },
    methods: {
        chgClick(id){
            this.listId = id;
        }
    },
    computed: {
        navbarTabs() {
            let nbts = [
                {
                    url: '/',
                    txt: '清單列表',
                    isClick: true
                },
                {
                    url: '/important',
                    txt: '重要清單',
                    isClick: false
                },
                {
                    url: '/complete',
                    txt: '已完成',
                    isClick: false
                }
            ];

            for (let i = 0; i < nbts.length; i++){
                if (i == this.listId){
                    nbts[i].isClick = true;
                }
                else{
                    nbts[i].isClick = false;
                }
            }

            return nbts;
        },
    }
}
</script>

<style scoped>
*{
    user-select: none;
    transition-duration: 0.8s;
}

.bg{
    background-color: #4a90e2;
    height: 76px;
}

.tabs{
    width: 580px;
    height: 76px;
    margin-left: 50%;
    transform: translateX(-50%);
}

ul{
    display: flex;
    list-style: none;
    padding: 0px;
}

ul li{
    width: 220px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.label{
    width: 160px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    color: #00408B;
    transition-duration: 0.8s;
}

.label:hover{
    color: #fff;
}

.label.link{
    color: #fff;
    border-bottom: 4px solid #00408B;
}

.rl {
    text-decoration: none;
}
</style>
