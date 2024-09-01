<template>
    <div id="faqs" class="bg-white">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2
                    class="text-2xl font-bold leading-10 tracking-tight text-gray-900"
                >
                    Frequently asked questions
                </h2>
                <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                    <Disclosure
                        as="div"
                        v-for="faq in faqs"
                        :key="faq.question"
                        class="pt-6"
                        v-slot="{ open }"
                    >
                        <dt>
                            <DisclosureButton
                                class="flex w-full items-start justify-between text-left text-gray-900"
                            >
                                <span
                                    class="text-base font-semibold leading-7"
                                    >{{ faq.question }}</span
                                >
                                <span class="ml-6 flex h-7 items-center">
                                    <PlusSmallIcon
                                        v-if="!open"
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                    <MinusSmallIcon
                                        v-else
                                        class="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </span>
                            </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="mt-2 pr-12">
                            <p class="text-base leading-7 text-gray-600">
                                {{ faq.answer }}
                            </p>
                        </DisclosurePanel>
                    </Disclosure>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
    {
        question: "What is MediCheck?",
        answer: "MediCheck is a disease prediction application available on Web, Android and iOS. Users can enter symptoms into the app to receive disease predictions.",
    },
    {
        question:
            "How does MediCheck ensure the accuracy of its disease predictions?",
        answer: "MediCheck utilizes advanced algorithms and a vast database of medical information to provide users with the most accurate disease predictions based on their entered symptoms. Our system is regularly updated in accordance with the latest medical research.",
    },
    {
        question: "Can MediCheck replace a doctor's consultation?",
        answer: "MediCheck is designed to provide initial guidance and disease predictions to help users make informed decisions about their health. However, it is not a substitute for professional medical advice, diagnosis, or treatment. We always recommend consulting with a healthcare professional for any medical concerns.",
    },
    {
        question: "What kind of symptoms can I enter into MediCheck?",
        answer: "MediCheck allows users to enter a wide range of symptoms, from common to rare ones. The application is designed to handle multiple symptom inputs to provide the most relevant disease predictions.",
    },
    {
        question: "Is user data secure with MediCheck?",
        answer: "Protecting user privacy and data security is a top priority for MediCheck. All personal health information entered into the application is encrypted and stored securely, in compliance with data protection laws and regulations. To safeguard user data and maintain confidentiality, we employ AES-256 encryption.",
    },
];
</script>
