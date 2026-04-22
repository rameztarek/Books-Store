// 1. تحديد العناصر
const priceBtn = document.querySelector('.buy-btn');
const downloadBtn = document.querySelector('#download-section .wishlist-btn');

// 2. إضافة حدث عند الضغط على زرار السعر
priceBtn.addEventListener('click', function() {
    // إخفاء زرار السعر
    priceBtn.style.display = 'none';
    
    // إظهار زرار التحميل
    downloadBtn.style.display = 'inline-block';
    
    console.log("تمت عملية الشراء.. زرار التحميل متاح الآن.");
});