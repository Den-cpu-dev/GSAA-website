/* ══════════════════════════════════════════
   GSAA - Shared Components
   Navigation, Footer, Modals, Search
══════════════════════════════════════════ */

const GSAA = (function () {
  'use strict';

  /* ─── NAV HTML ─── */
  const NAV_HTML = `
  <div class="scroll-progress-container"><div id="scrollProgressBar" class="scroll-progress-bar"></div></div>
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.jpg" alt="GSAA logo" class="nav-logo-img">
      <div class="nav-wordmark">GSAA<span>Ghana Sociological &amp; Anthropological Association</span></div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="journal.html">Journal</a></li>
      <li><a href="membership.html">Membership</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li>
        <button class="nav-theme-btn" id="navThemeBtn" aria-label="Toggle theme">
          <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </li>
      <li>
        <button class="nav-search-btn" id="navSearchBtn" aria-label="Search">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="search-shortcut">⌘K</span>
        </button>
      </li>
      <li><a href="membership.html" class="nav-cta">Join GSAA</a></li>
    </ul>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div id="mobileNav" class="mobile-nav">
    <button id="mobileNavClose" class="mobile-nav-close" aria-label="Close menu">&times;</button>
    <ul class="mobile-nav-links">
      <li><a href="index.html" class="mobile-nav-link">Home</a></li>
      <li><a href="about.html" class="mobile-nav-link">About</a></li>
      <li><a href="research.html" class="mobile-nav-link">Research</a></li>
      <li><a href="events.html" class="mobile-nav-link">Events</a></li>
      <li><a href="journal.html" class="mobile-nav-link">Journal</a></li>
      <li><a href="membership.html" class="mobile-nav-link">Membership</a></li>
      <li><a href="contact.html" class="mobile-nav-link">Contact</a></li>
      <li><a href="membership.html" class="mobile-nav-link mobile-nav-cta">Join GSAA</a></li>
    </ul>
  </div>`;

  /* ─── FOOTER HTML ─── */
  const FOOTER_HTML = `
  <div class="kente-footer"></div>
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="images/logo.jpg" alt="GSAA logo" class="footer-logo-img">
          <div class="footer-name">GSAA<small>Ghana Sociological &amp; Anthropological Association</small></div>
        </div>
        <p class="footer-tagline">Advancing the understanding of Ghanaian society through scholarly inquiry, community engagement, and academic excellence since 1963.</p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Organisation</div>
        <ul>
          <li><a href="about.html">History &amp; Mission</a></li>
          <li><a href="about.html#leadership">Leadership</a></li>
          <li><a href="about.html#constitution">Constitution</a></li>
          <li><a href="about.html#reports">Annual Reports</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Scholarship</div>
        <ul>
          <li><a href="journal.html">GSAA Journal</a></li>
          <li><a href="research.html">Research Areas</a></li>
          <li><a href="journal.html#working-papers">Working Papers</a></li>
          <li><a href="journal.html#cfp">Call for Papers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Engage</div>
        <ul>
          <li><a href="membership.html">Join GSAA</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html#media">Media Centre</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Legal</div>
        <ul>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Use</a></li>
          <li><a href="cookies.html">Cookie Policy</a></li>
          <li><a href="accessibility.html">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="footerYear"></span> Ghana Sociological &amp; Anthropological Association. All rights reserved.</span>
      <span>Accra, Ghana &middot; <a href="mailto:info@gsaa.org.gh">info@gsaa.org.gh</a></span>
    </div>
  </footer>`;

  /* ─── SEARCH OVERLAY ─── */
  const SEARCH_HTML = `
  <div id="searchOverlay" class="search-overlay" role="dialog" aria-modal="true" aria-label="Site search">
    <div class="search-box">
      <div class="search-input-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(229,184,76,0.7)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" class="search-input" id="searchInput" placeholder="Search GSAA…" autocomplete="off" spellcheck="false">
        <span class="search-close-hint" id="searchClose">ESC</span>
      </div>
      <div class="search-hint">Press Enter to jump · Esc to close</div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>`;

  /* ─── TOAST ─── */
  const TOAST_HTML = `<div id="toast" class="toast" role="status" aria-live="polite"></div>`;

  /* ─── BACK TO TOP ─── */
  const BACKTOP_HTML = `
  <button id="backToTop" class="back-to-top" aria-label="Back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
  </button>`;

  /* ─── COOKIE BANNER ─── */
  const COOKIE_HTML = `
  <div id="cookieBanner" class="cookie-banner" role="complementary" aria-label="Cookie notice">
    <div class="cookie-inner">
      <p class="cookie-text">We use essential cookies to keep the site running. By continuing you accept our <a href="cookies.html">Cookie Policy</a>.</p>
      <div class="cookie-actions">
        <button class="btn-ghost" id="cookieDeny" style="font-size:0.78rem;padding:0.5rem 1rem">Decline</button>
        <button class="btn-primary" id="cookieAccept" style="font-size:0.78rem;padding:0.5rem 1.2rem">Accept</button>
      </div>
    </div>
  </div>`;

  /* ─── SUCCESS MODAL HTML ─── */
  /* ─── SUCCESS MODAL HTML ─── */
  const SUCCESS_MODAL_HTML = `
  <div id="gsaaSuccessModal" class="gsaa-success-modal-overlay" style="display: none;">
    <div class="gsaa-success-modal-box">
      <!-- Loading State -->
      <div id="gsaaModalLoading" class="gsaa-modal-loading-state">
        <div class="gsaa-modal-spinner"></div>
        <p id="gsaaModalLoadingText">Processing request...</p>
      </div>
      
      <!-- Success State -->
      <div id="gsaaModalSuccess" class="gsaa-modal-success-state" style="display: none;">
        <div class="gsaa-checkmark-container">
          <svg class="gsaa-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="gsaa-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="gsaa-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h3 id="gsaaModalTitle">Submission Successful</h3>
        <p id="gsaaModalMessage">Thank you for your submission.</p>
        
        <!-- Receipt container -->
        <div id="gsaaReceiptContainer" style="display: none; margin-top: 1.5rem; margin-bottom: 1.5rem;"></div>
        
        <div class="gsaa-modal-actions">
          <button id="gsaaReceiptDownloadBtn" class="btn-outline" style="display: none; margin-bottom: 0.8rem; width: 100%; font-size: 0.85rem; padding: 0.6rem;">Download Invoice Receipt</button>
          <button id="gsaaPayDuesBtn" class="btn-primary" style="display: none; margin-bottom: 0.8rem; width: 100%; font-size: 0.85rem; padding: 0.6rem; background: #3fb58e; border-color: #3fb58e;">Pay Dues Online (Paystack)</button>
          <button id="gsaaCloseModalBtn" class="btn-primary" onclick="GSAA.closeSuccessModal()" style="width: 100%; font-size: 0.85rem; padding: 0.6rem;">Close Window</button>
        </div>
      </div>
      
      <!-- Password Setup State -->
      <div id="gsaaModalPasswordSetup" class="gsaa-modal-password-setup-state" style="display: none; text-align: left;">
        <h3 style="font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:0.5rem;text-align:center;color:var(--text-dark)">Set Account Password</h3>
        <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:1.5rem;text-align:center">Create a password to secure your GSAA Member Portal credentials.</p>
        <form id="gsaaPasswordSetupForm" onsubmit="GSAA.savePortalPassword(event)">
          <div class="form-group" style="margin-bottom:1rem">
            <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:var(--text-dark)">Choose Password *</label>
            <input type="password" class="form-input" id="setupPassword" required placeholder="Min 6 characters" style="padding:0.6rem;font-size:0.85rem;width:100%">
          </div>
          <div class="form-group" style="margin-bottom:1.5rem">
            <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:var(--text-dark)">Confirm Password *</label>
            <input type="password" class="form-input" id="setupConfirmPassword" required placeholder="Re-enter password" style="padding:0.6rem;font-size:0.85rem;width:100%">
          </div>
          <button type="submit" class="btn-primary" style="width:100%;padding:0.75rem;font-size:0.88rem">Save Password &amp; Activate Account</button>
        </form>
      </div>
    </div>
  </div>`;

  /* ─── PAYSTACK CHECKOUT HTML ─── */
  const PAYSTACK_HTML = `
  <div id="paystackModal" class="paystack-overlay" style="display: none;">
    <div class="paystack-box">
      <div class="paystack-header">
        <div class="paystack-brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="transform:rotate(45deg)"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
          <span>paystack</span>
        </div>
        <button class="paystack-close" onclick="GSAA.closeCheckout()">&times;</button>
      </div>
      
      <div class="paystack-body">
        <div class="paystack-amount-strip">
          <span id="paystackEmail" style="color:var(--text-light)">member@gsaa.org</span>
          <span id="paystackAmount">GHS 200.00</span>
        </div>
        
        <div id="paystackMainFlow">
          <p class="paystack-instruction">Select your payment method:</p>
          <div class="paystack-method-selector">
            <button class="paystack-method-btn active" id="paystackMomoBtn" onclick="GSAA.setPayMethod('momo')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
              Mobile Money
            </button>
            <button class="paystack-method-btn" id="paystackCardBtn" onclick="GSAA.setPayMethod('card')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              Card Payment
            </button>
          </div>
          
          <!-- Momo Form -->
          <div id="paystackMomoForm" class="paystack-form">
            <div class="form-group" style="margin-bottom:1rem">
              <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:#475569">Choose Network</label>
              <select class="form-input form-select" id="paystackNetwork" style="padding:0.6rem;font-size:0.85rem;width:100%">
                <option>MTN Mobile Money</option>
                <option>Telecel Cash</option>
                <option>AT Money</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom:1.5rem">
              <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:#475569">Phone Number</label>
              <input type="tel" class="form-input" id="paystackPhone" placeholder="e.g. 024 123 4567" required style="padding:0.6rem;font-size:0.85rem;width:100%">
            </div>
          </div>
          
          <!-- Card Form -->
          <div id="paystackCardForm" class="paystack-form" style="display: none;">
            <div class="form-group" style="margin-bottom:1rem">
              <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:#475569">Card Number</label>
              <input type="text" class="form-input" placeholder="4000 1234 5678 9010" required style="padding:0.6rem;font-size:0.85rem;width:100%">
            </div>
            <div style="display:flex;gap:1rem;margin-bottom:1.5rem">
              <div class="form-group" style="flex:1">
                <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:#475569">Expiry Date</label>
                <input type="text" class="form-input" placeholder="MM / YY" required style="padding:0.6rem;font-size:0.85rem;width:100%">
              </div>
              <div class="form-group" style="flex:1">
                <label style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.4rem;color:#475569">CVV</label>
                <input type="password" class="form-input" placeholder="123" required style="padding:0.6rem;font-size:0.85rem;width:100%">
              </div>
            </div>
          </div>
          
          <button class="btn-primary paystack-submit" onclick="GSAA.processCheckoutPayment()">Pay Now</button>
        </div>
        
        <!-- Processing State -->
        <div id="paystackLoader" class="paystack-loader-state" style="display: none;">
          <div class="paystack-spinner"></div>
          <p id="paystackLoaderText" style="font-weight:600;font-size:0.9rem;color:#3fb58e">Sending payment prompt to phone...</p>
        </div>
        
        <!-- Success Check -->
        <div id="paystackSuccess" class="paystack-success-state" style="display: none;">
          <div class="paystack-success-icon">&#10004;</div>
          <h3>Payment Successful</h3>
          <p style="font-size:0.88rem;color:#475569;margin-bottom:1.5rem">Your dues payment of <span id="paystackDuesPaid" style="font-weight:700">GHS 200.00</span> has been processed successfully.</p>
          <button class="btn-primary" onclick="GSAA.completeCheckout()" style="width:100%;padding:0.75rem;font-size:0.88rem">Setup Portal Account</button>
        </div>
      </div>
    </div>
  </div>`;

  /* ─── SUCCESS MODAL STYLES ─── */
  const SUCCESS_MODAL_STYLES = `
  .gsaa-success-modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(7, 21, 38, 0.6);
    backdrop-filter: blur(4px);
    z-index: 11000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  .gsaa-success-modal-box {
    background: var(--white);
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 450px;
    padding: 2.5rem;
    box-shadow: 0 20px 45px rgba(0,0,0,0.15);
    position: relative;
    text-align: center;
    animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  [data-theme="dark"] .gsaa-success-modal-box {
    background: #0A1C2E;
    border-color: rgba(255,255,255,0.06);
  }
  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  .gsaa-modal-loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
  .gsaa-modal-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(0,0,0,0.05);
    border-left-color: var(--green-mid);
    border-radius: 50%;
    animation: modalSpin 1s linear infinite;
    margin-bottom: 1.5rem;
  }
  [data-theme="dark"] .gsaa-modal-spinner {
    border-color: rgba(255,255,255,0.05);
    border-left-color: var(--gold);
  }
  @keyframes modalSpin {
    100% { transform: rotate(360deg); }
  }
  #gsaaModalLoadingText {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-dark);
  }
  .gsaa-checkmark-container {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem auto;
  }
  .gsaa-checkmark {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #22c55e;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #22c55e;
    animation: fillCircle .4s ease-in-out .4s forwards, scaleCheckmark .3s ease-in-out .9s cubic-bezier(0.19, 1, 0.22, 1) both;
  }
  .gsaa-checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #22c55e;
    fill: none;
    animation: strokeCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .gsaa-checkmark-check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke: #22c55e;
    animation: strokeCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }
  @keyframes strokeCircle {
    100% { stroke-dashoffset: 0; }
  }
  @keyframes strokeCheck {
    100% { stroke-dashoffset: 0; }
  }
  @keyframes fillCircle {
    100% { box-shadow: inset 0px 0px 0px 40px rgba(34, 197, 94, 0.1); }
  }
  #gsaaModalTitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--text-dark);
    margin-bottom: 0.8rem;
  }
  #gsaaModalMessage {
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--text-light);
    margin-bottom: 1.8rem;
  }
  .gsaa-modal-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .gsaa-receipt-invoice {
    background: rgba(0,0,0,0.015);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 6px;
    padding: 1.2rem;
    text-align: left;
    font-size: 0.82rem;
    color: var(--text-dark);
    line-height: 1.5;
  }
  [data-theme="dark"] .gsaa-receipt-invoice {
    background: rgba(255,255,255,0.015);
    border-color: rgba(255,255,255,0.06);
  }
  .gsaa-receipt-header {
    font-family: 'Playfair Display', serif;
    font-size: 0.92rem;
    font-weight: 700;
    border-bottom: 1px dashed rgba(0,0,0,0.1);
    padding-bottom: 0.6rem;
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  [data-theme="dark"] .gsaa-receipt-header {
    border-bottom-color: rgba(255,255,255,0.1);
  }
  .gsaa-receipt-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  }
  .gsaa-receipt-row:last-child {
    margin-bottom: 0;
  }
  .gsaa-receipt-row span:first-child {
    color: var(--text-light);
  }
  .gsaa-receipt-row span:last-child {
    font-weight: 600;
  }
  
  /* Search overlays highlighting & selections */
  .search-result-item {
    cursor: pointer;
    transition: background 0.15s ease, border-left 0.15s ease;
  }
  .search-result-item.selected,
  .search-result-item:hover {
    background: rgba(229, 184, 76, 0.08) !important;
    border-left: 4px solid var(--gold) !important;
  }
  .search-result-item mark {
    background: rgba(229, 184, 76, 0.25);
    color: inherit;
    font-weight: 700;
    padding: 0 0.1rem;
    border-radius: 2px;
  }
  [data-theme="dark"] .search-result-item.selected {
    background: rgba(229, 184, 76, 0.12) !important;
  }
  
  /* Paystack Checkout Styles */
  .paystack-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(7, 21, 38, 0.65);
    backdrop-filter: blur(4px);
    z-index: 12000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }
  .paystack-box {
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.06);
    width: 100%;
    max-width: 400px;
    box-shadow: 0 25px 55px rgba(0,0,0,0.22);
    overflow: hidden;
    color: #334155;
    animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  [data-theme="dark"] .paystack-box {
    background: #0d1e31;
    border-color: rgba(255,255,255,0.06);
    color: #cbd5e1;
  }
  .paystack-header {
    background: #fafafb;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    padding: 1.1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  [data-theme="dark"] .paystack-header {
    background: #091523;
    border-bottom-color: rgba(255,255,255,0.05);
  }
  .paystack-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: -0.02em;
    color: #3fb58e;
  }
  .paystack-close {
    background: none; border: none; font-size: 1.5rem; color: #94a3b8; cursor: pointer;
    line-height: 1;
  }
  .paystack-close:hover { color: #ef4444; }
  .paystack-body { padding: 1.5rem; }
  .paystack-amount-strip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(63, 181, 142, 0.05);
    border: 1px solid rgba(63, 181, 142, 0.15);
    border-radius: 6px;
    padding: 0.85rem 1.2rem;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .paystack-amount-strip span:last-child {
    font-size: 1.1rem;
    color: #3fb58e;
    font-weight: 700;
  }
  .paystack-instruction {
    font-size: 0.82rem; color: #64748b; margin-bottom: 0.8rem;
  }
  [data-theme="dark"] .paystack-instruction {
    color: #94a3b8;
  }
  .paystack-method-selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  .paystack-method-btn {
    border: 1px solid #e2e8f0;
    background: none;
    border-radius: 6px;
    padding: 0.8rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    color: #475569;
    transition: all 0.2s;
  }
  [data-theme="dark"] .paystack-method-btn {
    border-color: rgba(255,255,255,0.06);
    color: #94a3b8;
  }
  .paystack-method-btn.active {
    border-color: #3fb58e;
    background: rgba(63, 181, 142, 0.04);
    color: #3fb58e;
  }
  .paystack-form {
    margin-bottom: 1.8rem;
    animation: fadeIn 0.25s ease forwards;
  }
  .paystack-submit {
    width: 100%;
    padding: 0.85rem;
    font-size: 0.92rem;
    font-weight: 600;
    background: #3fb58e !important;
    color: #ffffff !important;
    border-color: #3fb58e !important;
  }
  .paystack-submit:hover { background: #359f7c !important; }
  
  .paystack-loader-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
  }
  .paystack-spinner {
    width: 44px;
    height: 44px;
    border: 3.5px solid rgba(63, 181, 142, 0.1);
    border-left-color: #3fb58e;
    border-radius: 50%;
    animation: modalSpin 0.9s linear infinite;
    margin-bottom: 1.5rem;
  }
  .paystack-success-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    text-align: center;
    animation: scaleCheckmark 0.3s ease-out forwards;
  }
  .paystack-success-icon {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: rgba(63, 181, 142, 0.1);
    color: #3fb58e;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
  .paystack-success-state h3 {
    font-size: 1.3rem; margin-bottom: 0.6rem; color: #3fb58e;
  }
  `;

  /* ─── LEADER MODAL HTML ─── */
  const LEADER_MODAL_HTML = `
  <div id="leaderProfileModal" class="leader-modal-overlay" aria-hidden="true">
    <div class="leader-modal-box">
      <button class="leader-modal-close" id="leaderModalCloseBtn" aria-label="Close profile">&times;</button>
      <div class="leader-modal-content">
        <div class="leader-modal-photo-col">
          <div class="leader-modal-photo-wrap" id="leaderModalPhotoContainer" title="Click to view photo full size">
            <img id="leaderModalImg" src="" alt="" style="display: none;">
            <div id="leaderModalFallback" class="leader-modal-fallback" style="display: none;"></div>
          </div>
          <div class="leader-modal-badge" id="leaderModalBadge">GSAA Leadership</div>
        </div>
        <div class="leader-modal-info-col">
          <div class="leader-modal-role" id="leaderModalRole">Role Title</div>
          <h2 class="leader-modal-name" id="leaderModalName">Leader Name</h2>
          <div class="leader-modal-institution" id="leaderModalInstitution" style="display:none;"></div>
          <div class="leader-modal-divider"></div>
          <div class="leader-modal-bio" id="leaderModalBio">
            Biography text...
          </div>
          <div class="leader-modal-actions">
            <a href="contact.html" class="btn-primary" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">Contact Secretariat</a>
            <button class="btn-outline" id="leaderModalZoomBtn" style="font-size: 0.85rem; padding: 0.6rem 1.2rem;">Enlarge Photo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="imageLightboxModal" class="lightbox-overlay" aria-hidden="true">
    <div class="lightbox-box">
      <button class="lightbox-close" id="lightboxCloseBtn" aria-label="Close enlarged photo">&times;</button>
      <img id="lightboxImg" src="" alt="Leader Photo Enlarged">
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>`;

  /* ─── LEADER MODAL & LIGHTBOX STYLES ─── */
  const LEADER_MODAL_STYLES = `
  .leader-modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(7, 21, 38, 0.78);
    backdrop-filter: blur(8px);
    z-index: 13000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .leader-modal-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }
  .leader-modal-box {
    background: var(--white);
    border-radius: 16px;
    border: 1px solid rgba(229, 184, 76, 0.35);
    width: 100%;
    max-width: 880px;
    max-height: 88vh;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    color: var(--text-dark);
    transform: translateY(20px) scale(0.96);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    padding: 2.2rem;
  }
  [data-theme="dark"] .leader-modal-box {
    background: #0f172a;
    border-color: rgba(229, 184, 76, 0.35);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
    color: #f8fafc;
  }
  .leader-modal-overlay.open .leader-modal-box {
    transform: translateY(0) scale(1);
  }
  .leader-modal-close {
    position: absolute;
    top: 1.2rem; right: 1.2rem;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    width: 36px; height: 36px;
    border-radius: 50%;
    font-size: 1.4rem;
    line-height: 1;
    color: var(--text-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, transform 0.2s ease;
    z-index: 10;
  }
  [data-theme="dark"] .leader-modal-close {
    background: rgba(255, 255, 255, 0.1);
    color: #f8fafc;
  }
  .leader-modal-close:hover {
    background: var(--gold);
    color: #000;
    transform: rotate(90deg);
  }
  .leader-modal-content {
    display: flex;
    gap: 1.8rem;
    align-items: flex-start;
    min-width: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    .leader-modal-box {
      padding: 1.5rem 1.2rem;
      max-height: 92vh;
    }
    .leader-modal-content {
      flex-direction: column;
      align-items: center;
      text-align: left;
    }
  }
  .leader-modal-photo-col {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .leader-modal-photo-wrap {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--gold);
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    background: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .leader-modal-photo-wrap:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 28px rgba(229, 184, 76, 0.4);
  }
  .leader-modal-photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .leader-modal-fallback {
    width: 100%; height: 100%;
    background: linear-gradient(135deg, var(--navy-dark), var(--green-mid));
    color: var(--gold);
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .leader-modal-badge {
    margin-top: 1rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: rgba(229, 184, 76, 0.15);
    color: var(--gold);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    border: 1px solid rgba(229, 184, 76, 0.3);
    text-align: center;
  }
  .leader-modal-info-col {
    flex-grow: 1;
    min-width: 0;
    width: 100%;
  }
  .leader-modal-role {
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--green-accent);
    margin-bottom: 0.3rem;
  }
  .leader-modal-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.65rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.3rem;
    line-height: 1.25;
  }
  [data-theme="dark"] .leader-modal-name {
    color: #f8fafc;
  }
  .leader-modal-institution {
    font-size: 0.88rem;
    color: var(--gold);
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
  .leader-modal-divider {
    height: 2px;
    width: 50px;
    background: linear-gradient(90deg, var(--gold), transparent);
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    .leader-modal-divider { margin: 0.8rem 0; }
  }
  .leader-modal-bio {
    font-size: 0.94rem;
    line-height: 1.7;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    max-height: none;
    overflow-y: visible;
    padding-right: 0;
    width: 100%;
  }
  .profile-modal-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    background: rgba(0,0,0,0.03);
    padding: 0.4rem;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.06);
    margin-bottom: 1.25rem;
  }
  .profile-modal-tab {
    padding: 0.55rem 0.95rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-mid);
    background: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    white-space: normal;
  }
  .profile-modal-tab:hover {
    color: var(--green-deep);
    background: rgba(0,0,0,0.05);
  }
  .profile-modal-tab.active {
    color: var(--green-deep);
    background: var(--white);
    border-color: rgba(229, 184, 76, 0.4);
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
  [data-theme="dark"] .profile-modal-tabs {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
  }
  [data-theme="dark"] .profile-modal-tab {
    color: #94a3b8;
  }
  [data-theme="dark"] .profile-modal-tab.active {
    color: var(--gold);
    background: #1e293b;
    border-color: var(--gold);
  }
  .leader-modal-actions {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }
  @media (max-width: 640px) {
    .leader-modal-actions { justify-content: flex-start; }
  }

  /* Lightbox Overlay */
  .lightbox-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: blur(12px);
    z-index: 14000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .lightbox-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }
  .lightbox-box {
    position: relative;
    max-width: 90vw;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .lightbox-box img {
    max-width: 100%;
    max-height: 75vh;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    border: 3px solid var(--gold);
    object-fit: contain;
  }
  .lightbox-caption {
    margin-top: 1rem;
    color: #f8fafc;
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    text-align: center;
  }
  .lightbox-close {
    position: absolute;
    top: -2.8rem; right: -1rem;
    background: rgba(255,255,255,0.2);
    border: none;
    color: #fff;
    font-size: 1.8rem;
    width: 40px; height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
  }
  .lightbox-close:hover {
    background: var(--gold);
    color: #000;
  }

  /* Interactive card indicator */
  .leader-card,
  .profile-card,
  .institution-member {
    cursor: pointer !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease !important;
  }
  .leader-card:hover,
  .profile-card:hover,
  .institution-member:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14) !important;
  }
  .profile-photo-wrap,
  .leader-photo-wrap,
  .about-photo-wrap,
  .member-photo-wrap {
    position: relative;
  }
  .profile-photo-wrap::after,
  .leader-photo-wrap::after,
  .about-photo-wrap::after,
  .member-photo-wrap::after {
    content: 'View';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(7, 21, 38, 0.55);
    color: var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease;
    backdrop-filter: blur(2px);
  }
  .profile-card:hover .profile-photo-wrap::after,
  .leader-card:hover .leader-photo-wrap::after,
  .leader-card:hover .about-photo-wrap::after,
  .institution-member:hover .member-photo-wrap::after {
    opacity: 1;
  }
  `;

  /* ─── SEARCH INDEX ─── */
  let searchIndex = [];
  async function loadSearchIndex() {
    try {
      const res = await fetch('data/search-index.json');
      searchIndex = await res.json();
    } catch (e) {
      console.warn('GSAA: Search index failed to load. Falling back to basics.');
      searchIndex = [{ section: 'Home', title: 'GSAA - Home', url: 'index.html' }];
    }
  }

  /* ─── INIT FUNCTION ─── */
  function init(options = {}) {
    const { page = '' } = options;

    // Inject shared HTML if not already present
    if (!document.getElementById('mainNav')) {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
    if (!document.querySelector('footer')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
    if (!document.getElementById('searchOverlay')) {
      document.body.insertAdjacentHTML('beforeend', SEARCH_HTML);
    }
    if (!document.getElementById('toast')) {
      document.body.insertAdjacentHTML('beforeend', TOAST_HTML);
    }
    if (!document.getElementById('backToTop')) {
      document.body.insertAdjacentHTML('beforeend', BACKTOP_HTML);
    }
    
    if (!localStorage.getItem('gsaa_cookie_consent') && !document.getElementById('cookieBanner')) {
      document.body.insertAdjacentHTML('beforeend', COOKIE_HTML);
    }

    // Set footer year
    const fy = document.getElementById('footerYear');
    if (fy) fy.textContent = new Date().getFullYear();

    // Mark active nav
    document.querySelectorAll('#navLinks a, .mobile-nav-link').forEach(a => {
      if (a.getAttribute('href') === page || (page && a.getAttribute('href')?.includes(page))) {
        a.classList.add('nav-active');
      }
    });

    // Inject success modal & paystack checkout if not present
    if (!document.getElementById('gsaaSuccessModal')) {
      document.body.insertAdjacentHTML('beforeend', SUCCESS_MODAL_HTML);
      document.body.insertAdjacentHTML('beforeend', PAYSTACK_HTML);
      if (!document.getElementById('gsaaSuccessModalStyles')) {
        const style = document.createElement('style');
        style.id = 'gsaaSuccessModalStyles';
        style.innerHTML = SUCCESS_MODAL_STYLES;
        document.head.appendChild(style);
      }
    }

    // Inject leader modal & lightbox if not present
    if (!document.getElementById('leaderProfileModal')) {
      document.body.insertAdjacentHTML('beforeend', LEADER_MODAL_HTML);
      if (!document.getElementById('gsaaLeaderModalStyles')) {
        const style = document.createElement('style');
        style.id = 'gsaaLeaderModalStyles';
        style.innerHTML = LEADER_MODAL_STYLES;
        document.head.appendChild(style);
      }
    }

    // Boot all functionality
    loadSearchIndex();
    initTheme();
    initScrollProgress();
    initReveal();
    initNav();
    initMobileNav();
    initSearch();
    initBackToTop();
    initCookieBanner();
    initSmoothScroll();
    initFormInterceptors();
    initLeaderCardModals();
  }

  function initTheme() {
    const btn = document.getElementById('navThemeBtn');
    if (!btn) return;
    const sun = btn.querySelector('.sun-icon');
    const moon = btn.querySelector('.moon-icon');
    
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('gsaa_theme', theme);
      if (theme === 'dark') {
        sun.style.display = 'none';
        moon.style.display = 'block';
      } else {
        sun.style.display = 'block';
        moon.style.display = 'none';
      }
    };

    const currentTheme = localStorage.getItem('gsaa_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(currentTheme);

    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('scrollProgressBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      if (dh <= 0) return;
      bar.style.width = (st / dh * 100) + '%';
    }, { passive: true });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
  }

  function initNav() {
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav?.classList.toggle('nav-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  function initMobileNav() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mobileNav');
    const close = document.getElementById('mobileNavClose');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => { 
      nav.classList.add('open'); 
      btn.classList.add('open');
      document.body.style.overflow = 'hidden'; 
    });
    const closeFn = () => { 
      nav.classList.remove('open'); 
      btn.classList.remove('open');
      document.body.style.overflow = ''; 
    };
    close?.addEventListener('click', closeFn);
    nav.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeFn));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFn(); });
  }

  function initSearch() {
    const overlay = document.getElementById('searchOverlay');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    const closeBtn = document.getElementById('searchClose');
    const navBtn = document.getElementById('navSearchBtn');
    if (!overlay) return;

    let selectedIndex = -1;
    let currentMatches = [];

    const open = () => { 
      overlay.classList.add('open'); 
      document.body.style.overflow = 'hidden'; 
      setTimeout(() => input?.focus(), 100);
      input.setAttribute('aria-expanded', 'true');
      selectedIndex = -1;
    };
    const close = () => { 
      overlay.classList.remove('open'); 
      document.body.style.overflow = ''; 
      if (input) {
        input.value = '';
        input.setAttribute('aria-expanded', 'false');
      }
      if (results) results.innerHTML = ''; 
      currentMatches = [];
      selectedIndex = -1;
      navBtn?.focus();
    };

    navBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });

    input?.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      results.innerHTML = '';
      selectedIndex = -1;
      
      if (!q) {
        currentMatches = [];
        return;
      }
      
      currentMatches = searchIndex.filter(i => i.title.toLowerCase().includes(q) || i.section.toLowerCase().includes(q));
      
      if (!currentMatches.length) {
        results.innerHTML = '<div class="search-no-results">No results found.</div>';
        return;
      }
      
      currentMatches.slice(0, 8).forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.setAttribute('data-index', index);
        
        // Highlight query match in title and section using regex
        const regex = new RegExp(`(${q})`, 'gi');
        const highlightedTitle = item.title.replace(regex, '<mark>$1</mark>');
        const highlightedSection = item.section.replace(regex, '<mark>$1</mark>');
        
        div.innerHTML = `<div class="search-result-section">${highlightedSection}</div><div class="search-result-title">${highlightedTitle}</div>`;
        div.addEventListener('click', () => { close(); window.location.href = item.url; });
        results.appendChild(div);
      });
    });

    input?.addEventListener('keydown', e => {
      const items = results.querySelectorAll('.search-result-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          const matchItem = currentMatches[selectedIndex];
          if (matchItem) {
            close();
            window.location.href = matchItem.url;
          }
        } else if (items.length > 0) {
          const matchItem = currentMatches[0];
          if (matchItem) {
            close();
            window.location.href = matchItem.url;
          }
        }
      }
    });

    function updateSelection(items) {
      items.forEach(item => item.classList.remove('selected'));
      if (selectedIndex >= 0 && selectedIndex < items.length) {
        const activeItem = items[selectedIndex];
        activeItem.classList.add('selected');
        activeItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem('gsaa_cookie_consent', 'accepted');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
    document.getElementById('cookieDeny')?.addEventListener('click', () => {
      localStorage.setItem('gsaa_cookie_consent', 'denied');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
    setTimeout(() => banner.classList.add('show'), 1500);
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  /* ─── COUNTER ANIMATION ─── */
  function initCounters() {
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = +el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          let v = 0;
          const step = target / (target > 1000 ? 1800 : 900) * 16;
          const t = setInterval(() => {
            v = Math.min(v + step, target);
            el.textContent = Math.floor(v) + suffix;
            if (v >= target) clearInterval(t);
          }, 16);
          obs.unobserve(el);
        });
      }, { threshold: 0.5 });
      obs.observe(el);
    });
  }

  /* ─── FORM VALIDATION ─── */
  function validateForm(formEl) {
    let valid = true;
    formEl.querySelectorAll('[required]').forEach(field => {
      const err = field.parentElement.querySelector('.form-error-msg');
      field.classList.remove('error');
      if (err) err.classList.remove('show');
      const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
      if (empty) {
        field.classList.add('error');
        if (err) err.classList.add('show');
        valid = false;
      }
    });
    return valid;
  }

  /* ─── TOAST UTILITY ─── */
  let toastTimer;
  function showToast(msg, type = 'info') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.style.borderLeftColor = type === 'success' ? 'var(--green-accent)' : type === 'error' ? 'var(--red-kente)' : 'var(--gold)';
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
  }

  /* ─── SUCCESS MODAL UTILITY ─── */
  function showSuccessModal(title, message, receiptHTML = '') {
    const overlay = document.getElementById('gsaaSuccessModal');
    if (!overlay) return;
    
    document.getElementById('gsaaModalLoading').style.display = 'flex';
    document.getElementById('gsaaModalSuccess').style.display = 'none';
    document.getElementById('gsaaReceiptContainer').style.display = 'none';
    document.getElementById('gsaaReceiptDownloadBtn').style.display = 'none';
    
    overlay.style.display = 'flex';
    
    setTimeout(() => {
      document.getElementById('gsaaModalLoading').style.display = 'none';
      document.getElementById('gsaaModalSuccess').style.display = 'block';
      document.getElementById('gsaaModalTitle').textContent = title;
      document.getElementById('gsaaModalMessage').textContent = message;
      
      if (receiptHTML) {
        const rc = document.getElementById('gsaaReceiptContainer');
        rc.innerHTML = receiptHTML;
        rc.style.display = 'block';
        
        const dlBtn = document.getElementById('gsaaReceiptDownloadBtn');
        dlBtn.style.display = 'block';
        dlBtn.onclick = () => {
          printReceipt(receiptHTML);
        };
      }
    }, 1500);
  }

  function closeSuccessModal() {
    const overlay = document.getElementById('gsaaSuccessModal');
    if (overlay) overlay.style.display = 'none';
  }

  function printReceipt(receiptHTML) {
    const win = window.open('', '_blank');
    win.document.write(`
      <html>
      <head>
        <title>GSAA Payment Receipt</title>
        <style>
          body { font-family: 'Inter', sans-serif; padding: 2rem; color: #334155; }
          .receipt { border: 1px solid #e2e8f0; padding: 2rem; border-radius: 8px; max-width: 500px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #E5B84C; padding-bottom: 1rem; margin-bottom: 1.5rem; }
          .row { display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-size: 0.9rem; }
          .row span:first-child { color: #64748b; }
          .row span:last-child { font-weight: bold; }
          .footer { text-align: center; font-size: 0.75rem; color: #94a3b8; margin-top: 2rem; border-top: 1px solid #f1f5f9; padding-top: 1rem; }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <h2 style="margin:0;font-family:'Playfair Display',serif">GSAA Receipt</h2>
            <small style="color:#64748b">Ghana Sociological & Anthropological Association</small>
          </div>
          ${receiptHTML}
          <div class="footer">
            Thank you for supporting the GSAA academic community.<br>
            Secretariat &copy; ${new Date().getFullYear()} GSAA. All rights reserved.
          </div>
        </div>
        <script>window.print();</script>
      </body>
      </html>
    `);
    win.document.close();
  }

  /* ─── FORM SUBMISSION INTERCEPTORS ─── */
  function initFormInterceptors() {
    const mForm = document.getElementById('memberForm');
    if (mForm) {
      mForm.addEventListener('submit', e => {
        e.preventDefault();
        if (validateForm(mForm)) {
          const title = mForm.querySelector('select[name="title"]')?.value || '';
          const firstName = mForm.querySelector('input[name="firstName"]')?.value || '';
          const lastName = mForm.querySelector('input[name="lastName"]')?.value || '';
          const email = mForm.querySelector('input[name="email"]')?.value || '';
          const institution = mForm.querySelector('input[name="institution"]')?.value || '';
          const role = mForm.querySelector('input[name="role"]')?.value || 'Member';
          const discipline = mForm.querySelector('select[name="discipline"]')?.value || '';
          
          const sel = document.getElementById('memberTypeSelect');
          const tier = sel ? sel.options[sel.selectedIndex].text.split(' - ')[0] : 'Academic Member';
          const tierVal = sel ? sel.value : 'academic';
          
          let amount = 'GHS 200';
          if (tierVal === 'graduate-student') amount = 'GHS 100';
          else if (tierVal === 'non-academic') amount = 'GHS 300';
          else if (tierVal === 'honorary') amount = 'GHS 400';
          else if (tierVal === 'external') amount = 'USD 50';
          
          const receiptHTML = `
            <div class="gsaa-receipt-invoice">
              <div class="gsaa-receipt-header">
                <span>INVOICE RECEIPT</span>
                <span>#GSAA-IN-${Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div class="gsaa-receipt-row">
                <span>Applicant</span>
                <span>${title} ${firstName} ${lastName}</span>
              </div>
              <div class="gsaa-receipt-row">
                <span>Email Address</span>
                <span>${email}</span>
              </div>
              <div class="gsaa-receipt-row">
                <span>Membership Tier</span>
                <span>${tier}</span>
              </div>
              <div class="gsaa-receipt-row">
                <span>Status</span>
                <span style="color:#e5b84c;font-weight:700">Dues Unpaid</span>
              </div>
              <div class="gsaa-receipt-row" style="border-top:1px dashed rgba(0,0,0,0.1);padding-top:0.5rem;margin-top:0.5rem;font-weight:bold">
                <span>Fee Amount</span>
                <span>${amount}</span>
              </div>
            </div>
          `;
          
          // Save details in localStorage
          const pendingUser = {
            title,
            firstName,
            lastName,
            email,
            institution,
            role,
            discipline,
            tier,
            amount,
            status: 'pending_payment'
          };
          localStorage.setItem('gsaa_pending_user', JSON.stringify(pendingUser));
          
          showSuccessModal(
            'Application Received',
            `Thank you, ${firstName}! Your GSAA membership application has been registered. To activate your credentials and set up your portal password, please proceed to pay your dues.`,
            receiptHTML
          );
          
          // Show Pay button, hide standard close button initially
          const payBtn = document.getElementById('gsaaPayDuesBtn');
          if (payBtn) {
            payBtn.style.display = 'block';
            payBtn.onclick = () => {
              openCheckout(amount, email, `${firstName} ${lastName}`);
            };
          }
          const closeBtn = document.getElementById('gsaaCloseModalBtn');
          if (closeBtn) closeBtn.style.display = 'none'; // force payment before close
          
          mForm.reset();
        } else {
          showToast('Please correct the highlighted validation errors.', 'error');
        }
      });
    }

    const cForm = document.getElementById('contactForm');
    if (cForm) {
      cForm.addEventListener('submit', e => {
        e.preventDefault();
        if (validateForm(cForm)) {
          const name = document.getElementById('contactName')?.value || 'Inquirer';
          const email = document.getElementById('contactEmail')?.value || '';
          
          showSuccessModal(
            'Message Dispatched',
            `Thank you, ${name}. Your message has been routed to the GSAA secretariat. A copy of this confirmation has been sent to ${email}. We will respond to your inquiry within 48 hours.`
          );
          // For contact, make sure close is visible, pay is hidden
          const payBtn = document.getElementById('gsaaPayDuesBtn');
          if (payBtn) payBtn.style.display = 'none';
          const closeBtn = document.getElementById('gsaaCloseModalBtn');
          if (closeBtn) {
            closeBtn.style.display = 'block';
            closeBtn.textContent = 'Close Window';
            closeBtn.onclick = () => closeSuccessModal();
          }
          cForm.reset();
        } else {
          showToast('Please fill out all required fields.', 'error');
        }
      });
    }
  }

  /* ─── PAYSTACK CHECKOUT OVERLAY LOGIC ─── */
  let currentCheckoutData = {};

  function openCheckout(amount, email, name) {
    const modal = document.getElementById('paystackModal');
    if (!modal) return;
    
    currentCheckoutData = { amount, email, name };
    
    document.getElementById('paystackEmail').textContent = email;
    document.getElementById('paystackAmount').textContent = amount;
    
    // Reset modal state
    document.getElementById('paystackMainFlow').style.display = 'block';
    document.getElementById('paystackLoader').style.display = 'none';
    document.getElementById('paystackSuccess').style.display = 'none';
    
    modal.style.display = 'flex';
  }

  function closeCheckout() {
    const modal = document.getElementById('paystackModal');
    if (modal) modal.style.display = 'none';
  }

  function setPayMethod(method) {
    const momoBtn = document.getElementById('paystackMomoBtn');
    const cardBtn = document.getElementById('paystackCardBtn');
    const momoForm = document.getElementById('paystackMomoForm');
    const cardForm = document.getElementById('paystackCardForm');
    
    if (method === 'momo') {
      momoBtn.classList.add('active');
      cardBtn.classList.remove('active');
      momoForm.style.display = 'block';
      cardForm.style.display = 'none';
    } else {
      momoBtn.classList.remove('active');
      cardBtn.classList.add('active');
      momoForm.style.display = 'none';
      cardForm.style.display = 'block';
    }
  }

  function processCheckoutPayment() {
    const isMomo = document.getElementById('paystackMomoBtn').classList.contains('active');
    if (isMomo) {
      const phone = document.getElementById('paystackPhone').value.trim();
      if (!phone) {
        showToast('Please enter your Mobile Money phone number.', 'error');
        return;
      }
    }
    
    document.getElementById('paystackMainFlow').style.display = 'none';
    document.getElementById('paystackLoader').style.display = 'flex';
    document.getElementById('paystackLoaderText').textContent = isMomo 
      ? 'Sending Mobile Money payment authorization prompt...' 
      : 'Authorizing card payment with bank secure portal...';
      
    setTimeout(() => {
      document.getElementById('paystackLoaderText').textContent = 'Confirming transaction authorization code...';
      
      setTimeout(() => {
        document.getElementById('paystackLoader').style.display = 'none';
        document.getElementById('paystackSuccess').style.display = 'flex';
        document.getElementById('paystackDuesPaid').textContent = currentCheckoutData.amount;
        
        showToast('Dues Paid Successfully!', 'success');
      }, 1500);
    }, 2000);
  }

  function completeCheckout() {
    closeCheckout();
    
    // Hide standard GSAA success layout
    document.getElementById('gsaaModalSuccess').style.display = 'none';
    
    // Show Password setup
    document.getElementById('gsaaModalPasswordSetup').style.display = 'block';
  }

  function savePortalPassword(event) {
    event.preventDefault();
    const p1 = document.getElementById('setupPassword').value;
    const p2 = document.getElementById('setupConfirmPassword').value;
    
    if (p1.length < 6) {
      showToast('Password must be at least 6 characters long.', 'error');
      return;
    }
    if (p1 !== p2) {
      showToast('Passwords do not match. Please verify.', 'error');
      return;
    }
    
    const pendingDataStr = localStorage.getItem('gsaa_pending_user');
    if (!pendingDataStr) {
      showToast('Error: No registration session found.', 'error');
      return;
    }
    
    const pendingData = JSON.parse(pendingDataStr);
    pendingData.password = p1;
    pendingData.status = 'active'; // Account activated!
    pendingData.memberId = `GSAA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    pendingData.joinedDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    
    // Save to localStorage under user's email
    localStorage.setItem(`gsaa_user_${pendingData.email.toLowerCase().trim()}`, JSON.stringify(pendingData));
    localStorage.removeItem('gsaa_pending_user');
    
    // Switch GSAA Success modal state to final completion
    document.getElementById('gsaaModalPasswordSetup').style.display = 'none';
    document.getElementById('gsaaModalSuccess').style.display = 'block';
    
    // Re-render success message
    document.getElementById('gsaaModalTitle').textContent = 'Account Activated!';
    document.getElementById('gsaaModalMessage').innerHTML = `
      Welcome, ${pendingData.title || ''} ${pendingData.firstName} ${pendingData.lastName}!<br>
      Your credentials have been generated. You can now log into the GSAA Member Portal using your email: <strong>${pendingData.email}</strong>.
    `;
    
    // Change actions buttons
    const payBtn = document.getElementById('gsaaPayDuesBtn');
    if (payBtn) payBtn.style.display = 'none';
    
    const closeBtn = document.getElementById('gsaaCloseModalBtn');
    if (closeBtn) {
      closeBtn.style.display = 'block';
      closeBtn.textContent = 'Proceed to Member Login';
      closeBtn.onclick = () => {
        closeSuccessModal();
        window.location.href = 'portal.html';
      };
    }
  }

  function initLeaderCardModals() {
    const cards = document.querySelectorAll('.leader-card, .profile-card, .institution-member');
    if (!cards.length) return;

    const modalOverlay = document.getElementById('leaderProfileModal');
    const lightboxOverlay = document.getElementById('imageLightboxModal');
    if (!modalOverlay || !lightboxOverlay) return;

    const closeBtn = document.getElementById('leaderModalCloseBtn');
    const zoomBtn = document.getElementById('leaderModalZoomBtn');
    const photoContainer = document.getElementById('leaderModalPhotoContainer');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

    let currentPhotoSrc = '';
    let currentLeaderName = '';

    const RICH_PROFILES = {
      'rosemond-hiadzi': {
        name: 'Dr. Rosemond Akpene Hiadzi',
        role: 'Senior Lecturer in Medical Sociology & Anthropology',
        institution: 'University of Ghana, Legon · Department of Sociology',
        badge: 'GSAA Representative · UG',
        photo: 'images/leaders/rosemond-hiadzi.jpg',
        fallback: 'RH',
        tabs: [
          {
            id: 'bio',
            label: 'Overview Bio',
            content: `
              <div class="profile-bio-paragraph">
                <strong>Dr. Rosemond Akpene Hiadzi</strong> is a Senior Lecturer in the Department of Sociology at the University of Ghana, Legon. Trained in medical sociology and anthropology, her research lies at the intersection of medical sociology, reproductive health, and the sociology of family life, with a particular focus on how social and cultural contexts shape reproductive experiences, health-seeking behaviour, and family formation in Ghana and across Africa. Her work has examined infertility, assisted reproductive technologies, surrogacy, male infertility, fertility awareness, and the psychosocial and ethical dimensions of reproductive care.
              </div>
              <div class="profile-bio-paragraph">
                Using predominantly qualitative and community-engaged approaches, Dr. Hiadzi works closely with individuals, families, healthcare providers, and policymakers to generate evidence that informs practice, policy, and public understanding. Her research has been published in leading international journals, including <em>PLOS ONE</em>, <em>Heliyon</em>, <em>Reproductive Health</em>, and the <em>African Journal of Reproductive Health</em>, among others.
              </div>
              <div class="profile-bio-paragraph">
                Beyond research, she is a Queen Elizabeth Scholar (QES) at Concordia University, Canada, an Erasmus+ Mobility Scholar at the University of Sheffield, UK, and has served as Guest Lecturer at the University of Zurich, Switzerland, Visiting Lecturer at the University of York, UK, and Guest Lecturer at the University of Ghana Law School.
              </div>
              <div class="journal-pill-list" style="margin-top:1.25rem">
                <a href="https://scholar.google.com/citations?user=oz_hr28AAAAJ&hl=en&oe=GB&oi=ao" target="_blank" rel="noopener" class="journal-pill" style="background:var(--green-deep); color:var(--gold); text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem; padding:0.4rem 0.85rem; border-radius:20px; font-weight:600; font-size:0.8rem">Google Scholar Profile &rarr;</a>
                <a href="https://www.linkedin.com/in/rosemond-akpene-hiadzi-ph-d-931811b1/" target="_blank" rel="noopener" class="journal-pill" style="background:#0a66c2; color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem; padding:0.4rem 0.85rem; border-radius:20px; font-weight:600; font-size:0.8rem">LinkedIn Profile &rarr;</a>
              </div>
            `
          },
          {
            id: 'research',
            label: 'Research & Funding',
            content: `
              <div class="profile-section-heading">Major Research Grants & Projects</div>
              <div class="profile-list-grid" style="margin-bottom:1.5rem">
                <div class="profile-item-card" style="border-left:3px solid var(--gold)">
                  <div class="profile-item-title">WHO & University of Sheffield Funded Study (2022–2026)</div>
                  <div class="profile-item-desc"><strong>Co-Principal Investigator</strong>: <em>“Men and infertility in Ghana: Beliefs, Perceptions and Perspectives on the (non) participation of men in fertility care”</em> (&pound;17,147.97). Research funded jointly by the World Health Organization (WHO) and the University of Sheffield, UK.</div>
                </div>
              </div>
              <div class="profile-section-heading">Primary Specializations</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Medical Sociology & Anthropology</div>
                  <div class="profile-item-desc">Socio-cultural dynamics of healthcare access, health-seeking trajectories, and patient experiences in West Africa.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Reproductive Health & Family Life</div>
                  <div class="profile-item-desc">Infertility, assisted reproductive technologies (ART), surrogacy, male infertility, and fertility awareness in Ghana and Africa.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Ethical & Psychosocial Care</div>
                  <div class="profile-item-desc">Psychosocial impact of reproductive challenges and ethical dimensions surrounding modern reproductive care adoption.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Qualitative & Community-Engaged Methods</div>
                  <div class="profile-item-desc">Qualitative, ethnographic, and community-based participatory research connecting families, healthcare providers, and policymakers.</div>
                </div>
              </div>
            `
          },
          {
            id: 'achievements',
            label: 'Scholarships & Visiting Appointments',
            content: `
              <div class="profile-section-heading">Fellowships, Visiting Posts & International Awards</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Queen Elizabeth Scholar (QES)</div>
                  <div class="profile-item-desc">Concordia University, Canada — Awarded prestigious Queen Elizabeth Scholarship for advanced research in global health and social development.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Erasmus+ Mobility Scholar</div>
                  <div class="profile-item-desc">University of Sheffield, UK — Ghana-Sheffield Mobility Scholarship supporting collaborative research and academic exchange.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Guest Lecturer, University of Zurich</div>
                  <div class="profile-item-desc">Invited guest lecturer at University of Zurich, Switzerland, delivering specialist lectures in medical anthropology and global health.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Visiting Lecturer, University of York</div>
                  <div class="profile-item-desc">University of York, UK — Visiting academic lecturing on reproductive technologies, gender, and African family systems.</div>
                </div>
              </div>
            `
          },
          {
            id: 'publications',
            label: 'Publications & Journals',
            content: `
              <div class="profile-section-heading">Featured Peer-Reviewed Journals</div>
              <p class="profile-item-desc">Dr. Hiadzi's research has been published in leading international journals advancing global and regional social science knowledge:</p>
              <div class="journal-pill-list">
                <span class="journal-pill">PLOS ONE</span>
                <span class="journal-pill">Heliyon</span>
                <span class="journal-pill">Reproductive Health</span>
                <span class="journal-pill">African Journal of Reproductive Health</span>
              </div>
              <div class="profile-section-heading">Core Publication Themes</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Infertility Stigma & Surrogacy</div>
                  <div class="profile-item-desc">Sociological insights into assisted reproductive technologies, surrogacy ethics, and social perceptions in Ghana.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Male Infertility & Male Participation</div>
                  <div class="profile-item-desc">Investigating male reproductive experiences, health-seeking behaviors, and male non-participation in clinical fertility care.</div>
                </div>
              </div>
            `
          },
          {
            id: 'associations',
            label: 'Associations & Extension Services',
            content: `
              <div class="profile-section-heading">Public Policy & Technical Advisory Roles</div>
              <div class="profile-list-grid" style="margin-bottom:1.5rem">
                <div class="profile-item-card">
                  <div class="profile-item-title">FDA Technical Advisory Committee (TAC-CT)</div>
                  <div class="profile-item-desc">Serving as Social Scientist on the Food and Drugs Authority (FDA) Technical Advisory Committee for Clinical Trials in Ghana.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">University of Ghana Law School</div>
                  <div class="profile-item-desc">Guest Lecturer providing interdisciplinary lectures on medical sociology, reproductive ethics, and bio-law.</div>
                </div>
              </div>
              <div class="profile-section-heading">Membership of Professional Associations</div>
              <div class="journal-pill-list">
                <span class="journal-pill">International Sociological Association (ISA RC15 - Sociology of Health)</span>
                <span class="journal-pill">Fertility Society of Ghana (FERSOG)</span>
                <span class="journal-pill">Ghana Sociological & Anthropological Association (GSAA)</span>
              </div>
            `
          }
        ]
      },
      'peace-tetteh': {
        name: 'Asso. Prof. Peace Mamle Tetteh',
        role: 'Head of Department · Associate Professor of Sociology',
        institution: 'University of Ghana, Legon · Department of Sociology',
        badge: 'Head of Department · UG',
        photo: 'images/leaders/peace-tetteh.jpg',
        fallback: 'PT',
        tabs: [
          {
            id: 'bio',
            label: 'Overview Bio',
            content: `
              <div class="profile-bio-paragraph">
                <strong>Peace Mamle Yoko Tetteh</strong> is the Head of the Department of Sociology at the University of Ghana, Legon. She is an Associate Professor of Sociology with specialization in Gender and Global Childhoods Studies. Her fortes also include Advanced Research Methods, Ethics, Social Policy Studies, Community Impact Assessments, and Migration. Her research in childhood studies has focused on early childhood development and education (ECDE), child labor (especially domestic labor), children's rights, child sexual abuse, children's play cultures, child marriage, child rights monitoring, innovative methods in childhood research, and constructions of childhood in contemporary society.
              </div>
              <div class="profile-bio-paragraph">
                She is a passionate educator, researcher, and advocate for gender equality and social justice. With more than two decades of experience in academia, she has dedicated her career to shaping the next generation of scholars, mentoring thousands of students, and conducting meaningful research on gender, childhood studies, and social policy. Prof. Tetteh’s work explores real-world challenges from cumulative impact and sustainability assessments to reproductive health, child rights, and migration.
              </div>
              <div class="profile-bio-paragraph">
                She is a Commonwealth Scholar who has collaborated with leading researchers from the UK, USA, Germany, and Switzerland, producing impactful studies on children’s education, child protection, social policies, makerspaces, and how childhood is shaped in different cultures.
              </div>
              <div class="profile-bio-paragraph">
                Beyond academia, she has worked closely with organizations such as UNICEF, PLAN International, and the International Organization for Migration (IOM), providing expert guidance on gender, social protection, and community development. She has trained government agencies including CHRAJ and local government bodies, and serves as a facilitator for the Office of Research, Innovation and Development (RID) at the University of Ghana.
              </div>
              <div class="profile-bio-paragraph">
                Prof. Tetteh holds high-level advisory positions, including Ethics Advisor for the EU-AU Partnership’s StEPPFoS Project, Chair of the Ethics Advisory Board for the ESRC Modern Marronage Project, and Member of the Institutional Ethics Review Board at Noguchi Memorial Institute for Medical Research (NMIMR). Currently, she serves as a member of the Board of GOIL-PLC, Chair of the Subsidiary Board of Go-Bitumen, and member of the Audit and Risk Committees of GOIL-PLC.
              </div>
            `
          },
          {
            id: 'research',
            label: 'Research & Specializations',
            content: `
              <div class="profile-section-heading">Academic Teaching & Mentorship</div>
              <p class="profile-item-desc">Over 20+ years at the University of Ghana, Prof. Tetteh has taught over 15 undergraduate and 5 postgraduate courses. She has supervised 12 PhD candidates, 10 MPhil candidates, and over 100 undergraduate dissertations, while serving as external examiner across major Ghanaian universities.</p>
              
              <div class="profile-section-heading">Primary Research Specializations</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Sociology of Childhoods</div>
                  <div class="profile-item-desc">Early childhood education, child domestic labor, rights monitoring, play cultures, and child protection frameworks.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Gender & Social Policy Studies</div>
                  <div class="profile-item-desc">Gender equality, social protection programs, community impact assessments, and gender dynamics in extractive industries.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Sexual & Reproductive Health</div>
                  <div class="profile-item-desc">Adolescent reproductive health, health-seeking behaviors, assisted reproductive technology adoption, and disease screening.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Research Ethics & Public Policy</div>
                  <div class="profile-item-desc">Advanced qualitative methods, ethical clearance frameworks, participatory child-focused methodologies, and social governance.</div>
                </div>
              </div>

              <div class="profile-section-heading">Major Grants & Research Projects</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">British Academy DEVI Project (281,055 GBP)</div>
                  <div class="profile-item-desc">Development and Education in the Vernacular for Infants in rural West Africa (2019–2023), with K. Wells and E. Alber.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Washington University in St. Louis Grant ($50,000)</div>
                  <div class="profile-item-desc">Predictors of sexual risk behaviors in Ghanaian adolescent girls from mother-daughter perspectives (2025–2026).</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">British Academy GCRF Grant (10,000 GBP)</div>
                  <div class="profile-item-desc">Searching for the everyday in African Childhoods (2019–2020), with A. Twum-Danso and G.Y. Oduro.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Bullying Victimization Research (BVIG)</div>
                  <div class="profile-item-desc">Ongoing evidence-based research project creating safe, anti-bullying school environments in Ghana aligned with SDGs 3, 4, and 5.</div>
                </div>
              </div>
            `
          },
          {
            id: 'achievements',
            label: 'Achievements & Leadership',
            content: `
              <div class="profile-section-heading">Key Institutional Leadership Roles</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Head of Department, Sociology (UG)</div>
                  <div class="profile-item-desc">Providing vision, academic governance, and faculty leadership for the Department of Sociology at the University of Ghana.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Ethics Advisory Leadership</div>
                  <div class="profile-item-desc">Ethics Advisor for EU-AU StEPPFoS Project, Chair of ESRC Modern Marronage Ethics Board, and Board Member at NMIMR.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Corporate & Governance Directorships</div>
                  <div class="profile-item-desc">Board Member of GOIL-PLC, Chair of Go-Bitumen Subsidiary Board, and former Presiding Member of Lower Manya Krobo Municipal Assembly.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Commonwealth Scholar & Thought Leader</div>
                  <div class="profile-item-desc">International scholar driving child protection, gender equity policies, and ethics training for government agencies and CSOs.</div>
                </div>
              </div>
            `
          },
          {
            id: 'publications',
            label: 'Publications & Documentary',
            content: `
              <div class="profile-section-heading">International Documentary Film</div>
              <div class="profile-item-card" style="margin-bottom:1rem">
                <div class="profile-item-title">'DEVI': Weaving Knowledge (2022)</div>
                <div class="profile-item-desc">Featured in the British Academy Summer Showcase (UK) and featured in Tilda Swinton's documentary 'The Hexagonal Hive and a Mouse in a Maze'. Screened across UK, Ghana, Togo, and Senegal exploring informal early-years learning.</div>
              </div>

              <div class="profile-section-heading">Featured Peer-Reviewed Journals</div>
              <div class="journal-pill-list">
                <span class="journal-pill">PLOS ONE</span>
                <span class="journal-pill">Journal of the British Academy</span>
                <span class="journal-pill">Child Abuse Review</span>
                <span class="journal-pill">Children and Youth Services Review</span>
                <span class="journal-pill">Children's Geographies</span>
                <span class="journal-pill">Ghana Social Science Journal</span>
                <span class="journal-pill">Ghana Medical Journal</span>
              </div>

              <div class="profile-section-heading">Book Chapters & Selected Articles</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Handbook on Childhood & Global Development</div>
                  <div class="profile-item-desc">'Children's Play Cultures' (Routledge, 2023, pp 557-568).</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Introduction to Sociology in Ghana</div>
                  <div class="profile-item-desc">'Social Groups and Organizations' in Social Change in a Global Era (Sub-Saharan Publishers, 2023).</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Assisted Reproductive Technologies in Ghana</div>
                  <div class="profile-item-desc">Co-authored landmark studies on ART negotiation and prostate cancer screening in PLOS ONE and Ghana Social Science Journal.</div>
                </div>
              </div>
            `
          },
          {
            id: 'conferences',
            label: 'Conferences & Extension Services',
            content: `
              <div class="profile-section-heading">Professional Memberships</div>
              <div class="journal-pill-list" style="margin-bottom:1rem">
                <span class="journal-pill">International Sociological Association (ISA RC53)</span>
                <span class="journal-pill">British Sociological Association (BSA)</span>
                <span class="journal-pill">Ghana Sociological & Anthropological Association (GSAA)</span>
                <span class="journal-pill">International Academy of African Business Development (IAABD)</span>
              </div>

              <div class="profile-section-heading">Keynote Presentations & Policy Dialogues</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">British Sociological Association (BSA)</div>
                  <div class="profile-item-desc">Presented papers on Child Rights Monitoring and Vernacularizing SRHR at BSA 70th Anniversary and 2024 Virtual Conferences.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Rutgers University Childism Institute</div>
                  <div class="profile-item-desc">Panelist on 'Reimagining Childhoods in Low Resource Contexts: Transnational Colloquium Series'.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-desc">National facilitator training human rights officials, MMDAs, CSOs, and NGOs on Child Rights Monitoring.</div>
                </div>
              </div>
            `
          }
        ]
      },
      'steve-tonah': {
        name: 'Prof. Steve Tonah',
        role: 'Immediate Past Convenor · Professor of Sociology',
        institution: 'University of Ghana, Legon · Department of Sociology',
        badge: 'Immediate Past Convenor · GSAA',
        photo: 'images/leaders/steve-tonah.jpg',
        fallback: 'ST',
        tabs: [
          {
            id: 'bio',
            label: 'Overview Bio',
            content: `
              <div class="profile-bio-paragraph">
                <strong>Steve Tonah</strong> is Professor of Sociology at the University of Ghana, Legon. He holds a BA degree in Economics and Sociology and a Dip. Ed. from the University of Cape Coast (1982). He earned his MA and PhD degrees in Development Sociology from the University of Bielefeld, Germany (1993). He also studied anthropology at the Pennsylvania State University at State College, USA.
              </div>
              <div class="profile-bio-paragraph">
                His areas of specialisation include migration and displacement in West Africa, chieftaincy and traditional rule, inter-ethnic relations, farmer-herder relations, and Fulani pastoralism. He is currently researching the Tabom Afro-Brazilian returnees of Accra and the memorialisation of slavery in Ghana and Brazil.
              </div>
              <div class="profile-bio-paragraph">
                Prof. Tonah has written and edited 14 academic monographs and more than 180 conference papers, journal articles, book chapters, workshop/consultancy reports, and encyclopaedia entries. He is a fellow of the Ghana Academy of Arts and Sciences and the Alexander von Humboldt Foundation of Germany.
              </div>
            `
          },
          {
            id: 'research',
            label: 'Research Specializations',
            content: `
              <div class="profile-section-heading">Core Areas of Specialisation</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Migration & Displacement</div>
                  <div class="profile-item-desc">Cross-border mobility, forced displacement, and regional migration dynamics across West Africa.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Chieftaincy & Traditional Governance</div>
                  <div class="profile-item-desc">Traditional political authority, chieftaincy disputes, and institutional governance in contemporary Ghana.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Farmer-Herder Relations & Pastoralism</div>
                  <div class="profile-item-desc">Conflict resolution, resource access, inter-ethnic relations, and Fulani pastoralist livelihood strategies.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Tabom Afro-Brazilian Returnees & Slavery Memorialisation</div>
                  <div class="profile-item-desc">Ongoing research into the Tabom community of Accra, historical memory, and transatlantic slavery memorialisation in Ghana and Brazil.</div>
                </div>
              </div>
            `
          },
          {
            id: 'achievements',
            label: 'Achievements & Fellowships',
            content: `
              <div class="profile-section-heading">Honours, Fellowships & Leadership</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Fellow, Ghana Academy of Arts and Sciences</div>
                  <div class="profile-item-desc">Elected fellow of Ghana's premier learned society recognizing outstanding scholarly contributions.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Fellow, Alexander von Humboldt Foundation</div>
                  <div class="profile-item-desc">Prestigious German research fellowship awarded for academic excellence in social sciences.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Immediate Past Convenor, GSAA</div>
                  <div class="profile-item-desc">Founding convenor who steered the re-launch, expansion, and institutional framework of the association.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Professor of Sociology, University of Ghana</div>
                  <div class="profile-item-desc">Senior academic leader advancing sociology, development studies, and graduate training at Legon.</div>
                </div>
              </div>
            `
          },
          {
            id: 'publications',
            label: 'Publications & Academic Output',
            content: `
              <div class="profile-section-heading">Scholarship Summary</div>
              <p class="profile-item-desc">Prof. Tonah has produced an extensive body of academic research spanning over four decades:</p>
              <div class="journal-pill-list" style="margin-bottom:1rem">
                <span class="journal-pill">14 Academic Monographs</span>
                <span class="journal-pill">180+ Peer-Reviewed Articles & Chapters</span>
                <span class="journal-pill">Conference Papers & Reports</span>
              </div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Development Sociology & Pastoralism</div>
                  <div class="profile-item-desc">Pioneering books and monographs on pastoralism, Fulani migration, and rural development in Ghana.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Chieftaincy in Ghana</div>
                  <div class="profile-item-desc">Authoritative studies on chieftaincy, land disputes, and traditional authority in West Africa.</div>
                </div>
              </div>
            `
          }
        ]
      },
      'georgina-oduro': {
        name: 'Prof. Georgina Yaa Oduro',
        role: 'Head of Department · UCC | Associate Professor',
        institution: 'University of Cape Coast · Department of Sociology & Anthropology',
        badge: 'HOD & Associate Professor · UCC',
        photo: 'images/leaders/gina-oduro.jpg',
        fallback: 'GO',
        tabs: [
          {
            id: 'bio',
            label: 'Overview Bio',
            content: `
              <div class="profile-bio-paragraph">
                <strong>Prof. Georgina Yaa Oduro</strong> is an Associate Professor and the current Head of the Department of Sociology and Anthropology at the University of Cape Coast (UCC), Ghana. She is the immediate past Director (2019–2023) of the Centre for Gender Research, Advocacy and Documentation (CEGRAD) at UCC, and served as Hall Warden of Oguaa Hall in 2024 overseeing welfare support for over 1,300 students.
              </div>
              <div class="profile-bio-paragraph">
                She earned her BA degree in Sociology with Political Science from the University of Ghana, Legon, a Master's degree from the University of Westminster, London, and her PhD from the University of Cambridge, UK. Her doctoral research examined gender relations, sexuality, and HIV/AIDS education from a youth culture perspective.
              </div>
              <div class="profile-bio-paragraph">
                Prof. Oduro's scholarly work spans gender dynamics, violence, sexuality, youth cultures, marginalized populations, popular culture, race and ethnicity, and blue economy heritage. She has served as Lead and Co-Investigator on major international research initiatives including UKRI/GCRF One Ocean Hub, CODESRIA MRI, and Mastercard Foundation creative industry projects.
              </div>
            `
          },
          {
            id: 'research',
            label: 'Research & Grants',
            content: `
              <div class="profile-section-heading">Specializations & Major Research Projects</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">UKRI/GCRF One Ocean Hub (OOH)</div>
                  <div class="profile-item-desc">Co-investigator leading Ghana Research Package 5 on critical perspectives of the blue economy, tangible/intangible ocean heritage, and coastal livelihoods.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Mastercard Foundation & ICRW Project (2024–2026)</div>
                  <div class="profile-item-desc">Country Lead on multi-country study examining Gender and Creative Industries in African countries.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">CODESRIA Meaning Making Research (MRI)</div>
                  <div class="profile-item-desc">Principal Investigator exploring lived experiences of mixed-race individuals across Ghana and Canada.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Trans-national Trade & Gender (2024–2026)</div>
                  <div class="profile-item-desc">Co-researcher analyzing experiences of women in cross-border trade with Laval University and University of Yaounde.</div>
                </div>
              </div>
            `
          },
          {
            id: 'achievements',
            label: 'Achievements & Fellowships',
            content: `
              <div class="profile-section-heading">Fellowships, Awards & Institutional Leadership</div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Harvard Takemi Fellowship (2016–2017)</div>
                  <div class="profile-item-desc">Takemi Fellow in International Health at Harvard T.H. Chan School of Public Health, conducting research on child prostitution.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Martha Farrell Fellowship (2020/2021)</div>
                  <div class="profile-item-desc">Awarded by ACU London for excellence in Gender Equality and Anti-Sexual Harassment initiatives.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">MASHAV Fellowship (2023)</div>
                  <div class="profile-item-desc">Administered by Israel Foreign Affairs for international social leadership and development.</div>
                </div>
                <div class="profile-item-card">
                  <div class="profile-item-title">Director of CEGRAD (2019–2023)</div>
                  <div class="profile-item-desc">Pioneered gender advocacy, research policy, and institutional outreach at UCC's flagship gender center.</div>
                </div>
              </div>
            `
          },
          {
            id: 'publications',
            label: 'Publications & Handbooks',
            content: `
              <div class="profile-section-heading">Selected Scholarly Contributions</div>
              <p class="profile-item-desc">Contributor to authoritative international handbooks by Palgrave and Routledge:</p>
              <div class="journal-pill-list" style="margin-bottom:1rem">
                <span class="journal-pill">Palgrave Blue Heritage (2022)</span>
                <span class="journal-pill">Palgrave Sexuality Education (2017)</span>
                <span class="journal-pill">Routledge Sex Industry Research (2019)</span>
                <span class="journal-pill">Routledge Queer African Studies (2020)</span>
              </div>
              <div class="profile-list-grid">
                <div class="profile-item-card">
                  <div class="profile-item-title">Journal of Gender-Based Violence</div>
                  <div class="profile-item-desc">Editorial Board Member for the journal published by University of Bristol Press, UK.</div>
                </div>
              </div>
            `
          }
        ]
      }
    };

    const openLeaderModal = (card) => {
      const img = card.querySelector('img');
      const fallback = card.querySelector('.leader-photo-fallback, .profile-photo-fallback, .about-photo-fallback, .member-photo-fallback');
      
      const roleEl = card.querySelector('.leader-role, .profile-role, .member-role');
      const nameEl = card.querySelector('.leader-name, .profile-name, .member-name');
      const bioEl = card.querySelector('.leader-bio, .profile-bio');
      
      const instCard = card.closest('.institution-card');
      const instNameEl = instCard ? instCard.querySelector('.institution-name') : null;

      const name = nameEl ? nameEl.textContent.trim() : 'GSAA Executive Member';
      const role = roleEl ? roleEl.textContent.trim() : 'Leadership Committee';
      const inst = instNameEl ? instNameEl.textContent.trim() : '';

      const profileKey = card.getAttribute('data-profile') || (name.toLowerCase().includes('hiadzi') ? 'rosemond-hiadzi' : (name.toLowerCase().includes('tetteh') ? 'peace-tetteh' : (name.toLowerCase().includes('tonah') ? 'steve-tonah' : (name.toLowerCase().includes('oduro') ? 'georgina-oduro' : null))));
      const richProfile = profileKey ? RICH_PROFILES[profileKey] : null;

      currentLeaderName = richProfile ? richProfile.name : name;
      
      const modalImg = document.getElementById('leaderModalImg');
      const modalFallback = document.getElementById('leaderModalFallback');

      if (img && img.complete && img.naturalWidth > 0 && img.style.display !== 'none') {
        currentPhotoSrc = img.src;
        modalImg.src = img.src;
        modalImg.alt = currentLeaderName;
        modalImg.style.display = 'block';
        modalFallback.style.display = 'none';
        zoomBtn.style.display = 'inline-block';
      } else if (richProfile && richProfile.photo) {
        currentPhotoSrc = richProfile.photo;
        modalImg.src = richProfile.photo;
        modalImg.alt = richProfile.name;
        modalImg.style.display = 'block';
        modalFallback.style.display = 'none';
        zoomBtn.style.display = 'inline-block';
      } else {
        currentPhotoSrc = '';
        modalImg.style.display = 'none';
        modalFallback.textContent = fallback ? fallback.textContent.trim() : name.split(' ').map(n=>n[0]).join('').slice(0,2);
        modalFallback.style.display = 'flex';
        zoomBtn.style.display = 'none';
      }

      document.getElementById('leaderModalRole').textContent = richProfile ? richProfile.role : role;
      document.getElementById('leaderModalName').textContent = richProfile ? richProfile.name : name;
      
      const instEl = document.getElementById('leaderModalInstitution');
      const finalInst = richProfile ? richProfile.institution : inst;
      if (finalInst) {
        instEl.textContent = finalInst;
        instEl.style.display = 'block';
      } else {
        instEl.style.display = 'none';
      }

      const modalBadgeEl = document.getElementById('leaderModalBadge');
      if (modalBadgeEl && richProfile && richProfile.badge) {
        modalBadgeEl.textContent = richProfile.badge;
      } else if (modalBadgeEl) {
        modalBadgeEl.textContent = 'GSAA Leadership';
      }

      const bioContainer = document.getElementById('leaderModalBio');
      if (richProfile && richProfile.tabs && richProfile.tabs.length) {
        let tabsNavHTML = `<div class="profile-modal-tabs" id="richProfileTabs" style="margin-bottom:1rem">`;
        richProfile.tabs.forEach((tab, index) => {
          tabsNavHTML += `<button class="profile-modal-tab ${index === 0 ? 'active' : ''}" data-tab-id="${tab.id}">${tab.label}</button>`;
        });
        tabsNavHTML += `</div><div class="profile-modal-tab-body" id="richProfileTabBody" style="min-height:180px"></div>`;
        
        bioContainer.innerHTML = tabsNavHTML;

        const renderTabContent = (tabId) => {
          const tabObj = richProfile.tabs.find(t => t.id === tabId) || richProfile.tabs[0];
          const bodyEl = document.getElementById('richProfileTabBody');
          if (bodyEl) {
            bodyEl.innerHTML = tabObj.content;
          }
          const tabBtns = bioContainer.querySelectorAll('.profile-modal-tab');
          tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab-id') === tabObj.id);
          });
        };

        renderTabContent(richProfile.tabs[0].id);

        bioContainer.querySelectorAll('.profile-modal-tab').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const tabId = btn.getAttribute('data-tab-id');
            renderTabContent(tabId);
          });
        });
      } else {
        let bio = bioEl ? bioEl.textContent.trim() : '';
        if (!bio) {
          bio = `${name} serves as ${role}${inst ? ' at ' + inst : ''}, contributing to the governance, academic research, and institutional leadership of the Ghana Sociological and Anthropological Association (GSAA).`;
        }
        bioContainer.textContent = bio;
      }

      modalOverlay.classList.add('open');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLeaderModal = () => {
      modalOverlay.classList.remove('open');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const openLightbox = () => {
      if (!currentPhotoSrc) return;
      document.getElementById('lightboxImg').src = currentPhotoSrc;
      document.getElementById('lightboxCaption').textContent = currentLeaderName;
      lightboxOverlay.classList.add('open');
      lightboxOverlay.setAttribute('aria-hidden', 'false');
    };

    const closeLightbox = () => {
      lightboxOverlay.classList.remove('open');
      lightboxOverlay.setAttribute('aria-hidden', 'true');
    };

    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        openLeaderModal(card);
      });
    });

    closeBtn?.addEventListener('click', closeLeaderModal);
    modalOverlay?.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeLeaderModal();
    });

    zoomBtn?.addEventListener('click', openLightbox);
    photoContainer?.addEventListener('click', openLightbox);

    lightboxCloseBtn?.addEventListener('click', closeLightbox);
    lightboxOverlay?.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightboxOverlay.classList.contains('open')) {
          closeLightbox();
        } else if (modalOverlay.classList.contains('open')) {
          closeLeaderModal();
        }
      }
    });
  }

  return { 
    init, 
    initCounters, 
    validateForm, 
    showToast, 
    showSuccessModal, 
    closeSuccessModal,
    openCheckout,
    closeCheckout,
    setPayMethod,
    processCheckoutPayment,
    completeCheckout,
    savePortalPassword,
    initLeaderCardModals
  };
})();
