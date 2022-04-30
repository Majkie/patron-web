<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Chat Emotes</h1>
    
        <ElementsCard class="space-y-4">
            <h3 class="text-lg font-bold tracking-tight">Upload emote</h3>

        </ElementsCard>

        <Tabs>
            <TabsTab title="Subscriber emotes 46/60">
                <div class="grid grid-cols-5 gap-4">
                    <NuxtLink to="/twitch/chat-emotes/1">
                        <ElementsCard>
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div>
                                    <img class="w-14 h-14" src="https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x" />
                                </div>
                                <div>
                                    <h3 class="font-extrabold">monkaS</h3>
                                </div>
                            </div>
                        </ElementsCard>
                    </NuxtLink>
                </div>
            </TabsTab>
            <TabsTab title="Global emotes 21/30">
                <div class="grid grid-cols-5 gap-4">
                    <NuxtLink to="/twitch/chat-emotes/1">
                        <ElementsCard>
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div>
                                    <img class="w-14 h-14" src="https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x" />
                                </div>
                                <div>
                                    <h3 class="font-extrabold">monkaS</h3>
                                </div>
                            </div>
                        </ElementsCard>
                    </NuxtLink>
                    <NuxtLink to="/twitch/chat-emotes/1">
                        <ElementsCard>
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div>
                                    <img class="w-14 h-14" src="https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x" />
                                </div>
                                <div>
                                    <h3 class="font-extrabold">monkaS</h3>
                                </div>
                            </div>
                        </ElementsCard>
                    </NuxtLink>
                </div>
            </TabsTab>
        </Tabs>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'dashboard',
})

useHead({
    title: 'Chat Icons',
    meta: [
        { name: 'description', content: 'Profile page' },
    ],
})
</script>