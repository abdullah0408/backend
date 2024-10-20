import {serve} from "bun";

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === "/") {
            return new Response("Hello", {status: 200})
        } else if (url.pathname === "/page2") {
            return new Response(`Hello, on ${url.pathname}`, {status: 200})
        } else {
            return new Response(`Not Found: ${url.pathname}`, {status: 404})
        }
    },
    port: 3002,
    hostname: "127.0.0.1"
})