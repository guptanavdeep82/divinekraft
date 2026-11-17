import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="dk-footer">
      <div className="dk-footer-grid">
        <div>
          <span className="dk-footer-logo">
            <img src="/images/logo-wordmark.png" alt="DivineKraft" />
          </span>
          <p>Designer poshaks, handmade in Vrindavan for your Thakurji.</p>
        </div>
        <div>
          <strong>Shop</strong>
          <Link href="/collections">Collections</Link>
          <Link href="/custom">Custom design</Link>
          <Link href="/size-guide">Size guide</Link>
          <Link href="/wishlist">Wishlist</Link>
        </div>
        <div>
          <strong>Help</strong>
          <Link href="/faq">FAQ</Link>
          <Link href="/track">Track order</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <strong>Company</strong>
          <Link href="/about">About us</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/account">My account</Link>
          <Link href="/model">How custom works</Link>
        </div>
        <div>
          <strong>Talk to a designer</strong>
          <a className="dk-wa-line" href="https://wa.me/918285003300" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5zM12 20.5a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c.5.2 1 .4 1.5.6a3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
            </svg>
            +91 82850 03300
          </a>
          <span>seva@divinekraft.com</span>
          <span>18, Banke Bihari Marg, Vrindavan</span>
        </div>
      </div>
      <div className="dk-footer-bar">© DivineKraft Atelier Pvt. Ltd.</div>
    </footer>
  );
}
