<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog
                class="relative z-50 lg:hidden"
                @close="sidebarOpen = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild
                        as="template"
                        enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <DialogPanel
                            class="relative mr-16 flex w-full max-w-xs flex-1"
                        >
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-300"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-300"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div
                                    class="absolute left-full top-0 flex w-16 justify-center pt-5"
                                >
                                    <button
                                        type="button"
                                        class="-m-2.5 p-2.5"
                                        @click="sidebarOpen = false"
                                    >
                                        <span class="sr-only"
                                            >Close sidebar</span
                                        >
                                        <XMarkIcon
                                            class="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div
                                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
                            >
                                <div class="flex h-16 shrink-0 items-center">
                                    <img
                                        class="h-8 w-auto"
                                        src="/images/logo.png"
                                        alt="MediCheck"
                                    />
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul
                                        role="list"
                                        class="flex flex-1 flex-col gap-y-7"
                                    >
                                        <li>
                                            <ul
                                                role="list"
                                                class="-mx-2 space-y-1"
                                            >
                                                <li
                                                    v-for="item in navigation"
                                                    :key="item.name"
                                                >
                                                    <a
                                                        :href="item.href"
                                                        :class="[
                                                            item.current
                                                                ? 'bg-gray-50 text-teal-600'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                                        ]"
                                                    >
                                                        <component
                                                            :is="item.icon"
                                                            :class="[
                                                                item.current
                                                                    ? 'text-teal-600'
                                                                    : 'text-gray-400 group-hover:text-teal-600',
                                                                'h-6 w-6 shrink-0'
                                                            ]"
                                                            aria-hidden="true"
                                                        />
                                                        {{ item.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mt-auto">
                                            <a
                                                href="#"
                                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                                            >
                                                <Cog6ToothIcon
                                                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-teal-600"
                                                    aria-hidden="true"
                                                />
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div
            class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
        >
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
                class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
            >
                <div class="flex h-16 shrink-0 items-center space-x-4">
                    <img
                        class="h-12 w-auto"
                        src="/images/logo.png"
                        alt="MediCheck"
                    />
                    <span>MediCheck</span>
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <a
                                        :href="item.href"
                                        :class="[
                                            item.current
                                                ? 'bg-gray-50 text-teal-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600',
                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                        ]"
                                    >
                                        <component
                                            :is="item.icon"
                                            :class="[
                                                item.current
                                                    ? 'text-teal-600'
                                                    : 'text-gray-400 group-hover:text-teal-600',
                                                'h-6 w-6 shrink-0'
                                            ]"
                                            aria-hidden="true"
                                        />
                                        {{ item.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-auto">
                            <a
                                href="#"
                                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                                <Cog6ToothIcon
                                    class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-teal-600"
                                    aria-hidden="true"
                                />
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div
                class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
            >
                <button
                    type="button"
                    class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    @click="sidebarOpen = true"
                >
                    <span class="sr-only">Open sidebar</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Separator -->
                <div
                    class="h-6 w-px bg-gray-200 lg:hidden"
                    aria-hidden="true"
                />

                <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <div class="flex flex-1"></div>
                    <div class="flex items-center gap-x-4 lg:gap-x-6">
                        <button
                            type="button"
                            class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                        >
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <!-- Separator -->
                        <div
                            class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                            aria-hidden="true"
                        />

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img
                                    class="h-8 w-8 rounded-full bg-gray-50"
                                    :src="`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                        $page.props.auth.user.name
                                    )}`"
                                    alt="Profile"
                                />
                                <span class="hidden lg:flex lg:items-center">
                                    <span
                                        class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                                        aria-hidden="true"
                                        >{{ $page.props.auth.user.name }}</span
                                    >
                                    <ChevronDownIcon
                                        class="ml-2 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </MenuButton>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                                >
                                    <MenuItem
                                        v-for="item in userNavigation"
                                        :key="item.name"
                                        v-slot="{ active }"
                                    >
                                        <a
                                            :href="item.href"
                                            @click.prevent="handleLogout"
                                            :class="[
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            ]"
                                            >{{ item.name }}</a
                                        >
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="col-span-full">
                        <!-- Symptom Selection -->
                        <div v-if="!result">
                            <h3 class="text-lg font-semibold">
                                Select Symptoms
                            </h3>
                            <div class="mt-4 grid grid-cols-4 gap-4">
                                <label
                                    v-for="symptom in symptoms"
                                    :key="symptom"
                                    class="inline-flex items-center space-x-2"
                                >
                                    <input
                                        type="checkbox"
                                        :value="symptom"
                                        v-model="selectedSymptoms"
                                        class="form-checkbox h-4 w-4 text-teal-600"
                                    />
                                    <span class="text-sm text-gray-700">{{
                                        symptom
                                    }}</span>
                                </label>
                            </div>

                            <!-- Input Days -->
                            <div class="mt-16">
                                <label
                                    for="days"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Number of Days
                                </label>
                                <input
                                    v-model="days"
                                    id="days"
                                    type="number"
                                    min="1"
                                    class="mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                    placeholder="Enter number of days"
                                />
                            </div>

                            <!-- Submit Button -->
                            <button
                                @click="submitSymptoms"
                                class="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>

                        <!-- Display Results -->
                        <div v-if="result" class="mt-8">
                            <h3 class="text-lg font-bold">
                                Prediction:
                                <span class="text-red-500">{{
                                    result.disease
                                }}</span>
                            </h3>
                            <div class="mt-6">
                                <h4 class="text-md font-semibold">
                                    Description:
                                </h4>
                                <p class="mt-2 text-gray-700">
                                    {{ result.description }}
                                </p>
                            </div>
                            <div class="mt-6">
                                <h4 class="text-md font-semibold">
                                    Precautions:
                                </h4>
                                <ul class="list-disc ml-5">
                                    <li
                                        v-for="precaution in result.precautions"
                                        :key="precaution"
                                    >
                                        {{ precaution }}
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-6">
                                <h4 class="text-md font-semibold">Advice:</h4>
                                <p class="mt-2 text-gray-700">
                                    {{ result.advice }}
                                </p>
                            </div>
                            <button
                                @click="reloadPage"
                                class="mt-8 bg-teal-600 text-white px-4 py-2 rounded"
                            >
                                Test Again
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    CheckBadgeIcon,
    ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'

const navigation = [
    // { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    {
        name: 'Symptoms Checker',
        href: '/symptom-checker',
        icon: CheckBadgeIcon,
        current: false
    },
    {
        name: 'Chat',
        href: '/chat',
        icon: ChatBubbleOvalLeftEllipsisIcon,
        current: true
    }
]

const userNavigation = [
    // { name: 'Profile', href: '#' },
    { name: 'Log out', href: '#', action: () => handleLogout() }
]

const sidebarOpen = ref(false)

const symptoms = ref([])
const selectedSymptoms = ref([])
const days = ref(1)
const result = ref(null)

onMounted(async () => {
    // Fetch the list of symptoms from the API
    try {
        const response = await axios.get(
            'http://127.0.0.1:5000/api/symptoms-list'
        )
        symptoms.value = response.data
    } catch (error) {
        console.error('Error fetching symptoms:', error)
    }
})

const submitSymptoms = async () => {
    if (selectedSymptoms.value.length === 0 || days.value < 1) {
        alert(
            'Please select at least one symptom and enter a valid number of days.'
        )
        return
    }

    try {
        const response = await axios.post(
            'http://127.0.0.1:5000/api/submit_symptoms',
            {
                symptoms: selectedSymptoms.value,
                days: days.value
            }
        )

        result.value = response.data
    } catch (error) {
        console.error('Error submitting symptoms:', error)
    }
}

const handleLogout = () => {
    Inertia.post(route('logout'))
}

const reloadPage = () => {
    window.location.reload()
}
</script>
