document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return; // 安全対策

  // クリックで開閉
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // リサイズ時に PC表示ならメニューをリセット
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });
});
