export const disableConnectButton = () => {
  const $connectButton = document.querySelector(".menu__connect");
  $connectButton.setAttribute("disabled", null);
  $connectButton.textContent = "connected";
};

export const activateConnectButton = () => {
  const $connectButton = document.querySelector(".menu__connect");
  $connectButton.removeAttribute("disabled");
  $connectButton.textContent = "Connect";
};
