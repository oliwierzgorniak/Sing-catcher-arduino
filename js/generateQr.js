const generateQr = (socketId) => {
  const typeNumber = 4;
  const errorCorrectionLevel = "L";
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  const url = location.href + "remote.html?id=" + socketId;
  qr.addData(url);
  qr.make();
  document.getElementById("qr").innerHTML = qr.createImgTag(4);
};

export default generateQr;
