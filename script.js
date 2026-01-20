document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Optional: Add smooth scrolling for legacy browsers if needed 
    // (CSS scroll-behavior: smooth handles most modern cases)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // WeChat Copy Functionality
    const wechatBtn = document.getElementById('wechat-copy-btn');
    if (wechatBtn) {
        wechatBtn.addEventListener('click', () => {
            const wechatId = 'Lmch96400012';
            navigator.clipboard.writeText(wechatId).then(() => {
                const originalHTML = wechatBtn.innerHTML;
                wechatBtn.innerHTML = '<i class="fa-solid fa-check"></i> 已复制!';

                // Optional: Change style temporarily
                wechatBtn.style.backgroundColor = '#07C160';
                wechatBtn.style.color = '#fff';

                setTimeout(() => {
                    wechatBtn.innerHTML = originalHTML;
                    wechatBtn.style.backgroundColor = ''; // Revert to original (or CSS defined)
                    wechatBtn.style.color = '#07C160'; // Revert to text color
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('复制失败，请手动复制: ' + wechatId);
            });
        });
    }
});
