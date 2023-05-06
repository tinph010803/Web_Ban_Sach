const data = [
  
    {
        id: 1,
        name: "Fire Force tập 1",
        auth: "Atsushi Ohkubo",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2014,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/fire_force.jpg",
        price: 45000,
    },
    {
        id: 2,
        name: "Khu Rừng Đom Đóm",
        auth: "Yuki Midorikawa",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2011,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/khu_rung_dom_dom.jpg",
        price: 70000,
    },
    {
        id: 3,
        name: "Black Jack",
        auth: "Tezuka Osamu",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1973,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/black_jack.jpg",
        price: 24000,
    },
    {
        id: 4,
        name: "Văn Phòng Thám Tử",
        auth: "Aimoto Shō",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2016,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/tham_tu_quai_vat.jpg",
        price: 24000,
    },
    {
        id: 5,
        name: "Cuốn Theo Chiều Gió",
        auth: "Margaret Mitchell",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1936,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/cuon-theo-chieu-gio.png",
        price: 200000,
    },
    {
        id: 6,
        name: "Thần Thoại Hy Lạp",
        auth: "Nguyễn Văn Khỏa biên soạn",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa cứng",
        size: "15 x 20 cm",
        imgUrl: "../images/than-thoai-hy-lap.png",
        price: 176000,
    },
    {
        id: 7,
        name: "Hai Số Phận",
        auth: "Jeffrey Archer",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1989,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/hai-so-phan.png",
        price: 124000,
    },

    {
        id: 8,
        name: "Ông Già Và Biển Cả",
        auth: "Ernest Hemingway",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1952,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/ong-gia-va-bien-ca.png",
        price: 50000,
    },   
    {
        id: 9,
        name: "Còn Chút Gì Để Nhớ",
        auth: "Nguyễn Nhật Ánh",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1988,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/sach-con-chut-gi-de-nho-.jpg",
        price: 96000,
    },
    {
        id: 10,
        name: "Tây Sơn Phụng Thần Ký",
        auth: "Thành Châu",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2023,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/tay-son-phung-than-ky.jpg",
        price: 118000,
    },


]

const container = document.getElementById('books');

        data.forEach(book => {
            const items = document.createElement('div');
            items.className = 'items';

            const image = document.createElement('img');
            image.src = book.imgUrl;
            image.alt = book.name;
            items.appendChild(image);

            const title = document.createElement('h4');
            title.textContent = book.name;
            items.appendChild(title);

            const price = document.createElement('p');
            price.textContent = 'Giá: ' + book.price.toLocaleString('vi-VN') + ' VND';
            items.appendChild(price);

            container.appendChild(items);
        });

const products = document.querySelectorAll('.items')

products.forEach((items,index) => {
    items.addEventListener('click', () => {
        localStorage.setItem('book',JSON.stringify(data[index]))
        window.location.href = "ChiTietSanPham.html"
    })
})
