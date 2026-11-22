export interface ClientStory {
  quote: { lead: string; emphasis: string };
  name: string;
  role: string;
  /** Portrait path. Without one, the card shows the person's initials. */
  photo?: string;
}

/*
 * DRAFT QUOTES: the wording below is placeholder copy. Replace each quote
 * with the client's own approved words before launch.
 */
export const clientStories = {
  eyebrow: 'Client stories',
  title: { lead: 'Loved by the advisors', emphasis: 'we work with.' },
  stories: [
    {
      quote: {
        lead: 'I’d rewritten my About page a dozen times and it still sounded like everyone else. Now new clients tell me they feel like they know me',
        emphasis: 'before we’ve even met.',
      },
      name: 'Sameer Nesarikar, CFP®',
      role: 'Independent Wealth Coach',
      photo: '/images/clients/sameer-nesarikar.jpg',
    },
    {
      quote: {
        lead: 'The process was calm and thorough. They took everything in my head about how I work and shaped it into a website',
        emphasis: 'I’m genuinely proud to share.',
      },
      name: 'Nisreen Mamaji, CFP®',
      role: 'Founder, MoneyWorks',
      photo: '/images/clients/nisreen-mamaji.jpg',
    },
    {
      quote: {
        lead: 'They understood our investment philosophy faster than I expected and put it into plain language. The enquiries we get now are',
        emphasis: 'from exactly the people we want to work with.',
      },
      name: 'Ajeeth Pandey, RIA',
      role: 'Founder, Investment Climb Advisory',
      photo: '/images/clients/ajeeth-pandey.jpg',
    },
    {
      quote: {
        lead: 'I wanted our website to feel as personal as our client meetings, and now it does. People quote lines from it when they call,',
        emphasis: 'which tells me it’s finally saying the right things.',
      },
      name: 'Nisha Patodia, MFD',
      role: 'Pinefortune Investments',
      photo: '/images/clients/nisha-patodia.jpg',
    },
  ] satisfies ClientStory[] as ClientStory[],
};
