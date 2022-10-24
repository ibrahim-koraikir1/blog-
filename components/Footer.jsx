import React from 'react'
import logo from '../public/asset/logo.jpg'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">

      <div className="footer-top section">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src={logo} width="129" height="40" alt=" logo" />
          </a>

          <p className="footer-text">
            A minimal, functional theme for running a paid-membership publication on Ghost.
          </p>

        </div>

        <ul className="footer-list">

          <li>
            <p className="h5">Social</p>
          </li>

          <li className="footer-list-item">
            <ion-icon name="logo-facebook"></ion-icon>

            <a href="#" className="footer-link hover:underline">Facebook</a>
          </li>

          <li className="footer-list-item">
            <ion-icon name="logo-twitter"></ion-icon>

            <a href="#" className="footer-link hover:underline">Twitter</a>
          </li>

          <li className="footer-list-item">
            <ion-icon name="logo-pinterest"></ion-icon>

            <a href="#" className="footer-link hover:underline">Pinterest</a>
          </li>

          <li className="footer-list-item">
            <ion-icon name="logo-vimeo"></ion-icon>

            <a href="#" className="footer-link hover:underline">Vimeo</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="h5">About</p>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">Style Guide</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">Features</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">Contact</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">404</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">Privacy Policy</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="h5">Features</p>
          </li>

         

          <li>
            <a href="#" className="footer-link hover:underline">Blog & News</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">Features</a>
          </li>

          <li>
            <a href="#" className="footer-link hover:underline">FAQ Question</a>
          </li>

         

        </ul>


      </div>

      <div className="section footer-bottom">

        <p className="copyright">
          &copy; blog 2022. Published by <a href="#" className="copyright-link hover:underline">ibrahim koraikir</a>.
        </p>

      </div>

    </div>
  </footer>
  )
}
