<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold tracking-tight md:text-3xl">Chat Emotes</h1>
    
        <ElementsCard class="space-y-4">
            <h3 class="text-lg font-bold tracking-tight">Upload emote</h3>

            <div class="space-y-1">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="deeClap" class="w-full p-2 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:placeholder-slate-500">
                <p class="text-sm text-slate-500 dark:text-slate-400">Emote codes can be letters and numbers. It must use at least 1 capital letter and be at least 5 characters.</p>
            </div>

            <div class="space-y-1">
                <label for="emote">Emote file</label>
                <input type="file" id="emote" class="block w-full text-sm text-slate-900 border border-slate-300 rounded-lg cursor-pointer bg-slate-50 dark:text-slate-400 focus:outline-none dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 file:bg-slate-600 file:border-0 file:text-slate-100 file:py-2 file:px-4 file:cursor-pointer file:hover:bg-slate-500">
                <p class="text-sm text-slate-500 dark:text-slate-400">PNG or GIF (112px x 112px).</p>
            </div>

            <div class="space-y-1">
                <label for="approval">Approval notes</label>
                <textarea id="approval" class="w-full p-2 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:placeholder-slate-500" rows="4"></textarea>
                <p class="text-sm text-slate-500 dark:text-slate-400">Each emote is manualy reviewed, if you think this emote might be declined due to bordering guidelines, you can let us know here.</p>
            </div>

            <div class="flex items-center">
                <input id="link-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600" required>
                <label for="link-checkbox" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">
                    I agree to the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">emote guidelines</a>.
                </label>
            </div>

            <div>
                <button type="submit" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 duration-150 dark:focus:ring-green-800">
                    <span class="relative w-full px-5 py-2.5 duration-150 transition-all ease-in-out bg-white dark:bg-slate-900 text-slate-900 hover:text-white dark:text-white rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </div>
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