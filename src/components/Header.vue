<template>
  <Popover class="relative bg-primary-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="../assets/favicon.svg" alt />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="navbar-open-menu">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-gray-300' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-300']"
            >
              <span>Item One</span>
              <ChevronDownIcon
                :class="[open ? 'text-gray-300' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-300']"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="popover-panel">
                <div class="popover-container">
                  <div class="popover-panel-grid">
                    <!-- use router link instead of anchor tag -->
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="group popover-panel-grid-item"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-300">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-white">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                  <div
                    class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-10"
                  >
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a
                        :href="item.href"
                        class="-m-2 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-green-100"
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-10 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#" class="text-base font-medium text-white hover:text-gray-300">Item Two</a>
          <a href="#" class="text-base font-medium text-white hover:text-gray-300">Item Three</a>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-gray-300' : 'text-white', 'group navbar-drop-arrow']"
            >
              <span>Item Four</span>
              <ChevronDownIcon
                :class="[open ? 'text-green-300' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-300']"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="popover-panel">
                <div class="popover-container">
                  <div class="popover-panel-grid">
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="group popover-panel-grid-item"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-300">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-white">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-100 sm:px-8 sm:py-8">
                    <div>
                      <h3 class="text-sm tracking-wide font-medium text-gray-600 uppercase">Item</h3>
                      <ul class="mt-4 space-y-4">
                        <li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
                          <a
                            :href="post.href"
                            class="font-medium text-gray-500 hover:text-gray-600"
                          >{{ post.name }}</a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a href="#" class="font-medium text-gray-500 hover:text-gray-600">
                        ItemItem
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button
            class="rounded-md p-2 mr-6 inline-flex items-center justify-center hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary focus:bg-primary-light"
            :aria-label="`Switch to ${isDarkMode ? 'light theme' : 'dark theme'}`"
            @click="toggleDarkMode()"
          >
            <SunIcon
              v-if="!isDarkMode"
              class="fill-current text-white hover:text-gray-200 h-6 w-6"
              aria-hidden="true"
            />
            <MoonIcon
              v-else
              class="fill-current text-white hover:text-gray-200 h-6 w-6"
              aria-hidden="true"
            />
          </button>
          <a
            href="#"
            class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-primary-light hover:text-secondary-light"
          >Sign in</a>
          <a
            href="#"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary-light hover:bg-secondary-dark"
          >Sign up</a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 md:hidden origin-top-right p-2 top-0 transform transition z-10"
      >
        <div
          class="bg-primary-dark divide-primary-light divide-y-2 ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/favicon.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark hover:text-gray-400 hover:bg-primary-light inline-flex items-center justify-center p-2 rounded-md text-gray-300"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-secondary-dark"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-gray-200"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-200">{{ item.name }}</span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-200 hover:text-secondary-dark">Item</a>

              <a href="#" class="text-base font-medium text-gray-200 hover:text-secondary-dark">Item</a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-200 hover:text-secondary-dark"
              >{{ item.name }}</a>
            </div>
            <div>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-secondary-dark"
              >Sign up</a>
              <p class="mt-6 text-center text-base font-medium text-white">
                Existing customer?
                {{ ' ' }}
                <a
                  href="#"
                  class="text-secondary-light hover:text-secondary-dark"
                >Sign in</a>
              </p>
              <br />
              <div class="text-center">
                <button
                  class="rounded-md p-2 mr-8 inline-flex items-center justify-center hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary focus:bg-primary-light"
                  :aria-label="`Switch to ${isDarkMode ? 'light theme' : 'dark theme'}`"
                  @click="toggleDarkMode()"
                >
                  <SunIcon
                    v-if="!isDarkMode"
                    class="fill-current text-white hover:text-gray-200 h-6 w-6"
                    aria-hidden="true"
                  />
                  <MoonIcon
                    v-else
                    class="fill-current text-white hover:text-gray-200 h-6 w-6"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>


<script>
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
	SunIcon,
	MoonIcon
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { useDark, useToggle } from '@vueuse/core';

const enabled = ref(false);
const solutions = [
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: CursorClickIcon,
	},
	{ name: 'Item', description: 'Item', href: '#', icon: ShieldCheckIcon },
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: RefreshIcon,
	},
];
const callsToAction = [
	{ name: 'Item', href: '#', icon: PlayIcon },
	{ name: 'Item', href: '#', icon: PhoneIcon },
];
const resources = [
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: SupportIcon,
	},
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: BookmarkAltIcon,
	},
	{
		name: 'Item',
		description: 'Item',
		href: '#',
		icon: CalendarIcon,
	},
	{ name: 'Item', description: 'Item', href: '#', icon: ShieldCheckIcon },
];
const recentPosts = [
	{ id: 1, name: 'Item', href: '#' },
	{ id: 2, name: 'Item', href: '#' },
	{ id: 3, name: 'Item', href: '#' },
];

export default {
	components: {
		Popover,
		PopoverButton,
		PopoverGroup,
		PopoverPanel,
		ChevronDownIcon,
		MenuIcon,
		XIcon,
		SunIcon,
		MoonIcon
	},
	setup() {
		const isDarkMode = useDark({ storageKey: 'theme' });
		const toggleDarkMode = useToggle(isDarkMode);
		return {
			solutions,
			callsToAction,
			resources,
			recentPosts,
			enabled,
			isDarkMode,
			toggleDarkMode,
		};
	},
};
</script>