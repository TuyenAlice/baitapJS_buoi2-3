// Bài 4
function tinhGiaTri() {
  let nhapChieudai = Number(document.getElementById("nhapChieuDai").value);
  let nhapChieurong = Number(document.getElementById("nhapChieurong").value);
  let ChuVi = (nhapChieudai + nhapChieurong) * 2;
  let dienTich = nhapChieudai * nhapChieurong;
  document.getElementById("ketQuaChuVi").textContent =
    "Chu vi HCN là: " + ChuVi;
  document.getElementById("ketQuaDienTich").textContent =
    "Diện tích HCN là: " + dienTich;
}
document.getElementById("btnTinhvaXuat").onclick = tinhGiaTri;
