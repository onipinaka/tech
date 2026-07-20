'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './BookFormSection.module.css';

export default function BookFormSection() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') === 'laptop' ? 'laptop' : searchParams.get('service') === 'other' ? 'other' : 'printer';
  const planName = searchParams.get('plan');
  const customNotes = searchParams.get('notes');
  const defaultNotes = customNotes ? customNotes : (planName ? `Interested in the ${planName.charAt(0).toUpperCase() + planName.slice(1)} Plan.` : '');

  const [serviceType, setServiceType] = useState(initialService);
  
  // Printer specific states
  const [printerServiceRequired, setPrinterServiceRequired] = useState(planName ? 'Printer Rental' : '');

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAjaxSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formsubmit.co/ajax/viveksharma9451@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Form */}
        <div className={styles.formCol}>
          <h2 className={styles.sectionTitle}>Service Details</h2>
          <p className={styles.sectionSubtitle}>Please provide your details and select the service you need.</p>
          
          <form onSubmit={handleAjaxSubmit} className={styles.formGrid}>
            
            {/* Service Type Selection */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Service Type <span className={styles.required}>*</span></label>
              <div className={styles.radioGroup}>
                <label className={`${styles.radioLabel} ${serviceType === 'printer' ? styles.active : ''}`}>
                  <input type="radio" name="serviceType" value="printer" checked={serviceType === 'printer'} onChange={() => setServiceType('printer')} />
                  <div className={styles.radioTextWrap}>
                    <span className={styles.radioTitle}>🖨 Printer Service</span>
                    <span className={styles.radioDesc}>Rental, Repair & AMC</span>
                  </div>
                </label>
                <label className={`${styles.radioLabel} ${serviceType === 'laptop' ? styles.active : ''}`}>
                  <input type="radio" name="serviceType" value="laptop" checked={serviceType === 'laptop'} onChange={() => setServiceType('laptop')} />
                  <div className={styles.radioTextWrap}>
                    <span className={styles.radioTitle}>💻 Laptop Repair</span>
                    <span className={styles.radioDesc}>Hardware or software</span>
                  </div>
                </label>
                <label className={`${styles.radioLabel} ${serviceType === 'other' ? styles.active : ''}`}>
                  <input type="radio" name="serviceType" value="other" checked={serviceType === 'other'} onChange={() => setServiceType('other')} />
                  <div className={styles.radioTextWrap}>
                    <span className={styles.radioTitle}>📞 Other Enquiry</span>
                    <span className={styles.radioDesc}>Parts, partnerships, etc.</span>
                  </div>
                </label>
              </div>
            </div>

            {/* ── PRINTER SERVICE ── */}
            {serviceType === 'printer' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                  <input type="text" name="fullName" className={styles.input} placeholder="Enter your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company Name</label>
                  <input type="text" name="companyName" className={styles.input} placeholder="Enter company name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                  <input type="tel" name="phone" className={styles.input} placeholder="Enter phone number" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" name="email" className={styles.input} placeholder="Enter email address" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Address <span className={styles.required}>*</span></label>
                  <input type="text" name="address" className={styles.input} placeholder="Enter your complete address" required />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Printer Brand</label>
                  <input type="text" name="printerBrand" className={styles.input} placeholder="e.g., HP, Canon, Epson" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Printer Model</label>
                  <input type="text" name="printerModel" className={styles.input} placeholder="e.g., LaserJet Pro M404" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Printer Type</label>
                  <select name="printerType" className={styles.input} defaultValue="">
                    <option value="" disabled>Select printer type</option>
                    <option value="Mono Laser">Mono Laser</option>
                    <option value="Color Laser">Color Laser</option>
                    <option value="Ink Tank">Ink Tank</option>
                    <option value="Multifunction (MFP)">Multifunction (MFP)</option>
                    <option value="Dot Matrix">Dot Matrix</option>
                    <option value="Thermal">Thermal</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Service Required <span className={styles.required}>*</span></label>
                  <select name="serviceRequired"
                    className={styles.input} 
                    required 
                    value={printerServiceRequired}
                    onChange={(e) => setPrinterServiceRequired(e.target.value)}
                  >
                    <option value="" disabled>Select service needed</option>
                    <option value="Printer Rental">Printer Rental</option>
                    <option value="Printer Repair">Printer Repair</option>
                    <option value="Printer Installation">Printer Installation</option>
                    <option value="Pay Per Print">Pay Per Print</option>
                    <option value="AMC">AMC</option>
                    <option value="Cartridge Refill">Cartridge Refill</option>
                    <option value="Cartridge Replacement">Cartridge Replacement</option>
                    <option value="Toner Replacement">Toner Replacement</option>
                    <option value="Printer Setup">Printer Setup</option>
                    <option value="Network Configuration">Network Configuration</option>
                    <option value="General Maintenance">General Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {printerServiceRequired === 'Printer Repair' && (
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Issue</label>
                    <select name="printerIssue" className={styles.input} defaultValue="">
                      <option value="" disabled>Select issue</option>
                      <option value="Not Printing">Not Printing</option>
                      <option value="Paper Jam">Paper Jam</option>
                      <option value="Printer Offline">Printer Offline</option>
                      <option value="Poor Print Quality">Poor Print Quality</option>
                      <option value="Scanner Not Working">Scanner Not Working</option>
                      <option value="Toner Issue">Toner Issue</option>
                      <option value="Driver Installation">Driver Installation</option>
                      <option value="Network Issue">Network Issue</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}

                {printerServiceRequired === 'Printer Rental' && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Number of Printers</label>
                      <input type="number" name="printerCount" className={styles.input} placeholder="e.g., 5" min="1" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Monthly Print Volume</label>
                      <input type="text" name="monthlyVolume" className={styles.input} placeholder="e.g., 5000 pages" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Rental Duration</label>
                      <input type="text" name="rentalDuration" className={styles.input} placeholder="e.g., 12 Months" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Color Printing Required?</label>
                      <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><input type="radio" name="colorPrinting" value="Yes" /> Yes</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><input type="radio" name="colorPrinting" value="No" /> No</label>
                      </div>
                    </div>
                  </>
                )}

                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Visit Date</label>
                  <input type="date" name="preferredDate" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Time</label>
                  <input type="time" name="preferredTime" className={styles.input} />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Additional Notes</label>
                  <textarea name="additionalNotes" className={styles.input} placeholder="Any specific issue or request?" defaultValue={defaultNotes}></textarea>
                </div>
              </>
            )}

            {/* ── LAPTOP REPAIR ── */}
            {serviceType === 'laptop' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                  <input type="text" name="fullName" className={styles.input} placeholder="Enter your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                  <input type="tel" name="phone" className={styles.input} placeholder="Enter phone number" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" name="email" className={styles.input} placeholder="Enter email address" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Address <span className={styles.required}>*</span></label>
                  <input type="text" name="address" className={styles.input} placeholder="Enter complete address" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.label}>Laptop Brand</label>
                  <select className={styles.input} defaultValue="">
                    <option value="" disabled>Select brand</option>
                    <option value="HP">HP</option>
                    <option value="Dell">Dell</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Apple">Apple</option>
                    <option value="MSI">MSI</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Laptop Model</label>
                  <input type="text" name="laptopModel" className={styles.input} placeholder="e.g., Thinkpad T14" />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Service Required</label>
                  <select name="laptopServiceRequired" className={styles.input} defaultValue="">
                    <option value="" disabled>Select service</option>
                    <option value="Screen Replacement">Screen Replacement</option>
                    <option value="Keyboard Repair">Keyboard Repair</option>
                    <option value="Battery Replacement">Battery Replacement</option>
                    <option value="Charging Issue">Charging Issue</option>
                    <option value="Motherboard Repair">Motherboard Repair</option>
                    <option value="SSD Upgrade">SSD Upgrade</option>
                    <option value="RAM Upgrade">RAM Upgrade</option>
                    <option value="Software Installation">Software Installation</option>
                    <option value="Windows Installation">Windows Installation</option>
                    <option value="Virus Removal">Virus Removal</option>
                    <option value="Data Recovery">Data Recovery</option>
                    <option value="Laptop Cleaning">Laptop Cleaning</option>
                    <option value="Fan Replacement">Fan Replacement</option>
                    <option value="Hinge Repair">Hinge Repair</option>
                    <option value="General Diagnosis">General Diagnosis</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Is the Laptop Turning On?</label>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><input type="radio" name="laptopOn" value="Yes" /> Yes</label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><input type="radio" name="laptopOn" value="No" /> No</label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Visit Date</label>
                  <input type="date" name="preferredDate" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Preferred Time</label>
                  <input type="time" name="preferredTime" className={styles.input} />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Describe the Issue</label>
                  <textarea className={styles.input} placeholder="Explain the problem in detail..."></textarea>
                </div>
              </>
            )}

            {/* ── OTHER ENQUIRY ── */}
            {serviceType === 'other' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
                  <input type="text" name="fullName" className={styles.input} placeholder="Enter your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Company Name</label>
                  <input type="text" name="companyName" className={styles.input} placeholder="Enter company name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number <span className={styles.required}>*</span></label>
                  <input type="tel" name="phone" className={styles.input} placeholder="Enter phone number" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address <span className={styles.required}>*</span></label>
                  <input type="email" name="email" className={styles.input} placeholder="Enter email address" required />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Enquiry Type</label>
                  <select name="enquiryType" className={styles.input} defaultValue="">
                    <option value="" disabled>Select enquiry type</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Laptop Parts">Laptop Parts</option>
                    <option value="Business Partnership">Business Partnership</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Quotation">Quotation</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Subject</label>
                  <input type="text" name="subject" className={styles.input} placeholder="Enquiry subject" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Message</label>
                  <textarea className={styles.input} placeholder="Write your message here..."></textarea>
                </div>
              </>
            )}

            <div className={styles.fullWidth} style={{ marginTop: '16px' }}>
              {submitStatus === 'error' && (
                <div style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', marginBottom: '8px' }}>
                  {errorMessage}
                </div>
              )}
              {submitStatus === 'success' && (
                <div style={{ color: '#15803d', backgroundColor: '#dcfce3', padding: '12px', borderRadius: '6px', fontSize: '14px', textAlign: 'center', marginBottom: '16px', border: '1px solid #bbf7d0' }}>
                  ✅ <strong>Success!</strong> Your booking request has been sent successfully. We will get back to you shortly.
                </div>
              )}
              <button type="submit" className={styles.submitBtn} disabled={submitStatus === 'submitting' || submitStatus === 'success'}>
                {submitStatus === 'submitting' ? 'Submitting...' : submitStatus === 'success' ? '✅ Booking Confirmed!' : submitStatus === 'error' ? '❌ Error' : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Book Service Now
                  </>
                )}
              </button>
              <div className={styles.secureWrap}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
                Your information is safe with us. We respect your privacy.
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Sidebar */}
        <div className={styles.sidebarCol}>
          <div className={styles.sidebarBox}>
            <h3 className={styles.sidebarTitle}>Service You Can Book</h3>
            
            {/* Printer Services */}
            <div className={styles.serviceListCard}>
              <div className={styles.serviceIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              </div>
              <div className={styles.serviceListContent}>
                <h4 className={styles.serviceListTitle}>Printer Services</h4>
                <ul className={styles.serviceItems}>
                  <li>Printer on Rent</li>
                  <li>Printer Installation</li>
                  <li>Maintenance & AMC</li>
                  <li>Repairs & Troubleshooting</li>
                </ul>
              </div>
            </div>

            {/* Laptop Repair */}
            <div className={styles.serviceListCard}>
              <div className={styles.serviceIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="20" x2="22" y2="20"></line>
                </svg>
              </div>
              <div className={styles.serviceListContent}>
                <h4 className={styles.serviceListTitle}>Laptop Repair Services</h4>
                <ul className={styles.serviceItems}>
                  <li>Hardware Repair</li>
                  <li>Software Installation</li>
                  <li>Virus Removal</li>
                  <li>Upgrades & Optimization</li>
                </ul>
              </div>
            </div>

            {/* Other Services */}
            <div className={styles.serviceListCard}>
              <div className={styles.serviceIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                </svg>
              </div>
              <div className={styles.serviceListContent}>
                <h4 className={styles.serviceListTitle}>Other Services</h4>
                <ul className={styles.serviceItems}>
                  <li>Spare Parts & Accessories</li>
                  <li>General Enquiries</li>
                  <li>Technical Consultation</li>
                </ul>
              </div>
            </div>

            {/* Need Help Booking */}
            <div className={styles.helpBox}>
              <div className={styles.helpIconWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0110 10v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 012-2 4 4 0 00-4-4 4 4 0 00-4 4 2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a10 10 0 018-10z"></path>
                </svg>
              </div>
              <div>
                <h4 className={styles.helpTitle}>Need Help Booking?</h4>
                <p className={styles.helpText}>Talk to our support team and we'll help you book your service.</p>
              </div>
              <button className={styles.callBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                </svg>
                +91 96237 89414
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
