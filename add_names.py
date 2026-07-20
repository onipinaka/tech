import re

with open('app/book/components/BookFormSection.tsx', 'r') as f:
    content = f.read()

# Define specific replacements for missing name attributes
replacements = [
    # General & Printer section
    (r'<input type="text" className=\{styles\.input\} placeholder="Enter your full name" required />', r'<input type="text" name="fullName" className={styles.input} placeholder="Enter your full name" required />'),
    (r'<input type="text" className=\{styles\.input\} placeholder="Enter company name" />', r'<input type="text" name="companyName" className={styles.input} placeholder="Enter company name" />'),
    (r'<input type="tel" className=\{styles\.input\} placeholder="Enter phone number" required />', r'<input type="tel" name="phone" className={styles.input} placeholder="Enter phone number" required />'),
    (r'<input type="email" className=\{styles\.input\} placeholder="Enter email address" />', r'<input type="email" name="email" className={styles.input} placeholder="Enter email address" />'),
    (r'<input type="text" className=\{styles\.input\} placeholder="Enter your complete address" required />', r'<input type="text" name="address" className={styles.input} placeholder="Enter your complete address" required />'),
    
    (r'<input type="text" className=\{styles\.input\} placeholder="e.g., HP, Canon, Epson" />', r'<input type="text" name="printerBrand" className={styles.input} placeholder="e.g., HP, Canon, Epson" />'),
    (r'<input type="text" className=\{styles\.input\} placeholder="e.g., LaserJet Pro M404" />', r'<input type="text" name="printerModel" className={styles.input} placeholder="e.g., LaserJet Pro M404" />'),
    
    (r'<select className=\{styles\.input\} defaultValue="">\s*<option value="" disabled>Select printer type</option>', r'<select name="printerType" className={styles.input} defaultValue="">\n                    <option value="" disabled>Select printer type</option>'),
    (r'<select \s*className=\{styles\.input\} \s*required \s*value=\{printerServiceRequired\}', r'<select name="serviceRequired"\n                    className={styles.input} \n                    required \n                    value={printerServiceRequired}'),
    (r'<select className=\{styles\.input\} defaultValue="">\s*<option value="" disabled>Select issue</option>', r'<select name="printerIssue" className={styles.input} defaultValue="">\n                      <option value="" disabled>Select issue</option>'),
    
    (r'<input type="number" className=\{styles\.input\} placeholder="e.g., 5" min="1" />', r'<input type="number" name="printerCount" className={styles.input} placeholder="e.g., 5" min="1" />'),
    (r'<input type="text" className=\{styles\.input\} placeholder="e.g., 5000 pages" />', r'<input type="text" name="monthlyVolume" className={styles.input} placeholder="e.g., 5000 pages" />'),
    (r'<input type="text" className=\{styles\.input\} placeholder="e.g., 12 Months" />', r'<input type="text" name="rentalDuration" className={styles.input} placeholder="e.g., 12 Months" />'),
    
    (r'<input type="date" className=\{styles\.input\} />', r'<input type="date" name="preferredDate" className={styles.input} />'),
    (r'<input type="time" className=\{styles\.input\} />', r'<input type="time" name="preferredTime" className={styles.input} />'),
    (r'<textarea className=\{styles\.input\} placeholder="Any specific issue or request\?" defaultValue=\{defaultNotes\}></textarea>', r'<textarea name="additionalNotes" className={styles.input} placeholder="Any specific issue or request?" defaultValue={defaultNotes}></textarea>'),

    # Laptop Section
    (r'<input type="text" className=\{styles\.input\} placeholder="Enter complete address" required />', r'<input type="text" name="address" className={styles.input} placeholder="Enter complete address" required />'),
    (r'<select className=\{styles\.input\} defaultValue="">\s*<option value="" disabled>Select laptop brand</option>', r'<select name="laptopBrand" className={styles.input} defaultValue="">\n                    <option value="" disabled>Select laptop brand</option>'),
    (r'<input type="text" className=\{styles\.input\} placeholder="e.g., Thinkpad T14" />', r'<input type="text" name="laptopModel" className={styles.input} placeholder="e.g., Thinkpad T14" />'),
    (r'<select className=\{styles\.input\} defaultValue="">\s*<option value="" disabled>Select service</option>', r'<select name="laptopServiceRequired" className={styles.input} defaultValue="">\n                    <option value="" disabled>Select service</option>'),
    (r'<textarea className=\{styles\.input\} placeholder="Explain the problem in detail\.\.\." defaultValue=\{defaultNotes\}></textarea>', r'<textarea name="issueDescription" className={styles.input} placeholder="Explain the problem in detail..." defaultValue={defaultNotes}></textarea>'),

    # Other Section
    (r'<input type="email" className=\{styles\.input\} placeholder="Enter email address" required />', r'<input type="email" name="email" className={styles.input} placeholder="Enter email address" required />'),
    (r'<select className=\{styles\.input\} defaultValue="">\s*<option value="" disabled>Select enquiry type</option>', r'<select name="enquiryType" className={styles.input} defaultValue="">\n                    <option value="" disabled>Select enquiry type</option>'),
    (r'<input type="text" className=\{styles\.input\} placeholder="Enquiry subject" />', r'<input type="text" name="subject" className={styles.input} placeholder="Enquiry subject" />'),
    (r'<textarea className=\{styles\.input\} placeholder="Write your message here\.\.\." defaultValue=\{defaultNotes\}></textarea>', r'<textarea name="message" className={styles.input} placeholder="Write your message here..." defaultValue={defaultNotes}></textarea>')
]

for pattern, replacement in replacements:
    content = re.sub(pattern, replacement, content)

with open('app/book/components/BookFormSection.tsx', 'w') as f:
    f.write(content)
