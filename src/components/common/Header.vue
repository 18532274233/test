<template>
    <header class="happy-header-container">
        <div class="happy-header-wrapper">
            <div class="title-container">
                <div class="title" @click="ToIndex">{{ title }}</div>
                <div class="brief">{{ brief }}</div>
                <!-- <FontIcon iconClass="iconsousuo" /> -->
            </div>
            <div class="tools-container">
                <span v-if="userId > 0" class="tools-user user-center">
                    <router-link :to="`/users/${userId}`">
                        <Avatar :src="avatar" size="40px"></Avatar>
                    </router-link>
                </span>
                <span v-else class="tools-user user-action-btn">
                    <router-link to="/signin">登录/注册</router-link>
                </span>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useStore } from "~/store/pinia";

const router = useRouter();

// import FontIcon from "./FontIcon.vue"
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    brief: {
        type: String,
    },
});
const ToIndex = () => {
    router.push("/");
    // window.location.href = "/"
};
const store = useStore();
// 判断用户是否作者
const isAuthor = computed(
    () => !!store.User?.Roles?.find(i => i.Title == "Author")
);
// 获取用户ID
const userId = computed(() => store.User.Id ?? 0);
// 获取用户头像
const avatar = computed(() => store.User.Avatar ?? "");
// props
const title = props.title;
const brief = props.brief;
</script>

<style scoped>
.happy-header-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #6a6a6a;
    margin: 0 auto;
}
.title:hover {
    color: black;
}
.title {
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
}
.brief {
    font-size: 14px;
}
.tools-user {
    font-size: 14px;
}
.tools-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
