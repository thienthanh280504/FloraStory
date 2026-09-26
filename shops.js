/* ==========================================================================
   FLORASTORY — DANH SÁCH CỬA HÀNG HOA
   --------------------------------------------------------------------------
   CÁCH THÊM SHOP MỚI: copy một khối { ... } trong mảng SHOPS bên dưới,
   dán vào cuối danh sách (nhớ dấu phẩy giữa các khối) rồi sửa thông tin.

   Thông tin hiện trên thẻ:
     id       : Mã shop, viết liền không dấu (dùng làm link riêng) — không trùng nhau
     name     : Tên shop                                   (bắt buộc)
     city     : Thành phố — dùng để lọc                   (bắt buộc)
     area     : Quận / khu vực
     image    : Link ảnh đại diện (ảnh ngang, ~800px)
     desc     : Mô tả ngắn 1 câu
     tags     : Nhóm hoa / dịch vụ, ví dụ ['Hoa cưới', 'Hoa sinh nhật']
     priceFrom: Giá thấp nhất (số, đơn vị đồng)
     badge    : Nhãn nổi bật trên ảnh (để '' nếu không có)
     phone    : Số điện thoại (hiện nút Gọi + Zalo)
     facebook : Link fanpage          (để '' nếu không có)
     instagram: Link Instagram        (để '' nếu không có)
     address  : Link Google Maps      (để '' nếu không có)

   Thông tin chi tiết (hiện khi bấm vào shop) — trường nào để trống sẽ tự ẩn:
     about      : Giới thiệu dài hơn về shop
     hours      : Giờ mở cửa
     addressText: Địa chỉ viết ra chữ
     delivery   : Khu vực / điều kiện giao hàng
     services   : Danh sách dịch vụ đi kèm
     gallery    : Danh sách link ảnh (vuốt để xem)
     products   : Sản phẩm tiêu biểu — { name: 'Tên', price: 350000, image: 'link ảnh' }

   ⚠️ Các shop dưới đây là DỮ LIỆU MẪU để xem giao diện.
      Hãy thay bằng thông tin shop thật trước khi đưa web lên mạng.
   ========================================================================== */

const SHOPS = [
    {
        id: 'tiem-hoa-mau-1',
        name: 'Tiệm Hoa Mẫu Số 1',
        city: 'Hà Nội',
        area: 'Quận Ba Đình',
        image: 'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=800&q=80',
        desc: 'Bó hoa phong cách Hàn Quốc, tông pastel nhẹ nhàng.',
        tags: ['Hoa sinh nhật', 'Hoa tươi'],
        priceFrom: 250000,
        badge: 'Giao trong 2h',
        phone: '0900000001',
        facebook: 'https://facebook.com',
        instagram: '',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Tiệm nhỏ chuyên bó hoa tông pastel theo phong cách Hàn Quốc. Mỗi bó được gói thủ công, chọn hoa tươi nhập mỗi sáng và có thể điều chỉnh màu giấy gói theo yêu cầu.',
        hours: '7:30 – 21:00, mỗi ngày',
        addressText: 'Số nhà mẫu, Quận Ba Đình, Hà Nội',
        delivery: 'Giao nội thành Hà Nội trong 2 giờ. Miễn phí trong bán kính 3 km.',
        services: ['Viết thiệp miễn phí', 'Chụp ảnh hoa trước khi giao', 'Nhận đặt hoa theo màu'],
        gallery: [
            'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1538947051459-6b56a0ab9e34?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Bó hồng pastel', price: 350000, image: 'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bó ly hồng', price: 450000, image: 'https://images.unsplash.com/photo-1538947051459-6b56a0ab9e34?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bình hoa mini', price: 250000, image: 'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    {
        id: 'tiem-hoa-mau-2',
        name: 'Tiệm Hoa Mẫu Số 2',
        city: 'Hà Nội',
        area: 'Quận Tây Hồ',
        image: 'https://images.unsplash.com/photo-1486102515046-44130769cb25?auto=format&fit=crop&w=800&q=80',
        desc: 'Chuyên hoa ly, hoa lan và lẵng hoa chúc mừng khai trương.',
        tags: ['Lẵng hoa', 'Khai trương'],
        priceFrom: 450000,
        badge: '',
        phone: '0900000002',
        facebook: '',
        instagram: 'https://instagram.com',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Chuyên lẵng hoa, kệ hoa chúc mừng cho doanh nghiệp. Tiệm nhận thiết kế theo màu nhận diện thương hiệu và in băng rôn chúc mừng theo yêu cầu.',
        hours: '8:00 – 20:00, Thứ 2 – Chủ nhật',
        addressText: 'Số nhà mẫu, Quận Tây Hồ, Hà Nội',
        delivery: 'Giao toàn Hà Nội, đặt trước ít nhất 4 giờ với kệ hoa lớn.',
        services: ['In băng rôn chúc mừng', 'Xuất hóa đơn VAT', 'Giao đúng giờ khai trương'],
        gallery: [
            'https://images.unsplash.com/photo-1486102515046-44130769cb25?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1538947051459-6b56a0ab9e34?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Lẵng ly trắng', price: 650000, image: 'https://images.unsplash.com/photo-1486102515046-44130769cb25?auto=format&fit=crop&w=500&q=80' },
            { name: 'Kệ hoa khai trương', price: 1200000, image: 'https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bình lan hồ điệp', price: 900000, image: 'https://images.unsplash.com/photo-1538947051459-6b56a0ab9e34?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    {
        id: 'tiem-hoa-mau-3',
        name: 'Tiệm Hoa Mẫu Số 3',
        city: 'TP. Hồ Chí Minh',
        area: 'Quận 1',
        image: 'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?auto=format&fit=crop&w=800&q=80',
        desc: 'Hoa cưới và trang trí tiệc theo concept riêng.',
        tags: ['Hoa cưới', 'Trang trí tiệc'],
        priceFrom: 600000,
        badge: 'Nhận đặt trước',
        phone: '0900000003',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Studio hoa cưới nhận thiết kế hoa cầm tay cô dâu, hoa cài áo và trang trí tiệc cưới, tiệc sinh nhật theo concept riêng của từng cặp đôi.',
        hours: '9:00 – 19:00 (hẹn trước để tư vấn)',
        addressText: 'Số nhà mẫu, Quận 1, TP. Hồ Chí Minh',
        delivery: 'Giao và lắp đặt tận nơi trong TP. Hồ Chí Minh. Nên đặt trước 1–2 tuần.',
        services: ['Tư vấn concept miễn phí', 'Lắp đặt tận nơi', 'Hoa khô lưu niệm sau cưới'],
        gallery: [
            'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1712260710751-71335d444503?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Hoa cầm tay cô dâu', price: 900000, image: 'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?auto=format&fit=crop&w=500&q=80' },
            { name: 'Hoa cài áo (cặp)', price: 200000, image: 'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=500&q=80' },
            { name: 'Trang trí bàn tiệc', price: 2500000, image: 'https://images.unsplash.com/photo-1712260710751-71335d444503?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    {
        id: 'tiem-hoa-mau-4',
        name: 'Tiệm Hoa Mẫu Số 4',
        city: 'TP. Hồ Chí Minh',
        area: 'Quận 3',
        image: 'https://images.unsplash.com/photo-1631407779166-86952be9dbd7?auto=format&fit=crop&w=800&q=80',
        desc: 'Bình hoa để bàn, hoa văn phòng giao định kỳ hằng tuần.',
        tags: ['Hoa để bàn', 'Giao định kỳ'],
        priceFrom: 300000,
        badge: '',
        phone: '0900000004',
        facebook: 'https://facebook.com',
        instagram: '',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Cung cấp bình hoa để bàn cho nhà ở, văn phòng và quán cà phê. Có gói giao hoa định kỳ hằng tuần, tự thay hoa mới và thu bình cũ.',
        hours: '7:00 – 18:00, Thứ 2 – Thứ 7',
        addressText: 'Số nhà mẫu, Quận 3, TP. Hồ Chí Minh',
        delivery: 'Giao trong nội thành TP. Hồ Chí Minh. Gói định kỳ giao vào sáng thứ Hai.',
        services: ['Giao định kỳ hằng tuần', 'Thay hoa, thu bình cũ', 'Xuất hóa đơn cho công ty'],
        gallery: [
            'https://images.unsplash.com/photo-1631407779166-86952be9dbd7?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Bình hoa trắng', price: 300000, image: 'https://images.unsplash.com/photo-1631407779166-86952be9dbd7?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bình hoa hồng phấn', price: 380000, image: 'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=500&q=80' },
            { name: 'Gói định kỳ 4 tuần', price: 1100000, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    {
        id: 'tiem-hoa-mau-5',
        name: 'Tiệm Hoa Mẫu Số 5',
        city: 'Đà Nẵng',
        area: 'Quận Hải Châu',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
        desc: 'Hoa hướng dương và hoa khô, gói giấy kraft mộc mạc.',
        tags: ['Hoa khô', 'Hoa tốt nghiệp'],
        priceFrom: 180000,
        badge: 'Giá tốt',
        phone: '0900000005',
        facebook: '',
        instagram: 'https://instagram.com',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Tiệm hoa phong cách mộc mạc, chuyên hướng dương, hoa khô và bó hoa tốt nghiệp giá sinh viên. Gói bằng giấy kraft và dây cói.',
        hours: '8:00 – 21:30, mỗi ngày',
        addressText: 'Số nhà mẫu, Quận Hải Châu, Đà Nẵng',
        delivery: 'Giao nội thành Đà Nẵng. Mùa tốt nghiệp nên đặt trước 2–3 ngày.',
        services: ['Giá ưu đãi cho sinh viên', 'Đặt số lượng lớn cho lớp', 'Thiệp viết tay'],
        gallery: [
            'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1528758054211-22aa4c5300db?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Bó hướng dương', price: 180000, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bó hoa khô oải hương', price: 220000, image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=500&q=80' },
            { name: 'Bó tím mộng mơ', price: 260000, image: 'https://images.unsplash.com/photo-1528758054211-22aa4c5300db?auto=format&fit=crop&w=500&q=80' }
        ]
    },
    {
        id: 'tiem-hoa-mau-6',
        name: 'Tiệm Hoa Mẫu Số 6',
        city: 'Đà Nẵng',
        area: 'Quận Sơn Trà',
        image: 'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=800&q=80',
        desc: 'Hộp hoa và giỏ quà tặng kèm thiệp viết tay.',
        tags: ['Hộp hoa', 'Quà tặng'],
        priceFrom: 350000,
        badge: '',
        phone: '0900000006',
        facebook: 'https://facebook.com',
        instagram: '',
        address: '',

        // ---- Thông tin chi tiết (hiện khi bấm vào shop) ----
        about: 'Chuyên hộp hoa và giỏ quà kết hợp hoa với bánh, trà hoặc nến thơm. Phù hợp làm quà sinh nhật, kỷ niệm và quà tặng đối tác.',
        hours: '8:00 – 20:00, mỗi ngày',
        addressText: 'Số nhà mẫu, Quận Sơn Trà, Đà Nẵng',
        delivery: 'Giao nội thành Đà Nẵng và Hội An (phụ phí).',
        services: ['Thiệp viết tay', 'Gói quà theo chủ đề', 'Giao giấu tên'],
        gallery: [
            'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1712260710751-71335d444503?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=1200&q=80'
        ],
        products: [
            { name: 'Hộp hoa hồng phấn', price: 350000, image: 'https://images.unsplash.com/photo-1687487055520-894d8fcc45a6?auto=format&fit=crop&w=500&q=80' },
            { name: 'Giỏ hoa & trà', price: 550000, image: 'https://images.unsplash.com/photo-1712260710751-71335d444503?auto=format&fit=crop&w=500&q=80' },
            { name: 'Hộp hoa mini', price: 250000, image: 'https://images.unsplash.com/photo-1706852175734-7eadd3c900ce?auto=format&fit=crop&w=500&q=80' }
        ]
    }
];

/* ==========================================================================
   PHẦN HIỂN THỊ — thường không cần sửa
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;

    const searchInput = document.getElementById('shopSearch');
    const citiesBox = document.getElementById('shopCities');
    const countEl = document.getElementById('shopCount');
    const emptyEl = document.getElementById('shopEmpty');

    let activeCity = 'all';
    let query = '';

    // Gán id tự động nếu shop chưa có
    SHOPS.forEach((s, i) => { if (!s.id) s.id = 'shop-' + (i + 1); });

    const esc = (str = '') => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const vnd = (n) => Number(n).toLocaleString('vi-VN') + 'đ';
    const money = (n) => n ? 'Từ ' + vnd(n) : 'Liên hệ';
    const normalize = (str = '') => str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    const imgTag = (src, alt, cls = '') => src ? `<img src="${esc(src)}" alt="${esc(alt)}" class="${cls}" loading="lazy" onerror="this.remove()">` : '';

    // Nút liên hệ dùng chung cho thẻ và popup
    const contactHTML = (s, big = false) => {
        const phone = (s.phone || '').replace(/\s/g, '');
        const out = [];
        if (phone) {
            out.push(`<a href="tel:${esc(phone)}" class="shop-btn shop-btn-primary"><i class="fa-solid fa-phone"></i> ${big ? 'Gọi ' + esc(s.phone) : 'Gọi'}</a>`);
            out.push(`<a href="https://zalo.me/${esc(phone)}" target="_blank" rel="noopener noreferrer" class="shop-btn">Zalo</a>`);
        }
        const icons = [];
        if (s.facebook) icons.push(`<a href="${esc(s.facebook)}" target="_blank" rel="noopener noreferrer" class="shop-icon-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>`);
        if (s.instagram) icons.push(`<a href="${esc(s.instagram)}" target="_blank" rel="noopener noreferrer" class="shop-icon-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>`);
        if (s.address) icons.push(`<a href="${esc(s.address)}" target="_blank" rel="noopener noreferrer" class="shop-icon-btn" aria-label="Bản đồ"><i class="fa-solid fa-location-dot"></i></a>`);
        if (icons.length) out.push(`<div class="shop-icons">${icons.join('')}</div>`);
        return out.join('');
    };

    // Nút trên thẻ: "Xem chi tiết" là nút chính, kèm gọi nhanh + Zalo
    const cardActionsHTML = (s) => {
        const phone = (s.phone || '').replace(/\s/g, '');
        return `
            <button type="button" class="shop-btn shop-btn-primary shop-detail-btn">Xem chi tiết</button>
            ${phone ? `<a href="tel:${esc(phone)}" class="shop-icon-btn shop-call-btn" aria-label="Gọi ${esc(s.name)}"><i class="fa-solid fa-phone"></i></a>
            <a href="https://zalo.me/${esc(phone)}" target="_blank" rel="noopener noreferrer" class="shop-btn shop-zalo-btn">Zalo</a>` : ''}`;
    };

    // ---------------- Bộ lọc ----------------
    const cities = ['all', ...new Set(SHOPS.map(s => s.city))];
    citiesBox.innerHTML = cities.map(c => `
        <button type="button" class="shops-chip${c === 'all' ? ' is-active' : ''}" data-city="${esc(c)}">
            ${c === 'all' ? 'Tất cả' : esc(c)}
        </button>`).join('');

    citiesBox.addEventListener('click', (e) => {
        const btn = e.target.closest('.shops-chip');
        if (!btn) return;
        activeCity = btn.dataset.city;
        citiesBox.querySelectorAll('.shops-chip').forEach(b => b.classList.toggle('is-active', b === btn));
        render();
    });

    searchInput.addEventListener('input', (e) => {
        query = normalize(e.target.value.trim());
        render();
    });

    // ---------------- Thẻ shop ----------------
    const cardHTML = (s) => `
        <article class="shop-card" data-id="${esc(s.id)}" tabindex="0" role="button" aria-label="Xem chi tiết ${esc(s.name)}">
            <div class="shop-media">
                ${imgTag(s.image, s.name)}
                <i class="fa-solid fa-spa shop-media-fallback" aria-hidden="true"></i>
                ${s.badge ? `<span class="shop-badge">${esc(s.badge)}</span>` : ''}
                ${s.gallery && s.gallery.length > 1 ? `<span class="shop-photo-count"><i class="fa-regular fa-images"></i> ${s.gallery.length}</span>` : ''}
            </div>
            <div class="shop-body">
                <div class="shop-head">
                    <h3 class="shop-name">${esc(s.name)}</h3>
                    <span class="shop-price">${money(s.priceFrom)}</span>
                </div>
                <p class="shop-loc"><i class="fa-solid fa-location-dot"></i> ${esc([s.area, s.city].filter(Boolean).join(', '))}</p>
                ${s.desc ? `<p class="shop-desc">${esc(s.desc)}</p>` : ''}
                ${s.tags && s.tags.length ? `<div class="shop-tags">${s.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
                <div class="shop-actions">${cardActionsHTML(s)}</div>
            </div>
        </article>`;

    function render() {
        const list = SHOPS.filter(s => {
            if (activeCity !== 'all' && s.city !== activeCity) return false;
            if (!query) return true;
            const hay = normalize([s.name, s.city, s.area, s.desc, s.about, ...(s.tags || []), ...(s.products || []).map(p => p.name)].join(' '));
            return hay.includes(query);
        });
        grid.innerHTML = list.map(cardHTML).join('');
        countEl.textContent = `${list.length} cửa hàng`;
        emptyEl.classList.toggle('hidden', list.length > 0);
    }

    // ---------------- Popup chi tiết ----------------
    const modal = document.createElement('div');
    modal.className = 'shop-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true; // ẩn hẳn khi đóng
    modal.innerHTML = `
        <div class="shop-modal-backdrop" data-close></div>
        <div class="shop-modal-panel" role="dialog" aria-modal="true" aria-labelledby="shopModalTitle">
            <button type="button" class="shop-modal-close" data-close aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button>
            <div class="shop-modal-scroll" id="shopModalBody"></div>
            <div class="shop-modal-footer" id="shopModalFooter"></div>
        </div>`;
    document.body.appendChild(modal);
    const modalBody = modal.querySelector('#shopModalBody');
    const modalFooter = modal.querySelector('#shopModalFooter');
    let lastFocus = null;

    const detailHTML = (s) => {
        const photos = (s.gallery && s.gallery.length ? s.gallery : [s.image]).filter(Boolean);
        const info = [
            s.hours && ['fa-regular fa-clock', 'Giờ mở cửa', s.hours],
            s.addressText && ['fa-solid fa-location-dot', 'Địa chỉ', s.addressText + (s.address ? ` · <a href="${esc(s.address)}" target="_blank" rel="noopener noreferrer">Xem bản đồ</a>` : ''), true],
            s.delivery && ['fa-solid fa-truck-fast', 'Giao hàng', s.delivery]
        ].filter(Boolean);

        return `
            <div class="sd-gallery">
                <div class="sd-track" id="sdTrack">
                    ${photos.map((p, i) => `<div class="sd-slide">${imgTag(p, s.name + ' ' + (i + 1))}<i class="fa-solid fa-spa shop-media-fallback"></i></div>`).join('')}
                </div>
                ${photos.length > 1 ? `<div class="sd-dots">${photos.map((_, i) => `<button type="button" class="sd-dot${i === 0 ? ' is-active' : ''}" data-i="${i}" aria-label="Ảnh ${i + 1}"></button>`).join('')}</div>` : ''}
            </div>

            <div class="sd-content">
                <div class="sd-header">
                    ${s.badge ? `<span class="sd-badge">${esc(s.badge)}</span>` : ''}
                    <h2 class="sd-title" id="shopModalTitle">${esc(s.name)}</h2>
                    <p class="sd-meta">
                        <span><i class="fa-solid fa-location-dot"></i> ${esc([s.area, s.city].filter(Boolean).join(', '))}</span>
                        <span class="sd-price">${money(s.priceFrom)}</span>
                    </p>
                    ${s.tags && s.tags.length ? `<div class="shop-tags">${s.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
                </div>

                ${s.about || s.desc ? `
                <section class="sd-section">
                    <h3 class="sd-h">Giới thiệu</h3>
                    <p class="sd-text">${esc(s.about || s.desc)}</p>
                </section>` : ''}

                ${s.products && s.products.length ? `
                <section class="sd-section">
                    <h3 class="sd-h">Sản phẩm tiêu biểu</h3>
                    <div class="sd-products">
                        ${s.products.map(p => `
                        <div class="sd-product">
                            <div class="sd-product-img">${imgTag(p.image, p.name)}<i class="fa-solid fa-spa shop-media-fallback"></i></div>
                            <p class="sd-product-name">${esc(p.name)}</p>
                            <p class="sd-product-price">${p.price ? vnd(p.price) : 'Liên hệ'}</p>
                        </div>`).join('')}
                    </div>
                </section>` : ''}

                ${info.length ? `
                <section class="sd-section">
                    <h3 class="sd-h">Thông tin cửa hàng</h3>
                    <ul class="sd-info">
                        ${info.map(([icon, label, val, raw]) => `
                        <li>
                            <span class="sd-info-icon"><i class="${icon}"></i></span>
                            <div><strong>${label}</strong><p>${raw ? val : esc(val)}</p></div>
                        </li>`).join('')}
                    </ul>
                </section>` : ''}

                ${s.services && s.services.length ? `
                <section class="sd-section">
                    <h3 class="sd-h">Dịch vụ đi kèm</h3>
                    <ul class="sd-services">${s.services.map(v => `<li><i class="fa-solid fa-check"></i> ${esc(v)}</li>`).join('')}</ul>
                </section>` : ''}
            </div>`;
    };

    const openShop = (id, pushHash = true) => {
        const s = SHOPS.find(x => x.id === id);
        if (!s) return;
        lastFocus = document.activeElement;
        modalBody.innerHTML = detailHTML(s);
        modalFooter.innerHTML = contactHTML(s, true);
        modal.hidden = false;
        modalBody.scrollTop = 0;
        void modal.offsetWidth; // để hiệu ứng mở chạy mượt
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.documentElement.classList.add('shop-modal-lock');
        if (pushHash && location.hash !== '#' + id) history.pushState({ shop: id }, '', '#' + id);
        setupGallery();
        setTimeout(() => modal.querySelector('.shop-modal-close').focus(), 50);
    };

    const closeShop = (fromHistory = false) => {
        if (!modal.classList.contains('is-open')) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        setTimeout(() => { if (!modal.classList.contains('is-open')) modal.hidden = true; }, 320);
        document.documentElement.classList.remove('shop-modal-lock');
        if (!fromHistory && location.hash) history.back();
        if (lastFocus) lastFocus.focus({ preventScroll: true });
    };

    function setupGallery() {
        const track = modal.querySelector('#sdTrack');
        const dots = modal.querySelectorAll('.sd-dot');
        if (!track || !dots.length) return;
        dots.forEach(d => d.addEventListener('click', () => {
            track.scrollTo({ left: track.clientWidth * Number(d.dataset.i), behavior: 'smooth' });
        }));
        track.addEventListener('scroll', () => {
            const i = Math.round(track.scrollLeft / track.clientWidth);
            dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
        }, { passive: true });
    }

    // Bấm vào thẻ (trừ các nút liên hệ) để mở chi tiết
    grid.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.shop-card');
        if (card) openShop(card.dataset.id);
    });
    grid.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('shop-card')) {
            e.preventDefault();
            openShop(e.target.dataset.id);
        }
    });

    modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeShop(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeShop(); });

    // Nút Back trên điện thoại sẽ đóng popup; link có #id sẽ mở sẵn shop đó
    window.addEventListener('popstate', () => {
        const id = location.hash.slice(1);
        if (id && SHOPS.some(s => s.id === id)) openShop(id, false);
        else closeShop(true);
    });

    render();

    const initial = location.hash.slice(1);
    if (initial && SHOPS.some(s => s.id === initial)) {
        history.replaceState(null, '', location.pathname + location.search);
        openShop(initial);
    }
});
