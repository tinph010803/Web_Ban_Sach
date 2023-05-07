// Check email
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function checkEmail() {
    const email = $("#email").val();
    if (!email) {
      $(".ma-mes").html("Không được để trống");
      return false;
    }
    if (regex.test(email)) {
        $(".ma-mes").html("(*)");
        return true;
      } else {
        $(".ma-mes").html(
           " Email không hợp lệ"
        );
        return false;
      }
    }

   // Check tài khoản
   const regexTaiKhoan = /^\w{6,}$/;
function checkTaiKhoan() {
    const username = $("#username").val();
    if (!username) {
      $(".tk-mes").html("Không được để trống");
      return false;
    }
    
    if (regexTaiKhoan.test(username)) {
      $(".tk-mes").html("(*)");
      return true;
    } else {
      $(".tk-mes").html(
        " Tài khoản không hợp lệ"
      );
      return false;
    }
  }



    
  // Check mật khẩu
function checkMatKhau() {
    const matKhau = $("#password").val();
    if (!matKhau) {
      $(".mk-mes").html("Không được để trống");
      return false;
    }
    const regex = /^\w{6,}$/;
    if (regex.test(matKhau)) {
      $(".mk-mes").html("(*)");
      return true;
    } else {
      $(".mk-mes").html( " Mật khẩu phải từ 6 kí tự trở lên " );
      return false;
    }
  }

    // Check nhập lại mật khẩu
function checkReEnterMatKhau() {
    const matKhau = $("#password").val();
    const reEntermatKhau = $("#passwordAgain").val();
    if (!reEntermatKhau) {
      $(".remk-mes").html("Không được để trống");
      return false;
    }
    if (matKhau === reEntermatKhau) {
        $(".remk-mes").html("(*)");
        return true;
      } else {
        $(".remk-mes").html( " Mật khẩu nhập lại không chính xác" );
        return false;
      }
     
        
  }

$("#email").blur(checkEmail);
$("#username").blur(checkTaiKhoan);
$("#password").blur(checkMatKhau);
$("#passwordAgain").blur(checkReEnterMatKhau);