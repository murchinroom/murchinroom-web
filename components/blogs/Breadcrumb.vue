<template>
  <div ref="breadcrumbContainer" class="relative">
    <nav class="flex items-center space-x-2 overflow-hidden">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <div class="flex items-center">
          <span v-if="index > 0" class="mx-1">></span>
          <span @click="toggleTreeView(item._path)" :class="{'font-bold text-black cursor-default': item._path === $route.path, 'cursor-pointer text-gray-600 hover:text-gray-900 hover:underline': item._path !== $route.path}" class="truncate max-w-xs mx-1">
            <Icon :name="item.children ? 'bx:bxs-folder-open' : 'bx:bxs-file'" class="mr-0.5 mb-1.5 inline-block align-middle" />
            {{ item.title }}
          </span>
        </div>
      </template>
    </nav>
    <div v-if="showTreeView" class="tree-panel absolute left-0 top-full mt-2 h-screen w-full bg-slate-50 shadow-md z-10 overflow-y-auto" @click.stop>
      <BlogsTreeView :items="navigation" :expandPath="expandPath" />
      <button @click="showTreeView = false" class="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-1">✖️</button>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, onMounted, onBeforeUnmount, watch} from 'vue';
import {useRoute} from 'vue-router';

export default defineComponent({
  props: {navigation: {type: Array, required: true}},
  setup(props) {
    const route = useRoute();
    const breadcrumbs = ref([]);
    const showTreeView = ref(false);
    const expandPath = ref('');
    const breadcrumbContainer = ref(null);

    const buildBreadcrumbs = (navigation) => {
      const pathParts = route.path.split('/').filter(Boolean);
      let currentLevel = navigation;
      breadcrumbs.value = pathParts.map(part => {
        const item = currentLevel.find(navItem => navItem._path.split('/').pop() === part);
        if (!item) return {title: part, _path: `/${part}`, children: []};
        currentLevel = item.children || [];
        return item;
      });
    };

    const toggleTreeView = (path) => {
      expandPath.value = path;
      showTreeView.value = !showTreeView.value;
    };

    const handleClickOutside = (event) => {
      if (breadcrumbContainer.value && !breadcrumbContainer.value.contains(event.target)) {
        showTreeView.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    watch(() => props.navigation, (newNavigation) => {
      buildBreadcrumbs(newNavigation);
    }, {immediate: true});

    return {breadcrumbs, showTreeView, expandPath, toggleTreeView, breadcrumbContainer};
  }
});
</script>

<style scoped>
nav {
  @apply flex items-center space-x-2;
}

.tree-panel {
  min-width: 80vw;
  max-width: 80vw;
}

span.truncate {
  /* min-width: 4rem; */
  max-width: 36vw; /* Adjust the max-width as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button {
  @apply text-black bg-gray-200 rounded-full p-1;
}

.absolute {
  width: auto; /* Remove fixed width */
}
</style>
