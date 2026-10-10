// Mobile menu toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector("#site-nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}

// YouTube embeds: paste the video ID into data-youtube-id in the HTML.
// Anything that is not a valid 11 character ID stays as a visible placeholder.
document.querySelectorAll("[data-youtube-id]").forEach((el) => {
  const id = el.dataset.youtubeId;
  if (!/^[\w-]{11}$/.test(id)) return;

  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
  frame.title = el.dataset.title || "YouTube video";
  frame.loading = "lazy";
  frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  el.replaceChildren(frame);
});
