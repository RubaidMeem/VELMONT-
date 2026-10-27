
import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2 className="logo">VELMONT</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#story">Our Story</a>
        </div>

        <a href="#collection" className="shop-button">
          SHOP NOW ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">THE ART OF TIMELESS DRESSING</p>

          <h1>
            Wear the past.
            <br />
            <span>Own the present.</span>
          </h1>

          <p className="description">
            Timeless silhouettes, vintage elegance, and
            clothing made for those who appreciate history.
          </p>

          <a href="#collection" className="discover-button">
            DISCOVER THE COLLECTION ↗
          </a>

          <p className="edition">COLLECTION NO. 001 — EST. 2026</p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85"
            alt="Vintage-inspired fashion model"
          />
          <div className="image-label">
            <span>THE ARCHIVE</span>
            <span>01 / 03</span>
          </div>
        </div>
      </section>

      <section className="collection" id="collection">
        <p className="eyebrow">CURATED FOR THE MODERN CLASSIC</p>
        <h2>Beyond the ordinary.</h2>

        <div className="collection-grid">
          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85"
              alt="Classic vintage jacket"
            />
            <h3>The Heritage Jacket</h3>
            <p>Timeless outerwear</p>
          </article>

          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=85"
              alt="Classic tailored menswear"
            />
            <h3>The Old Money Edit</h3>
            <p>Refined everyday dressing</p>
          </article>

          <article className="product-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85"
              alt="Elegant contemporary fashion"
            />
            <h3>The Archive Collection</h3>
            <p>Inspired by another era</p>
          </article>
        </div>
      </section>

      <section className="story" id="story">
        <p className="eyebrow">OUR PHILOSOPHY</p>
        <h2>Some things never go out of style.</h2>
        <p>
          VELMONT celebrates the beauty of the past through
          thoughtful design, rich textures, and timeless fashion.
        </p>
      </section>

      <footer>
        <h2>VELMONT</h2>
        <p>Timeless by nature. Distinct by design.</p>
        <p>© 2026 VELMONT — THE ART OF TIMELESS DRESSING</p>
      </footer>
    </div>
  )
}

export default App
