document.addEventListener('DOMContentLoaded', function() {
  setHeader();
})


function setHeader() {
  let header = document.querySelector('header');
  header.innerHTML = `
  <a href="/" class="header__logo">
  <img src="/img/logo-desktop.png" alt="logo">
  </a>
  <nav class="header__nav">
    <a href="https://twitter.com/the_meowcoin" target="_blank" class="header__item">TWITTER</a>
    <a href="https://t.me/+Ei4KAwBwcPtmNzVh" target="_blank" class="header__item">TELEGRAM</a>
    <a href="/" target="_blank" class="header__item">TOKENOMICS</a>
    <a href="/nft" class="header__item">NFTs</a>
  </nav>
  `
  document.body.insertBefore(header, document.body.firstChild);
}