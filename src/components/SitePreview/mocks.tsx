/*
 * Showcase mockups: hero sections of fictional advisory firms. Each has its
 * own typeface, palette and positioning. Everything is sized in `em` off a
 * container-query font size, so each mock scales perfectly with its frame.
 *
 * Photos: Unsplash (Unsplash License). Fonts: SIL OFL, self-hosted via
 * @fontsource and only loaded where these previews render.
 */
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import '@fontsource/outfit/latin-400.css';
import '@fontsource/outfit/latin-500.css';
import '@fontsource/newsreader/latin-400.css';
import '@fontsource/newsreader/latin-400-italic.css';
import '@fontsource/figtree/latin-300.css';
import '@fontsource/figtree/latin-500.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-mono/latin-400.css';
import '@fontsource/fraunces/latin-300.css';
import '@fontsource/source-serif-4/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/young-serif/latin-400.css';
import { cn } from '@/lib/cn';
import s from './mocks.module.css';

const img = (name: string) => `/images/showcase/${name}.webp`;

function Bg({ src, className }: { src: string; className?: string }) {
  return <img loading="lazy" src={src} alt="" decoding="async" className={cn(s.bg, className)} />;
}

function Chevron() {
  return (
    <svg viewBox="0 0 10 10" className={s.chev} aria-hidden="true">
      <path d="m2.5 4 2.5 2.5L7.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function Arrow({ up }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 12 12" className={cn(s.arrow, up && s.arrowUp)} aria-hidden="true">
      <path d="M2 6h8M6.5 2.5 10 6 6.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

/* 1 · Evergreen: landscape, centred serif (Giga) ---------------------------- */
export function EvergreenMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.evergreen)}>
        <Bg src={img('evergreen-mountains')} />
        <div className={s.egNav}>
          <span className={s.egGlass}>
            <b className={s.egLogo}>
              <i className={s.egLeaf} /> Evergreen
            </b>
            <span>
              Planning <Chevron />
            </span>
            <span>
              Company <Chevron />
            </span>
          </span>
          <span className={s.egNavRight}>
            <span className={s.egGlass}>Client login</span>
            <span className={s.egWhite}>Book a call</span>
          </span>
        </div>
        <div className={s.egHero}>
          <span className={s.egBadge}>
            <i /> Now welcoming new clients for spring 2027 <Chevron />
          </span>
          <p className={s.egTitle}>
            Retirement that feels unhurried.
            <br />
            <em>Planned to the last dollar.</em>
          </p>
          <p className={s.egSub}>
            Fee-only retirement planning for couples who would rather be out here
          </p>
          <span className={s.egCta}>Talk to us</span>
        </div>
        <span className={s.egFeatured}>As featured in</span>
        <div className={s.egLogos}>
          <span className={s.egSpaced}>Planner Review</span>
          <span className={s.egSerif}>Wealth Journal</span>
          <span className={s.egBold}>Fiduciary</span>
          <span className={s.egSpaced}>RetireWell</span>
          <span className={s.egBold}>Planwise</span>
        </div>
      </div>
    </div>
  );
}

/* 2 · Halcyon: white canvas, photo collage, message chips (Huma) ------------ */
export function HalcyonMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.halcyon)}>
        <div className={s.hcNav}>
          <span className={s.hcLogo}>
            <i /> HALCYON
          </span>
          <span className={s.hcLinks}>
            <span>Planning</span>
            <span>Families</span>
            <span>Journal</span>
          </span>
          <span className={s.hcBtn}>Book an introduction</span>
        </div>
        <div className={s.hcCopy}>
          <p className={s.hcTitle}>
            Wealth that looks after the people <em>you love.</em>
          </p>
          <p className={s.hcSub}>
            Independent planning for families, across three generations and one plan.
          </p>
          <span className={s.hcActions}>
            <span className={s.hcBtn}>Book an introduction</span>
            <span className={s.hcLink}>
              How we work <Arrow />
            </span>
          </span>
          <span className={s.hcTrust}>
            <span className={s.hcFaces}>
              <img loading="lazy" decoding="async" src="/images/avatars/advisor-3.jpg" alt="" />
              <img loading="lazy" decoding="async" src="/images/avatars/advisor-2.jpg" alt="" />
              <img loading="lazy" decoding="async" src="/images/avatars/advisor-1.jpg" alt="" />
            </span>
            Fee-only fiduciary, trusted by 300 families since 2009
          </span>
        </div>
        <div className={s.hcMain}>
          <Bg src={img('halcyon-couple')} />
        </div>
        <div className={s.hcSecond}>
          <Bg src={img('halcyon-outdoors')} />
        </div>
        <span className={cn(s.hcChip, s.hcChipA)}>
          <b>Morning, Joan.</b> Your pension transfer cleared overnight.
        </span>
        <span className={cn(s.hcChip, s.hcChipB)}>
          <b>Thanks, Priya.</b> Your plan review is booked for Thursday.
        </span>
      </div>
    </div>
  );
}

/* 3 · Ledgerline: editorial black & white, mono stats (Titan) --------------- */
export function LedgerlineMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.ledgerline)}>
        <div className={s.llNav}>
          <b className={s.llLogo}>
            <i /> LEDGERLINE
          </b>
          <span className={s.llPillNav}>
            <span>Offerings</span>
            <span>About</span>
            <span>Insights</span>
          </span>
          <span className={s.llRight}>
            <span>Log in</span>
            <span className={s.llJoin}>Join</span>
          </span>
        </div>
        <div className={s.llGrid}>
          <div className={s.llLeft}>
            <p className={s.llTitle}>The wealth advisor for high-stakes founder decisions</p>
            <span className={s.llActions}>
              <span className={s.llBtn}>
                Get started <Arrow />
              </span>
              <span className={s.llGhost}>See why ▶</span>
            </span>
          </div>
          <div className={s.llArt}>
            <Bg src={img('ledgerline-city')} className={s.llPhoto} />
          </div>
          <p className={s.llCopy}>
            Equity, liquidity events and career moves, handled by a dedicated human advisor and a
            modern platform.
          </p>
          <div className={s.llStats}>
            {[
              ['Assets advised', '$420M'],
              ['All-in fee', '0.5%'],
              ['Minimum', '$0'],
            ].map(([k, v]) => (
              <span key={k}>
                <span className={s.llStatLabel}>{k}</span>
                <b>{v}</b>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4 · Northpoint: full-bleed photo, left serif, accent bar (Consult) -------- */
export function NorthpointMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.northpoint)}>
        <div className={s.npPhoto}>
          <Bg src={img('northpoint-sofa')} />
          <div className={s.npNav}>
            <b className={s.npLogo}>
              <i className={s.npStar} /> Northpoint
            </b>
            <span className={s.npLinks}>
              <span>Home</span>
              <span>About</span>
              <span>Case studies</span>
              <span>
                Resources <Chevron />
              </span>
            </span>
            <span className={s.npPill}>Book a free review</span>
          </div>
          <div className={s.npHero}>
            <p className={s.npEyebrow}>Fee-only advice for founders</p>
            <p className={s.npTitle}>
              Clarity for every decision <em>your business</em> makes.
            </p>
            <span className={s.npPill}>Get a free review</span>
          </div>
          <span className={s.npArrows}>
            <i>
              <Arrow />
            </i>
            <i>
              <Arrow />
            </i>
          </span>
        </div>
        <div className={s.npBar}>
          {[
            'Cash-flow planning',
            'Exit strategy',
            'Tax-aware investing',
            'Succession plans',
            'Free 30-min call',
          ].map((t) => (
            <span key={t}>
              <i /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 5 · Pennant: deep purple split, light grotesk (Sidekick) ------------------ */
export function PennantMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.pennant)}>
        <div className={s.pnNav}>
          <b className={s.pnLogo}>
            <i /> PENNANT
          </b>
          <span className={s.pnLinks}>
            <span>
              Investments &amp; Savings <Chevron />
            </span>
            <span>Learn</span>
            <span>Stories</span>
            <span>About us</span>
          </span>
          <span className={s.pnBtn}>
            Get started <Arrow />
          </span>
        </div>
        <div className={s.pnSplit}>
          <div className={s.pnPhoto}>
            <Bg src={img('pennant-cafe')} />
          </div>
          <div className={s.pnCopy}>
            <span className={s.pnTag}>Smart Cash</span>
            <p className={s.pnTitle}>A calmer home for your emergency fund</p>
            <p className={s.pnSub}>
              A low-risk money market portfolio that pays more than a high-street savings account,
              with your cash back in one working day. Capital at risk.
            </p>
            <span className={s.pnBtn}>
              Get started <Arrow />
            </span>
            <div className={s.pnFacts}>
              <span>
                <b>4.62%</b> gross yield, variable
              </span>
              <span>
                <b>1 day</b> to withdraw
              </span>
              <span>
                <b>£0</b> account fees
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 6 · Summit: landscape with glass client-story card (Ridgerunner) ---------- */
export function SummitMock() {
  return (
    <div className={s.browser}>
      <div className={cn(s.page, s.summit)}>
        <Bg src={img('summit-valley')} />
        <div className={s.smNav}>
          <b>Summit Planning</b>
          <span className={s.smLinks}>
            <span>Approach</span>
            <span>Stories</span>
            <span>Fees</span>
          </span>
          <span className={s.smBtn}>Book a call</span>
        </div>
        <div className={s.smHero}>
          <span className={s.smEyebrow}>Client story</span>
          <p className={s.smTitle}>Steady advice for every stage of the climb</p>
          <span className={s.smBtn}>Read the story</span>
        </div>
        <div className={s.smCard}>
          <b className={s.smClient}>The Okafor family</b>
          <div className={s.smStats}>
            {[
              ['5 → 1', 'accounts brought into one plan'],
              ['11 yrs', 'to a fully funded retirement'],
              ['0', 'surprises at tax time'],
            ].map(([v, k]) => (
              <span key={k}>
                <b>{v}</b>
                <span>{k}</span>
              </span>
            ))}
          </div>
          <p className={s.smQuote}>
            “They turned a shoebox of statements into one plan we actually understand.{' '}
            <span>We finally know when we can stop working.”</span>
          </p>
          <span className={s.smPerson}>
            <img loading="lazy" decoding="async" src="/images/avatars/advisor-1.jpg" alt="" />
            <span>
              Ada Okafor
              <small>Retired teacher</small>
            </span>
            <span className={s.smRating}>★★★★★ 5.0</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* Phones -------------------------------------------------------------------- */
function Status({ light }: { light?: boolean }) {
  return (
    <div className={cn(s.status, light && s.statusLight)}>
      <b>9:41</b>
      <i className={s.island} />
      <span className={s.battery} />
    </div>
  );
}

/* 7 · Kin: cream, lime card with photo (Aura) ------------------------------- */
export function KinMock() {
  return (
    <div className={s.phone}>
      <div className={cn(s.phonePage, s.kin)}>
        <Status />
        <div className={s.knNav}>
          <b>kin.</b>
          <span className={s.knMenu}>
            <i />
            <i />
          </span>
        </div>
        <span className={s.knEst}>Est. 2019 · Family wealth</span>
        <p className={s.knTitle}>Growing wealth with care, one family at a time.</p>
        <div className={s.knCard}>
          <span className={s.knCardTop}>
            <b>Family check-in</b>
            <span>♡</span>
          </span>
          <span className={s.knLabel}>Client rating</span>
          <span className={s.knScore}>
            4.9<small>/5</small>
          </span>
          <span className={s.knTabs}>
            <b>Care</b>
            <span>Access</span>
            <span>Trust</span>
          </span>
          <Bg src={img('kin-walk')} className={s.knPhoto} />
        </div>
        <span className={s.knStat}>
          <b>1,200+</b> families supported
        </span>
        <span className={s.knCta}>Book a family call</span>
      </div>
    </div>
  );
}

/* 8 · Tally: in-app insight sheet with spending chart ------------------------ */
export function TallyMock() {
  return (
    <div className={s.phone}>
      <div className={cn(s.phonePage, s.tally)}>
        <Status />
        <div className={s.tyNav}>
          <b>
            <i /> tally
          </b>
          <span>Sign in</span>
        </div>
        <span className={s.tyMono}>Spending, made legible</span>
        <p className={s.tyTitle}>Know where your money goes, before it goes.</p>
        <p className={s.tySub}>Weekly spending insights, shared with your financial advisor.</p>
        <span className={s.tyPill}>Get the app</span>
        <div className={s.tyCard}>
          <span className={s.tyMono}>Spending velocity · Nov</span>
          <div className={s.tyPlot}>
            <svg viewBox="0 0 200 110" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="tyFill" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#ffe08a" stopOpacity=".55" />
                  <stop offset="1" stopColor="#ff8a7a" stopOpacity=".6" />
                </linearGradient>
                <linearGradient id="tyLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#ffd34d" />
                  <stop offset="1" stopColor="#f2452e" />
                </linearGradient>
              </defs>
              <path
                d="M0 100 L12 96 L45 90 L80 82 L112 78 Q125 76 132 70 L165 22 L165 110 L0 110Z"
                fill="url(#tyFill)"
              />
              <path
                d="M0 100 L12 96 L45 90 L80 82 L112 78 Q125 76 132 70 L165 22"
                fill="none"
                stroke="url(#tyLine)"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {(
              [
                [6, 87, '#ffd34d'],
                [22.5, 82, '#ffc875'],
                [40, 74.5, '#ffb04d'],
                [56, 71, '#f46a45'],
                [82.5, 20, '#f2452e'],
              ] as const
            ).map(([x, y, c]) => (
              <i
                key={x}
                className={s.tyDot}
                style={{ left: `${x}%`, top: `${y}%`, background: c }}
              />
            ))}
          </div>
          <span className={s.tyAxis}>
            {['10', '11', '12', '13', '14', '15'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </span>
          <span className={s.tyInsight}>
            <i className={s.tyIcon} />
            Spending is up 38% this week. Ease off and you still finish under budget.
          </span>
        </div>
      </div>
    </div>
  );
}

/* 9 · Rooted: full-bleed family photo, warm serif (In Tandem) ------------- */
export function RootedMock() {
  return (
    <div className={s.phone}>
      <div className={cn(s.phonePage, s.rooted)}>
        <Bg src={img('rooted-mother')} className={s.rtPhoto} />
        <Status light />
        <div className={s.rtNav}>
          <b>Rooted</b>
          <span className={s.rtMenu}>
            <i />
            <i />
          </span>
        </div>
        <div className={s.rtHero}>
          <span className={s.rtTag}>Family financial planning</span>
          <p className={s.rtTitle}>Plan for the family you are growing.</p>
          <p className={s.rtSub}>From the first nursery to the last mortgage payment.</p>
          <span className={s.rtBtn}>Meet a planner</span>
          <span className={s.rtLink}>How it works</span>
        </div>
      </div>
    </div>
  );
}
