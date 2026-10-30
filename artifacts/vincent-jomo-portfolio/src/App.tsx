import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Instagram, Menu, X } from 'lucide-react';

const navigation: { label: string; href: string; external?: boolean }[] = [
  { label: 'My Story', href: '#story' },
  { label: 'Academic Foundation', href: '#foundation' },
  { label: 'My Ambitions', href: '#ambitions' },
  { label: 'My Vision', href: '#vision' },
  { label: 'Instagram', href: 'https://instagram.com/gulby.jones', external: true },
];

const subjects = [
  {
    number: '01',
    title: 'Physics',
    detail: 'To understand forces, motion, equilibrium and how structures respond to the world around them.',
  },
  {
    number: '02',
    title: 'Chemistry',
    detail: 'To learn about material properties, composition and the conditions that shape durability.',
  },
  {
    number: '03',
    title: 'Mathematics',
    detail: 'To build the precision and problem-solving ability behind measurement, analysis and design.',
  },
  {
    number: '04',
    title: 'Geography',
    detail: 'To consider terrain, climate and the communities and environments infrastructure must serve.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-navy">
      <header className="absolute inset-x-0 top-0 z-20 flex h-[82px] items-center justify-between border-b border-white/15 px-[clamp(22px,6vw,92px)] text-ivory max-[760px]:h-[70px] max-[760px]:px-[22px]">
        <a
          className="flex items-center gap-[13px] text-[12px] font-semibold uppercase tracking-[.13em] text-inherit no-underline max-[760px]:text-[10px]"
          href="#top"
          data-testid="link-home"
          aria-label="Vincent Fidel Jomo, back to top"
          onClick={closeMenu}
        >
          <span
            className="grid size-[31px] place-items-center border border-white/65 font-display text-[16px]"
            aria-hidden="true"
          >
            VJ
          </span>
          <span>Vincent Fidel Jomo</span>
        </a>
        <nav
          id="main-navigation"
          className={`flex items-center gap-[clamp(22px,3vw,48px)] max-[760px]:absolute max-[760px]:left-0 max-[760px]:right-0 max-[760px]:top-[69px] max-[760px]:z-30 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:bg-navy max-[760px]:p-[22px] ${
            menuOpen ? 'max-[760px]:flex' : 'max-[760px]:hidden'
          }`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              className="text-[11px] uppercase tracking-[.12em] text-ivory no-underline transition-colors hover:text-[#d7bd8f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold max-[760px]:border-b max-[760px]:border-white/15 max-[760px]:py-4 max-[760px]:pl-[2px]"
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              data-testid={item.external ? 'link-instagram-nav' : `link-nav-${item.href.slice(1)}`}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              {item.external && <Instagram className="ml-1 inline-block align-[-2px]" size={13} aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <button
          className="hidden cursor-pointer items-center gap-[9px] border border-white/45 bg-transparent px-3 py-[10px] text-[10px] uppercase tracking-[.1em] text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold max-[760px]:inline-flex"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          data-testid="button-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </header>

      <main>
        <section
          className="relative flex min-h-[min(850px,100dvh)] items-center bg-navy text-ivory max-[760px]:min-h-[96svh]"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-wash pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid min-h-[min(850px,100dvh)] w-full max-w-[1250px] grid-cols-[1.06fr_.94fr] items-center gap-[clamp(20px,5vw,76px)] px-[clamp(24px,9vw,140px)] pt-[132px] pb-[68px] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-2 max-[760px]:px-[26px] max-[760px]:pt-[118px] max-[760px]:pb-[48px]">
            <div>
              <div className="flex items-center gap-[15px] text-[10px] font-semibold uppercase tracking-[.2em] text-gold before:block before:w-[42px] before:border-t before:border-current">
                A student. A vision. A beginning.
              </div>
              <h1
                className="my-[25px] mt-[34px] max-w-[780px] font-display text-[clamp(62px,7vw,104px)] font-normal leading-[.91] tracking-[-.055em] max-[760px]:mt-6 max-[760px]:text-[clamp(58px,15vw,88px)]"
                id="hero-title"
              >
                Beyond the <span className="block italic text-[#d5bd94]">Horizon</span>
              </h1>
              <p className="m-0 max-w-[470px] text-[15px] leading-[1.85] text-ivory/80">
                I am Vincent Fidel Jomo, an eleventh-grade student looking toward a future in civil engineering—where ideas become structures that connect people and places.
              </p>
              <div className="mt-14 flex items-center gap-[18px] text-[10px] uppercase tracking-[.17em] text-ivory/65 max-[760px]:mt-8 max-[760px]:w-[min(100%,330px)] max-[760px]:items-start max-[760px]:leading-[1.65]">
                <span
                  className="h-px w-[34px] shrink-0 bg-gold max-[760px]:mt-[.75em]"
                  aria-hidden="true"
                />
                <span className="max-[760px]:min-w-0 max-[760px]:flex-1">
                  The journey towards structural &amp; bridge engineering
                </span>
              </div>
            </div>
            <figure className="portrait-card relative mx-auto flex h-[min(68vh,650px)] w-full max-w-[470px] items-end justify-center max-[760px]:h-[min(36svh,300px)] max-[760px]:w-[min(100%,390px)]">
              <img
                src="/vincent-jomo.png"
                alt="Vincent Fidel Jomo, seated and looking toward the future."
                className="portrait-image"
                fetchPriority="high"
              />
              <figcaption className="absolute bottom-5 right-5 z-10 border border-white/20 bg-navy/75 px-3 py-2 text-[9px] uppercase tracking-[.16em] text-ivory/80 backdrop-blur-sm max-[760px]:bottom-3 max-[760px]:right-3">
                Vincent Fidel Jomo
              </figcaption>
            </figure>
          </div>
          <a
            className="absolute right-[clamp(24px,7vw,105px)] bottom-8 z-10 flex items-center gap-[13px] text-[9px] uppercase tracking-[.19em] text-ivory/75 no-underline before:h-12 before:border-l before:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold max-[760px]:hidden [writing-mode:vertical-rl]"
            href="#story"
            aria-label="Scroll to My Story"
            data-testid="link-scroll-story"
          >
            <ArrowDown size={13} aria-hidden="true" /> Begin the story
          </a>
        </section>

        <section
          className="relative py-[clamp(88px,12vw,160px)]"
          id="story"
          aria-labelledby="story-heading"
        >
          <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] grid-cols-[.82fr_1.18fr] items-start gap-[clamp(42px,10vw,150px)] max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
            <div className="reveal">
              <div className="mb-[22px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#91784d]">01 / My Story</div>
              <h2 className="m-0 font-display text-[clamp(42px,6.4vw,78px)] font-normal leading-[1.02] tracking-[-.035em] text-navy" id="story-heading">
                A purpose <em className="font-normal text-[#8c744d]">taking shape.</em>
              </h2>
              <p className="mt-[54px] font-display text-[clamp(22px,2.5vw,30px)] leading-[1.4] text-[#33475a] max-[760px]:mt-6">
                Engineering is more than building. It is a way to solve real problems and make a difference that lasts.
              </p>
            </div>
            <div className="reveal mt-[73px] max-w-[530px] text-[15px] leading-[1.95] text-[#4c5862] max-[760px]:mt-6 max-[760px]:max-w-none">
              <p className="mb-5 mt-0">My dream reaches beyond the boundaries of an ordinary classroom. I aspire to become a civil engineer specializing in structural and bridge engineering—a field where mathematics, science, creativity and innovation meet.</p>
              <p className="mb-5 mt-0">To me, a bridge is not simply a structure. It is a connection between communities, an answer to a challenge, and a possibility that can improve lives for generations. I am at the beginning of this journey, learning how to turn that possibility into a purpose I can work toward every day.</p>
              <div className="mt-[38px] flex justify-between gap-[14px] border-y border-navy/20 py-[17px] text-[9px] uppercase tracking-[.13em] text-[#52616e] max-[420px]:flex-col">
                <span><strong className="font-semibold text-navy">Now</strong> / Eleventh grade</span>
                <span><strong className="font-semibold text-navy">Next</strong> / Civil engineering</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-steel py-[clamp(88px,12vw,160px)]" id="foundation" aria-labelledby="foundation-heading">
          <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
            <div className="reveal mb-[65px] grid grid-cols-[1.1fr_.7fr] items-end gap-[70px] max-[760px]:mb-[42px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
              <div>
                <div className="mb-[22px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#91784d]">02 / Academic Foundation</div>
                <h2 className="m-0 font-display text-[clamp(42px,6.4vw,78px)] font-normal leading-[1.02] tracking-[-.035em] text-navy" id="foundation-heading">
                  The subjects <em className="font-normal text-[#8c744d]">beneath the structure.</em>
                </h2>
              </div>
              <p className="mb-2 max-w-[395px] text-[14px] leading-[1.85] text-[#52616e]">
                The path I have chosen asks for curiosity across disciplines. Each subject gives me another way to understand what it takes to build safely and thoughtfully.
              </p>
            </div>
            <div className="border-t border-navy/25">
              {subjects.map((subject) => (
                <article
                  className="reveal grid grid-cols-[70px_1fr_1.1fr] items-center gap-[25px] border-b border-navy/20 py-6 max-[760px]:grid-cols-[40px_1fr] max-[760px]:gap-x-[14px] max-[760px]:gap-y-2 max-[760px]:py-[19px]"
                  key={subject.number}
                  data-testid={`subject-row-${subject.number}`}
                >
                  <span className="font-display text-[16px] text-[#91784d]">{subject.number}</span>
                  <h3 className="m-0 font-display text-[25px] font-normal text-navy max-[760px]:text-[23px]">{subject.title}</h3>
                  <p className="m-0 text-[13px] leading-[1.7] text-[#52616e] max-[760px]:col-start-2">{subject.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid min-h-[510px] grid-cols-[.85fr_1.15fr] max-[760px]:grid-cols-1" aria-labelledby="discipline-heading">
          <div className="reveal flex flex-col justify-between bg-navy px-[clamp(30px,8vw,120px)] py-[clamp(55px,8vw,110px)] text-ivory max-[760px]:px-[26px] max-[760px]:py-[62px]">
            <div>
              <div className="mb-[22px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#d1b783]">03 / Discipline &amp; Resilience</div>
              <h2 className="m-0 max-w-[490px] font-display text-[clamp(42px,5vw,67px)] font-normal leading-[1.02] tracking-[-.035em] text-ivory" id="discipline-heading">
                The work is part of the dream.
              </h2>
            </div>
            <div className="mt-[60px] grid size-16 place-items-center border border-steel/40 font-display text-[22px] italic text-[#d1b783] max-[760px]:mt-[35px]" aria-hidden="true">VJ</div>
          </div>
          <div className="reveal flex flex-col justify-center bg-[#d8e3e9] px-[clamp(30px,8vw,120px)] py-[clamp(55px,8vw,110px)] max-[760px]:px-[26px] max-[760px]:py-[62px]">
            <p className="mb-6 mt-0 max-w-[495px] text-[15px] leading-[1.9] text-[#435360]">I have set high academic standards for myself and aim for the strongest results I can achieve. I understand what that asks of me: discipline, consistency, sacrifice, and the willingness to learn from every mistake.</p>
            <p className="mb-6 mt-0 max-w-[495px] text-[15px] leading-[1.9] text-[#435360]">There will be difficult concepts, examinations that test my limits, and moments when progress feels slower than I hoped. I will not let temporary difficulty define my potential. I want to meet each challenge as a chance to sharpen my mind, strengthen my character and improve my abilities.</p>
            <div className="mt-4 max-w-[420px] border-l border-gold pl-[21px] font-display text-[25px] leading-[1.4] text-navy">
              My ambition is not only to dream of becoming an engineer. It is to build the habits, knowledge and resilience required.
            </div>
          </div>
        </section>

        <section className="bg-ivory py-[clamp(88px,12vw,160px)]" id="ambitions" aria-labelledby="ambitions-heading">
          <div className="mx-auto w-[min(1160px,calc(100%-48px))]">
            <div className="reveal mb-[60px] flex items-end justify-between gap-10 max-[760px]:mb-[38px] max-[760px]:block">
              <div>
                <div className="mb-[22px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#91784d]">04 / My Ambitions</div>
                <h2 className="m-0 font-display text-[clamp(42px,6.4vw,78px)] font-normal leading-[1.02] tracking-[-.035em] text-navy" id="ambitions-heading">
                  A horizon worth <em className="font-normal text-[#8c744d]">reaching for.</em>
                </h2>
              </div>
              <p className="mt-0 max-w-[350px] text-[13px] leading-[1.8] text-[#52616e] max-[760px]:mt-5">
                I hope to earn a place at one of the world's leading institutions. These are ambitious goals that encourage me to explore, learn and prepare.
              </p>
            </div>
            <div className="reveal grid grid-cols-2 border-y border-navy/25 max-[760px]:grid-cols-1">
              <article className="min-h-[240px] py-[34px] pr-[38px] max-[760px]:min-h-0 max-[760px]:py-7 max-[760px]:pr-0" data-testid="goal-mit">
                <div className="text-[10px] uppercase tracking-[.17em] text-[#91784d]">United States / Aspiration 01</div>
                <h3 className="mb-[10px] mt-[26px] font-display text-[clamp(28px,4vw,46px)] font-normal leading-[1.1] text-navy">Massachusetts Institute of Technology</h3>
                <p className="m-0 text-[13px] leading-[1.7] text-[#52616e]">MIT is one of the institutions I hope to work toward as I pursue advanced learning in engineering.</p>
              </article>
              <article className="min-h-[240px] border-l border-navy/20 py-[34px] pl-[38px] max-[760px]:min-h-0 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:py-7 max-[760px]:pl-0" data-testid="goal-tsinghua">
                <div className="text-[10px] uppercase tracking-[.17em] text-[#91784d]">China / Aspiration 02</div>
                <h3 className="mb-[10px] mt-[26px] font-display text-[clamp(28px,4vw,46px)] font-normal leading-[1.1] text-navy">Tsinghua University</h3>
                <p className="m-0 text-[13px] leading-[1.7] text-[#52616e]">Tsinghua is another ambitious goal—an inspiration to reach higher and keep asking what engineering can make possible.</p>
              </article>
            </div>
            <p className="mt-[22px] text-[11px] leading-[1.7] text-[#6c7479]">
              These are future goals, not admissions. I know that ambition alone is not enough: strong academic performance, intellectual curiosity, meaningful projects and a genuine commitment to learning all matter. I am prepared to work toward those expectations one subject, one lesson and one achievement at a time.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-[clamp(88px,12vw,160px)] text-ivory" id="vision" aria-labelledby="vision-heading">
          <div
            className="pointer-events-none absolute -top-[140px] -right-[125px] size-[550px] rounded-full border border-steel/10 shadow-[0_0_0_38px_rgba(220,231,239,.025),0_0_0_96px_rgba(220,231,239,.025)]"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto w-[min(1160px,calc(100%-48px))]">
            <div className="grid grid-cols-[.9fr_1.1fr] items-center gap-20 max-[760px]:grid-cols-1 max-[760px]:gap-[36px]">
              <div className="reveal">
                <div className="mb-[22px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#d1b783]">05 / My Vision</div>
                <h2 className="m-0 max-w-[490px] font-display text-[clamp(42px,6.4vw,78px)] font-normal leading-[1.02] tracking-[-.035em] text-ivory" id="vision-heading">
                  Structures that carry <em className="font-normal text-[#d1b783]">possibility.</em>
                </h2>
              </div>
              <div className="reveal max-w-[510px] text-[15px] leading-[1.9] text-ivory/75">
                <p className="mb-[22px] mt-0">I envision contributing to safe, durable and innovative bridges and structures. I want to understand how engineering can overcome geographical barriers, connect distant communities, and support social and economic development.</p>
                <p className="mb-[22px] mt-0">Perhaps one day, I will stand before a bridge I helped design, knowing an idea has become a structure people depend on. That is the achievement that inspires me: making something meaningful that outlasts the moment it was built.</p>
                <div className="mt-[35px] border-t border-steel/30 pt-6 font-display text-[24px] italic leading-[1.4] text-[#d1b783]">
                  “My daily actions should reflect the future I envision for myself.”
                </div>
              </div>
            </div>
            <a
              className="reveal group mt-[64px] flex w-full max-w-[510px] items-center gap-4 border border-steel/25 bg-white/[.035] p-5 text-ivory no-underline transition-colors hover:border-[#d1b783]/70 hover:bg-white/[.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold max-[760px]:mt-[42px]"
              href="https://instagram.com/gulby.jones"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram-vision"
            >
              <span className="grid size-11 shrink-0 place-items-center border border-[#d1b783]/45 text-[#d1b783]">
                <Instagram size={19} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase tracking-[.16em] text-ivory/60">Follow along</span>
                <span className="mt-1 block font-display text-[22px] text-ivory">@gulby.jones</span>
              </span>
              <ArrowUpRight className="shrink-0 text-[#d1b783] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="relative px-6 py-[clamp(90px,13vw,170px)] text-center before:absolute before:left-1/2 before:top-0 before:h-[55px] before:border-l before:border-gold" aria-labelledby="closing-heading">
          <div className="mb-[27px] text-[10px] font-semibold uppercase tracking-[.19em] text-[#91784d]">The beginning is here</div>
          <h2 className="mx-auto my-0 max-w-[1000px] font-display text-[clamp(35px,6.4vw,76px)] font-normal leading-[1.12] tracking-[-.035em] text-navy" id="closing-heading">
            Before I build bridges that connect the world, I will build the <em className="font-normal text-[#92784c]">strongest foundation within myself.</em>
          </h2>
          <p className="mt-[30px] text-[12px] uppercase tracking-[.1em] text-[#61707b]">One subject. One lesson. One day at a time.</p>
        </section>
      </main>

      <footer className="flex items-center justify-between gap-[22px] bg-steel px-[clamp(24px,6vw,92px)] py-8 text-[11px] text-[#334250] max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-6 max-[760px]:py-[30px]">
        <div className="font-display text-[18px] font-medium text-navy" data-testid="text-footer-name">Vincent Fidel Jomo</div>
        <div className="text-center text-[#5c6973] max-[760px]:text-left" data-testid="text-footer-specialization">Aspiring Civil Engineer · Structural &amp; Bridge Engineering</div>
        <a
          className="inline-flex items-center gap-2 text-[#334250] no-underline transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          href="https://instagram.com/gulby.jones"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-instagram-footer"
        >
          <Instagram size={15} aria-hidden="true" />
          <span>@gulby.jones</span>
        </a>
        <div className="whitespace-nowrap text-[#63717a]" data-testid="text-copyright">© {new Date().getFullYear()} Vincent Fidel Jomo</div>
      </footer>
    </div>
  );
}

export default App;
