<script lang="ts" setup>
import { useHead } from "@vueuse/head";
import { useRouter } from "vue-router";
const router = useRouter();

const sec = ref(5);
let id: number;

useHead({
    title: "404 not found",
});

onMounted(() => {
    id = setInterval(() => {
        sec.value = sec.value - 1;
        if (sec.value <= 0) {
            router.replace("/");
        }
    }, 1000);
});

onUnmounted(() => {
    clearInterval(id);
});
</script>

<template>
    <div class="not-found">
        <div class="x-mian">
            <div>你所寻找的页面不在服务区~</div>
            <div>{{ sec }}秒后返回主页</div>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #666;
}
.x-mian div {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
