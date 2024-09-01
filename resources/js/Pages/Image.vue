<template>
    <div id="content">
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
                        <label
                            for="file-upload"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Upload Image</label
                        >
                        <div
                            v-if="!imagePreview"
                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                        >
                            <div class="text-center">
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    @change="handleFileUpload"
                                    class="sr-only"
                                />
                                <label
                                    for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-600 focus-within:ring-offset-2 hover:text-teal-500"
                                >
                                    <span>Upload an image</span>
                                </label>
                                <p class="text-xs leading-5 text-gray-600">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>

                        <!-- Preview of the uploaded image -->
                        <div
                            v-if="imagePreview"
                            class="mt-2 flex justify-center"
                        >
                            <img
                                :src="imagePreview"
                                alt="Uploaded image preview"
                                class="rounded-lg border border-gray-200 max-h-96"
                            />
                        </div>

                        <button
                            v-if="!predictionResult"
                            @click="submitImage"
                            class="mt-4 bg-teal-600 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>

                    <div v-if="predictionResult" class="mt-8">
                        <h3 class="text-lg font-bold">
                            Prediction:
                            <span class="text-red-500">{{
                                predictionResult
                            }}</span>
                        </h3>
                        <!-- <h4 class="text-md font-semibold mt-4">
                            Probabilities:
                        </h4>
                        <ul class="list-disc ml-5">
                            <li
                                v-for="(prob, disease) in probabilities"
                                :key="disease"
                            >
                                {{ disease }}: {{ (prob * 100).toFixed(2) }}%
                            </li>
                        </ul> -->

                        <!-- Display Symptoms -->
                        <div class="mt-6">
                            <h4 class="text-md font-semibold">
                                Possible Symptoms:
                            </h4>
                            <ul class="list-disc ml-5">
                                <li
                                    v-for="symptom in diseaseSymptoms"
                                    :key="symptom"
                                >
                                    {{ symptom }}
                                </li>
                            </ul>
                        </div>

                        <!-- Display Cure Information -->
                        <div class="mt-6">
                            <h4 class="text-md font-semibold">How to cure:</h4>
                            <p class="mt-2 text-gray-700">
                                {{ diseaseCureText }}
                            </p>
                        </div>

                        <div class="space-x-8">
                            <button
                                @click="reloadPage"
                                class="mt-8 bg-teal-600 text-white px-4 py-2 rounded"
                            >
                                Test Again
                            </button>

                            <button
                                @click="downloadPDF"
                                class="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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
    PhotoIcon,
    CheckBadgeIcon,
    ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { usePage } from '@inertiajs/vue3'

const downloadPDF = () => {
    const { props } = usePage() // Access the Inertia page props
    const userName = props.auth.user.name.replace(/\s+/g, '')

    // Get the current date and time
    const now = new Date()
    const formattedDateTime = now
        .toISOString()
        .replace(/[-T:.Z]/g, '')
        .slice(0, 14)

    // Combine user name and formatted date-time for the file name
    const fileName = `${userName}${formattedDateTime}.pdf`

    const content = document.getElementById('content')

    if (!content) {
        console.error("Element with id 'content' not found in the DOM.")
        return
    }

    html2canvas(content, { scale: 2 })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            const imgProps = pdf.getImageProperties(imgData)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            pdf.save(fileName)
        })
        .catch((error) => {
            console.error('Error during PDF creation:', error)
        })
}

const file = ref(null)
const imagePreview = ref(null) // To hold the image preview URL
const predictionResult = ref(null)
const probabilities = ref(null)
const diseaseCureText = ref('') // To hold the cure information based on the prediction
const diseaseSymptoms = ref([]) // To hold the symptoms information based on the prediction

const handleFileUpload = (event) => {
    file.value = event.target.files[0]
    if (file.value) {
        imagePreview.value = URL.createObjectURL(file.value)
    }
}

const submitImage = async () => {
    if (!file.value) {
        alert('Please upload an image')
        return
    }

    const formData = new FormData()
    formData.append('image', file.value)

    try {
        const response = await axios.post(
            'http://127.0.0.1:5000/api/predict',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        predictionResult.value = response.data.prediction
        probabilities.value = response.data.probabilities

        // Get the cure information based on the prediction
        diseaseCureText.value = getCureText(predictionResult.value)
        diseaseSymptoms.value = getSymptoms(predictionResult.value)
    } catch (error) {
        console.error('There was an error!', error)
        alert('Failed to get prediction. Please try again.')
    }
}

// Function to return the cure information based on the disease
const getCureText = (disease) => {
    const cures = {
        shingles:
            'Shingles can be treated with antiviral medications like acyclovir, valacyclovir, or famciclovir. Pain management is also important, and it’s recommended to keep the rash clean and dry. Contact a healthcare provider if you suspect shingles.',
        'athlete-foot':
            'Athlete’s foot is usually treated with antifungal creams, sprays, or powders. Keeping the feet clean and dry is important, and it may be necessary to change socks frequently.',
        cellulitis:
            'Cellulitis is typically treated with antibiotics. Elevating the affected area and using pain relievers like ibuprofen can help reduce discomfort. It’s important to seek medical attention if symptoms worsen.',
        chickenpox:
            'Chickenpox treatment primarily involves relieving symptoms. Calamine lotion, antihistamines, and oatmeal baths can reduce itching. Staying hydrated and resting is also important. In severe cases, antiviral medication may be prescribed.',
        'cutaneous-larva-migrans':
            'This condition is treated with antiparasitic medications like albendazole or ivermectin. Avoid walking barefoot in areas where the larvae may be present.',
        impetigo:
            'Impetigo is usually treated with topical or oral antibiotics. Keeping the affected area clean and avoiding touching the sores can help prevent spreading.',
        'nail-fungus':
            'Nail fungus is treated with antifungal medications, which may be topical or oral. It can take several months for the infection to clear.',
        ringworm:
            'Ringworm is treated with antifungal creams or oral medications, depending on the severity. Keeping the affected area clean and dry is crucial.',
        Lung_Opacity:
            'Treatment for lung opacity depends on the underlying cause, which could range from infections to chronic diseases. A thorough evaluation by a healthcare provider is necessary to determine the appropriate treatment.',
        'Viral Pneumonia':
            'Viral pneumonia is usually treated with rest, fluids, and over-the-counter medications to relieve symptoms. In severe cases, antiviral medications or hospitalization may be required.'
    }

    return cures[disease] || 'No cure information available for this condition.'
}

// Function to return the symptoms based on the disease
const getSymptoms = (disease) => {
    const symptoms = {
        shingles: [
            'Pain, burning, numbness or tingling',
            'Sensitivity to touch',
            'A red rash that begins a few days after the pain',
            'Fluid-filled blisters that break open and crust over'
        ],
        'athlete-foot': [
            'Itching, stinging, and burning between your toes',
            'Itchy blisters',
            'Cracking and peeling skin',
            'Dryness and scaling on the soles of your feet'
        ],
        cellulitis: [
            'Red area of skin that tends to expand',
            'Swelling',
            'Tenderness',
            'Pain',
            'Warmth',
            'Fever'
        ],
        chickenpox: [
            'Fever',
            'Loss of appetite',
            'Headache',
            'Tiredness and a general feeling of being unwell',
            'Red spots that develop into fluid-filled blisters'
        ]
        // Add symptoms for other conditions...
    }

    return (
        symptoms[disease] || [
            'No symptoms information available for this condition.'
        ]
    )
}

const navigation = [
    // { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    {
        name: 'Image',
        href: '/image',
        icon: PhotoIcon,
        current: true
    },
    {
        name: 'Text',
        href: '/text',
        icon: ChatBubbleOvalLeftEllipsisIcon,
        current: false
    }
]

const userNavigation = [
    // { name: 'Profile', href: '#' },
    { name: 'Log out', href: '#', action: () => handleLogout() }
]

const sidebarOpen = ref(false)

const handleLogout = () => {
    Inertia.post(route('logout'))
}

const reloadPage = () => {
    window.location.reload()
}
</script>
