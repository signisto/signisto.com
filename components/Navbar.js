import Link from 'next/link'

export default class Navbar extends React.Component {
  bodyClassNameIsScrolled = false

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll(event) {
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
      <div className="navbar navbar-fixed-top bg-primary">
        <Link href="/">
          <a className="navbar-brand">
            <span className="navbar-logo">
              <img src="/static/images/logo-light-shadow.svg" alt="Signisto Logo"/>
            </span>
            <span className="navbar-title">
              Signisto
            </span>
          </a>
        </Link>
        <ul className="navbar-navigation navbar-right">
          <li className="navbar-navigation-item">
            <Link href="/about">
              <a className="navbar-navigation-link">About Us</a>
            </Link>
          </li>
          <li className="navbar-navigation-item">
            <Link href="/contact-us">
              <a className="navbar-navigation-link">Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
