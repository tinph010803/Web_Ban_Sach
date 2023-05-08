
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("dssp");
let tongTien = 0;


console.log(cart)
cart.forEach(book => {

    const items = document.createElement('tr');
    items.className = 'text-center align-middle';

    const id = document.createElement('td');
    id.textContent = book.id;
    items.appendChild(id);

    const hang = document.createElement('td');
    items.appendChild(hang);

    const image = document.createElement('div');
    image.className = 'justify-content-center';
    hang.appendChild(image);

    const img = document.createElement("img");
    img.src = book.imgUrl;
    img.alt = book.name;
    img.className = 'img-fluid';
    img.style.width = '200px';
    image.appendChild(img);

    const name = document.createElement('td');
    name.className = 'text-center align-middle';
    name.textContent = book.name;
    items.appendChild(name);

    const sl = document.createElement('td');
    sl.className = 'text-center align-middle';
    items.appendChild(sl);
    const inp = document.createElement('input');
    inp.style.textAlign = 'center';
    inp.style.width = '30%';
    inp.type = 'text';
    inp.value = book.count;
    sl.appendChild(inp);

    const gia = document.createElement('td');
    gia.className = 'text-center align-middle';
    items.appendChild(gia);
    const price = document.createElement('span');
    price.textContent = book.price.toLocaleString('vi-VN') + 'VNĐ';
    gia.appendChild(price);

    container.appendChild(items);
    

    tongTien += (book.count * book.price);
});

const tongCong = document.getElementById('tongcong');

const tong = document.createElement('h5');
tong.textContent = "Tổng cần thanh toán: " + tongTien.toLocaleString('vi-VN') + ' VND';
tong.style.textAlign ='right';
tongCong.appendChild(tong);

const thanhtoanBtn = document.getElementById('checkout');

thanhtoanBtn.addEventListener('click',function(){
    alert('Thanh toán thành công');
    localStorage.removeItem('cart');
    location.reload();
});