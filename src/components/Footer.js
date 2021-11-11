import {memo} from 'react';
import * as Icon from 'react-feather';

function Footer() {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>
      <h5>Follow us on social media
      
      
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
      </h5>

      <div className="link">
        <h5>Code & Data by:
        <a
          href="https://www.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        ><br/><br/>
          covid19india
        </a>
        </h5>
        
      </div>
      <h5>Website by Haider Shawl</h5>
    </footer>
  );
}

export default memo(Footer);
