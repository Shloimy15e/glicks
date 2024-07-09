<template>
    <div class=" bg-neutral-50">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2 class="text-3xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                    <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                        <dt>
                            <DisclosureButton
                                class="flex w-full items-start justify-between text-left text-gray-900 bg-transparent">
                                <span class="text-xl font-semibold leading-7">{{ faq.question }}</span>
                                <span class="ml-6 flex h-7 items-center">
                                    <PlusIcon v-if="!open" class="h-6 w-6 stroke-2" aria-hidden="true" />
                                    <MinusIcon v-else class="h-6 w-6 stroke-2" aria-hidden="true" />
                                </span>
                            </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="mt-2 w-full px-6 text-left">
                            <p class=" text-lg leading-7 text-gray-600">{{ faq.answer }}</p>
                        </DisclosurePanel>
                    </Disclosure>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

const faqs = [
    {
        question: "Can I place an order through the website?",
        answer:"No, this website serves as an online catalogue for Glicks Bakery, allowing you to browse our extensive selection of baked goods. To place an order, please feel free to contact us directly, and our friendly staff will be more than happy to assist you with your requirements.",
    },
    {
        question: "How do I place an order?",
        answer: "To place an order, you can call us at one of our three phone numbers (see the bottom of the page), and our friendly staff will be more than happy to assist you with your requirements.",
    },
    {
        question: "Do you cater locations other than Jerusalem?",
        answer: "No. We are a Jerusalem based bakery, and we do not cater to other locations. But we do accept phonecalls around the world for orders within the city of Jerusalem.",
    },
    {
        question: "How do you accept payment?",
        answer: "We accept payment through cash, credit card, and debit card. You can pay by phone using a credit card number, or you can pay at delivery using cash or card.",
    }
]</script>