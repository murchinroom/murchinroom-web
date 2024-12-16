<template>
  <ul class="p-2" >
    <li v-for="item in items" :key="item._path" class="ml-4">
      <div class="flex items-center">
        <span @click="toggleOrNavigate(item)" :class="{'font-bold text-black cursor-default': item._path === $route.path, 'cursor-pointer text-gray-600 hover:text-gray-900 hover:underline': item._path !== $route.path}">
          <Icon :name="item.children ? ((item.expanded || shouldExpand(item._path)) ? 'bx:bxs-folder-open' : 'bx:bxs-folder') : 'bx:bxs-file'" class="mr-0.5 mb-1.5 inline-block align-middle" />
<!--          <span v-if="item.children" class="mr-2">{{ item.expanded || shouldExpand(item._path) ? '˅' : '˃' }}</span> &lt;!&ndash; Arrow icons &ndash;&gt;-->
          {{ item.title }}
        </span>
      </div>
      <div v-if="item.children && (item.expanded || shouldExpand(item._path))">
        <BlogsTreeView :items="item.children" :expandPath="expandPath" />
      </div>
    </li>
  </ul>
</template>

<script>
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
      if (item.children) {
        item.expanded = !item.expanded;
      } else {
        navigateTo(item._path);
      }
    };

    // shouldExpand prevents user to fold the dir containing current article.
    const shouldExpand = (path) => {
      return props.expandPath.startsWith(path);
    };

    return { navigateTo, toggleOrNavigate, shouldExpand, route };
  },

});
</script>

<style scoped>
.mr-2 { margin-right: 0.5rem; }
.ml-4 { margin-left: 1rem; } /* Indentation for nested items */
</style>
