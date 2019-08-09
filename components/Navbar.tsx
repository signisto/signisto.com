import React, { Component } from 'react'
import Link from 'next/link'

export default class Navbar extends Component {
  bodyClassNameIsScrolled = false

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll(event: Event) {
    if (window.scrollY > 50 && this.bodyClassNameIsScrolled === false) {
      document.body.className = document.body.className.trim() + ' is-scrolled';
      this.bodyClassNameIsScrolled = true;
    } else if (window.scrollY <= 50 && this.bodyClassNameIsScrolled === true) {
      document.body.className = document.body.className.replace('is-scrolled', '').trim();
      this.bodyClassNameIsScrolled = false;
    }
  }

  render () {
    return (
      <div id="navbar" className="fixed flex w-full p-3">
        <Link href="/">
          <a className="flex items-center text-white">
            <img src="/static/images/logo-light-shadow.svg" alt="Signisto Logo" width="60" height="60"/>
            <span className="ml-3 text-4xl">
              Signisto
            </span>
          </a>
        </Link>
        <ul className="ml-auto hidden md:flex items-center">
          <li>
            <Link href="/services">
              <a className="btn btn-primary">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className="ml-4 btn btn-primary">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
