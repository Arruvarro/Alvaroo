function setActiveLink(event) {
    const currentActiveLink = document.querySelector(".active");
    if (currentActiveLink) {
      currentActiveLink.classList.remove("active");
    }
    event.target.classList.add("active");
  }
  