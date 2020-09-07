import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const trackingId = "UA-176844902-1"; 
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
})