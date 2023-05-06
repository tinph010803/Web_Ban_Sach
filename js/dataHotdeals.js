const data = [
  
    {
        id: 1,
        name: "Fire Force tập 1",
        auth: "Atsushi Ohkubo",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2015,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/fire_force.jpg",
        price: 43000,
    },
    {
        id: 2,
        name: "Khu Rừng Đom Đóm",
        auth: "Yuki Midorikawa",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 2011,
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/khu_rung_dom_dom.jpg",
        price: 65000,
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
        form: "Bìa mềm",
        size: "13 x 18 cm",
        imgUrl: "../images/than-thoai-hy-lap.png",
        price: 176000,
    },
    {
        id: 7,
        name: "Hai Số Phận",
        auth: "Jeffrey Archer",
        kind: "sách in",
        field: "Văn học - Nghệ thuật",
        publishingYear: 1979,
        form: "Bìa mềm",
        size: "13 x 18 cm",
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
        price: 36000,
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
        price: 968000,
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


const books = document.getElementById("books");
//render books in homepage
data.map(book =>{
    

    const tml = `<div class="col">
    <div  class="product-img product">
        
        <div class="img">
            <a href="ChiTietSanPham.html" title="Tên sách">
                <img  alt=" Lupin siêu trộm" src="${book.imgUrl}">
            </a>
            <div class="product-detail ">
                <h3 class="pro-name">
                    <a href="ChiTietSanPham.html" title="Lupin siêu trộm">${book.name}</a>
                </h3>
                
                <div class="content_price">
                    <p class="pro-price">
                        ${book.price}
                    </p>
                  
                </div>
            </div>
        </div>
    </div>
    </div> `
    books.innerHTML += tml;
})
const products = document.querySelectorAll('.product')

products.forEach((product,index) => {
    product.addEventListener('click', () => {
        localStorage.setItem('book',JSON.stringify(data[index]))
        window.location.href = "ChiTietSanPham.html"
    })
})
