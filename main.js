function readingTime() {
    const text = document.getElementById("article").innerText;
    console.log(text);
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    console.log(words);
    const time = Math.ceil(words / wpm);
    console.log(time);
    document.getElementById("reading-time").innerText = time;
  }
  readingTime();