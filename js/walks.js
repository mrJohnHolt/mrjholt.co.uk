// Walks, newest first. To add a walk: copy walk-template.html, then add one entry at the top of this list.
// The home page features WALKS[0] and lists the rest under "Previous walks".
const WALKS = [
  {
    slug: "littlelangdale",
    title: "Little Langdale",
    date: "2026-10-03",
    summary: "A manageable 3.25 mile walk in the Lake District, and my first video, filmed as a test.",
    url: "littlelangdale.html",
    // PLACEHOLDER: replace with a photo from the walk (WebP)
    image: "img/walk-placeholder.webp",
    imageAlt: "Placeholder for a Little Langdale walk photo"
  }
];

// Shown under "Next walk" on the newest walk page until the next walk has an entry above. Use "" if not known yet.
const COMING_SOON_TITLE = "Ribchester Village Walk, Roman History in the Ribble Valley";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// Home page: featured latest walk
const latestEl = document.querySelector("[data-latest-walk]");
if (latestEl && WALKS.length) {
  const walk = WALKS[0];
  latestEl.innerHTML = `
    <div>
      <h2 class="section__title">Latest walk</h2>
      <h3 class="walk-title">${walk.title}</h3>
      <p>${walk.summary}</p>
      <a class="button button--light" href="${walk.url}" aria-label="View the ${walk.title} walk">View the walk</a>
      <ul class="facts">
        <li class="facts__row">
          <span class="facts__label"><i class="fa-solid fa-calendar-day" aria-hidden="true"></i>Date walked</span>
          <span class="facts__value"><time datetime="${walk.date}">${formatDate(walk.date)}</time></span>
        </li>
      </ul>
    </div>
    <div class="card-media">
      <img class="card-media__image" src="${walk.image}" alt="${walk.imageAlt}" width="1200" height="1659" loading="lazy">
    </div>`;
}

// Home page: previous walks list, hidden until there is more than one walk
const previousEl = document.querySelector("[data-previous-walks]");
const listEl = document.querySelector("[data-walk-list]");
if (previousEl && listEl && WALKS.length > 1) {
  listEl.innerHTML = WALKS.slice(1)
    .map(
      (walk) => `
    <li class="walk-card">
      <h3 class="walk-title">${walk.title}</h3>
      <p class="walk-card__date"><time datetime="${walk.date}">${formatDate(walk.date)}</time></p>
      <p>${walk.summary}</p>
      <a class="button button--light" href="${walk.url}" aria-label="View the ${walk.title} walk">View the walk</a>
    </li>`
    )
    .join("");
  previousEl.hidden = false;
}

// Walk pages: previous and next links, named by data-walk-nav="slug"
const walkNavEl = document.querySelector("[data-walk-nav]");
if (walkNavEl) {
  const index = WALKS.findIndex((walk) => walk.slug === walkNavEl.dataset.walkNav);
  if (index !== -1) {
    const older = WALKS[index + 1];
    const newer = WALKS[index - 1];
    const link = (walk, label, modifier) =>
      `<a class="walk-nav__link walk-nav__link--${modifier}" href="${walk.url}"><span class="walk-nav__label">${label}</span>${walk.title}</a>`;
    walkNavEl.innerHTML =
      (older ? link(older, "Previous walk", "prev") : "") +
      (newer
        ? link(newer, "Next walk", "next")
        : `<span class="walk-nav__link walk-nav__link--next"><span class="walk-nav__label">Next walk</span>${
            COMING_SOON_TITLE ? `${COMING_SOON_TITLE}<span class="walk-nav__label">Coming soon</span>` : "Coming soon"
          }</span>`);
  }
}
