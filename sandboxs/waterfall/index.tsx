// 1. 手动实现
// // 本质是利用 绝对定位 去设置图片坐标，难点在于定位维护
// // cal 函数去拿到列数以及间隙
// // setPosition 函数中维护一个长度为 cal 拿到的列数数量的数组，每一项表示当前图片的结束 y 坐标

// 2. 现代属性
// .container{
//     display: grid;
//     grid-template-rows: masonry; // !!!
//     grid-template-columns: renderToPipeableStream(4, 1fr);
//     grid-gap: 10px;
// }