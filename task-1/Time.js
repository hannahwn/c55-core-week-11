export class Time {
  // Your code here

  #secondsFromMidnight;

  constructor(hours, minutes, seconds) {
    const total = hours * 3600 + minutes * 60 + seconds;

    this.#secondsFromMidnight = total;
  }

  getHours() {
    return Math.floor(this.#secondsFromMidnight / 3600);
  }

  getMinutes() {
    return Math.floor((this.#secondsFromMidnight % 3600) / 60);
  }

  getSeconds() {
    return this.#secondsFromMidnight % 60;
  }

  addSeconds(seconds) {
    this.#secondsFromMidnight =
      (((this.#secondsFromMidnight + seconds) % 86400) + 86400) % 86400;
  }

  addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  }

  addHours(hours) {
    this.addSeconds(hours * 3600);
  }

  toString() {
    const h = String(this.getHours()).padStart(2, "0");
    const m = String(this.getMinutes()).padStart(2, "0");
    const s = String(this.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }
}
