// 1. 取得 DOM 元素
const notifBtn = document.getElementById('notif-btn');
const notifMenu = document.getElementById('notif-menu');
const userBtn = document.getElementById('user-btn');
const userMenu = document.getElementById('user-menu');
const userChevron = document.getElementById('user-chevron');

// 2. 通用的切換顯示函式
function toggleMenu(menu, otherMenu) {
  // 如果另一個選單開著，先關掉它
  if (!otherMenu.classList.contains('hidden')) {
    otherMenu.classList.add('hidden');
  }
  // 切換當前選單的 hidden
  menu.classList.toggle('hidden');
}

// 3. 綁定點擊事件
notifBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // 防止點擊事件冒泡
  toggleMenu(notifMenu, userMenu);
});

userBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu(userMenu, notifMenu);

  // 讓箭頭轉向 (選用)
  if (userMenu.classList.contains('hidden')) {
    userChevron.style.transform = 'rotate(0deg)';
  } else {
    userChevron.style.transform = 'rotate(180deg)';
  }
});

// 4. 點擊畫面其他地方時，關閉所有選單
document.addEventListener('click', (e) => {
  if (!notifMenu.classList.contains('hidden') && !notifMenu.contains(e.target)) {
    notifMenu.classList.add('hidden');
  }
  if (!userMenu.classList.contains('hidden') && !userMenu.contains(e.target)) {
    userMenu.classList.add('hidden');
    userChevron.style.transform = 'rotate(0deg)';
  }
});

// 5. 登出功能
function handleLogout() {
  // 清除資料
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");

  // 轉導到登入頁 
  window.location.href = 'login.html';
}


// side bar
// --- 折疊選單控制 ---
function toggleSubmenu(menuId, arrowId) {
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);
    
    // 1. 切換顯示/隱藏
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        arrow.classList.add('rotate-180'); // 箭頭轉向上
    } else {
        menu.classList.add('hidden');
        arrow.classList.remove('rotate-180'); // 箭頭轉回下
    }
}
