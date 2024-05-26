// Bài 1
function tinhLuong() {
  let soNgayLam = Number(document.getElementById("soNgayLam").value);

  if (soNgayLam === "" || soNgayLam < 0) {
    document.getElementById("ketQua").textContent =
      "Số ngày làm phải là số nguyên dương!";
    return;
  }

  let LUONG_1_NGAY = 100000;
  let luong = LUONG_1_NGAY * soNgayLam;

  document.getElementById("ketQua").textContent =
    "Lương của bạn là:" + luong + "đồng";
}

document.getElementById("btnTinhLuong").onclick = tinhLuong;
