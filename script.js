/* ==========================================================================
   FLORASTORY - MINIMALIST FLOWER STORIES JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Top Announcement Banner Dismiss Logic (for other pages)
    // ----------------------------------------------------------------------
    const topBanner = document.getElementById('topBanner');
    const closeTopBannerBtn = document.getElementById('closeTopBannerBtn');

    if (localStorage.getItem('flora-top-banner-closed') === 'true') {
        if (topBanner) topBanner.classList.add('hidden');
    }

    if (closeTopBannerBtn && topBanner) {
        closeTopBannerBtn.addEventListener('click', () => {
            topBanner.classList.add('hidden');
            localStorage.setItem('flora-top-banner-closed', 'true');
        });
    }

    // ----------------------------------------------------------------------
    // 1b. Navbar — menu điện thoại, thanh trượt dưới link, hiệu ứng khi cuộn
    // ----------------------------------------------------------------------
    const heroNavbar = document.getElementById('heroNavbar');
    const heroMobileBtn = document.getElementById('heroMobileBtn');
    const heroMobileMenu = document.getElementById('heroMobileMenu');

    if (heroMobileBtn && heroMobileMenu) {
        const setMenu = (open) => {
            heroMobileMenu.classList.toggle('active', open);
            heroMobileBtn.classList.toggle('is-open', open);
            heroMobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            heroMobileBtn.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
        };
        heroMobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            setMenu(!heroMobileMenu.classList.contains('active'));
        });
        document.addEventListener('click', (e) => {
            if (heroNavbar && !heroNavbar.contains(e.target)) setMenu(false);
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
        window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });
    }

    // Thanh trượt nền trắng chạy theo link đang rê chuột, quay về trang hiện tại khi rời chuột
    const navLinksBox = document.getElementById('heroNavMenu');
    const navIndicator = navLinksBox ? navLinksBox.querySelector('.nav-indicator') : null;
    if (navLinksBox && navIndicator) {
        const links = [...navLinksBox.querySelectorAll('.hero-nav-link')];
        const activeLink = navLinksBox.querySelector('.hero-nav-link.active');
        const moveTo = (link, instant = false) => {
            if (!link) { navIndicator.style.opacity = '0'; links.forEach(l => l.classList.remove('is-lit')); return; }
            if (instant) navIndicator.style.transition = 'none';
            navIndicator.style.width = link.offsetWidth + 'px';
            navIndicator.style.transform = `translateX(${link.offsetLeft}px)`;
            navIndicator.style.opacity = '1';
            links.forEach(l => l.classList.toggle('is-lit', l === link));
            if (instant) { void navIndicator.offsetWidth; navIndicator.style.transition = ''; }
        };
        navLinksBox.classList.add('has-indicator');
        links.forEach(l => {
            l.addEventListener('mouseenter', () => moveTo(l));
            l.addEventListener('focus', () => moveTo(l));
        });
        navLinksBox.addEventListener('mouseleave', () => moveTo(activeLink));
        const place = () => moveTo(activeLink, true);
        place();
        window.addEventListener('resize', place);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    }

    // Thu gọn navbar khi cuộn xuống
    if (heroNavbar) {
        let heroScrollTicking = false;
        const onScroll = () => {
            heroNavbar.classList.toggle('scrolled', window.scrollY > 60);
            heroScrollTicking = false;
        };
        window.addEventListener('scroll', () => {
            if (!heroScrollTicking) {
                window.requestAnimationFrame(onScroll);
                heroScrollTicking = true;
            }
        }, { passive: true });
        onScroll();
    }

    // ----------------------------------------------------------------------
    // 2. Luôn dùng giao diện sáng (đã bỏ chế độ tối)
    // ----------------------------------------------------------------------
    document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.removeItem('flora-theme'); } catch (err) { /* bỏ qua */ }

    // ----------------------------------------------------------------------
    // 3. Mobile Menu Toggle
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // Floating Social Chat Widget Toggle & Auto Logo Rotation
    const chatWidget = document.getElementById('chatWidget');
    const chatToggleBtn = document.getElementById('chatToggleBtn');

    if (chatWidget && chatToggleBtn) {
        chatToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWidget.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!chatWidget.contains(e.target)) {
                chatWidget.classList.remove('active');
            }
        });

        // Tự động xoay đổi logo mạng xã hội mỗi 2.5 giây
        const rotator = chatToggleBtn.querySelector('.chat-icon-rotator');
        if (rotator) {
            const items = rotator.querySelectorAll('i, svg');
            let currentIndex = 0;
            setInterval(() => {
                if (chatWidget.classList.contains('active')) return;
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }, 2500);
        }
    }

    // ----------------------------------------------------------------------
    // 4. Category Filter Logic (for stories.html page)
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card');

    if (filterButtons.length > 0 && articleCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const selectedCategory = btn.getAttribute('data-category');

                articleCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ----------------------------------------------------------------------
    // 5. Search Filter Logic
    // ----------------------------------------------------------------------
    const searchInput = document.getElementById('searchInput');

    if (searchInput && articleCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            articleCards.forEach(card => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
                const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';

                if (title.includes(query) || excerpt.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 6. Reading Progress Bar & Back to Top (60fps Optimized)
    // ----------------------------------------------------------------------
    const progressBar = document.getElementById('progressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
                
                if (progressBar) {
                    progressBar.style.width = scrolled + '%';
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------------------------
    // 6a. Hero Slideshow (trang chủ)
    // ----------------------------------------------------------------------
    const heroSlider = document.getElementById('heroSlider');

    if (heroSlider) {
        const INTERVAL = 4500;
        const slides = heroSlider.querySelectorAll('.hero-slide');
        const texts = heroSlider.querySelectorAll('.hero-slide-text');
        const dots = heroSlider.querySelectorAll('.hero-dot');
        const currentEl = document.getElementById('heroCurrent');
        const totalEl = document.getElementById('heroTotal');
        const total = slides.length;
        let index = 0;
        let timer = null;

        heroSlider.style.setProperty('--hero-interval', INTERVAL + 'ms');
        if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

        const goTo = (i) => {
            index = (i + total) % total;
            slides.forEach((s, k) => s.classList.toggle('is-active', k === index));
            texts.forEach((t, k) => t.classList.toggle('is-active', k === index));
            dots.forEach((d, k) => {
                d.classList.remove('is-active');
                d.classList.toggle('is-done', k < index);
            });
            // Khởi động lại animation thanh tiến trình
            void dots[index].offsetWidth;
            dots[index].classList.add('is-active');
            if (currentEl) currentEl.textContent = String(index + 1).padStart(2, '0');
            // Tải trước ảnh kế tiếp
            const next = slides[(index + 1) % total];
            if (next && next.loading === 'lazy') next.loading = 'eager';
        };

        const start = () => { stop(); timer = setInterval(() => goTo(index + 1), INTERVAL); };
        const stop = () => { if (timer) clearInterval(timer); timer = null; };
        const restart = () => { if (!heroSlider.classList.contains('is-paused')) start(); };

        dots.forEach((d, k) => d.addEventListener('click', () => { goTo(k); restart(); }));

        // Tạm dừng khi rê chuột vào
        heroSlider.addEventListener('mouseenter', () => { heroSlider.classList.add('is-paused'); stop(); });
        heroSlider.addEventListener('mouseleave', () => { heroSlider.classList.remove('is-paused'); goTo(index); start(); });

        // Vuốt trên điện thoại
        let touchX = null;
        heroSlider.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
        heroSlider.addEventListener('touchend', (e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) { goTo(dx < 0 ? index + 1 : index - 1); restart(); }
            touchX = null;
        }, { passive: true });

        // Phím mũi tên khi hero đang hiển thị
        document.addEventListener('keydown', (e) => {
            if (window.scrollY > heroSlider.offsetHeight / 2) return;
            if (e.key === 'ArrowRight') { goTo(index + 1); restart(); }
            if (e.key === 'ArrowLeft') { goTo(index - 1); restart(); }
        });

        // Dừng khi chuyển tab
        document.addEventListener('visibilitychange', () => { document.hidden ? stop() : restart(); });

        goTo(0);
        start();
    }

    // ----------------------------------------------------------------------
    // 6b. Hoa Của Hôm Nay (chỉ có ở trang chủ)
    // ----------------------------------------------------------------------
    const dailyCard = document.getElementById('dailyCard');

    if (dailyCard) {
        const flowers = [
            { name: 'Hoa Hồng Đỏ', latin: 'Rosa', color: '#B91C1C', meaning: 'Tình yêu nồng nàn và sự say đắm.', tags: ['Tình yêu', 'Đam mê'], tip: 'Hợp để tặng người thương vào những dịp đặc biệt.' },
            { name: 'Tulip Vàng', latin: 'Tulipa', color: '#EAB308', meaning: 'Niềm vui rạng rỡ như nắng sớm.', tags: ['Niềm vui', 'Tình bạn'], tip: 'Món quà tươi tắn cho bạn bè hoặc đồng nghiệp.' },
            { name: 'Cúc Họa Mi', latin: 'Leucanthemum', color: '#FFFFFF', meaning: 'Sự ngây thơ, trong trẻo và tình cảm thầm lặng.', tags: ['Trong sáng', 'Thầm lặng'], tip: 'Chỉ nở ngắn ngày vào đầu đông — hãy tận hưởng khi còn kịp.' },
            { name: 'Hoa Đào', latin: 'Prunus persica', color: '#F9A8D4', meaning: 'May mắn, sinh sôi và một khởi đầu mới.', tags: ['May mắn', 'Mùa xuân'], tip: 'Loài hoa quen thuộc chào đón Tết ở miền Bắc.' },
            { name: 'Hoa Baby', latin: 'Gypsophila', color: '#F5F5F4', meaning: 'Tình yêu thuần khiết và bền lâu.', tags: ['Thuần khiết', 'Vĩnh cửu'], tip: 'Kết hợp cùng hoa khác để bó hoa thêm nhẹ nhàng.' },
            { name: 'Hoa Ly Trắng', latin: 'Lilium', color: '#FEF3C7', meaning: 'Sự cao quý và thanh khiết.', tags: ['Cao quý', 'Thanh cao'], tip: 'Hương khá đậm, nên đặt ở nơi thoáng.' },
            { name: 'Cẩm Chướng', latin: 'Dianthus', color: '#EC4899', meaning: 'Lòng biết ơn và tình mẹ bao la.', tags: ['Biết ơn', 'Gia đình'], tip: 'Lựa chọn ý nghĩa cho ngày của Mẹ.' },
            { name: 'Hoa Mai', latin: 'Ochna integerrima', color: '#FACC15', meaning: 'Phú quý, sung túc và điềm lành.', tags: ['Phú quý', 'Tết'], tip: 'Biểu tượng mùa xuân của miền Nam.' },
            { name: 'Thạch Thảo', latin: 'Aster', color: '#8B5CF6', meaning: 'Nỗi nhớ nhung và tình cảm chân thành.', tags: ['Nhớ nhung', 'Chân thành'], tip: 'Rất bền, giữ được lâu khi cắm lọ.' },
            { name: 'Hoa Nhài', latin: 'Jasminum', color: '#FAFAF9', meaning: 'Sự dịu dàng và nét duyên thầm.', tags: ['Dịu dàng', 'Duyên dáng'], tip: 'Hương thơm nhẹ, dễ chịu vào buổi tối.' }
        ];

        const bloom = dailyCard.querySelector('.daily-bloom');
        const info = dailyCard.querySelector('.daily-info');
        const els = {
            date: document.getElementById('dailyDate'),
            name: document.getElementById('dailyName'),
            latin: document.getElementById('dailyLatin'),
            meaning: document.getElementById('dailyMeaning'),
            tags: document.getElementById('dailyTags'),
            tip: document.getElementById('dailyTip')
        };

        const now = new Date();
        const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
        let current = dayOfYear % flowers.length;

        const render = (idx, label) => {
            const f = flowers[idx];
            els.date.textContent = label;
            els.name.textContent = f.name;
            els.latin.textContent = f.latin;
            els.meaning.textContent = f.meaning;
            els.tip.textContent = f.tip;
            els.tags.innerHTML = '';
            f.tags.forEach(t => {
                const span = document.createElement('span');
                span.className = 'daily-tag';
                span.textContent = t;
                els.tags.appendChild(span);
            });
            bloom.style.setProperty('--bloom', f.color);
        };

        const todayLabel = `Hôm nay · ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
        render(current, todayLabel);

        const shuffleBtn = document.getElementById('dailyShuffle');
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => {
                let next;
                do { next = Math.floor(Math.random() * flowers.length); } while (next === current);
                current = next;
                info.classList.add('is-changing');
                setTimeout(() => {
                    render(current, 'Gợi ý ngẫu nhiên');
                    info.classList.remove('is-changing');
                }, 250);
            });
        }
    }

    // ----------------------------------------------------------------------
    // 7. Ultra-Smooth Page Transition Link Handler (No Stuttering / Khựng)
    // ----------------------------------------------------------------------
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:') || link.target === '_blank') {
            return;
        }

        if (href.endsWith('.html') || href.startsWith('/') || href.includes(location.host)) {
            e.preventDefault();
            document.body.classList.add('page-leaving');
            setTimeout(() => {
                window.location.href = href;
            }, 140);
        }
    });
});
