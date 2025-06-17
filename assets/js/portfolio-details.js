//상세페이지 렌더링

window.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const data = portfolioData[id];
  if (!data) return;

  document.getElementById("portfolio-title").innerText = data.title;
  document.getElementById("portfolio-category").innerText = data.category;
  document.getElementById("portfolio-client").innerText = data.client;
  document.getElementById("portfolio-date").innerText = data.date;
  const link = document.getElementById("portfolio-url");
  link.innerText = data.url;
  link.href = data.url;

  document.getElementById("portfolio-summary").innerText = data.intro;
  document.getElementById("portfolio-desc").innerText = data.description;

  const gallery = document.getElementById("portfolio-gallery");
  gallery.innerHTML = data.images.map(src => `
    <div class="swiper-slide">
      <img src="${src}" alt="" />
    </div>
  `).join("");

  // ✅ Swiper 초기화
  new Swiper(".portfolio-details-slider", {
    loop: false,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// // Lightbox 재초기화
//     const lightbox = GLightbox({
//     selector: '.portfolio-lightbox'
//     });