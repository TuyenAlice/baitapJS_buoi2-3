function quydoi() {
  let soUSD = Number(document.getElementById("nhapSoTien").value);
  let giaTriQuyDoi = 23500;
  let tinhvaxuat = giaTriQuyDoi * soUSD;
  document.getElementById("ketQua").textContent =
    "Số Tiền Quy đổi VND " + tinhvaxuat;
}
document.getElementById("btnQuyDoi").onclick = quydoi;
