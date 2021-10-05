import HomeBanner from '../components/homePage/HomeBanner';
import Layout from '../components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeContent from '../components/homePage/HomeContent';
import HomeFeature from '../components/homePage/HomeFeature';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../context/globalContext';
import HomeAbout from '../components/homePage/HomeAbout';
import Footer from '../components/Footer';

function App() {
  const dispath = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispath({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeBanner />
            <HomeContent />
            <HomeFeature onCursor={onCursor} />
            <HomeAbout onCursor={onCursor} />
            <Footer onCursor={onCursor} />
          </Layout>
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
