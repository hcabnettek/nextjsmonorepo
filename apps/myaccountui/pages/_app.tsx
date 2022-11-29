import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/navbar/navbar';
import { AuthProvider, ProtectRoute } from '../context/auth';
import './index.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Welcome to myaccountui!</title>
      </Head>
      <Script src="https://cdn.tailwindcss.com" />
      <Navbar />
      <main>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </main>
      <footer id="footer" className="site-footer">
        <div className="container site-footer__container">
          {/*  <div className="site-footer__top">
            <div className="site-footer__top-container">
              <div className="site-footer__explore">
                <ul className="site-footer__menu">
                  <li className="menu-item">
                    <a
                      href="/about-us"
                      data-drupal-link-system-path="node/90646"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/site-map"
                      data-drupal-link-system-path="node/90641"
                    >
                      Site Map
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/terms-and-conditions"
                      data-drupal-link-system-path="node/90681"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/careers"
                      data-drupal-link-system-path="node/90656"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/more-languages"
                      data-drupal-link-system-path="node/91481"
                    >
                      More Languages
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/for-your-business/energy-savings/energy-usage-requests"
                      data-drupal-link-system-path="node/91801"
                    >
                      Energy Usage Request
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://newsroom.socalgas.com">Newsroom</a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/accessibility"
                      data-drupal-link-system-path="node/90666"
                    >
                      Accessibility Center
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/privacy-center"
                      data-drupal-link-system-path="node/95116"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="/regulatory">Rates &amp; Regulatory</a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="/unclaimed-property"
                      data-drupal-link-system-path="node/91816"
                    >
                      Unclaimed Property
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-footer__connect">
                <div className="site-footer__connect-icon">
                  <h3 className="site-footer__title">Connect with Us</h3>
                  <ul className="site-footer__menu">
                    <li className="site-footer__social-item">
                      <a
                        className="site-footer__social-link"
                        target="_blank"
                        href="https://facebook.com/socalgas"
                        rel="noreferrer"
                      >
                        <span className="site-footer__social-icon site-footer__social-icon--facebook"></span>
                        <span className="spokenonlytext">Facebook</span>
                        <span className="spokenonlytext">
                          . Opens in a new window.
                        </span>
                      </a>
                    </li>
                    <li className="site-footer__social-item">
                      <a
                        className="site-footer__social-link"
                        target="_blank"
                        href="https://twitter.com/socalgas"
                        rel="noreferrer"
                      >
                        <span className="site-footer__social-icon site-footer__social-icon--twitter"></span>
                        <span className="spokenonlytext">Twitter</span>
                        <span className="spokenonlytext">
                          . Opens in a new window.
                        </span>
                      </a>
                    </li>
                    <li className="site-footer__social-item">
                      <a
                        className="site-footer__social-link"
                        target="_blank"
                        href="https://www.linkedin.com/company/southern-california-gas-company"
                        rel="noreferrer"
                      >
                        <span className="site-footer__social-icon site-footer__social-icon--linkedin"></span>
                        <span className="spokenonlytext">Linkedin</span>
                        <span className="spokenonlytext">
                          . Opens in a new window.
                        </span>
                      </a>
                    </li>
                    <li className="site-footer__social-item">
                      <a
                        className="site-footer__social-link"
                        target="_blank"
                        href="https://youtube.com/socalgas"
                        rel="noreferrer"
                      >
                        <span className="site-footer__social-icon site-footer__social-icon--youtube"></span>
                        <span className="spokenonlytext">Youtube</span>
                        <span className="spokenonlytext">
                          . Opens in a new window.
                        </span>
                      </a>
                    </li>
                    <li className="site-footer__social-item">
                      <a
                        className="site-footer__social-link"
                        target="_blank"
                        href="https://instagram.com/socalgas"
                        rel="noreferrer"
                      >
                        <span className="site-footer__social-icon site-footer__social-icon--instagram"></span>
                        <span className="spokenonlytext">Instagram</span>
                        <span className="spokenonlytext">
                          . Opens in a new window.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="site-footer__logo"></div>
          </div>

          <div className="site-footer__bottom">
            <div className="site-footer__bottom-container">
              <div className="site-footer__utility">
                <ul className="site-footer__menu">
                  <li className="menu-item">
                    <a href="https://www.socalgas.com/privacy-notice">
                      Privacy Notice
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.socalgas.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.socalgas.com/terms-and-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.socalgas.com/for-your-business/energy-savings/energy-usage-requests">
                      Energy Usage Request
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://www.socalgas.com/privacy-center">
                      Privacy Center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-footer__disclaimer">
                <div id="site-footer--disclaimer"></div>
                <p>
                  Southern California Gas Company is a subsidiary of Sempra
                  <sup>®</sup>. © 1998 -{' '}
                  <script>document.write(new Date().getFullYear())</script>
                  2022&nbsp;Southern California Gas Company. SoCalGas
                  <sup>®</sup>&nbsp;is a registered trademark of Southern
                  California Gas Company. The trademarks used herein are the
                  property of their respective owners. All rights reserved.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    </AuthProvider>
  );
}

export default CustomApp;
