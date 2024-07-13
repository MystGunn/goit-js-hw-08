import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const saveCurrentTime = throttle((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}, 1000);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime).catch(function(error) {
        console.error('Error setting current time:', error);
    });
}

player.on('timeupdate', saveCurrentTime);
