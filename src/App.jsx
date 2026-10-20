import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Search, Menu, X, Bookmark,
  Clock3, Instagram, Youtube, Facebook, MoveUpRight,
  Feather, Sun
} from "lucide-react";
import "./App.css";

const STORIES = [
  { id: 1, category: "GIFT HAMPERS", date: "20 OCT 2026", read: "4 MIN", title: "A little box full of big feelings", excerpt: "Thoughtfully picked treats, pretty details and a personal note can turn a simple hamper into a memory someone keeps close.", image: "unbox11.webp", shape: "wide" },
  { id: 2, category: "FLOWER BOUQUETS", date: "14 OCT 2026", read: "3 MIN", title: "Say it beautifully, without saying a word", excerpt: "From soft pastel blooms to bold seasonal flowers, find a bouquet that says just what you mean for every kind of occasion.", image: "nikahnama3.webp", shape: "tall" },
  { id: 3, category: "NIKAH NAMA", date: "08 OCT 2026", read: "5 MIN", title: "A keepsake for the beginning of forever", excerpt: "Celebrate a meaningful day with a beautifully presented Nikah Nama, made to become part of your family's story.", image: "gifttoy.webp", shape: "normal" },
  { id: 4, category: "MOBILE COVERS", date: "01 OCT 2026", read: "3 MIN", title: "A little personality in your pocket", excerpt: "Pretty patterns, thoughtful details and everyday accessories that make your phone feel a little more like you.", image: "bouquet2.webp", shape: "normal" },
  { id: 5, category: "PERSONALISED GIFTS", date: "24 SEP 2026", read: "4 MIN", title: "The sweetest gifts are the personal ones", excerpt: "Names, favourite colours, tiny messages and meaningful details: small touches can make a gift feel truly one of a kind.", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85", shape: "wide" },
  { id: 6, category: "GIFT IDEAS", date: "17 SEP 2026", read: "4 MIN", title: "For birthdays, brides and just-because days", excerpt: "Not every gift needs a big occasion. Sometimes a surprise parcel is simply a lovely way to remind someone they matter.", image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=85", shape: "normal" }
];
const CATEGORIES = ["ALL GIFTS", "GIFT HAMPERS", "FLOWER BOUQUETS", "NIKAH NAMA", "MOBILE COVERS", "PERSONALISED GIFTS", "GIFT IDEAS"];

export default function App() {
  const [active, setActive] = useState("ALL GIFTS");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState([]);
  const [current, setCurrent] = useState(null);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const filtered = useMemo(() => STORIES.filter(story => {
    const cat = active === "ALL GIFTS" || story.category === active;
    const text = `${story.title} ${story.excerpt} ${story.category}`.toLowerCase().includes(search.toLowerCase());
    return cat && text;
  }), [active, search]);

  const go = id => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const toggleSaved = id => setSaved(items => items.includes(id) ? items.filter(x => x !== id) : [...items, id]);

  return <div className="uzma-layout">
    <aside className="side-rail">
      <a className="brand" href="#top" onClick={e => {e.preventDefault(); go("top");}}>uzma<span>✳</span><small>GIFTS MADE MEANINGFUL</small></a>
      <div className="rail-rule"/>
      <span className="rail-label">DISCOVER</span>
      <nav className={menuOpen ? "rail-nav rail-nav-open" : "rail-nav"}>
        <button onClick={() => go("top")}><span>01</span> Home</button>
        <button onClick={() => go("journal")}><span>02</span> Gift collection</button>
        <button onClick={() => go("about")}><span>03</span> Our story</button>
        <button onClick={() => go("letters")}><span>04</span> Gift inspiration</button>
      </nav>
      <div className="rail-bottom">
        <span className="rail-label">FOLLOW OUR WORLD</span>
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17}/></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17}/></a>
        </div>
        <p>Picked with care.<br/>Wrapped with love.</p>
        <span className="copyright">© 2026 UZMA GIFTS</span>
      </div>
    </aside>

    <div className="page-content" id="top">
      <header className="mobile-header">
        <a className="mobile-brand" href="#top" onClick={e => {e.preventDefault(); go("top");}}>uzma<span>✳</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <div className="top-strip"><span><Sun size={14}/> THOUGHTFUL GIFTS FOR EVERY KIND OF LOVE</span><span>CURATED WITH CARE / MADE FOR YOU</span></div>

      <main>
        <section className="intro-hero">
          <div className="hero-photo-wrap">
            <img src="nikahnama4.webp" alt="Beautifully wrapped gifts with ribbons and thoughtful details"/>
            <div className="photo-index">THE GIFT EDIT <span>MADE TO MAKE THEM SMILE</span></div>
          </div>
          <div className="hero-copy">
            <div className="eyebrow"><span/> LITTLE THINGS, BIG FEELINGS</div>
            <h1>Make every<br/>moment feel<br/><em>like a gift.</em></h1>
            <p>Thoughtful hampers, flower bouquets, personalised keepsakes and little surprises for the people who make life special. Find something that feels just right.</p>
            <button className="ink-button" onClick={() => go("journal")}>EXPLORE THE GIFT EDIT <MoveUpRight size={17}/></button>
            <div className="hero-signoff"><span className="sign-line"/> CURATED WITH LOVE BY <strong>UZMA</strong></div>
          </div>
          <div className="hero-index">01 <span>/</span> 06</div>
        </section>

        <section className="note-band">
          <div className="note-band-label"><Feather size={18}/><span>A LITTLE GIFTING NOTE</span></div>
          <p>“The best gifts say, I thought of you.”</p>
          <span className="note-credit">— THE UZMA GIFT EDIT</span>
        </section>

        <section className="journal-section" id="journal">
          <div className="section-top">
            <div><div className="eyebrow"><span/> FIND SOMETHING MEANINGFUL</div><h2>Gifts for every <em>occasion.</em></h2></div>
            <p>From wedding keepsakes to everyday surprises, discover thoughtful details for the moments worth celebrating.</p>
          </div>
          <div className="journal-tools">
            <div className="filters">{CATEGORIES.map(c => <button key={c} className={active === c ? "filter active" : "filter"} onClick={() => setActive(c)}>{c}</button>)}</div>
            <label className="search"><Search size={16}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Find a gift..."/>{search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={14}/></button>}</label>
          </div>
          <div className="story-grid">
            {filtered.map((story, index) => <motion.article key={story.id} className={`story-card ${story.shape}`} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.4,delay:index*.05}}>
              <div className="story-image"><img src={story.image} alt={story.title}/><span className="story-number">0{story.id}</span><button className={`bookmark ${saved.includes(story.id) ? "bookmarked" : ""}`} onClick={() => toggleSaved(story.id)} aria-label="Save gift idea"><Bookmark size={16} fill={saved.includes(story.id) ? "currentColor" : "none"}/></button></div>
              <div className="story-info"><div className="story-meta">{story.category} <span>•</span> {story.date}</div><button className="story-title" onClick={() => setCurrent(story)}>{story.title}</button><p>{story.excerpt}</p><div className="story-end"><span><Clock3 size={13}/> {story.read}</span><button onClick={() => setCurrent(story)} aria-label="Explore gift idea"><ArrowUpRight size={19}/></button></div></div>
            </motion.article>)}
          </div>
          {filtered.length === 0 && <p className="no-results">No gift ideas found. Try another search or category.</p>}
        </section>

        <section className="about-panel" id="about">
          <div className="about-image"><img src="nikahnama4.webp"/><span>THOUGHTFULLY CHOSEN, BEAUTIFULLY WRAPPED</span></div>
          <div className="about-copy"><div className="eyebrow"><span/> THE HEART BEHIND UZMA</div><h2>Every gift tells<br/><em>a little story.</em></h2><p>We believe gifting is more than a pretty package. It is a way to celebrate milestones, show up for someone, say thank you or simply make an ordinary day feel special.</p><p>Explore curated hampers, flower bouquets, Nikah Nama keepsakes, mobile covers and personalised surprises, chosen to help you share a feeling in your own way.</p><button className="underline-link" onClick={() => go("letters")}>FIND YOUR NEXT GIFT <ArrowRight size={16}/></button><div className="signature">with love, <strong>Uzma</strong> ✳</div></div>
        </section>

        <section className="letter-section" id="letters">
          <div className="letter-deco">U.</div>
          <div className="letter-content"><div className="eyebrow"><span/> A LITTLE INSPIRATION FOR YOU</div><h2>Make their day<br/><em>a little brighter.</em></h2><p>Birthday surprises, wedding keepsakes, flower moments and thoughtful little gifts. Find inspiration for the people you never want to forget to celebrate.</p>
            {joined ? <div className="joined-message">Thanks for stopping by! Keep spreading a little happiness. <strong>Uzma ✳</strong></div> : <form className="letter-form" onSubmit={e => {e.preventDefault(); if(email.trim()) setJoined(true);}}><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address"/><button type="submit">GET GIFT INSPIRATION <ArrowUpRight size={16}/></button></form>}
            <small>THOUGHTFUL IDEAS, LITTLE CELEBRATIONS, LOTS OF LOVE.</small>
          </div>
        </section>
      </main>
      <footer className="footer"><div><a className="footer-brand" href="#top" onClick={e => {e.preventDefault();go("top");}}>uzma<span>✳</span></a><p>Little details. Lasting memories.</p></div><div className="footer-social"><span>FOLLOW OUR WORLD</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Youtube size={16}/> YouTube</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={16}/> Facebook</a></div><div className="footer-bottom"><span>© 2026 UZMA GIFTS</span><button onClick={() => go("top")}>BACK TO THE TOP ↑</button></div></footer>
    </div>

    {current && <div className="reader-overlay" role="dialog" aria-modal="true" onClick={() => setCurrent(null)}><article className="reader" onClick={e => e.stopPropagation()}><button className="reader-close" onClick={() => setCurrent(null)} aria-label="Close"><X/></button><img src={current.image} alt={current.title}/><div className="reader-body"><div className="story-meta">{current.category} • {current.date} • {current.read}</div><h2>{current.title}</h2><p>{current.excerpt}</p><p>A thoughtful gift does not have to be grand to mean a lot. Choose a detail that reminds you of the person, add a note in your own words, and let the little things do the talking. A bouquet, a keepsake or a box of their favourite treats can become a memory they return to long after the wrapping is gone.</p><p>Whatever the occasion, make it personal, make it heartfelt, and give it with love.</p><div className="signature">With love, <strong>Uzma</strong> ✳</div></div></article></div>}
  </div>;
}
