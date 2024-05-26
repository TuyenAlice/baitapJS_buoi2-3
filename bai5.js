// Bài 5
function tinhTongKySo() {
  let nhapSo = Number(document.getElementById("nhapSo").value);

  let kyHangDV = nhapSo % 10;
  let kyHangChuc = parseInt(nhapSo / 10);
  let soTong = kyHangDV + kyHangChuc;
  document.getElementById("ketQuaTong").textContent =
    "Tổng là :" + kyHangDV + "+" + kyHangChuc + "=" + soTong;
}
document.getElementById("btnTong").onclick = tinhTongKySo;
