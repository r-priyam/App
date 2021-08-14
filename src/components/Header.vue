<template>
  <Popover class="relative bg-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="../assets/favicon.svg"
              alt
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-green-300' : 'text-gray-200', 'group rounded-md inline-flex items-center text-base font-medium hover:text-green-400']"
            >
              <span>.....</span>
              <ChevronDownIcon
                :class="[open ? 'text-green-500' : 'text-gray-200', 'ml-2 h-5 w-5 group-hover:text-green-400']"
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
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div class="rounded-xl shadow-xl ring-1 ring-black ring-opacity-4 overflow-hidden">
                  <div class="relative grid gap-6 bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-green-600"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-gray-200"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-300">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-200">{{ item.description }}</p>
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

          <a href="#" class="text-base font-medium text-gray-200 hover:text-green-400">......</a>
          <a href="#" class="text-base font-medium text-gray-200 hover:text-green-400">......</a>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
            :class="[open ? 'text-green-400' : 'text-gray-200', 'group rounded-sm inline-flex items-center text-base font-medium hover:text-green-400']"
            >
              <span>......</span>
              <ChevronDownIcon
              :class="[open ? 'text-green-300' : 'text-gray-200', 'ml-2 h-5 w-5 group-hover:text-green-300']"
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
              <PopoverPanel
                class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div class="rounded-xl shadow-xl ring-1 ring-black ring-opacity-4 overflow-hidden">
                  <div class="relative grid gap-6 bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-green-600"
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-gray-200"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-300">{{ item.name }}</p>
                        <p class="mt-1 text-sm text-gray-200">{{ item.description }}</p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-100 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="text-sm tracking-wide font-medium text-gray-600 uppercase"
                      >......</h3>
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
                        ............
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
          <a
            href="#"
            class="whitespace-nowrap text-base font-medium text-gray-200 hover:text-green-400"
          >Sign in</a>
          <a
            href="#"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
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
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-700 divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="../assets/favicon.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
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
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-green-600"
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
              <a href="#" class="text-base font-medium text-gray-200 hover:text-green-500">......</a>

              <a href="#" class="text-base font-medium text-gray-200 hover:text-green-500">......</a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-200 hover:text-green-500"
              >{{ item.name }}</a>
            </div>
            <div>
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
              >Sign up</a>
              <p class="mt-6 text-center text-base font-medium text-gray-200">
                Write what you want to write lol
                {{ ' ' }}
                <a
                  href="#"
                  class="text-green-400 hover:text-green-500"
                >Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
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
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';

const solutions = [
	{
		name: '......',
		description: '......',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: '......',
		description: '......',
		href: '#',
		icon: CursorClickIcon,
	},
	{ name: '......', description: '......', href: '#', icon: ShieldCheckIcon },
	{
		name: '......',
		description: '......',
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: '......',
		description: '......',
		href: '#',
		icon: RefreshIcon,
	},
];
const callsToAction = [
	{ name: '......', href: '#', icon: PlayIcon },
	{ name: '......', href: '#', icon: PhoneIcon },
];
const resources = [
	{
		name: '......',
		description: '......',
		href: '#',
		icon: SupportIcon,
	},
	{
		name: '......',
		description: '......',
		href: '#',
		icon: BookmarkAltIcon,
	},
	{
		name: '......',
		description: '......',
		href: '#',
		icon: CalendarIcon,
	},
	{ name: '......', description: '......', href: '#', icon: ShieldCheckIcon },
];
const recentPosts = [
	{ id: 1, name: '......', href: '#' },
	{ id: 2, name: '......', href: '#' },
	{ id: 3, name: '......', href: '#' },
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
	},
	setup() {
		return {
			solutions,
			callsToAction,
			resources,
			recentPosts,
		};
	},
};
</script>