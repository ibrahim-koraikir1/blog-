import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
    <div class="container">

      <div class="footer-top section">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src="./assets/images/logo.svg" width="129" height="40" alt="Blogy logo" />
          </a>

          <p class="footer-text">
            A minimal, functional theme for running a paid-membership publication on Ghost.
          </p>

        </div>

        <ul class="footer-list">

          <li>
            <p class="h5">Social</p>
          </li>

          <li class="footer-list-item">
            <ion-icon name="logo-facebook"></ion-icon>

            <a href="#" class="footer-link hover:underline">Facebook</a>
          </li>

          <li class="footer-list-item">
            <ion-icon name="logo-twitter"></ion-icon>

            <a href="#" class="footer-link hover:underline">Twitter</a>
          </li>

          <li class="footer-list-item">
            <ion-icon name="logo-pinterest"></ion-icon>

            <a href="#" class="footer-link hover:underline">Pinterest</a>
          </li>

          <li class="footer-list-item">
            <ion-icon name="logo-vimeo"></ion-icon>

            <a href="#" class="footer-link hover:underline">Vimeo</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="h5">About</p>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">Style Guide</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">Features</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">Contact</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">404</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">Privacy Policy</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="h5">Features</p>
          </li>

         

          <li>
            <a href="#" class="footer-link hover:underline">Blog & News</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">Features</a>
          </li>

          <li>
            <a href="#" class="footer-link hover:underline">FAQ Question</a>
          </li>

         

        </ul>


      </div>

      <div class="section footer-bottom">

        <p class="copyright">
          &copy; blog 2022. Published by <a href="#" class="copyright-link hover:underline">ibrahim koraikir</a>.
        </p>

      </div>

    </div>
  </footer>
  )
}
