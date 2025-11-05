const lines = [
  " A small village airstrip… dust swirls in the golden sunrise.",
  " Maara stands alone, watching an old propeller plane take off.",
  " His eyes burn with a dream — to make flying possible for everyone.",
  " 'Enga ooru pasanga kooda oru naal parakkum…', he whispers to himself.",
  " The sky isn't just for the rich — it's for dreamers like him."
];

// Start delay before scene begins
console.log(" Soorarai Pottru — Opening Scene\n");

let index = 0;

// Small timeout before the interval starts (like a fade-in)
setTimeout(() => {
  // Interval to show one line every 3 seconds
  const interval = setInterval(() => {
    console.log(lines[index]);
    index++;

    // Stop when all lines are shown
    if (index === lines.length) {
      clearInterval(interval);
      console.log("\n Scene ends — The dream has just taken off...");
    }
  }, 3000);
}, 1500);
