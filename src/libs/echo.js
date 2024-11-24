import Echo from "laravel-echo";
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'reverb',
    key: 'jbwlrcnx3u1hz1qglfyj',
    wsHost: "api.smartunlocker.site",
    wsPort: 8081,
    forceTLS: true,
    encrypted: true,
    disableStats: true,
});

export default echo;