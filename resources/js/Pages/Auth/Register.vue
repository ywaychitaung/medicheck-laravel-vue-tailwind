<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'
import Checkbox from '@/Components/Checkbox.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import TextInput from '@/Components/TextInput.vue'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation')
    })
}
</script>

<template>
    <Head title="Register" />

    <div class="flex flex-1 min-h-screen">
        <div
            class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <img
                        class="mx-auto h-16 w-16"
                        src="/images/logo.png"
                        alt="Logo"
                    />
                    <h2
                        class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
                    >
                        Register a new account
                    </h2>
                    <p class="mt-2 text-sm leading-6 text-gray-500">
                        Already have an account?
                        {{ ' ' }}
                        <a
                            :href="route('login')"
                            class="font-semibold text-teal-600 hover:text-teal-500"
                            >Log in!</a
                        >
                    </p>
                </div>

                <div class="mt-10">
                    <div>
                        <form @submit.prevent="submit" class="space-y-6">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput
                                    id="name"
                                    v-model="form.name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                    autocomplete="name"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.name"
                                />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email" />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="username"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div>
                                <InputLabel for="password" value="Password" />
                                <TextInput
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    for="password_confirmation"
                                    value="Confirm Password"
                                />
                                <TextInput
                                    id="password_confirmation"
                                    v-model="form.password_confirmation"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="new-password"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password_confirmation"
                                />
                            </div>

                            <div>
                                <InputLabel for="terms">
                                    <div class="flex items-center">
                                        <Checkbox
                                            id="terms"
                                            v-model:checked="form.terms"
                                            name="terms"
                                            required
                                        />

                                        <div class="ms-2">
                                            I agree to the
                                            <a
                                                target="_blank"
                                                href="#"
                                                class="underline text-sm text-teal-600 hover:text-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                                >Terms of Service</a
                                            >
                                            and
                                            <a
                                                target="_blank"
                                                href="#"
                                                class="underline text-sm text-teal-600 hover:text-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                                >Privacy Policy</a
                                            >
                                        </div>
                                    </div>
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.terms"
                                    />
                                </InputLabel>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    class="flex w-full justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="/images/register-landing.jpg"
                alt="MediCheck"
            />
        </div>
    </div>
</template>
