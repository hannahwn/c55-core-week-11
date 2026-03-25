import { Time } from "./Time.js";

const time = new Time(13, 37, 0);
console.log(time.toString()); // Output: "13:37:00"

time.getHours();
time.getMinutes();
time.getSeconds();

time.addHours(40);
console.log("After +40 hours:", time.toString()); //output 06:17:00

time.addMinutes(40);
console.log("After +40 mins:", time.toString()); //output 14:17:00

time.addSeconds(30);
console.log("After +30 seconds:", time.toString()); // output 06:17:30
