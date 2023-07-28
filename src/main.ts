import { initWaifu } from 'neowaifu';
import './style.css';

initWaifu({
    "waifuPath": "https://fastly.jsdelivr.net/gh/nidhoggfgg/live2d-model@latest/",
    "models": ["Cao"],
    "size": { "width": 300, "height": 400 },
    "renderRatio": 1.0,
    "useCache": true,
    "debug": true,
});
