document.addEventListener('DOMContentLoaded', () => {
  const splideList = document.getElementById('splide-list');

  // JSON ფაილიდან მონაცემების წაკითხვა
  fetch('slides.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('JSON ფაილის ჩატვირთვა ვერ მოხერხდა');
      }
      return response.json();
    })
    .then(data => {
      // სლაიდების დინამიურად დამატება DOM-ში
      data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'splide__slide';

        li.innerHTML = `
          <div class="slide-card">
            <img src="${item.image}" alt="${item.title}">
            <div class="slide-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        `;

        splideList.appendChild(li);
      });

      // Splide-ის ინიციალიზაცია ჩატვირთვის შემდეგ
      const splide = new Splide('#image-carousel', {
        type: 'loop',
        padding: '5rem',
        gap: '1.5rem',
        breakpoints: {
          640: {
            padding: '1rem',
            gap: '0.5rem',
          },
        }
      });

      splide.mount();
    })
    .catch(error => {
      console.error('შეცდომა:', error);
    });
});