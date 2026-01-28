document.addEventListener("DOMContentLoaded", () => {
    const colors = [
      "#ffff4d",
      "#4dff4d",
      "#4dd2ff"
    ];

    document.querySelectorAll(".rainbowtext").forEach(el => {
      const text = el.textContent;
      el.textContent = "";

      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = colors[i % colors.length];
        el.appendChild(span);
      });
    });
  });