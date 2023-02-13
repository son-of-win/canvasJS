import {drawHinh1, drawHinh2, drawHinh3} from './drawer.js'
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

drawHinh1(ctx1)

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
drawHinh2(ctx2)

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
drawHinh3(ctx3)



