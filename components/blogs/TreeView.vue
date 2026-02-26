<template>
  <ul class="p-2" >
    <li v-for="item in items" :key="item.path" class="ml-4">
      <div class="flex items-center">
        <span @click="toggleOrNavigate(item)" :class="{'font-bold text-black cursor-default': item.path === $route.path, 'cursor-pointer text-gray-600 hover:text-gray-900 hover:underline': item.path !== $route.path}">
          <Icon :name="!isArticle(item) ? ((item.expanded || shouldExpand(item)) ? 'bx:bxs-folder-open' : 'bx:bxs-folder') : 'bx:bxs-file'" class="mr-0.5 mb-1 inline-block align-middle" />
<!--          <span v-if="item.children" class="mr-2">{{ item.expanded || shouldExpand(item._path) ? '˅' : '˃' }}</span> &lt;!&ndash; Arrow icons &ndash;&gt;-->
          {{ item.title }}
        </span>
      </div>
      <div v-if="item.children && (item.expanded || shouldExpand(item))">
        <BlogsTreeView :items="item.children" :expandPath="expandPath" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
    expandPath: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const navigateTo = (path) => {
      router.push(path);
    };

    const toggleOrNavigate = (item) => {
      if (isArticle(item)) {
        navigateTo(item.path);
      } else {
        item.expanded = !item.expanded;
      }
    };

    const isArticle = (item) => {
      if (!item.children) {
        return true;
      }
      if (item.children.length === 1 && item.children[0].path === item.path) {
        return true;
      }
      return false;
    };

    // shouldExpand prevents user to fold the dir containing current article.
    const shouldExpand = (item) => {
      return !isArticle(item) && props.expandPath.startsWith(item.path);
    };

    return { navigateTo, toggleOrNavigate, isArticle, shouldExpand, route };
  },

});
</script>

<style scoped>
.mr-2 { margin-right: 0.5rem; }
.ml-4 { margin-left: 1rem; } /* Indentation for nested items */
</style>
