import Loadable from 'react-loadable';
 
const HomeComponent = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './Home'),
  loading: 'Loading...',
});

export default HomeComponent;