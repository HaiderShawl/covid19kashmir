import {memo} from 'react';
import * as Icon from 'react-feather';

function Footer() {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>
      <h5>Follow us @</h5>
      <a
        href="https://www.facebook.com/covid19kashmir.org"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Facebook />
        <span>Facebook</span>
      </a>
      <a
        href="https://www.instagram.com/covid19kashmir/"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Instagram />
        <span>Instagram</span>
      </a>
      <a
        href="https://twitter.com/covid19kashmir_"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Twitter />
        <span>Twitter</span>
      </a>

      <div className="link">
        <h5>Code & Data by:</h5>
        <a
          href="https://www.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          covid19india
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
