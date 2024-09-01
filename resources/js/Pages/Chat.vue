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

                            <!-- Sidebar component -->
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
                                        <!-- <li class="mt-auto">
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
                                        </li> -->
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
            <!-- Sidebar component -->
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
                        <!-- <li class="mt-auto">
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
                        </li> -->
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
                            <!-- <BellIcon class="h-6 w-6" aria-hidden="true" /> -->
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
                                        >Yway Chit Aung</span
                                    >
                                    <ChevronDownIcon
                                        class="ml-2 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </MenuButton>
                            <Transition
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
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>

            <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="col-span-full">
                        <!-- Show Selected Symptoms -->
                        <div v-if="selectedSymptoms.length > 0" class="mb-8">
                            <h3 class="text-lg font-semibold">
                                Selected Symptoms
                            </h3>
                            <div class="mt-4 flex flex-wrap gap-4">
                                <div
                                    v-for="symptom in selectedSymptoms"
                                    :key="symptom"
                                    class="flex items-center bg-teal-600 text-white px-3 py-1 rounded-full"
                                >
                                    <span class="text-sm">{{
                                        symptom.replace(/_/g, ' ')
                                    }}</span>
                                    <button
                                        @click="toggleSymptomSelection(symptom)"
                                        class="ml-2 text-white hover:text-gray-300"
                                    >
                                        <XMarkIcon
                                            class="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Symptom Selection -->
                        <div v-if="!result">
                            <p class="text-2xl font-bold">Search</p>

                            <!-- Search Input -->
                            <div class="mt-4">
                                <input
                                    v-model="searchQuery"
                                    type="text"
                                    placeholder="Search symptoms..."
                                    class="block w-full sm:w-1/2 lg:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                />
                            </div>

                            <!-- Only display symptoms if searchQuery is not empty and there are filtered symptoms -->
                            <div
                                v-if="
                                    searchQuery && filteredSymptoms.length > 0
                                "
                            >
                                <h3 class="mt-8 text-lg font-semibold">
                                    Select Symptoms
                                </h3>

                                <!-- Symptoms Grid -->
                                <div
                                    class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    <div
                                        v-for="symptom in filteredSymptoms"
                                        :key="symptom.name"
                                        class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <h4 class="text-lg font-semibold">
                                            {{
                                                symptom.name.replace(/_/g, ' ')
                                            }}
                                        </h4>
                                        <p class="text-gray-600 text-sm mt-1">
                                            {{ symptom.description }}
                                        </p>
                                        <button
                                            @click="
                                                toggleSymptomSelection(
                                                    symptom.name
                                                )
                                            "
                                            :class="[
                                                isSelected(symptom.name)
                                                    ? 'bg-teal-600 text-white'
                                                    : 'bg-white text-teal-600 border border-teal-600',
                                                'mt-4 py-2 px-4 rounded text-sm font-medium transition-colors duration-300'
                                            ]"
                                        >
                                            {{
                                                isSelected(symptom.name)
                                                    ? 'Selected'
                                                    : 'Select symptom'
                                            }}
                                        </button>
                                    </div>
                                </div>
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
import { ref, computed, onMounted } from 'vue'
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
    CheckBadgeIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    Cog6ToothIcon,
    XMarkIcon,
    ChevronDownIcon
} from '@heroicons/vue/24/outline'
import axios from 'axios'

const navigation = [
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
    { name: 'Log out', href: '#', action: () => handleLogout() }
]

const sidebarOpen = ref(false)
const symptoms = ref([])
const selectedSymptoms = ref([])
const days = ref(1)
const result = ref(null)
const searchQuery = ref('')

onMounted(async () => {
    try {
        const response = await axios.get(
            'http://127.0.0.1:5000/api/symptoms-list'
        )
        symptoms.value = response.data
    } catch (error) {
        console.error('Error fetching symptoms:', error)
    }
})

const isSelected = (symptom) => {
    return selectedSymptoms.value.includes(symptom)
}

const toggleSymptomSelection = (symptom) => {
    if (isSelected(symptom)) {
        selectedSymptoms.value = selectedSymptoms.value.filter(
            (name) => name !== symptom
        )
    } else {
        selectedSymptoms.value.push(symptom)
    }
}

const filteredSymptoms = computed(() => {
    return symptomMetadata.filter(
        (symptom) =>
            symptom.name
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()) ||
            symptom.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
    )
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

const symptomMetadata = [
    {
        name: 'itching',
        description:
            'An irritating sensation that makes you want to scratch the skin.',
        tags: ['skin', 'irritation']
    },
    {
        name: 'skin_rash',
        description: 'A change in skin color, appearance, or texture.',
        tags: ['skin', 'rash']
    },
    {
        name: 'headache',
        description:
            'Pain in the head, which can be localized or widespread, often due to tension or illness.',
        tags: ['head', 'pain', 'migraine']
    },
    {
        name: 'dizziness',
        description:
            'A sensation of spinning or losing balance, often due to inner ear issues or dehydration.',
        tags: ['head', 'balance', 'vertigo']
    },
    {
        name: 'chest_pain',
        description:
            'Discomfort or pain in the chest, which can be caused by heart conditions or other factors.',
        tags: ['chest', 'heart', 'pain']
    },
    {
        name: 'heartburn',
        description: 'A burning sensation in the chest caused by acid reflux.',
        tags: ['heart', 'chest', 'acid']
    },
    {
        name: 'joint_pain',
        description: 'Discomfort, aches, or soreness in the joints.',
        tags: ['joint', 'pain', 'arthritis']
    },
    {
        name: 'stomach_pain',
        description:
            'Pain that occurs in the area between the chest and the pelvis.',
        tags: ['stomach', 'abdominal', 'pain']
    },
    {
        name: 'acidity',
        description:
            'A condition where stomach acid flows back into the food pipe, causing discomfort.',
        tags: ['stomach', 'acid', 'reflux']
    },
    {
        name: 'ulcers_on_tongue',
        description:
            'Open sores that appear on the tongue, often painful and sometimes swollen.',
        tags: ['tongue', 'ulcer', 'mouth']
    },
    {
        name: 'muscle_wasting',
        description:
            'A decrease in muscle mass due to disease, aging, or lack of use.',
        tags: ['muscle', 'weakness', 'atrophy']
    },
    {
        name: 'vomiting',
        description:
            "The involuntary, forceful expulsion of the contents of one's stomach through the mouth.",
        tags: ['stomach', 'nausea', 'vomit']
    },
    {
        name: 'burning_micturition',
        description:
            'A burning sensation during urination, often due to a urinary tract infection.',
        tags: ['urination', 'burning', 'UTI']
    },
    {
        name: 'spotting_urination',
        description:
            'The presence of small amounts of blood in urine, often indicating an infection or other condition.',
        tags: ['urination', 'blood', 'UTI']
    },
    {
        name: 'fatigue',
        description: 'A feeling of extreme physical or mental tiredness.',
        tags: ['tiredness', 'exhaustion', 'weakness']
    },
    {
        name: 'weight_gain',
        description:
            'An increase in body weight that may be due to an increase in muscle mass, fat deposits, or body fluids.',
        tags: ['weight', 'gain', 'obesity']
    },
    {
        name: 'anxiety',
        description:
            'A feeling of worry, nervousness, or unease about something with an uncertain outcome.',
        tags: ['mental', 'stress', 'nervousness']
    },
    {
        name: 'cold_hands_and_feets',
        description:
            'A condition where the hands and feet feel unusually cold, often due to poor circulation.',
        tags: ['cold', 'hands', 'feet', 'circulation']
    },
    {
        name: 'mood_swings',
        description:
            'Rapid and extreme changes in mood, often unrelated to external circumstances.',
        tags: ['mood', 'emotions', 'swings']
    },
    {
        name: 'weight_loss',
        description:
            'A decrease in body weight due to various factors, including illness, diet, or exercise.',
        tags: ['weight', 'loss', 'diet']
    },
    {
        name: 'restlessness',
        description:
            'A state of agitation, often leading to an inability to stay still or focus.',
        tags: ['agitation', 'nervousness', 'restless']
    },
    {
        name: 'lethargy',
        description: 'A lack of energy and enthusiasm; sluggishness.',
        tags: ['fatigue', 'tiredness', 'sluggishness']
    },
    {
        name: 'patches_in_throat',
        description:
            'Visible areas of discoloration or irritation in the throat, often due to infection.',
        tags: ['throat', 'patches', 'infection']
    },
    {
        name: 'irregular_sugar_level',
        description:
            'Fluctuations in blood sugar levels, which may indicate diabetes or other metabolic conditions.',
        tags: ['sugar', 'diabetes', 'metabolism']
    },
    {
        name: 'cough',
        description:
            'A sudden, forceful expulsion of air from the lungs to clear the airways.',
        tags: ['lungs', 'airways', 'cough']
    },
    {
        name: 'high_fever',
        description:
            'An abnormally high body temperature, often a sign of infection.',
        tags: ['fever', 'temperature', 'infection']
    },
    {
        name: 'sunken_eyes',
        description:
            'Eyes that appear hollow, often due to dehydration or illness.',
        tags: ['eyes', 'dehydration', 'hollow']
    },
    {
        name: 'breathlessness',
        description: 'Shortness of breath or difficulty breathing.',
        tags: ['breath', 'lungs', 'difficulty']
    },
    {
        name: 'sweating',
        description:
            'The release of sweat by the body, often as a response to heat, stress, or illness.',
        tags: ['sweat', 'heat', 'stress']
    },
    {
        name: 'dehydration',
        description:
            'A condition caused by the excessive loss of water from the body.',
        tags: ['water', 'loss', 'dehydration']
    },
    {
        name: 'indigestion',
        description:
            'Discomfort in the stomach associated with difficulty in digesting food.',
        tags: ['stomach', 'digestion', 'discomfort']
    },
    {
        name: 'yellowish_skin',
        description:
            'A yellow discoloration of the skin, often indicating jaundice or liver issues.',
        tags: ['skin', 'yellow', 'jaundice']
    },
    {
        name: 'dark_urine',
        description:
            'Urine that is darker than usual, which may indicate dehydration or other conditions.',
        tags: ['urine', 'dark', 'dehydration']
    },
    {
        name: 'nausea',
        description: 'A feeling of sickness with an inclination to vomit.',
        tags: ['stomach', 'sickness', 'vomit']
    },
    {
        name: 'loss_of_appetite',
        description:
            'A decreased desire to eat, often associated with illness or stress.',
        tags: ['appetite', 'loss', 'stress']
    },
    {
        name: 'pain_behind_the_eyes',
        description:
            'Discomfort or aching sensation behind the eyes, often due to sinus issues or headaches.',
        tags: ['eyes', 'pain', 'sinus']
    },
    {
        name: 'back_pain',
        description:
            'Discomfort or pain in the back, which can range from mild to severe.',
        tags: ['back', 'pain', 'spine']
    },
    {
        name: 'constipation',
        description:
            'Difficulty in passing stools or infrequent bowel movements.',
        tags: ['bowel', 'stool', 'difficulty']
    },
    {
        name: 'abdominal_pain',
        description:
            'Pain located in the abdomen, which can be caused by various conditions.',
        tags: ['abdomen', 'stomach', 'pain']
    },
    {
        name: 'diarrhoea',
        description:
            'Frequent, loose, or watery stools, often due to infection or diet.',
        tags: ['stool', 'loose', 'watery']
    },
    {
        name: 'mild_fever',
        description:
            'A slightly elevated body temperature, often indicating a mild infection.',
        tags: ['fever', 'temperature', 'infection']
    },
    {
        name: 'yellow_urine',
        description:
            'Urine that appears more yellow than usual, often a sign of dehydration or dietary factors.',
        tags: ['urine', 'yellow', 'dehydration']
    },
    {
        name: 'yellowing_of_eyes',
        description:
            'Yellow discoloration of the whites of the eyes, often a sign of jaundice.',
        tags: ['eyes', 'yellow', 'jaundice']
    },
    {
        name: 'acute_liver_failure',
        description:
            'A rapid decline in liver function, often life-threatening and requiring immediate medical attention.',
        tags: ['liver', 'failure', 'acute']
    },
    {
        name: 'fluid_overload',
        description:
            'An excessive accumulation of fluid in the body, often due to heart or kidney failure.',
        tags: ['fluid', 'accumulation', 'failure']
    },
    {
        name: 'swelling_of_stomach',
        description:
            'An increase in the size of the abdomen, often due to fluid retention or gas.',
        tags: ['abdomen', 'swelling', 'fluid']
    },
    {
        name: 'swelled_lymph_nodes',
        description:
            'Enlarged lymph nodes, often a sign of infection or other illness.',
        tags: ['lymph', 'nodes', 'infection']
    },
    {
        name: 'malaise',
        description:
            'A general feeling of discomfort or unease, often the first sign of an infection or illness.',
        tags: ['discomfort', 'unease', 'illness']
    },
    {
        name: 'blurred_and_distorted_vision',
        description:
            'Vision that is not clear or is distorted, often due to eye conditions or fatigue.',
        tags: ['vision', 'blurred', 'distorted']
    },
    {
        name: 'phlegm',
        description:
            'Thick mucus produced by the respiratory system, often during illness.',
        tags: ['mucus', 'respiratory', 'illness']
    },
    {
        name: 'throat_irritation',
        description:
            'Discomfort or soreness in the throat, often due to infection or allergies.',
        tags: ['throat', 'irritation', 'infection']
    },
    {
        name: 'redness_of_eyes',
        description:
            'Red or bloodshot eyes, often due to irritation or infection.',
        tags: ['eyes', 'redness', 'irritation']
    },
    {
        name: 'sinus_pressure',
        description:
            'A feeling of pressure in the sinus cavities, often due to congestion or infection.',
        tags: ['sinus', 'pressure', 'congestion']
    },
    {
        name: 'runny_nose',
        description:
            'Excessive mucus discharge from the nose, often due to allergies or a cold.',
        tags: ['nose', 'mucus', 'discharge']
    },
    {
        name: 'congestion',
        description:
            'A feeling of stuffiness in the nose and sinuses, often due to a cold or allergies.',
        tags: ['nose', 'sinus', 'stuffiness']
    },
    {
        name: 'weakness_in_limbs',
        description: 'A feeling of reduced strength in the arms or legs.',
        tags: ['limbs', 'weakness', 'strength']
    },
    {
        name: 'fast_heart_rate',
        description:
            'A rapid heartbeat, often due to stress, anxiety, or medical conditions.',
        tags: ['heart', 'rate', 'rapid']
    },
    {
        name: 'pain_during_bowel_movements',
        description:
            'Discomfort or pain while passing stools, often due to hemorrhoids or other conditions.',
        tags: ['bowel', 'pain', 'stools']
    },
    {
        name: 'pain_in_anal_region',
        description:
            'Discomfort or pain in the anus, often due to hemorrhoids or fissures.',
        tags: ['anal', 'pain', 'hemorrhoids']
    },
    {
        name: 'bloody_stool',
        description:
            'The presence of blood in the stool, often a sign of gastrointestinal bleeding.',
        tags: ['stool', 'blood', 'bleeding']
    },
    {
        name: 'irritation_in_anus',
        description: 'A feeling of discomfort or itching in the anal area.',
        tags: ['anal', 'itching', 'irritation']
    },
    {
        name: 'neck_pain',
        description:
            'Discomfort or pain in the neck, often due to strain or injury.',
        tags: ['neck', 'pain', 'strain']
    },
    {
        name: 'cramps',
        description:
            'Painful, involuntary muscle contractions, often occurring in the legs or abdomen.',
        tags: ['muscle', 'cramps', 'contractions']
    },
    {
        name: 'bruising',
        description:
            'Discoloration of the skin due to blood leaking from vessels under the skin, often due to injury.',
        tags: ['skin', 'bruising', 'injury']
    },
    {
        name: 'obesity',
        description:
            'Excessive body fat, often associated with increased risk of health problems.',
        tags: ['weight', 'fat', 'health']
    },
    {
        name: 'swollen_legs',
        description:
            'Enlargement of the legs due to fluid retention, often due to heart or kidney issues.',
        tags: ['legs', 'swelling', 'fluid']
    },
    {
        name: 'swollen_blood_vessels',
        description:
            'Enlarged blood vessels, often due to high blood pressure or other conditions.',
        tags: ['blood', 'vessels', 'swollen']
    },
    {
        name: 'puffy_face_and_eyes',
        description:
            'Swelling of the face and around the eyes, often due to fluid retention or allergies.',
        tags: ['face', 'eyes', 'swelling']
    },
    {
        name: 'enlarged_thyroid',
        description:
            'An increase in the size of the thyroid gland, often due to goiter or other thyroid issues.',
        tags: ['thyroid', 'enlargement', 'gland']
    },
    {
        name: 'brittle_nails',
        description:
            'Nails that are easily broken or chipped, often due to nutritional deficiencies.',
        tags: ['nails', 'brittle', 'deficiency']
    },
    {
        name: 'swollen_extremities',
        description:
            'Swelling in the arms or legs, often due to fluid retention or circulatory issues.',
        tags: ['swelling', 'arms', 'legs']
    },
    {
        name: 'excessive_hunger',
        description:
            'An unusually strong desire to eat, often associated with diabetes or other conditions.',
        tags: ['hunger', 'appetite', 'diabetes']
    },
    {
        name: 'drying_and_tingling_lips',
        description:
            'Lips that feel dry and tingly, often due to dehydration or vitamin deficiency.',
        tags: ['lips', 'dry', 'tingling']
    },
    {
        name: 'slurred_speech',
        description:
            'Difficulty speaking clearly, often due to neurological issues or intoxication.',
        tags: ['speech', 'difficulty', 'neurological']
    },
    {
        name: 'knee_pain',
        description:
            'Discomfort or pain in the knee joint, often due to injury or arthritis.',
        tags: ['knee', 'pain', 'joint']
    },
    {
        name: 'hip_joint_pain',
        description: 'Pain in the hip joint, often due to arthritis or injury.',
        tags: ['hip', 'pain', 'joint']
    },
    {
        name: 'muscle_weakness',
        description:
            'A decrease in muscle strength, often due to illness or lack of use.',
        tags: ['muscle', 'weakness', 'strength']
    },
    {
        name: 'stiff_neck',
        description:
            'Difficulty moving the neck, often due to muscle strain or injury.',
        tags: ['neck', 'stiffness', 'strain']
    },
    {
        name: 'swelling_joints',
        description:
            'Enlargement of the joints, often due to inflammation or injury.',
        tags: ['joints', 'swelling', 'inflammation']
    },
    {
        name: 'movement_stiffness',
        description:
            'Difficulty moving joints freely, often due to arthritis or injury.',
        tags: ['movement', 'stiffness', 'joints']
    },
    {
        name: 'spinning_movements',
        description:
            'A sensation of spinning or dizziness, often due to inner ear problems.',
        tags: ['dizziness', 'spinning', 'balance']
    },
    {
        name: 'loss_of_balance',
        description:
            'Difficulty maintaining balance, often due to neurological or inner ear issues.',
        tags: ['balance', 'loss', 'neurological']
    },
    {
        name: 'unsteadiness',
        description:
            'A feeling of being unsteady or wobbly, often due to dizziness or weakness.',
        tags: ['dizziness', 'unsteady', 'balance']
    },
    {
        name: 'weakness_of_one_body_side',
        description:
            'Reduced strength in one side of the body, often due to stroke or neurological conditions.',
        tags: ['weakness', 'one side', 'stroke']
    },
    {
        name: 'loss_of_smell',
        description:
            'A decrease or loss of the ability to smell, often due to a cold or sinus infection.',
        tags: ['smell', 'loss', 'sinus']
    },
    {
        name: 'bladder_discomfort',
        description:
            'Discomfort or pain in the bladder area, often due to a urinary tract infection.',
        tags: ['bladder', 'discomfort', 'UTI']
    },
    {
        name: 'foul_smell_of_urine',
        description:
            'Urine with an unusually strong or unpleasant odor, often due to infection.',
        tags: ['urine', 'smell', 'infection']
    },
    {
        name: 'continuous_feel_of_urine',
        description:
            'A constant urge to urinate, often due to infection or bladder irritation.',
        tags: ['urine', 'urge', 'bladder']
    },
    {
        name: 'passage_of_gases',
        description:
            'The release of gas from the digestive system through the rectum, commonly known as flatulence.',
        tags: ['gas', 'flatulence', 'digestive']
    },
    {
        name: 'internal_itching',
        description:
            'An irritating sensation inside the body that is not relieved by scratching.',
        tags: ['itching', 'internal', 'irritation']
    },
    {
        name: 'toxic_look_(typhos)',
        description:
            'A general appearance of illness, often associated with typhoid fever or other severe infections.',
        tags: ['illness', 'typhoid', 'infection']
    },
    {
        name: 'depression',
        description:
            'A mood disorder characterized by persistent sadness and loss of interest in activities.',
        tags: ['mood', 'sadness', 'disorder']
    },
    {
        name: 'irritability',
        description:
            'Easily annoyed or angered, often due to stress or hormonal changes.',
        tags: ['anger', 'annoyance', 'stress']
    },
    {
        name: 'muscle_pain',
        description:
            'Discomfort or aching in the muscles, often due to strain or illness.',
        tags: ['muscle', 'pain', 'strain']
    },
    {
        name: 'altered_sensorium',
        description:
            'A change in the level of consciousness or awareness, often due to illness or intoxication.',
        tags: ['consciousness', 'awareness', 'illness']
    },
    {
        name: 'red_spots_over_body',
        description:
            'Red, pinpoint spots on the skin, often due to a rash or infection.',
        tags: ['skin', 'red spots', 'rash']
    },
    {
        name: 'belly_pain',
        description: 'Discomfort or pain in the abdominal area.',
        tags: ['belly', 'pain', 'abdomen']
    },
    {
        name: 'abnormal_menstruation',
        description:
            'Irregular or abnormal menstrual cycles, often due to hormonal imbalances.',
        tags: ['menstruation', 'irregular', 'hormonal']
    },
    {
        name: 'dischromic_patches',
        description:
            'Areas of skin that are discolored, often due to infection or skin conditions.',
        tags: ['skin', 'discolored', 'patches']
    },
    {
        name: 'watering_from_eyes',
        description:
            'Excessive tearing from the eyes, often due to irritation or infection.',
        tags: ['eyes', 'tears', 'irritation']
    },
    {
        name: 'increased_appetite',
        description:
            'An unusually strong desire to eat, often associated with certain medical conditions.',
        tags: ['appetite', 'increased', 'eating']
    },
    {
        name: 'polyuria',
        description: 'Excessive urination, often associated with diabetes.',
        tags: ['urination', 'excessive', 'diabetes']
    },
    {
        name: 'family_history',
        description:
            "A record of health conditions present in a person's family, which may indicate a genetic predisposition.",
        tags: ['history', 'family', 'genetic']
    },
    {
        name: 'mucoid_sputum',
        description:
            'Thick mucus produced by the lungs, often due to respiratory infection.',
        tags: ['mucus', 'lungs', 'infection']
    },
    {
        name: 'rusty_sputum',
        description:
            'Sputum with a reddish-brown color, often a sign of a respiratory infection like pneumonia.',
        tags: ['sputum', 'respiratory', 'infection']
    },
    {
        name: 'lack_of_concentration',
        description:
            'Difficulty focusing on tasks, often due to fatigue, stress, or ADHD.',
        tags: ['concentration', 'focus', 'fatigue']
    },
    {
        name: 'visual_disturbances',
        description:
            'Changes in vision, such as blurriness or seeing floaters, often due to eye conditions.',
        tags: ['vision', 'disturbances', 'blurry']
    },
    {
        name: 'receiving_blood_transfusion',
        description:
            'The process of receiving blood from a donor, often due to surgery or severe anemia.',
        tags: ['blood', 'transfusion', 'donor']
    },
    {
        name: 'receiving_unsterile_injections',
        description:
            'Injections administered with non-sterile equipment, increasing the risk of infection.',
        tags: ['injections', 'non-sterile', 'infection']
    },
    {
        name: 'coma',
        description:
            'A state of deep unconsciousness, often due to severe illness or injury.',
        tags: ['unconsciousness', 'illness', 'injury']
    },
    {
        name: 'stomach_bleeding',
        description:
            'Bleeding within the stomach, often due to ulcers or severe gastritis.',
        tags: ['stomach', 'bleeding', 'ulcers']
    },
    {
        name: 'distention_of_abdomen',
        description:
            'Swelling or enlargement of the abdominal area, often due to gas or fluid buildup.',
        tags: ['abdomen', 'swelling', 'fluid']
    },
    {
        name: 'history_of_alcohol_consumption',
        description:
            'A record of alcohol intake, which may indicate risk for certain health conditions.',
        tags: ['alcohol', 'consumption', 'history']
    },
    {
        name: 'fluid_overload_1',
        description:
            "An excessive accumulation of fluid in the body, often a duplicate of 'fluid_overload'.",
        tags: ['fluid', 'accumulation', 'body']
    },
    {
        name: 'blood_in_sputum',
        description:
            'The presence of blood in mucus or phlegm, often due to respiratory infection or injury.',
        tags: ['sputum', 'blood', 'respiratory']
    },
    {
        name: 'prominent_veins_on_calf',
        description:
            'Visible, enlarged veins on the calf, often a sign of varicose veins or deep vein thrombosis.',
        tags: ['veins', 'calf', 'varicose']
    },
    {
        name: 'palpitations',
        description:
            'A feeling of rapid, strong, or irregular heartbeat, often due to stress or heart conditions.',
        tags: ['heartbeat', 'rapid', 'stress']
    },
    {
        name: 'painful_walking',
        description:
            'Discomfort or pain while walking, often due to injury or arthritis.',
        tags: ['walking', 'pain', 'injury']
    },
    {
        name: 'pus_filled_pimples',
        description:
            'Small, raised spots on the skin filled with pus, often due to acne or infection.',
        tags: ['pimples', 'pus', 'acne']
    },
    {
        name: 'blackheads',
        description:
            'Small, dark spots on the skin caused by clogged hair follicles.',
        tags: ['blackheads', 'skin', 'clogged']
    },
    {
        name: 'scurring',
        description:
            'The formation of a rough, dry surface on the skin, often due to healing wounds.',
        tags: ['skin', 'rough', 'dry']
    },
    {
        name: 'skin_peeling',
        description:
            'The shedding or flaking of the outer layer of skin, often due to sunburn or skin conditions.',
        tags: ['skin', 'peeling', 'shedding']
    },
    {
        name: 'silver_like_dusting',
        description:
            'A silvery, powdery appearance on the skin, often associated with psoriasis.',
        tags: ['skin', 'silvery', 'psoriasis']
    },
    {
        name: 'small_dents_in_nails',
        description:
            'Small depressions in the surface of the nails, often a sign of psoriasis or other nail disorders.',
        tags: ['nails', 'depressions', 'psoriasis']
    },
    {
        name: 'inflammatory_nails',
        description:
            'Swelling and redness around the nails, often due to infection or injury.',
        tags: ['nails', 'swelling', 'redness']
    },
    {
        name: 'blister',
        description:
            'A small pocket of fluid under the skin, often caused by friction or burns.',
        tags: ['blister', 'fluid', 'skin']
    },
    {
        name: 'red_sore_around_nose',
        description:
            'A painful, red area around the nostrils, often due to infection or irritation.',
        tags: ['nose', 'sore', 'infection']
    },
    {
        name: 'yellow_crust_ooze',
        description:
            'A yellowish discharge forming a crust on the skin, often due to bacterial infection.',
        tags: ['yellow', 'crust', 'infection']
    }
]
</script>
