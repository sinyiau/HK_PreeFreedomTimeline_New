// script.js - 初始版本：控制新佈局下 dynamic-side-info 的顯隱

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript (new layout): DOM fully loaded and parsed.');

    // 選取所有帶有 data-year 屬性的主要內容區塊
    const contentBlocks = document.querySelectorAll('.main-story-column .content-block[data-year]');
    
    if (contentBlocks.length === 0) {
        console.warn('JavaScript: No .content-block[data-year] elements found to observe.');
        return;
    } else {
        console.log(`JavaScript: Found ${contentBlocks.length} content blocks to observe.`);
    }

    // Intersection Observer 的設定選項
    const observerOptions = {
        root: null, // 相對於瀏覽器視窗
        rootMargin: '0px 0px -50% 0px', // 觸發線在視窗垂直中線
                                        // 當 section 的頂部超過中線，它就被視為活躍
        threshold: 0.01 // 元素稍微可見即觸發
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            // 從 entry.target (即 .content-block) 找到它內部的側邊資訊元素
            const contentBlock = entry.target;
            const leftInfo = contentBlock.querySelector('.dynamic-side-info.left-info');
            const rightInfo = contentBlock.querySelector('.dynamic-side-info.right-info');

            if (entry.isIntersecting) {
                // 當 .content-block 進入觸發區域
                console.log(`Section for year ${contentBlock.dataset.year} IS intersecting.`);
                if (leftInfo) {
                    leftInfo.classList.add('is-visible');
                    console.log('Left info made visible for year:', contentBlock.dataset.year);
                }
                if (rightInfo) {
                    rightInfo.classList.add('is-visible');
                    console.log('Right info made visible for year:', contentBlock.dataset.year);
                }
            } else {
                // 當 .content-block 離開觸發區域
                console.log(`Section for year ${contentBlock.dataset.year} is NOT intersecting.`);
                if (leftInfo) {
                    leftInfo.classList.remove('is-visible');
                    console.log('Left info hidden for year:', contentBlock.dataset.year);
                }
                if (rightInfo) {
                    rightInfo.classList.remove('is-visible');
                    console.log('Right info hidden for year:', contentBlock.dataset.year);
                }
            }
        });
    };

    // 創建 Intersection Observer 實例
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    // 讓 observer 開始觀察所有選定的 content blocks
    contentBlocks.forEach(block => {
        observer.observe(block);
    });
    console.log('JavaScript: Observer is now watching content blocks.');
});