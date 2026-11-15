import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="dk-footer">
      <div className="dk-footer-grid">
        <div>
          <span className="dk-footer-logo">
            <img src="/images/logo-wordmark.jpg" alt="DivineKraft" />
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
          <span>WhatsApp +91 98765 43210</span>
          <span>seva@divinekraft.com</span>
          <span>18, Banke Bihari Marg, Vrindavan</span>
        </div>
      </div>
      <div className="dk-footer-bar">© DivineKraft Atelier Pvt. Ltd. · GSTIN 09AADCD1842E1Z5</div>
    </footer>
  );
}
