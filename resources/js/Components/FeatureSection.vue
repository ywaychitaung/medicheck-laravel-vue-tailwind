<template>
    <div id="features" class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base font-semibold leading-7 text-teal-600">
                    Discover Your Diagnosis Quickly
                </h2>
                <p
                    class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Everything you need to get a health forecast at your
                    fingertips
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    Predict health conditions with ease and receive instant
                    disease predictions. Just input your symptoms and let our
                    advanced algorithms do the rest, ensuring you have the
                    information at your fingertips whenever you need it.
                </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl
                    class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                >
                    <div
                        v-for="feature in features"
                        :key="feature.name"
                        class="relative pl-16"
                    >
                        <dt
                            class="text-base font-semibold leading-7 text-gray-900"
                        >
                            <div
                                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600"
                            >
                                <component
                                    :is="feature.icon"
                                    class="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </div>
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-2 text-base leading-7 text-gray-600">
                            {{ feature.description }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    AcademicCapIcon,
    CheckBadgeIcon,
    LockClosedIcon,
    PresentationChartBarIcon
} from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Immediate Analysis',
        description:
            'Representing the detailed investigation of symptoms that the app conducts instantly to provide health insights.',
        icon: PresentationChartBarIcon
    },
    {
        name: 'Reliable Predictions',
        description:
            'Denoting the app’s ability to provide enlightening health predictions based on the symptoms entered.',
        icon: CheckBadgeIcon
    },
    {
        name: 'Secured Health Records',
        description:
            'Representing the high-standard security protocols that protect users’ sensitive health data within the app.',
        icon: LockClosedIcon
    },
    {
        name: 'Personalized Health Education',
        description:
            'Empowering you with knowledge, MediCheck provides personalized health insights and education. Understand your symptoms and potential conditions with resources tailored to your unique health profile.',
        icon: AcademicCapIcon
    }
]
</script>
