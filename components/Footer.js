import Link from 'next/link'

export default () => (
  <div className="page-footer">
    <div className="page-footer-categories">
      <div className="container">
        <div>
          <h4 className="category-title">Company</h4>
          <address className="category-body">
            Signisto Ltd<br/>
            <br/>
            First Floor<br/>
            Telecom House<br/>
            125-135 Preston Road<br/>
            Brighton<br/>
            England<br/>
            BN1 6AF<br/>
            <br/>
            Email: <a href="mailto:enquiries@signisto.com">enquiries@signisto.com</a>
          </address>
        </div>

        <div>
          <h4 className="category-title">Products</h4>
          <ul className="category-list">
            <li>
              <a href="https://gostatic.io" target="_blank">GoStatic</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="category-title">Services</h4>
          <ul className="category-list">
            <li>
              <a href="/services#software-development">Software Development</a>
            </li>
            <li>
              <a href="/services#performance-consulting">Performance Consulting</a>
            </li>
            <li>
              <a href="/services#mobile-development">Mobile Applications</a>
            </li>
            <li>
              <a href="/services#machine-learning">Machine Learning</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="page-footer-social-links">
      <a href="https://twitter.com/signisto" target="_blank">Twitter</a>
      <a href="https://www.facebook.com/signisto" target="_blank">Facebook</a>
      <a href="https://www.linkedin.com/company/signisto" target="_blank">LinkedIn</a>
    </div>

    <div className="page-footer-copyright">
      &copy; 2019 Signisto Ltd
    </div>
  </div>
)
