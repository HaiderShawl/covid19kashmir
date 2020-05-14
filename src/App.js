import Home from './components/home';
import Navbar from './components/navbar';
import ScrollToTop from './utils/ScrollToTop';

import React, {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {useLocalStorage, useEffectOnce} from 'react-use';

import './App.scss';

const schemaMarkup = {
  '@context': 'http://schema.org/',
  '@type': 'NGO',
  name: 'Coronavirus Outbreak in Kashmir: Latest Map and Case Count',
  alternateName: 'COVID-19 Tracker',
  url: 'https://www.covid19kashmir.org/',
  image: 'https://www.covid19kashmir.org/thumbnail.png',
};

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
  ];

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [isThemeSet] = useLocalStorage('isThemeSet', false);

  useEffectOnce(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !isThemeSet
    ) {
      setDarkMode(true);
    } else if (
      window.matchMedia &&
      !window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !isThemeSet
    ) {
      setDarkMode(false);
    }
  });

  React.useEffect(() => {
    if (darkMode) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="lazy"></div>}>
          <Route
            render={({location}) => (
              <div className="Almighty-Router">
                <Navbar
                  pages={pages}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
                <Switch location={location}>
                  {pages.map((page, index) => {
                    return (
                      <Route
                        exact
                        path={page.pageLink}
                        render={({match}) => (
                          <page.view key={match.params.stateCode || index} />
                        )}
                        key={index}
                      />
                    );
                  })}
                  <Redirect to="/" />
                </Switch>
              </div>
            )}
          />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
