const travelData = {
    beaches: [
        { name: "Bora Bora Beach", description: "Crystal clear turquoise waters and iconic overwater bungalows.", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { name: "Waikiki Beach", description: "Famous stretch of golden sand in Honolulu, Hawaii with great surf.", imageUrl: "https://images.unsplash.com/photo-1512100356356-de1b84283e18" }
    ],
    temples: [
        { name: "Angkor Wat", description: "A massive temple complex in Cambodia featuring stunning ancient architecture.", imageUrl: "https://images.unsplash.com/photo-1599813956232-a5214556a014" },
        { name: "Tanah Lot Temple", description: "A iconic Hindu temple perched on a rock formation in Bali, Indonesia.", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4" }
    ],
    countries: [
        { name: "Japan", description: "A fascinating blend of ancient traditions and ultra-modern technology.", imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" },
        { name: "Italy", description: "Renowned for its art, rich history, architecture, and world-class cuisine.", imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963" }
    ]
};

const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('recommendations');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        let results = [];
        if (query.includes('beach')) {
            results = travelData.beaches;
        } else if (query.includes('temple')) {
            results = travelData.temples;
        } else if (query.includes('country')) {
            results = travelData.countries;
        }

        if (results.length > 0) {
            results.forEach(item => {
                const card = document.createElement('div');
                card.className = 'result-card';
                card.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                resultsContainer.appendChild(card);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
        }
    });
}

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        resultsContainer.innerHTML = '';
    });
}
