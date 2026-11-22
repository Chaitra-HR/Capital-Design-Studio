/*
 * Illustrations for each process phase, built in HTML/CSS so they stay sharp.
 * Everything is sized in `em` off a container-query font size, so each scene
 * scales with its column. Handwriting uses Caveat (SIL OFL, self-hosted).
 */
import '@fontsource/caveat/latin-600.css';
import '@fontsource/caveat/latin-700.css';
import '@fontsource/permanent-marker/latin-400.css';
import { SitePreview } from '@/components/SitePreview';
import type { ProcessVisual as Kind } from '@/content/process';
import { cn } from '@/lib/cn';
import d from './Directions.module.css';
import s from './ProcessVisual.module.css';

type Tone = 'sea' | 'magenta';

function Cursor({
  label,
  tone,
  chat,
  className,
}: {
  label: string;
  tone: Tone;
  chat?: string;
  className?: string;
}) {
  return (
    <span className={cn(s.cursor, s[tone], className)}>
      <svg viewBox="0 0 16 18">
        <path d="M1.5 1.5 14.5 8l-5.7 1.6L6.4 16z" />
      </svg>
      <b>
        {label}
        {chat && <span className={s.chat}>{chat}</span>}
      </b>
    </span>
  );
}

/* 1 · Live workshop: a colourful shared board, with the call floating on top */
const DESIGNER = '/images/team/designer.jpg';
const FOUNDER = '/images/avatars/advisor-2.jpg';

function Call() {
  return (
    <div className={s.call}>
      <figure className={cn(s.tile, s.speaking)}>
        <img loading="lazy" decoding="async" src={DESIGNER} alt="" />
        <figcaption>
          <b>Designer</b>
          <span>Capital Design Studio</span>
        </figcaption>
      </figure>
      <figure className={s.tile}>
        <img loading="lazy" decoding="async" src={FOUNDER} alt="" />
        <figcaption>
          <b>Founder</b>
          <span>Northpoint Wealth</span>
        </figcaption>
      </figure>
    </div>
  );
}

const mapColumns = [
  { key: 'persona', label: 'Persona', head: 'Who they are' },
  { key: 'priority', label: 'Priority', head: 'What they care about' },
  { key: 'problem', label: 'Problem', head: 'Their challenge' },
  { key: 'solution', label: 'Solution', head: 'What we do' },
  { key: 'outcome', label: 'Outcome', head: 'Promised outcome' },
] as const;

const mapRows = [
  {
    name: 'Pre-retirees',
    start: true,
    cells: [
      '55–65, two incomes',
      'Retiring on time',
      'Accounts in six places',
      'One fee-only plan',
      'Retire with confidence',
    ],
  },
  {
    name: 'Business owners',
    cells: ['Founders, 40–55', 'A clean exit', 'Tax at the sale', 'Exit + family plan', ''],
  },
  { name: 'Physicians', cells: ['Late starters', 'Catching up', 'No time to plan', '', ''] },
  { name: 'Young families', cells: ['', '', '', '', ''] },
];

function Votes({ n }: { n: number }) {
  return (
    <span className={s.votes}>
      {Array.from({ length: n }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

function Workshop() {
  return (
    <div className={s.workshop}>
      <Call />

      <div className={s.window}>
        <div className={s.winBar}>
          <span className={s.logo}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className={s.winTitle}>Live workshop</span>
          <span className={s.dots}>
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className={s.canvas}>
          {/* Row 1 · Who we serve: a cluster of voted stickies */}
          <section className={cn(s.zone, s.zWho)}>
            <span className={s.zoneTab}>Who we serve best</span>
            <div className={s.cluster}>
              <p className={cn(s.note, s.yellow)}>
                Pre-retirees, 55–65
                <Votes n={3} />
                <span className={s.heart}>♥</span>
              </p>
              <p className={cn(s.note, s.yellow)}>
                Business owners selling soon
                <Votes n={1} />
              </p>
              <p className={cn(s.note, s.yellow)}>Physicians, late starters</p>
              <p className={cn(s.note, s.yellow)}>Young families?</p>
            </div>
          </section>

          {/* Row 1 · Messaging map */}
          <section className={cn(s.zone, s.zMap)}>
            <span className={s.zoneTab}>Messaging map</span>
            <p className={s.mapTitle}>Messaging map</p>
            <div className={s.flow}>
              <span className={s.focusNote}>
                Focus the
                <br />
                message here
              </span>
              <span className={s.thenNote}>
                Then adapt it
                <br />
                for these
              </span>
              <i className={cn(s.bracket, s.bracketFocus)} />
              <i className={cn(s.bracket, s.bracketThen)} />
              <span className={s.flowCorner} />
              {mapColumns.map((c, i) => (
                <span key={c.key} className={s.flowHead} style={{ gridColumn: i + 4 }}>
                  {c.head}
                </span>
              ))}
              {mapRows.map((row) => (
                <div key={row.name} className={s.flowRow}>
                  <span className={cn(s.flowName, row.start && s.circled)}>
                    {row.name}
                    {row.start && (
                      <svg className={s.loop} viewBox="0 0 120 50" preserveAspectRatio="none">
                        <path d="M100 6C70-2 18 2 7 18-4 34 26 47 64 46c38-1 54-12 50-26-3-9-18-14-36-14" />
                      </svg>
                    )}
                  </span>
                  {mapColumns.map((c, i) => (
                    <span key={c.key} className={cn(s.mapCard, s[c.key])}>
                      <b>{c.label}</b>
                      <span>{row.cells[i] || '?'}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Row 2 · What others say */}
          <section className={cn(s.zone, s.zOthers)}>
            <span className={s.zoneTab}>What others say</span>
            <div className={cn(s.shot, s.shotA)}>
              <SitePreview id="ledgerline" />
            </div>
            <div className={cn(s.shot, s.shotB)}>
              <SitePreview id="summit" />
            </div>
            <span className={cn(s.marker, s.mSame)}>All sound the same</span>
          </section>

          {/* Row 2 · Our position */}
          <section className={cn(s.zone, s.zUs)}>
            <span className={s.zoneTab}>Our position</span>
            <div className={s.positionCard}>
              <small>Positioning statement · v3</small>
              <p>
                Fee-only planning for <mark>pre-retirees</mark> who want to retire on time.
              </p>
              <span className={s.reactions}>
                <b>+2 agree</b>
                <b>Founder ✓</b>
              </span>
            </div>
            <span className={cn(s.marker, s.mThis)}>This is us!</span>
          </section>

          {/* Row 2 · Homepage idea */}
          <section className={cn(s.zone, s.zIdea)}>
            <span className={s.zoneTab}>Homepage idea</span>
            <div className={cn(s.wire, s.wireA)}>
              <i className={s.wTop} />
              <div className={s.wHero}>
                <i />
              </div>
              <div className={s.wGrid}>
                <i />
                <i />
                <i />
                <i />
              </div>
              <i className={s.wFoot} />
            </div>
            <div className={cn(s.wire, s.wireB)}>
              <i className={s.wTopGreen} />
              <i className={s.wBlock} />
              <i className={s.wLine} />
              <div className={s.wBand}>
                <i />
              </div>
            </div>
            <svg className={s.star} viewBox="0 0 24 24">
              <path d="M3 9.5h18L6 20l6-17.5L18 20z" />
            </svg>
            <span className={cn(s.marker, s.mLove)}>Love!</span>
          </section>

          {/* Connector: the first row of the map becomes the position */}
          <svg className={s.connector} viewBox="0 0 100 70" preserveAspectRatio="none">
            <path d="M52 34.6C52 36.6 51.2 37.4 50.4 38.4" />
            <path d="M49.6 37.2 50.3 38.6 51.8 38.3" />
          </svg>

          <Cursor label="Designer" tone="magenta" className={s.cDesigner} />
          <Cursor label="Founder" tone="sea" className={s.cFounder} />
        </div>
      </div>
    </div>
  );
}

/* 2 · Three directions: an editorial deck of homepage concepts ------------- */
const IMG = (name: string) => `/images/showcase/${name}.webp`;

/* 01 · Modern: white, light sans, product-style card */
function ModernMock() {
  return (
    <div className={cn(d.page, d.modern)}>
      <div className={d.nav}>
        <b className={d.modernLogo}>northpoint</b>
        <span className={d.links}>
          <span>Planning</span>
          <span>Approach</span>
          <span>Pricing</span>
        </span>
      </div>
      <div className={d.modernHero}>
        <p className={d.modernTitle}>Plan the next thirty years.</p>
        <div className={d.modernCard}>
          <small>Retirement readiness</small>
          <b>82%</b>
          <i>
            <i />
          </i>
        </div>
      </div>
    </div>
  );
}

/* 02 · Quiet: deep green, serif, full-bleed landscape */
function QuietMock() {
  return (
    <div className={cn(d.page, d.quiet)}>
      <img
        loading="lazy"
        decoding="async"
        className={d.quietPhoto}
        src={IMG('summit-valley')}
        alt=""
      />
      <div className={d.nav}>
        <b className={d.quietLogo}>NORTHPOINT</b>
      </div>
      <div className={d.quietHero}>
        <p>
          Wealth, <em>quietly</em> handled.
        </p>
      </div>
    </div>
  );
}

/* C · Human (chosen): oat and navy, Fraunces headlines over Inter text */
function HumanMock() {
  return (
    <div className={cn(d.page, d.human)}>
      <div className={cn(d.nav, d.hNav)}>
        <b className={d.hLogo}>
          <i /> Northpoint
        </b>
        <span className={d.hLinks}>
          <span>How we work</span>
          <span>Who we help</span>
          <span>Fees</span>
        </span>
        <span className={d.hBtn}>Book a call</span>
      </div>
      <div className={d.hHero}>
        <div className={d.hCopy}>
          <small>Fee-only planning for life after work</small>
          <p className={d.hTitle}>
            Retire on your <em>own</em> terms.
          </p>
          <p className={d.hText}>
            One plan for your income, investments and taxes. Built with you, reviewed every year.
          </p>
          <span className={d.hActions}>
            <span className={d.hBtn}>Book a free call</span>
            <span className={d.hLink}>See how it works →</span>
          </span>
          <span className={d.hTrust}>Fee-only · Fiduciary · 25 years</span>
        </div>
        <figure className={d.hPhoto}>
          <img loading="lazy" decoding="async" src={IMG('couple-autumn')} alt="" />
          <figcaption>
            <b>Margaret &amp; Tom</b> retired at 62
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

/* Second screen of the chosen direction: photo and navy card side by side */
function HumanSection() {
  return (
    <div className={cn(d.page, d.human, d.hSplit)}>
      <div className={d.hSplitPhoto}>
        <img loading="lazy" decoding="async" src={IMG('couple-road')} alt="" />
      </div>
      <div className={d.hSplitCard}>
        <p>
          The road ahead, <em>mapped out.</em>
        </p>
        <span>Start with a free 30-minute call →</span>
      </div>
    </div>
  );
}

/* Second screens for the two set-aside directions */
function ModernSection() {
  return (
    <div className={cn(d.page, d.modern, d.secA)}>
      <p>Planning that adapts as life does.</p>
      <span className={d.secCards}>
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function QuietSection() {
  return (
    <div className={cn(d.page, d.quiet, d.secB)}>
      <small>Our approach</small>
      <p>
        Discreet, <em>considered</em> counsel.
      </p>
    </div>
  );
}

const palettes = {
  modern: [
    { hex: '#14201a', name: 'Ink' },
    { hex: '#6b7a70', name: 'Slate' },
    { hex: '#d6ddd3', name: 'Mist' },
    { hex: '#eef2ec', name: 'Fog' },
    { hex: '#ffffff', name: 'White' },
  ],
  quiet: [
    { hex: '#0f2a24', name: 'Pine' },
    { hex: '#1d3d35', name: 'Fern' },
    { hex: '#8a9a8f', name: 'Sage' },
    { hex: '#c9a46a', name: 'Gold' },
    { hex: '#efe6d2', name: 'Bone' },
  ],
  human: [
    { hex: '#1f2a24', name: 'Forest' },
    { hex: '#3d5246', name: 'Moss' },
    { hex: '#e8613c', name: 'Ember' },
    { hex: '#f29a6b', name: 'Apricot' },
    { hex: '#e9e4d8', name: 'Sand' },
    { hex: '#f6f3ec', name: 'Linen' },
  ],
};

function Palette({ colours }: { colours: { hex: string; name: string }[] }) {
  return (
    <div className={d.palette}>
      {colours.map((c) => (
        <span key={c.hex} style={{ background: c.hex }}>
          {c.name}
        </span>
      ))}
    </div>
  );
}

function Directions() {
  return (
    <div className={d.board}>
      {/* Two set-aside directions, softly out of focus */}
      {(
        [
          { key: 'modern', tint: '#e9e5dc', Hero: ModernMock, Section: ModernSection },
          { key: 'quiet', tint: '#efece4', Hero: QuietMock, Section: QuietSection },
        ] as const
      ).map(({ key, tint, Hero, Section }) => (
        <div key={key} className={cn(d.column, d.muted)}>
          <div className={d.mat} style={{ background: tint }}>
            <div className={d.frame}>
              <Hero />
            </div>
          </div>
          <div className={d.mat} style={{ background: tint }}>
            <div className={cn(d.frame, d.frameShort)}>
              <Section />
            </div>
          </div>
          <Palette colours={palettes[key]} />
        </div>
      ))}

      {/* The chosen direction, in focus */}
      <div className={cn(d.column, d.chosen)}>
        <div className={d.mat}>
          <div className={d.frame}>
            <HumanMock />
          </div>
        </div>
        <div className={d.mat}>
          <div className={cn(d.frame, d.frameShort)}>
            <HumanSection />
          </div>
        </div>
        <Palette colours={palettes.human} />
        <span className={cn(d.bubble, d.bubbleFounder)}>This feels like us!</span>
        <span className={cn(d.bubble, d.bubbleDesigner)}>Agreed!</span>
        <Cursor label="" tone="sea" className={d.cFeels} />
        <Cursor label="" tone="magenta" className={d.cAgreed} />
      </div>
    </div>
  );
}

/* 3 · Launch ---------------------------------------------------------------- */
function Launch() {
  return (
    <div className={s.launch}>
      {/* Soft brand-colour wash that flows behind the pieces */}
      <span className={s.wash} aria-hidden="true" />
      {/* Back: team page, out of focus */}
      <div className={s.team}>
        <b>Meet our team</b>
        <div className={s.faces}>
          {[2, 1, 4, 3, 1, 2, 3, 4, 2].map((n, i) => (
            <img
              loading="lazy"
              decoding="async"
              key={i}
              src={`/images/avatars/advisor-${n}.jpg`}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Social profile card, as it appears on a professional network */}
      <div className={s.social}>
        <div className={s.socialBanner} />
        <span className={s.socialLogo}>
          <i />
        </span>
        <b>Northpoint Wealth</b>
        <p className={s.socialTag}>Fee-only financial planning for founders</p>
        <p className={s.socialMeta}>Financial services · 2,140 followers</p>
        <span className={s.socialActions}>
          <span className={s.socialFollow}>+ Follow</span>
          <span className={s.socialVisit}>Visit website</span>
        </span>
      </div>

      {/* Guidelines cover */}
      <div className={s.guide}>
        <span className={s.guideLogo}>
          <i /> Northpoint
        </span>
        <div>
          <b>
            Website
            <br />
            guidelines
          </b>
          <span className={s.guideMeta}>
            <span>01 Voice · 02 Type · 03 Colour · 04 Components</span>
            <span>v1.0</span>
          </span>
        </div>
      </div>

      {/* Front: the live site in a browser window */}
      <div className={s.live}>
        <div className={s.liveBar}>
          <span className={s.liveDots}>
            <i />
            <i />
            <i />
          </span>
          <span className={s.liveUrl}>
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5M2.5 5.5h7v5h-7z" />
            </svg>
            northpointwealth.com
          </span>
          <span className={s.livePill}>
            <i /> Live
          </span>
        </div>
        <div className={s.liveHero}>
          <SitePreview id="northpoint" />
        </div>
        <div className={s.liveDark}>
          <span>Why founders choose us</span>
          <b>Advice built around your business, not our products.</b>
          <p>
            One fee. One plan that connects your company, your cash flow and the life you’re
            building.
          </p>
        </div>
        <div className={s.liveSteps}>
          <b>How it works</b>
          <div className={s.stepRow}>
            <span>
              <small>01</small>A free 30-minute review
            </span>
            <span>
              <small>02</small>Your plan in two weeks
            </span>
            <span>
              <small>03</small>Reviewed every year
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessVisual({ kind }: { kind: Kind }) {
  return (
    <div className={s.frame} aria-hidden="true">
      <div className={s.scale}>
        {kind === 'workshop' && <Workshop />}
        {kind === 'directions' && <Directions />}
        {kind === 'launch' && <Launch />}
      </div>
    </div>
  );
}
