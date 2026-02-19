import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Uranus&apos;s Hot Sauce</h3>
            <p className="text-sm text-muted-foreground">
              Out of This World Hot Sauce. Hand-crafted, small-batch sauces with cosmic flavor.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-accent">
                  All Sauces
                </Link>
              </li>
              <li>
                <Link href="/products/uranus-original" className="text-muted-foreground hover:text-accent">
                  Uranus&apos;s Original
                </Link>
              </li>
              <li>
                <Link href="/products/cosmic-inferno" className="text-muted-foreground hover:text-accent">
                  Cosmic Inferno
                </Link>
              </li>
              <li>
                <Link href="/products/nebula-mild" className="text-muted-foreground hover:text-accent">
                  Nebula Mild
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Uranus&apos;s Hot Sauce. All rights reserved.</p>
          <p className="mt-2 text-xs">Out of This World Hot Sauce</p>
        </div>
      </div>
    </footer>
  );
}

