//beep after a specified amount of time
//Example usage: node timer1.js 10 3 5 15 9

const args = process.argv.slice(2);

const timer = function(times) {
  for (const time of times) {
    const seconds = Number(time);
    if (seconds > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, seconds * 1000);
    }
  }
};

timer(args);