export const services = [
  { slug: 'website-development', title: 'Website development', short: 'Digital experiences that make your next move possible.', icon: '◈', items: ['Business websites', 'Healthcare & clinic websites', 'Restaurant & hotel websites', 'E-commerce', 'Landing pages', 'Custom web applications'] },
  { slug: 'seo-growth', title: 'SEO & growth', short: 'Build lasting visibility and bring the right people to your business.', icon: '↗', items: ['Technical SEO', 'On-page & off-page SEO', 'Local SEO', 'Google Business Profile', 'Website speed optimization'] },
  { slug: 'digital-marketing', title: 'Digital marketing', short: 'Thoughtful campaigns that turn attention into meaningful action.', icon: '◎', items: ['Social media marketing', 'Meta advertising', 'Google advertising', 'Lead generation', 'Campaign landing pages'] },
  { slug: 'website-maintenance', title: 'Website care', short: 'Reliable support to keep your digital home secure and running smoothly.', icon: '⌘', items: ['Security updates', 'Website backups', 'Bug fixes', 'Content updates', 'Performance monitoring'] },
  { slug: 'branding-creative', title: 'Brand & creative', short: 'A consistent visual identity built to make your business memorable.', icon: '✳', items: ['Logo design', 'Brand identity', 'Social media creatives', 'Graphic design', 'Marketing materials'] },
];
export const industries = [
  { slug:'healthcare', name:'Healthcare', desc:'Help patients find the right care with confidence and ease.', detail:'Create a welcoming digital front door for your care team, with clear service information, profiles and enquiry pathways.' },
  { slug:'doctors-clinics', name:'Doctors & clinics', desc:'Put your expertise and patient experience at the heart of your website.', detail:'Showcase qualifications, specializations and clinic information alongside appointment enquiries, maps and WhatsApp contact.' },
  { slug:'restaurants-cafes', name:'Restaurants & cafés', desc:'Make every visit start with a great first impression.', detail:'Share a digital menu, food photography, location and table or WhatsApp enquiries in one appetizing experience.' },
  { slug:'hotels-resorts', name:'Hotels & resorts', desc:'Let guests picture their stay before they arrive.', detail:'Present rooms, amenities and galleries with clear location details and booking enquiries.' },
  { slug:'gyms-fitness', name:'Gyms & fitness', desc:'Turn motivation into a first visit, class or membership enquiry.', detail:'Feature facilities, trainer profiles, class schedules and membership plans with a simple free-trial enquiry.' },
  { slug:'real-estate', name:'Real estate', desc:'Bring properties and the people behind them into focus.', detail:'Present listings and neighbourhood details in an organized, mobile-friendly experience with direct enquiry routes.' },
  { slug:'education', name:'Education', desc:'Help learners and families find their next opportunity.', detail:'Explain programs, admissions and campus life with accessible information and clear enquiry forms.' },
  { slug:'retail-ecommerce', name:'Retail & e-commerce', desc:'Give your products a polished place to be discovered and purchased.', detail:'Build a considered storefront experience with product discovery, responsive layouts and checkout-ready foundations.' },
  { slug:'professional-services', name:'Professional services', desc:'Make your expertise easy to understand and easy to contact.', detail:'Build credibility through clear service pages, useful insights and focused consultation enquiries.' },
];
export const projects = [
  { id:'clinic', title:'Carewell Clinic', category:'Healthcare', tag:'DEMO PROJECT', desc:'A calm, patient-first clinic experience with clear pathways to care.', color:'#dff4ef', icon:'✚' },
  { id:'restaurant', title:'Saffron & Stone', category:'Restaurant', tag:'DEMO PROJECT', desc:'A warm digital home for a modern neighbourhood kitchen.', color:'#fff0df', icon:'✳' },
  { id:'hotel', title:'The Meridian', category:'Hotel', tag:'DEMO PROJECT', desc:'An editorial showcase for considered stays and thoughtful hospitality.', color:'#e7eafe', icon:'⌂' },
  { id:'fitness', title:'Form Studio', category:'Fitness', tag:'DEMO PROJECT', desc:'A high-energy studio website designed around movement and community.', color:'#f7e8e5', icon:'↗' },
  { id:'property', title:'Northline Living', category:'Real estate', tag:'DEMO PROJECT', desc:'A refined property experience for browsing homes and neighbourhoods.', color:'#e9f0f8', icon:'⌂' },
  { id:'commerce', title:'Object & Origin', category:'E-commerce', tag:'DEMO PROJECT', desc:'A product-led storefront for a small-batch home and lifestyle brand.', color:'#f1e8f5', icon:'◇' },
];
export const pricing = { INR: inrPricing, USD: usdPricing };
export const countries = ['India','United States','United Kingdom','Canada','Australia','Other'];
import { inrPricing } from '../config/pricing.inr';
import { usdPricing } from '../config/pricing.usd';
