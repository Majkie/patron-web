<template>
    <div>

    </div>
</template>

<script setup>
useHead({
    title: 'Welcome'
})


onMounted(() => {
    const socket = new WebSocket('ws://localhost:8000');


    socket.onopen = () => {

        console.log('connected');

        socket.send(
            JSON.stringify({
                event: 'join',
                data: {
                    channel: 'majciiik',
                    user: 'majciiik',
                    pro: false,
                },
            })
        );

        setTimeout(() => {
            socket.send(
                JSON.stringify({
                    event: 'leave',
                    data: 'testing',
                })
            );
        }, 5000);

        socket.onmessage = (event) => {
            console.log(JSON.parse(event.data).data);
        }
    };
})

</script>