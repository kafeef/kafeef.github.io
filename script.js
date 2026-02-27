document.querySelectorAll('.card').forEach((card, i) => {
  card.style.animationDelay = `${0.15 * (i + 1)}s`;
});

function openModal(subject, lessons) {
  const modal = document.getElementById("downloadModal");
  const title = document.getElementById("modal-title");
  const list = document.getElementById("downloadList");

  title.innerText = `دروس ال${subject}`;
  list.innerHTML = "";

  lessons.forEach(lesson => {
    const link = document.createElement("a");
    link.href = lesson.file;
    link.target = "_blank";
    link.innerHTML = `<button class="download-option">${lesson.name}</button>`;
    list.appendChild(link);
  });

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("downloadModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

window.onclick = e => {
  const modal = document.getElementById("downloadModal");
  if (e.target === modal) closeModal();
};
