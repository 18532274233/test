<template>
    <div class="content-layout-container">
        <div class="content-layout-child-container">
            <slot></slot>
        </div>
        <div class="content-layout-widget-container">
            <div class="widget-category">
                <div class="category-title">目录分类</div>
                <ul class="category-list">
                    <li
                        class="category-item"
                        v-for="i in CategoryList"
                        :key="i.Id"
                    >
                        <router-link :to="`/?CategoryID=${i.Id}`">
                            {{ i.CN }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "~/store/pinia";

const store = useStore();

const CategoryList = computed(() => store.Article.CategoryList);
</script>

<style scoped>
.content-layout-container li,
.category-title {
    font-size: 14px;
    color: #444;
}
.content-layout-widget-container {
    padding-top: 20px;
}
a {
    color: #444;
}
.category-title {
    font-weight: bold;
}
.category-item {
    padding: 10px 10px 10px 0px;
    list-style: none;
}
.category-item:before {
    display: none;
}
.category-list {
    display: flex;
    min-height: 36px;
    align-items: center;
}
.content-layout-container {
    display: flex;
    flex-direction: column-reverse;
}
@media screen and (min-width: 1200px) {
    .content-layout-container {
        display: flex;
        flex-direction: row;
    }
    .content-layout-child-container {
        flex: 1;
    }
    .category-list {
        display: block;
    }
    .category-item:before {
        display: inline-block;
    }
    .content-layout-widget-container {
        width: 100px;
        padding: 20px;
    }
}

@media screen and (max-width: 1200px) {
    .category-list {
        margin: 0;
    }
}
</style>
