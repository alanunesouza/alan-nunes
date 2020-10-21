import ReactGA from 'react-ga';

export const onServiceWorkerUpdateReady = () => window.location.reload();

console.log(process.env.GOOGLE_ANALYTICS_ID || 'none');

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID || 'none');

export const onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname);
};
