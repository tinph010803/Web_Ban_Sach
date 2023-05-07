$(document).ready(function(){
    let accounts = JSON.parse(localStorage.getItem("TaiKhoan"))
    function dangNhap(){
        let username = document.getElementById("username").value
        if(username == ""){
            document.getElementById("username").innerHTML = "Số điện thoại không được để trống!";
            document.getElementById("username").focus()
            return false;
        }
        document.getElementById("username").innerHTML =  "";
        let matkhau = document.getElementById("password").value
        if(matkhau == ""){
            document.getElementById("password").innerHTML = "Mật khẩu không được để trống!";
            document.getElementById("password").focus();
            return false;
        }
        document.getElementById("password").innerHTML =  "";
        return true;
    }

    $("#buttondangnhap").click(function(){
        let flag;
        if(!dangNhap()){
            return false;
        }
        let username = $("#username").val()
        let matkhau = $("#password").val()
        let user = accounts.find(x => x.tk == username)
        if(user != null && user.matKhau == matkhau){
            alert("Đăng nhập thành công")
            flag = true;
            window.open("../html/Home.html","_self").focus();
            
        } else{
            alert("Sai tài khoản hoặc mật khẩu")
            document.getElementById("username").focus();
            flag = false;
        }
        localStorage.setItem("flag",flag);
        
        return true;
    })
});