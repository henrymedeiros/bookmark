window.sr = ScrollReveal({ reset: true });
sr.reveal(".hero-content", {
  duration: 1500,
  origin: "left",
  distance: "10px",
});
sr.reveal(".hero-image", {
  duration: 1500,
  delay: 500,
  origin: "right",
  distance: "150px",
});
sr.reveal("section", {
  duration: 1500,
});

sr.reveal(".chrome", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});
sr.reveal(".firefox", {
  duration: 2500,
  origin: "top",
  distance: "100px",
});
sr.reveal(".opera", {
  duration: 3000,
  origin: "top",
  distance: "100px",
});
