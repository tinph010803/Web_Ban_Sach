
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("dssp");
let tongTien = 0;


console.log(cart)
cart.forEach(book => {
    // container.innerHTML = `
    // <tr class="text-center align-middle">
    //     <td class="text-center align-middle">${book.id}</td>
    //     <td>
    //         <div class="justify-content-center">
    //             <img style="width: 200px;" class="img-fluid"
    //                 src="${book.imgUrl}" alt="">
    //         </div>
    //     </td>
    //     <td class="text-center align-middle">${book.name}</td>
    //     <td class="text-center align-middle"><input type="number" min="1" max="10" value="1"
    //         name="">${book.count}</td>
    //     <td class="text-center align-middle"><span>${book.price}</span>đ</td>
    // </tr> 
    // `

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

