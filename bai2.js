// bài 2
function tinhTrungBinh() {
  let soThuc1 = Number(document.getElementById("soThuc1").value);
  let soThuc2 = Number(document.getElementById("soThuc2").value);
  let soThuc3 = Number(document.getElementById("soThuc3").value);
  let soThuc4 = Number(document.getElementById("soThuc4").value);
  let soThuc5 = Number(document.getElementById("soThuc5").value);
  let giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
  document.getElementById("ketQua").textContent =
    "Giá trị trung bình:" + giaTriTrungBinh;
}
document.getElementById("btnTinhTrungBinh").onclick = tinhTrungBinh;
