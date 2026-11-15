import Link from "next/link";
import { ProductRail } from "@/components/ProductRail";

const COLLECTIONS = [
  {
    href: "/collections",
    image: "/images/211bc59b6dde1cddf12b721c44fcf19a.jpg",
    name: "Nitya Seva",
    note: "Fine handwork for daily shringar",
    price: "From ₹2,450",
    time: "7–10 days",
  },
  {
    href: "/product/mor-mukut-peela-poshak",
    image: "/images/99c51cc19ef35e1464d8d2573846f133.jpg",
    name: "Utsav",
    note: "Festival sets with matching shringar",
    price: "From ₹4,850",
    time: "12–15 days",
  },
  {
    href: "/collections",
    image: "/images/d366a4f2ddf15f4b6365b213c0a74bab.jpg",
    name: "Heirloom",
    note: "Couture pieces, signed by the karigar",
    price: "From ₹12,400",
    time: "20–30 days",
  },
  {
    href: "/collections",
    image: "/images/00f81a265cffcaef86d2d0fd56a349a7.jpg",
    name: "Jugal Jodi",
    note: "Matching sets for Radha Krishna",
    price: "From ₹8,600",
    time: "As per tier",
  },
];

const STEPS = [
  {
    n: "01",
    when: "Day 0",
    title: "Share your brief",
    copy: "Send a photograph of your Thakurji beside a scale, His height and shoulder, the name you call Him, and the occasion. Reference pictures help. A designer writes back within one working day.",
    image: "/images/diya-marigold.jpg",
    alt: "A lit brass diya and marigolds",
  },
  {
    n: "02",
    when: "Day 1–2",
    title: "Sit with a designer",
    copy: "On a call you settle colour, motif, and how heavy the zari should be. Mukut, bansuri, patka, and whether Radha ji is dressed with Him. The drawing follows this conversation.",
    image: "/images/karigar-hands.jpg",
    alt: "A karigar stitching gold zari on yellow silk",
  },
  {
    n: "03",
    when: "Day 3–4",
    title: "Approve the board",
    copy: "You receive a concept and an itemised price: fabric, handwork, the name, and the shringar. Two revisions are included. The advance is taken only after you approve.",
    image: "/images/zari-detail.jpg",
    alt: "Close view of peacock zari and stones on yellow silk",
  },
  {
    n: "04",
    when: "Before the finish",
    title: "See His name",
    copy: "The spelling is embroidered in Devanagari or English, gold or silver zari, and photographed for you. If a letter is wrong, the stitches are opened and done again before the poshak leaves the adda.",
    image: "/images/thakur-portrait.jpg",
    alt: "Laddu Gopal, for whom the name is embroidered",
  },
  {
    n: "05",
    when: "About 3 weeks",
    title: "Stitched, checked, sent",
    copy: "The karigar sends photos at cutting, halfway, and finish, then a short video of the completed poshak. It is folded in butter paper and dispatched from Vrindavan in a maroon keepsake box.",
    image: "/images/keepsake-box.jpg",
    alt: "A folded poshak tied with gold ribbon inside a maroon keepsake box",
  },
];

const FEATURED = {
  name: "Meera Joshi",
  city: "Jaipur",
  piece: "Mor Mukut Peela · size 4",
  image: "/images/hero-thakur.jpg",
  quote: "Lalla’s name in zari is exactly the spelling we use at home. The peacock border catches the diya light.",
};

const NOTES = [
  {
    name: "Ananya Sharma",
    city: "Pune",
    piece: "Rangeela Kamal · size 3",
    image: "/images/211bc59b6dde1cddf12b721c44fcf19a.jpg",
    quote: "They sent progress photos from the adda, and the finished poshak sat perfectly on our size 3 Laddu Gopal.",
  },
  {
    name: "Rahul & Isha Mehta",
    city: "Ahmedabad",
    piece: "Jugal Jodi · Radhashtami",
    image: "/images/keepsake-box.jpg",
    quote: "Radha and Kanha arrived as a pair for Radhashtami. The keepsake box is still on our mandir shelf.",
  },
];

export function HomePage() {
  return (
    <main className="dk-home">
      <section className="dk-hero">
        <div className="dk-aarti" aria-hidden="true" />
        <div className="dk-hero-copy">
          <p className="dk-kicker">
            <span className="dk-diya dk-diya-sm" aria-hidden="true">
              <span className="dk-flame" />
            </span>
            Designer poshaks · Hand embroidered in Vrindavan
          </p>
          <h1>
            Sewn for your <em>Thakurji.</em>
          </h1>
          <p className="dk-lede">
            Heirloom zardozi, gota-patti and resham, stitched after you order, with the name you call Him embroidered in gold thread.
          </p>
          <div className="dk-hero-actions">
            <Link className="dk-btn" href="/collections">
              Explore collections
            </Link>
            <Link className="dk-btn dk-btn-ghost" href="/custom">
              Design with our team
            </Link>
          </div>
          <ul className="dk-assurances">
            <li>100% hand embroidery</li>
            <li>Name preview before stitching</li>
            <li>Progress photos on WhatsApp</li>
          </ul>
        </div>
        <div className="dk-parda" aria-hidden="true">
          <span className="dk-parda-rod" />
          <span className="dk-parda-jyoti" />
          <span className="dk-dori dk-dori-left">
            <i />
            <b />
          </span>
          <span className="dk-dori dk-dori-right">
            <i />
            <b />
          </span>
          <div className="dk-parda-side dk-parda-left">
            <span />
            <span />
            <span />
          </div>
          <div className="dk-parda-side dk-parda-right">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="dk-hero-stage">
          <div className="dk-mandala" aria-hidden="true" />
          <span className="dk-petal" />
          <span className="dk-petal dk-petal-2" />
          <span className="dk-petal dk-petal-3" />
          <figure>
            <img
              src="/images/hero-thakur.jpg"
              alt="Laddu Gopal in a yellow peacock poshak, lit by a diya in a Vrindavan mandir"
            />
          </figure>
        </div>
      </section>

      <section className="dk-band">
        <div className="dk-wrap dk-collections">
          <div className="dk-section-head">
            <div>
              <p className="dk-kicker">The collections</p>
              <h2>Four ways to dress Him</h2>
            </div>
            <Link href="/collections">View all designs</Link>
          </div>
          <div className="dk-grid">
            {COLLECTIONS.map((item) => (
              <Link key={item.name} href={item.href} className="dk-card">
                <span className="dk-card-photo">
                  <img src={item.image} alt="" />
                </span>
                <span className="dk-card-copy">
                  <strong>{item.name}</strong>
                  <em>{item.note}</em>
                  <span>
                    {item.price}
                    <i>{item.time}</i>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dk-bespoke" id="karigars">
        <div className="dk-wrap dk-split">
          <figure>
            <img src="/images/karigar-hands.jpg" alt="A karigar stitching a gold peacock feather into yellow silk" />
          </figure>
          <div>
            <p className="dk-kicker">Bespoke</p>
            <h2>His name, in thread. Your vision, with our designers.</h2>
            <p>
              For Janmashtami, a birthday, or a poshak you have pictured for years — share the idol’s size, His name, and the work you love. A DivineKraft advisor plans it with you. Nothing is stitched until the sketch is approved.
            </p>
            <div className="dk-hero-actions">
              <Link className="dk-btn" href="/custom">
                Start my design brief
              </Link>
              <a className="dk-btn dk-btn-ghost" href="https://wa.me/919876543210">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductRail />

      <section className="dk-how" id="how">
        <div className="dk-wrap">
          <div className="dk-how-head">
            <div>
              <p className="dk-kicker">The seva</p>
              <h2>How a custom poshak is made</h2>
            </div>
            <p>Five steps, about three weeks. The needle starts only after you have seen the sketch and approved His name.</p>
          </div>
          <ol className="dk-journey">
            {STEPS.map((step) => (
              <li key={step.n}>
                <b>{step.n}</b>
                <div>
                  <em>{step.when}</em>
                  <strong>{step.title}</strong>
                  <p>{step.copy}</p>
                </div>
                <img src={step.image} alt={step.alt} />
              </li>
            ))}
          </ol>
          <Link className="dk-btn" href="/custom">
            Start my design brief
          </Link>
        </div>
      </section>

      <section className="dk-notes">
        <div className="dk-wrap">
          <div className="dk-section-head">
            <div>
              <p className="dk-kicker">From their homes</p>
              <h2>They dressed Him, and wrote back</h2>
            </div>
            <span className="dk-score">4.9 · 128 seva notes</span>
          </div>
          <article className="dk-letter">
            <figure>
              <img src={FEATURED.image} alt="Laddu Gopal dressed in the Mor Mukut Peela poshak" />
              <figcaption>{FEATURED.piece}</figcaption>
            </figure>
            <div>
              <span className="dk-stars" aria-label="5 stars">★★★★★</span>
              <blockquote>{FEATURED.quote}</blockquote>
              <p>
                <strong>{FEATURED.name}</strong>
                <span>{FEATURED.city}</span>
              </p>
            </div>
          </article>
          <div className="dk-notes-row">
            {NOTES.map((note) => (
              <article key={note.name}>
                <img src={note.image} alt="" />
                <div>
                  <span className="dk-stars" aria-label="5 stars">★★★★★</span>
                  <blockquote>{note.quote}</blockquote>
                  <p>
                    <strong>{note.name}</strong>
                    <span>
                      {note.city} · {note.piece}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dk-close">
        <img src="/images/vrindavan-dawn.jpg" alt="" />
        <div>
          <p className="dk-kicker">Vrindavan</p>
          <h2>Har Thakurji ki apni poshak.</h2>
          <p>Festival orders close three weeks before each utsav, so the karigars have time to do it right.</p>
          <Link className="dk-btn" href="/custom">
            Plan a custom poshak
          </Link>
        </div>
      </section>
    </main>
  );
}
