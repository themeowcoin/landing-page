document.addEventListener('DOMContentLoaded', function() {
  setHeader();
})


function setHeader() {
  let header = document.querySelector('header');
  header.innerHTML = `
  <a href="/" class="head__logo">
  <img src="/img/logo-desktop.png" alt="logo">
  <img src="/img/logo.png" alt="logo" class="head__logo-mobile">
  </a>
  <nav class="head__nav">
    <a href="https://twitter.com/the_meowcoin" target="_blank" class="head__item">TWITTER</a>
    <a href="https://twitter.com/the_meowcoin" target="_blank" class="head__item mob"><img src="/img/twitter.png" alt="twitter"></a>
    <a href="https://t.me/+Ei4KAwBwcPtmNzVh" target="_blank" class="head__item">TELEGRAM</a>
    <a href="https://t.me/+Ei4KAwBwcPtmNzVh" target="_blank" class="head__item mob"><img src="/img/telegram.png" alt="telegram"></a>
    <a href="https://github.com/themeowcoin" target="_blank" class="head__item">GITHUB</a>
    <a href="https://github.com/themeowcoin" target="_blank" class="head__item mob"><img src="/img/github.png" alt="github"></a>
    <a href="/" target="_blank" class="head__item">MEOWNOMICS</a>
    <a href="/" target="_blank" class="head__item mob"><img src="/img/tokenomics.png" alt="meownomics"></a>
    <a href="/nft" class="head__item">NFTs</a>
    <a href="/nft" class="head__item mob"><img src="/img/nft.png" alt="nft"></a>
  </nav>
  `
  document.body.insertBefore(header, document.body.firstChild);
}