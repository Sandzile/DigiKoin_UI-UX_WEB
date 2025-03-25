
import React, { useEffect } from 'react';

function Terms() {
  useEffect(() => {
    // Animate sections on mount
    const sections = document.querySelectorAll('.terms-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('active');
      }, index * 200);
    });
  }, []);

  return (
    <div className="container">
      <h1>Terms and Conditions - Digimine App</h1>
      <p><strong>Last Updated:</strong> 19/02/2025</p>
      <p>
        Welcome to the Digimine App! These Terms and Conditions (“Terms”) govern your use of the Digimine mobile application, website, and all associated services provided by Digimine (“the App,” “Services,” or “Digimine”). By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any portion of these Terms, please refrain from using our Services.
      </p>

      {/* Section 1: Introduction */}
      <div className="terms-section">
        <h2>1. Introduction</h2>
        <h3>1.1 Purpose and Scope</h3>
        <p>
          Digimine is a revolutionary digital asset platform that allows users to mine Digikoins—digital tokens initially backed by gold kilograms. Our platform integrates state-of-the-art blockchain technology with physical gold backing to provide a secure and transparent financial ecosystem. The Services include, but are not limited to, buying, selling, storing, transferring, and redeeming Digikoins, along with additional features such as staking, peer-to-peer (P2P) transactions, and integrations with third-party payment providers.
        </p>
        <p>
          These Terms set forth the legal rights, responsibilities, and obligations of all individuals, entities, and organizations (“User” or “you”) accessing or using the App. They are designed to protect both Digimine and its Users while ensuring that our services are used in a lawful and secure manner.
        </p>

        <h3>1.2 Recitals</h3>
        <p>WHEREAS, Digimine has been developed to combine innovative blockchain solutions with the tangible value of physical gold, thereby creating a secure, transparent, and reliable digital asset ecosystem; and</p>
        <p>WHEREAS, Digimine is committed to maintaining rigorous compliance with all applicable global financial, data protection, and cybersecurity regulations; and</p>
        <p>WHEREAS, you desire to use the App under these Terms in order to benefit from its unique digital asset mining and transaction services;</p>
        <p>NOW, THEREFORE, in consideration of your use of the App, Digimine hereby establishes these Terms and Conditions to govern your interaction with our Services.</p>

        <h3>1.3 Definitions</h3>
        <p>For the purposes of these Terms, the following definitions apply:</p>
        <ul>
          <li>“App” or “Digimine” refers to the mobile application, website, and related digital services provided by Digimine.</li>
          <li>“User” or “You” means any individual or legal entity that accesses or uses the App.</li>
          <li>“Digikoin” means the digital token issued by Digimine, initially backed by one kilogram of gold per token (subject to later conversion and scaling as defined herein).</li>
          <li>“Gold Reserve” refers to the physical gold stored and audited by our custodians that backs each Digikoin.</li>
          <li>“KYC” means Know Your Customer procedures required to verify User identity.</li>
          <li>“AML” means Anti-Money Laundering regulations and procedures.</li>
          <li>“Smart Contracts” are self-executing agreements with the terms directly written into code on the blockchain.</li>
          <li>“Third-Party Services” refer to any external platforms or providers integrated with or used by Digimine for operational purposes.</li>
        </ul>

        <h3>1.4 Acknowledgment and Acceptance</h3>
        <p>By clicking “I Accept” or by using the App in any manner, you represent and warrant that:</p>
        <ul>
          <li>You are legally capable of entering into binding agreements.</li>
          <li>You have read, understood, and accepted these Terms, including any modifications.</li>
          <li>Your continued use of the App signifies your ongoing acceptance of any updates to these Terms.</li>
        </ul>
      </div>

      {/* Section 2: Eligibility */}
      <div className="terms-section">
        <h2>2. Eligibility</h2>
        <h3>2.1 Age Requirement</h3>
        <p><strong>Minimum Age:</strong> You must be at least 18 years old to access or use the Digimine App and its Services. By registering or using the App, you confirm that you are at least 18 years of age.</p>
        <p><strong>Minor Restrictions:</strong> Individuals under the age of 18 are prohibited from using the App. Any access or use by a minor without proper parental or guardian supervision is strictly prohibited.</p>

        <h3>2.2 Information Accuracy</h3>
        <p><strong>Registration:</strong> When you register for an account, you agree to provide accurate, current, and complete information as required by the registration process.</p>
        <p><strong>Ongoing Accuracy:</strong> You are responsible for promptly updating your account information if there are any changes.</p>
        <p><strong>Verification:</strong> Digimine reserves the right to verify any information provided and may require additional documentation to confirm your identity and eligibility.</p>

        <h3>2.3 Compliance with Laws</h3>
        <p><strong>Local Jurisdiction:</strong> Users must comply with all applicable local, national, and international laws. Users from jurisdictions where digital asset mining or gold-backed financial instruments are restricted may be prohibited from accessing the App.</p>
        <p><strong>Regulatory Compliance:</strong> By using the App, you represent that your use complies with all relevant laws and regulations, including those related to cryptocurrency and digital asset management.</p>
        <p><strong>Sanctions and Prohibitions:</strong> Digimine reserves the right to refuse or suspend service to any User found to be in violation of any applicable laws or sanctions.</p>

        <h3>2.4 Right to Refuse or Suspend Access</h3>
        <p><strong>Discretionary Authority:</strong> Digimine may, at its sole discretion, refuse, suspend, or terminate access to any User who fails to meet eligibility requirements or is suspected of fraudulent, deceptive, or illegal activity.</p>
        <p><strong>Notification:</strong> While we endeavor to provide prior notice, access may be restricted or terminated immediately if deemed necessary for security or compliance reasons.</p>
      </div>

      {/* Section 3: Account Registration & Security */}
      <div className="terms-section">
        <h2>3. Account Registration & Security</h2>
        <h3>3.1 Registration Process</h3>
        <p><strong>Account Creation:</strong> To use our Services, you must complete the registration process by providing personal, contact, and verification information in accordance with our KYC procedures.</p>
        <p><strong>Unique Account:</strong> Each User is allowed only one account. Creating multiple or duplicate accounts is strictly prohibited.</p>
        <p><strong>Accuracy and Updates:</strong> All information provided during registration must be accurate and kept up to date. Failure to do so may result in the suspension or termination of your account.</p>

        <h3>3.2 Security Measures</h3>
        <p><strong>Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your account credentials (username, password, and any two-factor authentication codes). Sharing these credentials with third parties is not permitted.</p>
        <p><strong>Two-Factor Authentication (2FA):</strong> To enhance security, all Users are required to enable 2FA. This provides an extra layer of protection against unauthorized access.</p>
        <p><strong>Immediate Reporting:</strong> In the event of any unauthorized access or suspected breach, you must notify Digimine immediately at <a href="mailto:support@digimine.com">support@digimine.com</a>. Failure to do so may result in liability for any unauthorized transactions.</p>
        <p><strong>Account Freezing:</strong> Digimine reserves the right to temporarily freeze or restrict access to your account if suspicious activity is detected, pending further investigation.</p>

        <h3>3.3 Additional Verification and Audits</h3>
        <p><strong>Ongoing Verification:</strong> Digimine may request additional verification at any time, including after initial registration, to ensure continued compliance with KYC/AML regulations.</p>
        <p><strong>Security Audits:</strong> Regular security audits will be conducted on user accounts and the overall system to detect vulnerabilities and prevent breaches. Any discrepancies or issues discovered during audits may result in account suspension or further investigation.</p>

        <h3>3.4 Password and Data Protection</h3>
        <p><strong>Password Standards:</strong> You agree to choose a strong password that meets our security standards and to change it periodically. Digimine is not liable for any losses resulting from your failure to secure your account.</p>
        <p><strong>Data Encryption:</strong> All personal data, transaction details, and sensitive information are encrypted using industry-standard encryption protocols (e.g., AES-256) to ensure maximum security.</p>
        <p><strong>Backup and Recovery:</strong> It is recommended that you securely back up any critical data related to your account. Digimine provides account recovery mechanisms that require rigorous verification to prevent unauthorized access.</p>
      </div>

      {/* Section 4: Services Offered */}
      <div className="terms-section">
        <h2>4. Services Offered</h2>
        <h3>4.1 Digital Asset Mining and Transactions</h3>
        <p><strong>Mining Digikoins:</strong></p>
        <ul>
          <li>Users can mine Digikoins through our unique digital mining process. Each mined Digikoin is initially backed by one kilogram of physical gold, ensuring inherent value.</li>
          <li>Mining rewards are distributed based on the computational power or proof-of-work/participation tasks completed by the User.</li>
        </ul>
        <p><strong>Buying and Selling:</strong></p>
        <ul>
          <li>The App allows Users to purchase and sell Digikoins through a secure, transparent marketplace. Transactions are processed via blockchain technology.</li>
        </ul>
        <p><strong>Digital Wallet:</strong></p>
        <ul>
          <li>A secure digital wallet is provided for storing your Digikoins. This wallet is integrated with advanced encryption, multi-factor authentication, and backup features.</li>
        </ul>
        <p><strong>Peer-to-Peer (P2P) Transactions:</strong></p>
        <ul>
          <li>Users can engage in direct P2P transactions with other Users, facilitated by an integrated escrow service to ensure fair and secure exchanges.</li>
        </ul>
        <p><strong>Staking and Rewards Programs:</strong></p>
        <ul>
          <li>Digimine may offer staking options where Users can lock their Digikoins for a specified period in return for rewards. Specific terms and conditions for staking will be provided within the App.</li>
        </ul>

        <h3>4.2 Gold-Backed Redemption</h3>
        <p><strong>Redemption Process:</strong></p>
        <ul>
          <li>Each Digikoin is backed by one kilogram of gold. Users can redeem their Digikoins for physical gold through our partnered vaults and financial institutions.</li>
          <li>Redemption requests are subject to prior scheduling and must meet all KYC requirements.</li>
        </ul>
        <p><strong>Processing Fees:</strong></p>
        <ul>
          <li>A processing fee will apply to gold redemption transactions. This fee covers logistics, auditing, and regulatory compliance.</li>
        </ul>
        <p><strong>Certification:</strong></p>
        <ul>
          <li>Upon redemption, Users will receive official documentation certifying the physical gold backing of their redeemed Digikoins.</li>
        </ul>

        <h3>4.3 Fiat and Cryptocurrency Withdrawals</h3>
        <p><strong>Fiat Withdrawals:</strong></p>
        <ul>
          <li>Users may withdraw funds in fiat currency. Such withdrawals are processed in accordance with banking hours and standard processing times (typically 24–48 hours).</li>
        </ul>
        <p><strong>Cryptocurrency Withdrawals:</strong></p>
        <ul>
          <li>Withdrawals in cryptocurrency are subject to blockchain confirmation times and may incur network fees.</li>
        </ul>
        <p><strong>Withdrawal Limits:</strong></p>
        <ul>
          <li>Minimum and maximum withdrawal limits are established based on the User’s verification status, regulatory requirements, and method of withdrawal.</li>
        </ul>

        <h3>4.4 Third-Party Integrations</h3>
        <p><strong>Payment Gateways:</strong></p>
        <ul>
          <li>Digimine integrates with select third-party payment providers to facilitate fiat transactions. Users agree to the terms of these third-party providers when conducting such transactions.</li>
        </ul>
        <p><strong>Risk Acknowledgment:</strong></p>
        <ul>
          <li>Digimine is not responsible for any issues arising from the use of third-party services. Users should review the policies of these providers before proceeding.</li>
        </ul>

        <h3>4.5 Additional Services</h3>
        <p><strong>Market Data and Analytics:</strong></p>
        <ul>
          <li>The App may provide real-time market data, analytical tools, and educational resources to help Users make informed decisions regarding digital asset transactions.</li>
        </ul>
        <p><strong>Customer Support:</strong></p>
        <ul>
          <li>Digimine offers customer support via email, in-app chat, and designated support channels. All queries and issues are handled in accordance with our support guidelines.</li>
        </ul>
        <p><strong>Promotional Programs:</strong></p>
        <ul>
          <li>From time to time, Digimine may introduce promotional offers or loyalty programs. The terms for these promotions will be communicated separately and may be subject to change.</li>
        </ul>
      </div>

      {/* Section 5: Fees & Transactions */}
      <div className="terms-section">
        <h2>5. Fees & Transactions</h2>
        <h3>5.1 Transaction Fees</h3>
        <p><strong>Standard Transaction Fee:</strong></p>
        <ul>
          <li>Every digital asset transfer, whether for buying, selling, or transferring Digikoins, is subject to a standard fee. This fee is calculated as a percentage of the transaction value and is deducted automatically at the time the transaction is initiated.</li>
          <li>Example: A 0.5% fee may be applied on all peer-to-peer transfers, ensuring the sustainability of the platform while keeping costs competitive.</li>
        </ul>
        <p><strong>Variable Network Fees:</strong></p>
        <ul>
          <li>In addition to our service fee, Users are responsible for any fees imposed by the underlying blockchain network. These network fees fluctuate based on congestion and current market conditions.</li>
          <li>Network fees are dynamically calculated at the time of transaction and are displayed for User confirmation before processing.</li>
        </ul>
        <p><strong>Escrow Service Charges:</strong></p>
        <ul>
          <li>For transactions utilizing the integrated escrow system, an additional escrow fee may be levied. This fee covers the cost of holding funds securely until the transaction is fully executed.</li>
          <li>The escrow fee is fixed or variable depending on the size and nature of the transaction and will be clearly indicated in the transaction summary.</li>
        </ul>
        <p><strong>Promotional or Reduced Fees:</strong></p>
        <ul>
          <li>From time to time, Digimine may introduce promotional periods or loyalty programs where fees are reduced or waived. Any such promotions will be subject to separate terms and conditions that will be clearly communicated through the App.</li>
        </ul>
        <p><strong>Fee Adjustments and Notifications:</strong></p>
        <ul>
          <li>Digimine reserves the right to adjust its fee structure at any time. In the event of significant changes:</li>
          <li>Users will receive prior notification via email and in-app alerts.</li>
          <li>Continued use of the Services after fee adjustments constitutes acceptance of the new fee schedule.</li>
          <li>All changes will be documented in updated versions of these Terms and Conditions.</li>
        </ul>

        <h3>5.2 Refunds, Chargebacks, and Disputed Transactions</h3>
        <p><strong>Refund Policy:</strong></p>
        <ul>
          <li>Refund requests may be initiated by Users in cases of transaction errors, system faults, or proven fraudulent activities.</li>
          <li>Once a refund request is received, Digimine will conduct a thorough verification process. This includes reviewing transaction logs, audit trails, and any supporting documentation provided by the User.</li>
          <li>Approved refunds will be processed and credited back to the User’s account within 14 business days. In cases where additional investigation is required, processing may take longer.</li>
        </ul>
        <p><strong>Chargebacks:</strong></p>
        <ul>
          <li>In instances where a transaction is disputed via a chargeback from a financial institution or payment provider, Digimine reserves the right to suspend the User’s account pending resolution.</li>
          <li>Users must cooperate fully with any investigations, and any reversal of funds will be subject to the outcome of the dispute resolution process.</li>
        </ul>
        <p><strong>Resolution of Disputes:</strong></p>
        <ul>
          <li>In cases where a dispute arises regarding fees or transaction integrity, the User must submit a formal request through our support system.</li>
          <li>Digimine will investigate all disputes thoroughly and communicate findings and any adjustments made to the affected User.</li>
        </ul>
        <p><strong>Documentation and Record-Keeping:</strong></p>
        <ul>
          <li>All transaction records, including fee deductions, network charges, and escrow details, are maintained securely on the blockchain and on our servers.</li>
          <li>Users are encouraged to review their transaction history regularly and report any discrepancies immediately.</li>
        </ul>
      </div>

      {/* Section 6: Withdrawals & Deposits */}
      <div className="terms-section">
        <h2>6. Withdrawals & Deposits</h2>
        <h3>6.1 Fiat and Cryptocurrency Withdrawals</h3>
        <p><strong>Fiat Withdrawals:</strong></p>
        <ul>
          <li>Requests for fiat currency withdrawals are processed through partnered banking institutions. Processing times typically range from 24 to 48 hours, though delays may occur during periods of high volume or due to banking hours.</li>
          <li>Withdrawal limits are imposed based on the User’s verification level, with additional scrutiny applied to large withdrawals to ensure compliance with anti-fraud protocols.</li>
          <li>Users are required to confirm their banking details during each withdrawal request. Any errors in provided information may result in delays or cancellation of the transaction.</li>
        </ul>
        <p><strong>Cryptocurrency Withdrawals:</strong></p>
        <ul>
          <li>Cryptocurrency withdrawals are executed via the relevant blockchain network. The speed of these transactions is determined by current network conditions and confirmation times.</li>
          <li>Digimine does not control blockchain network fees, which are variable and are the sole responsibility of the User.</li>
          <li>Withdrawal requests are processed immediately after verification, but final settlement is subject to blockchain confirmations.</li>
        </ul>

        <h3>6.2 Gold Redemption Deposits</h3>
        <p><strong>Redemption Scheduling:</strong></p>
        <ul>
          <li>Users must schedule a redemption request through the App. The scheduling system is designed to manage and balance demand, ensuring that gold redemptions are processed in an orderly fashion.</li>
          <li>Redemption requests are prioritized based on the order in which they are received, subject to available physical gold reserves.</li>
        </ul>
        <p><strong>Verification and Processing:</strong></p>
        <ul>
          <li>All redemption requests require complete KYC verification. Users must provide updated identification and documentation to initiate the redemption process.</li>
          <li>Upon successful verification, the corresponding gold backing is reserved, and the User receives a redemption confirmation. The physical gold is then dispatched through our approved logistics partners.</li>
          <li>A processing fee (a percentage of the redemption value) is applied to cover handling, audit, and logistical costs.</li>
        </ul>
        <p><strong>Limits and Restrictions:</strong></p>
        <ul>
          <li>Minimum and maximum redemption limits are imposed to ensure that the physical gold reserves remain balanced and available.</li>
          <li>Large redemption requests may trigger additional verification steps or require multiple processing cycles.</li>
        </ul>
        <p><strong>Refunds and Reversals:</strong></p>
        <ul>
          <li>In rare cases where a redemption cannot be fulfilled, any funds or digital tokens held in escrow will be returned to the User, subject to the verification and refund policies described in Section 5.</li>
        </ul>

        <h3>6.3 Deposits into the Platform</h3>
        <p><strong>Deposit Verification:</strong></p>
        <ul>
          <li>Each deposit is subject to verification to ensure that funds are legitimate and that the User complies with all relevant KYC and AML requirements.</li>
          <li>Users must ensure that the source of funds is clearly documented and that any deposits exceeding regulatory thresholds are accompanied by supporting evidence.</li>
        </ul>
        <p><strong>Processing Time:</strong></p>
        <ul>
          <li>Deposits are generally processed in real-time for cryptocurrencies, while fiat deposits are processed according to the operating hours of the respective banking systems.</li>
          <li>In cases where additional verification is required, the deposit may be temporarily held in a pending state until all documentation is reviewed.</li>
        </ul>
        <p><strong>Notification:</strong></p>
        <ul>
          <li>Users will receive confirmation of successful deposits via in-app notifications and email alerts. Any issues during processing will be communicated promptly, along with instructions for resolution.</li>
        </ul>
      </div>

      {/* Section 7: Compliance & Security */}
      <div className="terms-section">
        <h2>7. Compliance & Security</h2>
        <h3>7.1 Regulatory Compliance</h3>
        <p><strong>AML and KYC Procedures:</strong></p>
        <ul>
          <li>All Users must undergo a thorough KYC process before gaining full access to the platform. This process includes the submission of government-issued identification, proof of address, and, in some cases, evidence of source of funds.</li>
          <li>The App employs advanced AML protocols to monitor transactions and detect any suspicious activity. Any transactions flagged as potentially non-compliant are subject to additional review.</li>
        </ul>
        <p><strong>Reporting Obligations:</strong></p>
        <ul>
          <li>Digimine cooperates fully with regulatory authorities and is obligated to report any unusual or suspicious activity as required by law.</li>
          <li>Regular audits are conducted by third-party compliance experts to ensure that all processes meet or exceed regulatory standards.</li>
        </ul>
        <p><strong>International Sanctions:</strong></p>
        <ul>
          <li>Users from jurisdictions under international sanctions or where the use of digital assets is prohibited will not be permitted to register or use the App.</li>
          <li>Digimine reserves the right to terminate accounts found to be in violation of any sanctions or regulatory directives immediately.</li>
        </ul>

        <h3>7.2 Security Measures</h3>
        <p><strong>Data Encryption:</strong></p>
        <ul>
          <li>All User data, including personal information, transaction details, and sensitive financial data, is encrypted using state-of-the-art encryption protocols (e.g., AES-256) both in transit and at rest.</li>
          <li>The use of end-to-end encryption ensures that only authorized parties can access or decipher sensitive information.</li>
        </ul>
        <p><strong>Network Security:</strong></p>
        <ul>
          <li>Our servers and network infrastructure are protected by advanced firewalls, intrusion detection systems, and continuous monitoring to detect and mitigate potential threats.</li>
          <li>Regular vulnerability assessments and penetration tests are conducted to identify and resolve any security weaknesses.</li>
        </ul>
        <p><strong>Multi-Factor Authentication (MFA):</strong></p>
        <ul>
          <li>In addition to passwords, Users are required to use two-factor authentication (2FA) to add an extra layer of protection to their accounts.</li>
          <li>MFA devices and software are regularly updated to ensure compatibility with the latest security standards.</li>
        </ul>
        <p><strong>Incident Response:</strong></p>
        <ul>
          <li>Digimine maintains an incident response plan to manage any security breaches or data leaks. This plan includes immediate isolation of affected systems, detailed investigations, and timely notifications to Users and regulatory bodies as required.</li>
          <li>In the event of a security incident, affected Users will be provided with guidance and support to mitigate any potential losses.</li>
        </ul>

        <h3>7.3 Privacy and Data Protection</h3>
        <p><strong>Data Collection and Use:</strong></p>
        <ul>
          <li>We collect only the data necessary to provide and improve our Services, including for compliance and security purposes. This data is used solely for the purposes outlined in our Privacy Policy.</li>
          <li>Personal data is processed in accordance with all applicable data protection laws, including the General Data Protection Regulation (GDPR) where relevant.</li>
        </ul>
        <p><strong>User Consent:</strong></p>
        <ul>
          <li>By using the App, you consent to the collection, storage, and use of your data as described in these Terms and our Privacy Policy.</li>
          <li>You have the right to request access to your data, have it corrected, or request its deletion in accordance with applicable law.</li>
        </ul>
        <p><strong>Third-Party Processors:</strong></p>
        <ul>
          <li>Digimine may share User data with trusted third-party service providers strictly for operational purposes, such as payment processing or compliance monitoring. All such third parties are contractually obligated to maintain the confidentiality and security of your data.</li>
        </ul>
        <p><strong>Data Breach Notification:</strong></p>
        <ul>
          <li>In the unlikely event of a data breach, Digimine will notify affected Users promptly and take all necessary measures to secure the system and prevent further breaches.</li>
        </ul>
      </div>

      {/* Section 8: User Responsibilities */}
      <div className="terms-section">
        <h2>8. User Responsibilities</h2>
        <h3>8.1 Proper Use of the App</h3>
        <p><strong>Prohibited Activities:</strong></p>
        <ul>
          <li>You must not use the App to engage in any fraudulent, deceptive, or illegal activities. This includes, but is not limited to, money laundering, terrorism financing, and unauthorized trading practices.</li>
          <li>Any activity that undermines the integrity or security of the platform is strictly prohibited. This includes attempts to manipulate the mining process, interfere with transaction processing, or bypass security measures.</li>
        </ul>
        <p><strong>Account Security:</strong></p>
        <ul>
          <li>You are responsible for all activities that occur under your account. This means keeping your login credentials secure and not sharing them with any third party.</li>
          <li>You must immediately report any unauthorized access, suspected fraud, or suspicious activities related to your account.</li>
        </ul>
        <p><strong>Compliance with Policies:</strong></p>
        <ul>
          <li>You must adhere to all policies and guidelines provided by Digimine, including updates to the Terms and Conditions and any supplementary rules communicated through the App.</li>
          <li>Failure to comply with these responsibilities may result in the suspension or termination of your account, as well as potential legal action.</li>
        </ul>

        <h3>8.2 Intellectual Property and Respect for the Platform</h3>
        <p><strong>Ownership of Content:</strong></p>
        <ul>
          <li>All content, including software, design, trademarks, and documentation, is the property of Digimine and its licensors. You are granted a limited, non-transferable license to use the App for personal or business purposes in accordance with these Terms.</li>
          <li>You may not copy, distribute, modify, or reverse-engineer any part of the App without the express written consent of Digimine.</li>
        </ul>
        <p><strong>User-Generated Content:</strong></p>
        <ul>
          <li>Any content you submit to the App, including feedback, reviews, or posts, becomes the property of Digimine. By submitting such content, you grant Digimine a worldwide, royalty-free, and non-exclusive license to use, modify, and distribute the content as necessary.</li>
          <li>You warrant that any content you submit does not infringe on the rights of any third party and is not unlawful, defamatory, or otherwise objectionable.</li>
        </ul>

        <h3>8.3 Cooperation with Regulatory Authorities</h3>
        <p><strong>Provision of Information:</strong></p>
        <ul>
          <li>You agree to provide any additional information or documentation required by Digimine to verify your identity, comply with AML/KYC regulations, or resolve any disputes.</li>
          <li>Failure to provide requested documentation may result in restrictions on your account or termination of your access to Services.</li>
        </ul>
        <p><strong>Investigation and Audits:</strong></p>
        <ul>
          <li>Digimine reserves the right to conduct periodic audits and investigations into User activities. You agree to cooperate fully with such audits and to provide any information necessary to confirm your compliance with these Terms.</li>
        </ul>

        <h3>8.4 Responsibility for Transactions</h3>
        <p><strong>Accuracy of Transactions:</strong></p>
        <ul>
          <li>You must review all transaction details carefully before submission. Once confirmed, transactions cannot be reversed except in cases where a refund is approved according to Section 5.</li>
          <li>Any mistakes, whether typographical or otherwise, are considered your responsibility, and you agree to bear any losses resulting from such errors.</li>
        </ul>
        <p><strong>Use of Escrow and Verification:</strong></p>
        <ul>
          <li>While Digimine provides an integrated escrow service for P2P transactions, you remain responsible for conducting due diligence on counterparties and confirming that all transaction details are correct.</li>
          <li>Any disputes arising from transaction errors or misunderstandings will be handled in accordance with our dispute resolution procedures outlined in Section 10.</li>
        </ul>
      </div>

      {/* Section 9: Limitation of Liability */}
      <div className="terms-section">
        <h2>9. Limitation of Liability</h2>
        <h3>9.1 General Disclaimers</h3>
        <p><strong>No Warranty:</strong></p>
        <ul>
          <li>Digimine disclaims all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
          <li>The App and its Services are provided without any guarantee that the platform will be error-free, secure, or uninterrupted.</li>
        </ul>
        <p><strong>Risk of Loss:</strong></p>
        <ul>
          <li>Users acknowledge that the value of Digikoins may fluctuate due to market conditions, network issues, or other unforeseen factors. You assume all risks associated with the use of the App, including potential financial losses.</li>
          <li>Digimine is not responsible for any losses incurred as a result of unauthorized access, technical failures, or external factors beyond our control.</li>
        </ul>

        <h3>9.2 Exclusions of Liability</h3>
        <p><strong>Third-Party Failures:</strong></p>
        <ul>
          <li>Digimine shall not be held liable for any failures or malfunctions in third-party services, including banking institutions, payment processors, or blockchain networks.</li>
          <li>You agree that any reliance on such third-party services is at your own risk.</li>
        </ul>
        <p><strong>Force Majeure:</strong></p>
        <ul>
          <li>Digimine is not liable for any delays, failures, or disruptions caused by events beyond our reasonable control, including but not limited to natural disasters, acts of war, cyberattacks, regulatory changes, or other force majeure events.</li>
        </ul>

        <h3>9.3 Indemnification</h3>
        <p><strong>Scope of Indemnification:</strong></p>
        <ul>
          <li>You agree to indemnify, defend, and hold harmless Digimine, its affiliates, officers, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from your use of the App or your violation of these Terms.</li>
          <li>This indemnification obligation applies to all claims arising out of or related to your actions, omissions, or breach of these Terms.</li>
          <li>Digimine reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you.</li>
        </ul>
      </div>

      {/* Section 10: Dispute Resolution */}
      <div className="terms-section">
        <h2>10. Dispute Resolution</h2>
        <h3>10.1 General Principles</h3>
        <p>Any dispute, controversy, or claim arising out of or in relation to these Terms or the breach thereof—including any question regarding its existence, validity, or termination—shall be resolved in accordance with the dispute resolution provisions set forth herein. Digimine encourages Users to first attempt to resolve any disputes amicably by contacting our customer support. If an amicable resolution cannot be reached, the following dispute resolution process shall apply.</p>

        <h3>10.2 Informal Negotiations</h3>
        <p><strong>Initial Contact:</strong> In the event of a dispute, Users must contact Digimine’s Customer Support via email at <a href="mailto:support@digimine.com">support@digimine.com</a> or through the in-app messaging system.</p>
        <p><strong>Timeframe:</strong> The Parties agree to engage in informal negotiations for a period of at least thirty (30) days from the date the dispute is first raised.</p>
        <p><strong>Good Faith:</strong> Both Parties commit to negotiating in good faith and to sharing all relevant information necessary for a mutually acceptable resolution.</p>

        <h3>10.3 Mediation and Arbitration</h3>
        <p><strong>Mediation:</strong> The Parties may, at their discretion, agree to engage in mediation administered by a mutually acceptable independent mediator experienced in financial and digital asset disputes.</p>
        <p><strong>Binding Arbitration:</strong></p>
        <ul>
          <li><strong>Initiation:</strong> Should mediation fail, any unresolved disputes shall be submitted to binding arbitration.</li>
          <li><strong>Arbitrator Selection:</strong> The arbitrator shall be selected jointly by the Parties. If the Parties cannot agree, the arbitrator shall be appointed in accordance with the rules of the designated arbitration institution agreed upon by both Parties.</li>
          <li><strong>Rules and Procedures:</strong> The arbitration will be conducted in accordance with the arbitration rules then in effect, which may include but are not limited to provisions for expedited procedures in cases of smaller disputes.</li>
          <li><strong>Venue and Language:</strong> The arbitration shall be held in the jurisdiction of [Relevant Country] with the proceedings conducted in English.</li>
          <li><strong>Finality:</strong> The arbitrator’s decision shall be final, binding, and enforceable in any court of competent jurisdiction.</li>
        </ul>

        <h3>10.4 Class Action Waiver</h3>
        <p>By accepting these Terms, Users expressly waive their right to participate in any class, consolidated, or representative action against Digimine. Any dispute resolution proceeding shall be conducted solely on an individual basis.</p>

        <h3>10.5 Costs and Fees</h3>
        <p><strong>Allocation:</strong> Each Party shall bear its own costs and expenses incurred in connection with any dispute resolution proceedings, including attorney’s fees, unless the arbitrator determines otherwise.</p>
        <p><strong>Award of Costs:</strong> The arbitrator may, in its discretion, award costs and fees to the prevailing party, taking into account the circumstances of the case.</p>

        <h3>10.6 Interim Relief</h3>
        <p>Notwithstanding the foregoing, either Party may seek interim or provisional relief in any court of competent jurisdiction if it deems such relief necessary to protect its rights or property pending the outcome of dispute resolution proceedings.</p>
      </div>

      {/* Section 11: Updates & Modifications */}
      <div className="terms-section">
        <h2>11. Updates & Modifications</h2>
        <h3>11.1 Right to Modify</h3>
        <p>Digimine reserves the right to amend, modify, or update these Terms and Conditions at any time, at our sole discretion. Such modifications may include, without limitation, updates to our fee structures, dispute resolution processes, privacy practices, and other operational procedures.</p>

        <h3>11.2 Notification of Changes</h3>
        <p><strong>Communication:</strong> Significant changes to these Terms will be communicated to Users via email and/or through prominent notifications on the App.</p>
        <p><strong>Effective Date:</strong> All modifications become effective immediately upon posting on the App, unless otherwise stated. Users are advised to review the Terms periodically to stay informed of any updates.</p>
        <p><strong>Continued Use:</strong> By continuing to access or use the App after modifications are posted, you agree to be bound by the revised Terms.</p>

        <h3>11.3 User Rights and Objections</h3>
        <p><strong>Review Period:</strong> Users who object to any modifications may contact Digimine within fifteen (15) days of receiving notification. Failure to object within the stipulated timeframe will be deemed acceptance of the updated Terms.</p>
        <p><strong>Account Closure Option:</strong> If you do not agree with the modified Terms, your sole remedy is to discontinue the use of the App and close your account in accordance with Section 12.</p>

        <h3>11.4 Documentation of Changes</h3>
        <p>A version history of these Terms, including the date and a brief description of modifications, will be maintained on the Digimine website. This record is provided for transparency and for Users to track changes over time.</p>
      </div>

      {/* Section 12: Account Termination */}
      <div className="terms-section">
        <h2>12. Account Termination</h2>
        <h3>12.1 Voluntary Termination</h3>
        <p><strong>User-Initiated Closure:</strong> You may terminate your account at any time by following the procedures outlined within the App. Upon account termination, all data associated with your account may be deleted, subject to legal retention requirements.</p>
        <p><strong>Final Settlement:</strong> Any outstanding balances or pending transactions must be resolved prior to account closure. Digimine reserves the right to hold funds or delay closure until all transactions are verified and settled.</p>

        <h3>12.2 Involuntary Termination</h3>
        <p><strong>Breach of Terms:</strong> Digimine may suspend or terminate your account immediately if you are found to have violated these Terms, engaged in fraudulent activity, or otherwise posed a risk to the integrity of the platform.</p>
        <p><strong>Compliance Issues:</strong> Failure to comply with KYC/AML requirements or providing false or misleading information may also result in involuntary account termination.</p>
        <p><strong>Notification:</strong> While Digimine strives to notify Users prior to termination, certain situations may necessitate immediate action without prior notice.</p>

        <h3>12.3 Effects of Termination</h3>
        <p><strong>Access Loss:</strong> Upon termination, your right to access and use the App and its Services will cease immediately.</p>
        <p><strong>Data Retention:</strong> Certain information associated with your account may be retained for a reasonable period as required by law or for dispute resolution purposes.</p>
        <p><strong>Outstanding Balances:</strong> If any funds remain in your account at the time of termination, these may be withheld pending further investigation or returned subject to applicable fees and regulatory guidelines.</p>

        <h3>12.4 Reinstatement of Accounts</h3>
        <p><strong>Appeals Process:</strong> Users whose accounts have been terminated may appeal the decision by submitting a formal request to Digimine’s Compliance Department. Reinstatement is at the sole discretion of Digimine and may require additional verification or the completion of remedial measures.</p>
      </div>

      {/* Section 13: Intellectual Property Rights */}
      <div className="terms-section">
        <h2>13. Intellectual Property Rights</h2>
        <h3>13.1 Ownership</h3>
        <p><strong>Proprietary Rights:</strong> All intellectual property rights, including but not limited to trademarks, copyrights, trade secrets, designs, and software, associated with the Digimine App are the exclusive property of Digimine or its licensors.</p>
        <p><strong>Usage License:</strong> Digimine grants you a limited, non-exclusive, non-transferable, revocable license to access and use the App solely for personal and non-commercial purposes, subject to these Terms.</p>

        <h3>13.2 Restrictions</h3>
        <p><strong>Copying and Distribution:</strong> You may not copy, reproduce, modify, distribute, or create derivative works based on any content, software, or other materials provided by Digimine without explicit written consent.</p>
        <p><strong>Reverse Engineering:</strong> Unauthorized reverse engineering, decompilation, or disassembly of the App’s software is strictly prohibited.</p>
        <p><strong>Third-Party Content:</strong> Any content provided by third parties through the App is subject to the respective third party’s intellectual property rights and terms of use.</p>

        <h3>13.3 User-Generated Content</h3>
        <p><strong>License to Digimine:</strong> Any content, including comments, reviews, suggestions, or other materials submitted by you becomes the property of Digimine. By submitting such content, you grant Digimine a worldwide, perpetual, royalty-free license to use, reproduce, modify, and distribute the content in connection with its business.</p>
        <p><strong>Content Standards:</strong> You represent and warrant that any content you submit does not infringe on any third-party rights and is not unlawful, defamatory, or otherwise objectionable.</p>

        <h3>13.4 Infringement Claims</h3>
        <p><strong>Notification Procedure:</strong> If you believe that any content on the App infringes your intellectual property rights, please provide a written notice to Digimine’s designated agent, including details of the alleged infringement.</p>
        <p><strong>Counter-Notification:</strong> In cases where a removal notice is issued, you may submit a counter-notification. Digimine will evaluate both claims and take appropriate action as required by applicable law.</p>
      </div>

      {/* Section 14: Third-Party Services */}
      <div className="terms-section">
        <h2>14. Third-Party Services</h2>
        <h3>14.1 Integration and Use</h3>
        <p><strong>Third-Party Providers:</strong> Digimine may integrate with various third-party services, including payment processors, blockchain networks, and data analytics providers, to enhance the functionality of the App.</p>
        <p><strong>Independent Terms:</strong> The use of any third-party service is subject to the terms and conditions imposed by the respective provider. Digimine is not responsible for the practices or policies of any third party.</p>

        <h3>14.2 Liability and Disclaimers</h3>
        <p><strong>No Endorsement:</strong> The inclusion of third-party services does not imply any endorsement or recommendation by Digimine. Users engage with these services at their own risk.</p>
        <p><strong>Service Interruptions:</strong> Digimine shall not be liable for any disruptions, errors, or issues arising from the use or performance of third-party services.</p>
        <p><strong>User Responsibility:</strong> You are responsible for reviewing and understanding the terms of any third-party service you choose to use in connection with the App.</p>

        <h3>14.3 Data Sharing</h3>
        <p><strong>Permitted Disclosures:</strong> In order to provide seamless integration, certain data may be shared with third-party service providers. Such sharing is subject to strict confidentiality and data protection agreements.</p>
        <p><strong>Control and Consent:</strong> Users consent to the sharing of their data with third-party providers as described in our Privacy Policy. Digimine will take all reasonable steps to ensure that such data is handled securely and in compliance with applicable law.</p>
      </div>

      {/* Section 15: Contact Information */}
      <div className="terms-section">
        <h2>15. Contact Information</h2>
        <h3>15.1 Customer Support</h3>
        <p><strong>Email Support:</strong> For any inquiries, issues, or concerns regarding the App or these Terms, you may contact our customer support team at <a href="mailto:support@digimine.com">support@digimine.com</a>.</p>
        <p><strong>In-App Assistance:</strong> The App provides an integrated help center and chat support for real-time assistance during business hours.</p>
        <p><strong>Mailing Address:</strong> If necessary, you may also contact our corporate office at:</p>
        <p>Digimine Inc.<br />[Address Line 1]<br />[Address Line 2]<br />[City, State, ZIP, Country]</p>

        <h3>15.2 Feedback and Suggestions</h3>
        <p>We welcome and encourage feedback from our Users. Any suggestions, comments, or concerns submitted through the App or via email are non-confidential and may be used by Digimine for improving the Services without any compensation to you.</p>
      </div>

      {/* Section 16: Supplemental Clauses and Miscellaneous Provisions */}
      <div className="terms-section">
        <h2>16. Supplemental Clauses and Miscellaneous Provisions</h2>
        <h3>16.1 Severability</h3>
        <p>If any provision of these Terms is found to be invalid, unenforceable, or contrary to public policy by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be replaced by a valid and enforceable provision that most closely reflects the intent of the Parties.</p>

        <h3>16.2 Entire Agreement</h3>
        <p>These Terms constitute the entire agreement between you and Digimine regarding your use of the App and supersede any prior agreements, understandings, or representations, whether written or oral. No modification, waiver, or amendment of these Terms shall be binding unless in writing and signed by both Parties.</p>

        <h3>16.3 Governing Law and Jurisdiction</h3>
        <p><strong>Applicable Law:</strong> These Terms shall be governed by and construed in accordance with the laws of [Relevant Country/State], without regard to its conflict of law principles.</p>
        <p><strong>Jurisdiction:</strong> Any legal proceedings arising from or related to these Terms shall be brought exclusively in the courts located within [Relevant Jurisdiction]. You hereby consent to the personal jurisdiction of these courts.</p>

        <h3>16.4 Force Majeure</h3>
        <p>Digimine shall not be liable for any failure or delay in performance under these Terms due to causes beyond its reasonable control, including but not limited to natural disasters, acts of war, terrorism, labor disputes, or technical failures. In such circumstances, Digimine will use its best efforts to resume normal operations as quickly as possible.</p>

        <h3>16.5 Waiver</h3>
        <p>No failure or delay by Digimine in exercising any right, power, or remedy under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power, or remedy preclude any other or further exercise thereof or the exercise of any other right, power, or remedy.</p>

        <h3>16.6 Assignment</h3>
        <p>You may not assign or transfer any of your rights or obligations under these Terms without the prior written consent of Digimine. Digimine may assign these Terms, in whole or in part, at its sole discretion, without notice to you.</p>

        <h3>16.7 Notices</h3>
        <p>Any notice or communication required or permitted to be given under these Terms shall be in writing and shall be delivered by email, postal mail, or via the App’s internal messaging system. Notices shall be deemed to have been received on the date they are sent, provided that if sent by email, a confirmation receipt is obtained.</p>

        <h3>16.8 Headings</h3>
        <p>The headings in these Terms are for convenience only and shall not affect the interpretation of any provision herein.</p>

        <h3>16.9 Interpretation</h3>
        <p><strong>Construction:</strong> In the event of ambiguity, the provision shall be construed in a manner that best reflects the commercial intent of the Parties and the overall purpose of these Terms.</p>
        <p><strong>Plurality:</strong> Words in the singular shall include the plural and vice versa, as context requires.</p>
        <p><strong>Gender:</strong> References to any gender shall be deemed to include all genders.</p>

        <h3>16.10 Survival</h3>
        <p>Any provisions of these Terms which by their nature should survive termination or expiration of your use of the App shall survive, including without limitation the provisions regarding Limitation of Liability, Indemnification, Intellectual Property Rights, and Dispute Resolution.</p>

        <h3>16.11 Interpretation of “Digikoin” and “Gold Backing”</h3>
        <p><strong>Definition:</strong> Within these Terms, the term “Digikoin” refers to the digital asset that is initially backed by one kilogram of physical gold. As the platform evolves, additional token denominations and conversion mechanisms may be introduced, and such changes shall be deemed incorporated by reference into these Terms.</p>
        <p><strong>Gold Reserve Assurance:</strong> Digimine guarantees that each Digikoin is issued only when there is a corresponding physical gold reserve held in secure, audited vaults. Detailed audit reports and reserve certificates shall be made available to Users upon request.</p>

        <h3>16.12 Compliance with International Standards</h3>
        <p><strong>Financial Regulations:</strong> Digimine is committed to adhering to all relevant international financial regulations, including AML, KYC, and data protection standards. In the event of regulatory changes, Digimine reserves the right to modify these Terms accordingly.</p>
        <p><strong>Technical Standards:</strong> The App is maintained in accordance with industry best practices and standards to ensure the security, integrity, and reliability of its digital infrastructure.</p>

        <h3>16.13 Environmental Considerations</h3>
        <p>Digimine acknowledges the environmental impact of blockchain operations and is committed to adopting energy-efficient technologies and practices. We strive to balance innovation with sustainability and continually seek to minimize the ecological footprint of our operations.</p>

        <h3>16.14 Amendments to Supplemental Clauses</h3>
        <p>Digimine reserves the right to amend or add supplemental clauses to these Terms as necessary to address emerging issues, regulatory requirements, or operational changes. Such amendments shall be effective immediately upon posting, and continued use of the App constitutes acceptance of those changes.</p>
      </div>

      {/* Section 17: Additional Operational Clauses */}
      <div className="terms-section">
        <h2>17. Additional Operational Clauses</h2>
        <h3>17.1 Enhanced Operational Guidelines</h3>
        <p><strong>Continuous Monitoring and Improvement:</strong></p>
        <ul>
          <li>Digimine shall continuously monitor the performance of the App, including user feedback, transaction logs, and system security metrics. Our internal audit teams will review all aspects of our operations on a quarterly basis, and all Users acknowledge that improvements and updates may be implemented without prior individual notice. These updates are intended to maintain the security, efficiency, and integrity of the platform.</li>
        </ul>
        <p><strong>Operational Changes:</strong></p>
        <ul>
          <li>Any modifications to operational procedures that affect the delivery of Services—including changes to mining algorithms, digital wallet security features, or redemption processes—will be documented and communicated through updated addenda to these Terms. Such addenda become part of these Terms upon posting and shall be binding on all Users.</li>
        </ul>
        <p><strong>Service Disruptions:</strong></p>
        <ul>
          <li>In the event of planned or unplanned service disruptions, Digimine shall provide notice via in-app notifications and email. Notwithstanding such disruptions, Digimine will use commercially reasonable efforts to restore Services as quickly as possible. Users acknowledge that scheduled maintenance or unexpected outages may temporarily affect service availability without constituting a breach of these Terms.</li>
        </ul>

        <h3>17.2 Compliance with Emerging Technologies</h3>
        <p><strong>Adaptability Clause:</strong></p>
        <ul>
          <li>Digimine reserves the right to update or modify the technical architecture of the App—including the underlying blockchain, mining protocols, and smart contract systems—to improve security, scalability, or user experience. Any such modifications shall be deemed an integral part of these Terms and will not require separate consent from Users, provided that the modifications do not materially reduce the protections or rights afforded under these Terms.</li>
        </ul>
        <p><strong>Interoperability and Integration:</strong></p>
        <ul>
          <li>The App may be integrated with additional third-party services, digital asset platforms, or financial instruments in the future. Users agree that any such integrations, once implemented, shall be governed by the terms of these Terms and any supplemental addenda issued by Digimine. In all instances, such integrations are intended to enhance service functionality without diminishing existing User rights.</li>
        </ul>
        <p><strong>Future Tokenomics:</strong></p>
        <ul>
          <li>While each Digikoin is initially backed by one kilogram of physical gold, Digimine reserves the right to introduce additional token denominations or conversion mechanisms. Any changes to tokenomics will be subject to detailed disclosure and shall be incorporated by reference into these Terms. Users shall have access to audit reports and certification of gold reserves reflecting any such changes.</li>
        </ul>
      </div>

      {/* Section 18: Appendix A: Glossary of Terms */}
      <div className="terms-section">
        <h2>18. Appendix A: Glossary of Terms</h2>
        <p>For ease of reference, the following glossary defines key terms used throughout these Terms and Conditions:</p>
        <ul>
          <li><strong>App:</strong> The Digimine mobile application, website, and all related digital services.</li>
          <li><strong>Digikoin:</strong> The primary digital token issued by Digimine, initially backed by one kilogram of physical gold.</li>
          <li><strong>Gold Reserve:</strong> The physical gold, stored in audited vaults, that underpins the value of each Digikoin.</li>
          <li><strong>KYC (Know Your Customer):</strong> The process of verifying the identity and background of Users.</li>
          <li><strong>AML (Anti-Money Laundering):</strong> A set of procedures designed to prevent money laundering and other financial crimes.</li>
          <li><strong>Smart Contracts:</strong> Self-executing contracts with terms written into code on the blockchain.</li>
          <li><strong>User:</strong> Any individual or entity that accesses or uses the Digimine App.</li>
          <li><strong>Third-Party Services:</strong> External platforms or service providers integrated with the App, including payment processors, banking institutions, and blockchain networks.</li>
          <li><strong>Escrow Service:</strong> A secure service provided by Digimine to hold funds during peer-to-peer transactions until contractual conditions are met.</li>
        </ul>
        <p>This glossary is subject to updates and additional definitions as the platform evolves.</p>
      </div>

      {/* Section 19: Appendix B: Revision History and Document Amendments */}
      <div className="terms-section">
        <h2>19. Appendix B: Revision History and Document Amendments</h2>
        <h3>19.1 Revision History</h3>
        <p>Digimine maintains a detailed revision history for these Terms and Conditions. Notable revisions include:</p>
        <ul>
          <li><strong>Version 1.0 (19/02/2025):</strong> Initial release of the Digimine App – Terms and Conditions. Inclusion of detailed clauses for digital asset mining, gold backing, account security, and dispute resolution.</li>
          <li><strong>Version 1.1 (Pending Future Updates):</strong> Future revisions may address changes in regulatory requirements, technical upgrades to the mining protocol, or modifications in fee structures.</li>
          <li>Any such updates will be documented in a version history log available on the Digimine website.</li>
        </ul>

        <h3>19.2 Document Amendments</h3>
        <p><strong>Amendment Procedure:</strong> Any amendments to these Terms shall be communicated to all Users through official channels, including email notifications and in-app messages. An updated version of the Terms will be posted on the Digimine website with a revised effective date.</p>
        <p><strong>User Acknowledgment:</strong> Continued use of the App after the effective date of any amendments constitutes acceptance of the updated Terms.</p>
      </div>

      {/* Section 20: Appendix C: Third-Party Policy Integrations */}
      <div className="terms-section">
        <h2>20. Appendix C: Third-Party Policy Integrations</h2>
        <h3>20.1 Third-Party Service Policies</h3>
        <p><strong>Overview:</strong> Digimine integrates with various third-party services for enhanced functionality. The policies of these third parties are available on their respective websites and are incorporated herein by reference.</p>
        <p><strong>Data Sharing and Privacy:</strong> Users acknowledge that when interacting with third-party services, additional data may be shared. Digimine will only share data that is necessary to facilitate the Service and will require all third parties to adhere to strict data protection standards.</p>
        <p><strong>Dispute and Liability:</strong> Digimine is not liable for any issues arising from third-party services. Any disputes with such services must be resolved directly with the third party in accordance with their terms.</p>

        <h3>20.2 Cross-Platform Integrations</h3>
        <p><strong>Integration Clauses:</strong> Any future integrations with external platforms, including decentralized exchanges, blockchain analytics tools, or additional financial services, will be governed by separate addenda. These addenda will specify the obligations of both Digimine and the third-party provider, including data protection, fee structures, and service level agreements.</p>
        <p><strong>User Consent:</strong> By continuing to use the App after any such integration is announced, Users consent to the additional terms governing these integrations.</p>
      </div>

      {/* Section 21: Appendix D: User Agreement Confirmation and Acknowledgment */}
      <div className="terms-section">
        <h2>21. Appendix D: User Agreement Confirmation and Acknowledgment</h2>
        <h3>21.1 Confirmation of Agreement</h3>
        <p><strong>Acceptance:</strong> By clicking “I Accept” during the registration process or by otherwise accessing or using the Digimine App, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions, including all updates, appendices, and supplemental clauses incorporated herein.</p>
        <p><strong>Record of Consent:</strong> Digimine maintains an electronic record of each User’s acceptance of these Terms. This record may be used in any legal proceeding to demonstrate consent and understanding of the contractual obligations.</p>

        <h3>21.2 Acknowledgment of Updates</h3>
        <p><strong>Notification:</strong> Users will be notified via email and in-app notifications of any significant updates or changes to these Terms.</p>
        <p><strong>Continued Use:</strong> Continued use of the App after such notifications constitutes acceptance of the updated Terms. If you do not agree with the changes, you must cease using the App and close your account in accordance with the procedures outlined herein.</p>
      </div>

      {/* Section 22: Appendix E: Detailed Audit and Compliance Reports */}
      <div className="terms-section">
        <h2>22. Appendix E: Detailed Audit and Compliance Reports</h2>
        <h3>22.1 Audit Reports</h3>
        <p><strong>Regular Audits:</strong> Digimine is committed to transparency and accountability. Third-party auditors will conduct regular audits of the Gold Reserves, digital asset minting processes, and overall system security. Summary audit reports will be published on the Digimine website for user review.</p>
        <p><strong>User Access:</strong> Detailed audit reports, including reserve certificates, transaction logs, and compliance checklists, will be available to Users upon request. These reports serve as a testament to the integrity and reliability of the platform.</p>

        <h3>22.2 Compliance Certifications</h3>
        <p><strong>Certifications:</strong> Digimine shall maintain all necessary certifications required by international financial regulators, cybersecurity authorities, and industry standards organizations. These certifications will be updated as necessary and made available for public scrutiny.</p>
        <p><strong>Regulatory Cooperation:</strong> In the event of any regulatory inquiry or audit, Digimine agrees to provide full cooperation and to furnish all documentation deemed necessary by the relevant authorities.</p>
      </div>

      {/* Section 23: Appendix F: Environmental and Sustainability Commitments */}
      <div className="terms-section">
        <h2>23. Appendix F: Environmental and Sustainability Commitments</h2>
        <h3>23.1 Environmental Policy</h3>
        <p><strong>Sustainable Practices:</strong> Digimine recognizes the environmental impact of blockchain and mining operations. We are committed to adopting energy-efficient technologies and minimizing our carbon footprint. This includes the use of renewable energy sources where possible and optimization of our mining protocols to reduce energy consumption.</p>
        <p><strong>Reporting and Improvement:</strong> Environmental performance data will be collected and published periodically. Digimine will set measurable targets for reducing energy usage and greenhouse gas emissions, with progress reports made available to the public.</p>

        <h3>23.2 Corporate Social Responsibility (CSR)</h3>
        <p><strong>Community Engagement:</strong> As part of our CSR initiatives, Digimine will engage with local communities and stakeholders to promote sustainable practices and to support social programs that align with our values of transparency, innovation, and environmental stewardship.</p>
        <p><strong>Sustainability Funds:</strong> A portion of the fees collected may be allocated to a sustainability fund dedicated to furthering research in energy-efficient blockchain technologies and supporting green initiatives within the industry.</p>
      </div>

      {/* Section 24: Appendix G: Data Retention and Backup Policies */}
      <div className="terms-section">
        <h2>24. Appendix G: Data Retention and Backup Policies</h2>
        <h3>24.1 Data Retention</h3>
        <p><strong>Retention Period:</strong> Digimine will retain user data and transactional records for as long as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary by jurisdiction and the nature of the data.</p>
        <p><strong>Data Deletion Requests:</strong> Users may request deletion of their personal data in accordance with applicable data protection laws. Such requests will be processed in a timely manner, subject to any overriding legal obligations to retain certain information.</p>

        <h3>24.2 Backup and Disaster Recovery</h3>
        <p><strong>Backup Procedures:</strong> Digimine maintains comprehensive backup systems to ensure the integrity and availability of user data. Backups are performed on a regular schedule and stored securely in geographically distributed data centers.</p>
        <p><strong>Disaster Recovery:</strong> A detailed disaster recovery plan is in place to address any potential data loss or service disruption. In the event of a catastrophic failure, Digimine will promptly activate its disaster recovery protocols to restore Services and minimize data loss.</p>
      </div>

      {/* Section 25: Final Declarations and Concluding Provisions */}
      <div className="terms-section">
        <h2>25. Final Declarations and Concluding Provisions</h2>
        <h3>25.1 Entire Agreement</h3>
        <p>These Terms, including all appendices, supplemental clauses, and addenda incorporated herein, constitute the entire agreement between you and Digimine regarding your use of the App and supersede any prior agreements or understandings, whether written or oral. No representation, warranty, or other obligation not expressly stated in these Terms shall have any legal force or effect.</p>

        <h3>25.2 Amendments and Future Updates</h3>
        <p><strong>Ongoing Updates:</strong> Digimine reserves the right to amend or update these Terms at any time to reflect changes in technology, regulatory requirements, or business practices. Users will be duly notified of any significant updates, and continued use of the App shall constitute acceptance of such changes.</p>
        <p><strong>Transition Provisions:</strong> In the event of an update, the previous version of the Terms will remain in effect until the updated version is officially communicated and becomes binding on all Users.</p>

        <h3>25.3 Severability and Waiver</h3>
        <p><strong>Severability:</strong> If any provision of these Terms is held invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.</p>
        <p><strong>Waiver:</strong> No failure by Digimine to enforce any provision of these Terms shall be construed as a waiver of its right to enforce such provision at a later time, nor shall any waiver of any breach or default be deemed a waiver of any subsequent breach or default.</p>

        <h3>25.4 Binding Effect</h3>
        <p>These Terms are binding upon and inure to the benefit of the parties and their respective successors, permitted assigns, and legal representatives. You may not assign or transfer any rights under these Terms without the prior written consent of Digimine, and any attempt to do so shall be null and void.</p>

        <h3>25.5 Final Acknowledgment</h3>
        <p>By using the Digimine App, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety, including all future amendments and updates. You further agree to comply with all the provisions set forth herein and accept full responsibility for any consequences resulting from a breach of these Terms.</p>
      </div>
    </div>
  );
}

export default Terms;