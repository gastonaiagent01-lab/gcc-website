// Single source of truth for site routes, used by App (router) and Nav/Footer (links).
export const routes = {
  home: '/',
  about: '/about',
  medicalSpaces: '/medical-spaces',
  officeSpace: '/office-space',
  eventSpace: '/event-space',
  churchSpace: '/church-space',
  give: '/give',
  services: '/services',
  newRoots: '/new-roots',
  contact: '/contact',
  friendsOfGaston: '/friends-of-gaston',
};

export const findYourSpaceLinks = [
  { label: 'Medical Spaces', to: routes.medicalSpaces },
  { label: 'Office Space', to: routes.officeSpace },
  { label: 'Event Space', to: routes.eventSpace },
  { label: 'Church Space', to: routes.churchSpace },
];

export const giveLinks = [
  { label: 'Give', to: routes.give },
  { label: 'Other Ways to Give', to: `${routes.give}#other-ways` },
  { label: 'Friends of Gaston', to: routes.friendsOfGaston },
];

export const footerPageLinks = [
  { label: 'Home', to: routes.home },
  { label: 'About', to: routes.about },
  { label: 'Find Your Space', to: routes.medicalSpaces },
  { label: 'Give', to: routes.give },
  { label: 'Services', to: routes.services },
  { label: 'New Roots', to: routes.newRoots },
  { label: 'Contact Us', to: routes.contact },
];
