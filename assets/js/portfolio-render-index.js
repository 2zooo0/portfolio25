// import { portfolioData } from './portfolio-data.js';


window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".portfolio-container");
  if (!container) return;

  Object.values(portfolioData).forEach(item => {
    const div = document.createElement("div");
    div.className = `col-lg-4 col-md-6 portfolio-item filter-${item.category.toLowerCase()}`;
    div.innerHTML = `
      <div class="portfolio-wrap">
        <img src="${item.images[0]}" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.role}</p>
          <div class="portfolio-links">
            <a href="${item.images[0]}" data-gallery="portfolioGallery" class="portfolio-lightbox">
              <i class="bx bx-plus"></i>
            </a>
            <a href="portfolio-details.html?id=${item.id}" class="portfolio-details-lightbox" title="Portfolio Details">
              <i class="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  // ✅ Glightbox 모달 연결
  GLightbox({
    selector: '.portfolio-lightbox'
  });
});
