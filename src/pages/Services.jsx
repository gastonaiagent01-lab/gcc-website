import { Link } from 'react-router-dom';
import { routes } from '../routes';
import './Services.css';

const programs = [
  {
    title: 'Event Space Rental',
    description:
      "Looking for a centrally located venue in Dallas to host your next event? Gaston Christian Center's Fellowship Hall is available for one-time rentals — perfect for nonprofit conferences, community health fairs, fundraisers, workshops, church gatherings, and corporate meetings. Conveniently located in Northeast Dallas at 8515 Greenville Ave., our flexible event space accommodates a variety of group sizes and occasions.",
    to: routes.eventSpace,
  },
  {
    title: 'New Roots',
    description:
      'New Roots is designed to help immigrant and refugee families in Dallas furnish their homes with dignity combined with community. Stocked through generous community donations and local business partnerships, New Roots offers a family a complete kitchen setup, bath linens, and bed linens — essential items to those starting fresh in a new country. Open by appointment to organizations assisting immigrant and refugee families get settled.',
    to: routes.newRoots,
  },
  {
    title: 'Nonprofit & Church Office Space for Rent',
    description:
      "Is your nonprofit or congregation looking for affordable office space in Dallas? Gaston Christian Center offers below-market, subsidized rental space exclusively for nonprofit organizations and faith communities. From small single offices to multi-room suites, we have flexible options to fit your ministry's size and budget — with utilities included.",
    to: routes.officeSpace,
  },
  {
    title: 'Telehealth Services – Parkland Hospital Pod',
    description:
      "Access convenient, affordable telehealth care right inside the Gaston Christian Center atrium. In partnership with Parkland Health — one of Dallas's leading public health systems — our on-site telehealth pod allows both GCC tenants and neighborhood residents to schedule same-day virtual appointments with Parkland physicians and advanced practice providers via audio-video technology. Visit our atrium kiosk or schedule your appointment online through MyChart.",
    to: null,
  },
];

const facilityPartners = [
  {
    name: 'Gateway of Grace',
    description:
      'Ministry to refugee families through providing ESL (English as a Second Language) classes and offering many other sought-after community services.',
    link: 'https://www.gatewayofgrace.org/',
    logo: '/images/live/tenants/gateway-of-grace.webp',
  },
  {
    name: 'Full Circle Bakery',
    description:
      'A "for-purpose" bakery dedicated to training, encouraging, and empowering refugee women with baking and entrepreneurial skills.',
    link: 'https://www.fullcircletexas.com/',
    logo: '/images/live/tenants/full-circle-bakery.webp',
  },
  {
    name: 'Bethesda Hope Ministries',
    description:
      'Dedicated to community transformation, providing support and resources for individuals, families, and underserved communities.',
    link: 'https://www.bethesdahopeministries.org/',
    logo: '/images/live/tenants/bethesda-hope-ministries.webp',
  },
  {
    name: 'Bakke Graduate University',
    description:
      'A fully-accredited university with students, faculty, alumni, and staff in over 65 nations across three integrated colleges of Christian theology, business, and urban studies.',
    link: 'https://bgu.edu/',
    logo: '/images/live/tenants/bakke-graduate-university.webp',
  },
  {
    name: 'Baptist News Global',
    description:
      'A reader-supported, independent news organization providing original and curated news, opinion, and analysis about matters of faith — Baptist in heritage and ecumenical in spirit.',
    link: 'https://baptistnews.com/more/about/',
    logo: '/images/live/tenants/baptist-news-global.webp',
  },
  {
    name: 'HHM Health - Dental Office',
    description:
      'Exceptional dental care that combines quality with convenience, using state-of-the-art technology and affordable, compassionate providers.',
    link: 'https://www.hhmhealth.org/dental/',
    logo: '/images/live/tenants/hhm-health-dental-office.webp',
  },
  {
    name: 'Kids U',
    description:
      'Improving the lives of children living in under-resourced communities by focusing on educational, personal, social, and environmental issues.',
    link: 'https://kids-u.org/',
    logo: '/images/live/tenants/kids-u.webp',
  },
  {
    name: 'Light of Hope Immigration Law Center',
    description:
      'Advocates, educates, and serves low-income immigrant families in securing U.S. legal status through low-cost or pro-bono legal services and citizenship preparatory courses.',
    link: 'https://www.lohimmigration.org/index.html',
    logo: '/images/live/tenants/light-of-hope-immigration-law-center.webp',
  },
  {
    name: 'Friends of MLK',
    description:
      'Provides educational and community development services to historically underserved communities.',
    link: 'https://friendsofmlk.org/',
    logo: '/images/live/tenants/friends-of-mlk.webp',
  },
  {
    name: 'Literacy ConneXus',
    description:
      'Advises and assists literacy projects throughout Texas and beyond, mobilizing churches to help people who struggle with speaking, reading, and writing English.',
    link: 'https://www.literacyconnexus.org/',
    logo: '/images/live/tenants/literacy-connexus.webp',
  },
];

const churches = [
  {
    name: 'Familia de la Fe',
    description:
      'Una comunidad que ama a Dios y expresa ese amor sirviendo, adorando, discipulando y compartiendo la Fe. Servicios a la 1pm en N209.',
    link: 'https://www.facebook.com/people/Familia-De-La-Fe/61575699068916/#',
    logo: '/images/live/tenants/familia-de-la-fe.webp',
  },
  {
    name: 'Full Gospel Assembly International Ministry',
    description:
      'Myanmar Services 1pm · Zomi Services 3pm · Saturday Prayer Meeting 10am–12pm · Youth Service Saturday 7pm. Activity Room at N201.',
    link: 'https://www.facebook.com/fgaimdallas/',
    logo: '/images/live/tenants/full-gospel-assembly-international-ministry.webp',
  },
  {
    name: 'Agape Baptist Church',
    description:
      'Worship Services in the Sanctuary (South Building 1st Floor): Fridays 7:00–8:00 PM, Sundays 12:00–2:00 PM.',
    link: 'https://www.facebook.com/agapebcdallas/',
    logo: '/images/live/tenants/agape-baptist-church.webp',
  },
  {
    name: 'Iglesia INNOVA',
    description:
      'Una iglesia alcanzando a los perdidos y llevando esperanza a través de las misiones. Servicios en salon S101, Domingos 10 AM.',
    link: 'https://www.facebook.com/healinghandscchurch/',
    logo: '/images/live/tenants/iglesia-innova.webp',
  },
  {
    name: 'Hope Outreach & Integration Ministries International',
    description: 'Pastor Seth Simisi.',
    link: 'mailto:ksimisi@yahoo.com?subject=Inquiry',
    logo: '/images/live/tenants/hope-outreach-integration-ministries-international.webp',
  },
  {
    name: 'Iglesia Bautista La Promesa',
    description:
      'Servicios en español Domingos a la 9am en el Salon N201 (Activity Room). Iglesia misionera enfocada en misiones en Latinoamérica. Pastor Ricarte Espinal.',
    link: 'mailto:ricespinal@yahoo?subject=Church%20Inquiry',
    logo: '/images/live/tenants/iglesia-bautista-la-promesa.webp',
  },
  {
    name: 'Gaston Oaks Baptist Church',
    description:
      'The founding church of Gaston Christian Center. A small, senior adult congregation worshiping Sundays at 9:30am in the Sanctuary (1st floor South building) with Pastor Dr. Gary Cook.',
    link: 'https://www.facebook.com/profile.php?id=61564036615704',
    logo: '/images/live/tenants/gaston-oaks-baptist-church.webp',
  },
  {
    name: 'Centro Cristiano Biblico Metroplex',
    description:
      'Servicios los Domingos de 9am a 11:30am en el Salon (Choir Room), 2nd piso South Building. Pastor Jose Almanza.',
    link: 'mailto:jalmanza214@yahoo.com?subject=Church%20Inquiry',
    logo: '/images/live/tenants/centro-cristiano-biblico-metroplex.webp',
  },
  {
    name: 'African Fellowship Church',
    description:
      'Services Sundays 9am–11:30am in suite N209, held in Swahili. Pastor Tabu Esongo.',
    link: 'mailto:patricknyanda14@gmail.com?subject=Church%20Inquiry',
    logo: '/images/live/tenants/african-fellowship-church.webp',
  },
];

function OrgGrid({ orgs }) {
  return (
    <div className="services-org-grid">
      {orgs.map((org) => (
        <a
          key={org.name}
          href={org.link}
          className="services-org-card"
          target={org.link.startsWith('mailto:') ? undefined : '_blank'}
          rel={org.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
          <img className="services-org-logo" src={org.logo} alt={`${org.name} logo`} />
          <p className="services-org-name">{org.name}</p>
          <p className="services-org-description">{org.description}</p>
        </a>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container">
          <p className="eyebrow services-hero-eyebrow">What We Offer</p>
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Below-market space, shared services, and community programs for nonprofits, ministries,
            and neighbors across Dallas.
          </p>
        </div>
      </section>

      <div className="container">
        <p className="services-intro">
          Is your nonprofit or congregation looking for affordable office space in Dallas? Gaston
          Christian Center offers below-market, subsidized rental space exclusively for nonprofit
          organizations and faith communities. Join a collaborative hub of 20+ ministries and
          Christian organizations working together to serve Dallas and beyond. From small single
          offices to multi-room suites, we have flexible options to fit your ministry's size and
          budget — with utilities included. Contact us to tour available spaces and find the right
          fit for your organization.
        </p>
      </div>

      <section className="services-list">
        <div className="container">
          <p className="eyebrow services-list-eyebrow">Explore Our Spaces & Programs</p>
          <h2 className="services-list-title">What We Provide</h2>
          <div className="services-program-grid">
            {programs.map((program) =>
              program.to ? (
                <Link key={program.title} to={program.to} className="services-program-card">
                  <p className="services-program-title">{program.title}</p>
                  <p className="services-program-description">{program.description}</p>
                  <span className="services-program-link">Learn more →</span>
                </Link>
              ) : (
                <div key={program.title} className="services-program-card">
                  <p className="services-program-title">{program.title}</p>
                  <p className="services-program-description">{program.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="services-orgs">
        <div className="container">
          <p className="eyebrow services-orgs-eyebrow">Current Tenants</p>
          <h2 className="services-orgs-title">Organizations in Our Community</h2>
          <p className="services-orgs-intro">
            The following organizations and congregations call Gaston Christian Center home. Each
            one is doing important work for Dallas families.
          </p>

          <h3 className="services-org-group-title">Non-Profit & Business Partners</h3>
          <OrgGrid orgs={facilityPartners} />

          <h3 className="services-org-group-title">Churches & Congregations</h3>
          <OrgGrid orgs={churches} />
        </div>
      </section>

      <section className="services-lease">
        <div className="container">
          <p className="eyebrow services-lease-eyebrow">Leasing</p>
          <h2 className="services-lease-title">Interested in Leasing Space?</h2>
          <p className="services-lease-body">
            Contact us to tour available spaces and find the right fit for your organization.
          </p>
          <Link to={routes.contact} className="btn btn-primary">
            Inquire About Space →
          </Link>
        </div>
      </section>
    </>
  );
}
