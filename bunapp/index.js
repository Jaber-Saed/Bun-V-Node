export default {
    port: 3001,
    fetch(_) {
        return new Response("Hello World");
    },
};