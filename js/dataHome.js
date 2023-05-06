const data = [
    {
        id: 1,
        name: "Arsène Lupin - Siêu trộm hào hoa- Những cuộc phiêu lưu kì lạ",
        auth: "Maurice Leblanc",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2022,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/Arsène_Lupin_sieu_trom_dao_hoa.png",
        price: 81900,
    },
    {
        id: 2,
        name: "Tokyo Revengers Tập 1",
        auth: "Ken Wakui",
        kind: "sách in",
        field: "Light Novel",
        publishingYear: 2017,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/tokyo1.png",
        price: 92000,
    },
    {
        id: 3,
        name: "Khu Vườn Bí Mật",
        auth: "Frances H Burnett",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1988,
        form: "Bìa cứng",
        size: "13 x 18 cm",
        imgUrl: "../images/khu_vuon_bi_mat.png",
        price: 134200,
    },
    {
        id: 4,
        name: "Quan hệ nguy hiểm",
        auth: "Khiêu Dược Hỏa Diễm",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2012,
        form: "Bìa mềm",
        size: "15 x 20 cm",
        imgUrl: "../images/quan-he-nguy-hiem.jpg",
        price: 98000,
    },
    {
        id: 5,
        name: "Thượng Dương",
        auth: "Hoàng Yến",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2018,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/thuong_duong.jpg",
        price: 65000,
    },
    {
        id: 6,
        name: "Học Viện Siêu Anh Hùng",
        auth: "Horikoshi Kohei",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2012,
        form: "Bìa cứng",
        size: "15 x 20 cm",
        imgUrl: "../images/hvsah13.jpg",
        price: 25000,
    },
    {
        id: 7,
        name: "Chú Thuật Hồi Chiến",
        auth: "Akutami Gege",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2020,
        form: "Bìa cứng",
        size: "13 x 18 cm",
        imgUrl: "../images/chu_thuat_hoi_chien3.jpg",
        price: 36000,
    },
    {
        id: 8,
        name: "Tâm Lý Tội Phạm",
        auth: "Stanton E.Samenow",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1984,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/tam_ly_toi_pham.png",
        price: 116000,
    },
    {
        id: 9,
        name: "Vua Hải Tặc",
        auth: "Oda Eiichiro",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1997,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/onepiece7.jpg",
        price: 25500,
    },
    {
        id: 10,
        name: "Hai Số Phận",
        auth: "Jeffrey Archer",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1989,
        form: "Bìa cứng",
        size: "15 x 20 cm",
        imgUrl: "../images/hai_so_phan.jpg",
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




