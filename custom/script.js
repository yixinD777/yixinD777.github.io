// 获取按钮和计数器元素
const incrementBtn = document.getElementById('incrementBtn');
const counter = document.getElementById('counter');

// 初始化计数值
let count = 0;

// 为按钮添加点击事件监听器
incrementBtn.addEventListener('click', () => {
    count++;  // 每次点击计数器加1
    counter.textContent = count;  // 更新显示的计数值
});
