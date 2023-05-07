const data = [
  
    {
        id: 1,
        name: "Lớp Học Đề Cao Thực Lực",
        auth: "KINUGASA SYOUGO",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/chao_mung_den_lop_hoc_de_cao_thuc_luc.jpg",
        price: 96000,
    },
    {
        id: 2,
        name: "Rồi Hoa Sẽ Nở",
        auth: "Nakatani Nio",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2023,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/roi-hoa_se_no.png",
        price: 51000,
    },
    {
        id: 3,
        name: "Colorful Line",
        auth: " Kei Ichikawa",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1973,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/colorfull_line.png",
        price: 59000,
    },
    {
        id: 4,
        name: "Dạ Hành Thực Lục - 1",
        auth: " Từ Lãng",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2023,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/da_hanh_thuc_luc_bia_1_tap_1.jpg",
        price: 123000,
    },
    {
        id: 5,
        name: "Dạ Hành Thực Lục - 2",
        auth: " Từ Lãng",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2023,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/da_hanh_thuc_luc_bia_1_tap_2.jpg",
        price: 108000,
    },
    {
        id: 6,
        name: "Sword Art Online",
        auth: " Reki Kawahara",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2023,
        form: "Bìa cứng",
        size: "15 x 20 cm",
        imgUrl: "../images/SAO.jpg",
        price: 100000,
    },
    {
        id: 7,
        name: "Overlord",
        auth: "Maruyama Kugane",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/overlord.jpg",
        price: 128000,
    },

    {
        id: 8,
        name: "Miền Đất Hứa",
        auth: "Kaiu Shirai",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/mien_dat_hua.jpg",
        price: 68000,
    },   
    {
        id: 9,
        name: "Tập Tỏ Tình - 2",
        auth: " HoneyWorks/Fujitani Toko",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/tap_to_tinh_2.jpg",
        price: 104000,
    },
    {
        id: 10,
        name: "Tập Tỏ Tình - 1",
        auth: " HoneyWorks/Fujitani Toko",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/tap_to_tinh_1.jpg",
        price: 104000,
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
