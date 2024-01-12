<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const list_item = ['Home', 'Post', 'Song', 'Project', 'Contact'];
const icon_name = ['moon-outline', 'logo-github'];
const website_mode = {
  'Dark': 'moon-outline',
  'Light': 'sunny-outline',
  // 'System': 'desktop-outline'
};
const isHidden = ref(true);
const currentMode = ref('dark'); // Default mode
const navMenuClicked = ref(true)

const toggleHidden = () => {
  isHidden.value = !isHidden.value;
};

const toggleMenu = () => {
  navMenuClicked.value = !navMenuClicked.value;
}

const closeDropdown = (event) => {
  if (!event.target.closest('.dropdown-container')) {
    isHidden.value = true;
  }
};

const changeMode = (mode) => {
  document.documentElement.classList.remove('dark', 'light'); // Remove existing classes
  document.documentElement.classList.add(mode.toLowerCase());
  currentMode.value = mode;
};

onMounted(() => {
  document.body.addEventListener('click', closeDropdown);
  // Set default dark mode on mount
  changeMode('Dark');
});

onUnmounted(() => {
  document.body.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <nav class="w-full flex justify-between relative px-4 md:px-8 lg:px-16  py-4 border-b border-zinc-700">
    <a href="/">
      <h1 class="dark:text-slate-50 text-gray-800 text-10 md:text-lg font-sans poppins">N-Khatiwada.</h1>
    </a>
    <div class="gap-6 justify-between md:rleative px-6 flex">
      <ul :class="{ 'hidden': navMenuClicked }"
        class=" absolute top-20 left-4 md:left-5 md:top-0 md:relative flex md:flex my-auto gap-4 md:gap-5 lg:gap-10 md:mx-7 font-medium text-gray-800 dark:text-slate-50">
        <li class="hover:text-sky-400 cursor-pointer" v-for="(item, index) in list_item" :key="index">
          {{ item }}
        </li>
      </ul>

      <div
        class="relative md:border-l border-zinc-500 pl-6 gap-7 flex justify-between my-auto text-2xl md:text-xl dropdown-container">
        <a v-for="(icon, index) in icon_name" :href="icon === 'logo-github' ? 'https://github.com/yenke-rajan' : '#'"
          :target="icon === 'logo-github' ? '_blank' : ''" :key="index">
          <ion-icon :name="icon"
            class="cursor-pointer text-gray-800 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300"
            @click="icon === 'moon-outline' ? toggleHidden() : changeMode('Dark')"></ion-icon>
        </a>
        <ion-icon name="menu-outline"
          class="md:hidden lg:hidden xl:hidden cursor-pointer text-gray-800 hover:text-gray-60 text-2xl dark:text-slate-500 dark:hover:text-slate-300"
          @click="toggleMenu()"></ion-icon>
        <ul :class="{ 'hidden': isHidden }" class="absolute top-14 border rounded-md border-zinc-600">
          <li v-for="(icon, mode) in website_mode" :key="mode" @click="changeMode(mode)"
            class="text-md cursor-pointer flex justify-start align-middle gap-3 p-2 hover:bg-slate-600 hover:text-red-50">
            <ion-icon :name="icon" class="  text-lg  my-auto"></ion-icon>
            <span class=" my-auto text-lg">{{ mode }}</span>
          </li>
        </ul>
      </div>
    </div>


  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.poppins {
  font-family: 'Poppins', sans-serif;
}</style>
