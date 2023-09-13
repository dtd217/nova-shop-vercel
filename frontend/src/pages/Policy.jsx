import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Policy = () => {
    window.scrollTo(0, 0)
    return (
        <Layout>
            <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
                <div className='max-w-screen-xl mb-8 lg:mb-16'>
                    <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center'>Privacy Policy</h2>
                    <div className='text-sm md:text-base text-left md:text-justify'>
                        <br />
                        <p>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.</p>
                        <br />
                        <p>We use your Personal data to provide and improve the service. By using the service, you agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>.</p>
                        <br />
                        <h1 className='text-3xl font-semibold'>Interpretation and Definitions</h1>
                        <br />
                        <h2 className='text-2xl font-semibold'>Interpretation</h2>
                        <br />
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                        <br />
                        <h2 className='text-2xl font-semibold'>Definitions</h2>
                        <br />
                        <p>For the purposes of this Privacy Policy:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to NOVA, Dong Tam, Hai Na Trung, Ha Noi.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Cookies</strong> are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Country</strong> refers to: Vietnam</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Service</strong> refers to the Website.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Website</strong> refers to NOVA, accessible from <a href="novashop.com" rel="external nofollow noopener" target="_blank">novashop.com</a></p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>you</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                <br />
                            </li>
                        </ul>
                        <h1 className='text-3xl font-semibold'>Collecting and Using your Personal Data</h1>
                        <br />
                        <h2 className='text-2xl font-semibold'>Types of Data Collected</h2>
                        <br />
                        <h3 className='text-xl font-semibold'>Personal Data</h3>
                        <br />
                        <p>While using Our Service, We may ask you to provide Us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p>Email address</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p>First name and last name</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p>Phone number</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p>Address, State, Province, ZIP/Postal code, City</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p>Usage Data</p>
                                <br />
                            </li>
                        </ul>
                        <h3 className='text-xl font-semibold'>Usage Data</h3>
                        <br />
                        <p>Usage Data is collected automatically when using the Service.</p>
                        <br />
                        <p>Usage Data may include information such as your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                        <br />
                        <p>When you access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>
                        <br />
                        <p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.</p>
                        <br />
                        <h3 className='text-xl font-semibold'>Tracking Technologies and Cookies</h3>
                        <br />
                        <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>
                                <strong>Cookies or Browser Cookies.</strong>
                                A cookie is a small file placed on your Device. you can instruct your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if you do not accept Cookies, you may not be able to use some parts of our Service. Unless you have adjusted your browser setting so that it will refuse Cookies, our Service may use Cookies.
                            </li>
                            <br />
                            <li className='list-disc ml-8 md:ml-14'>
                                <strong>Web Beacons.</strong>
                                Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                            </li>
                            <br />
                        </ul>
                        <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank">Free Privacy Policy website</a> article.</p>
                        <br />
                        <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Necessary / Essential Cookies</strong></p>
                                <br />
                                <p>Type: Session Cookies</p>
                                <br />
                                <p>Administered by: Us</p>
                                <br />
                                <p>Purpose: These Cookies are essential to provide you with services available through the Website and to enable you to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that you have asked for cannot be provided, and We only use these Cookies to provide you with those services.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
                                <br />
                                <p>Type: Persistent Cookies</p>
                                <br />
                                <p>Administered by: Us</p>
                                <br />
                                <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>Functionality Cookies</strong></p>
                                <br />
                                <p>Type: Persistent Cookies</p>
                                <br />
                                <p>Administered by: Us</p>
                                <br />
                                <p>Purpose: These Cookies allow us to remember choices you make when you use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the Website.</p>
                                <br />
                            </li>
                        </ul>
                        <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
                        <br />
                        <h2 className='text-2xl font-semibold'>Use of your Personal Data</h2>
                        <br />
                        <p>The Company may use Personal Data for the following purposes:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>To manage your Account:</strong> to manage your registration as a user of the Service. The Personal Data you provide can give you access to different functionalities of the Service that are available to you as a registered user.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services you have purchased or of any other contract with Us through the Service.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>To contact you:</strong> To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>To provide you</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>To manage your requests:</strong> To attend and manage your requests to Us.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>For business transfers:</strong> We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                                <br />
                            </li>
                            <li className='list-disc ml-8 md:ml-14'>
                                <p><strong>For other purposes</strong>: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                                <br />
                            </li>
                        </ul>
                        <p>We may share your personal information in the following situations:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'><strong>With Service Providers:</strong> We may share your personal information with Service Providers to monitor and analyze the use of our Service, to contact you.</li>
                            <li className='list-disc ml-8 md:ml-14'><strong>For business transfers:</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                            <li className='list-disc ml-8 md:ml-14'><strong>With Affiliates:</strong> We may share your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                            <li className='list-disc ml-8 md:ml-14'><strong>With business partners:</strong> We may share your information with Our business partners to offer you certain products, services or promotions.</li>
                            <li className='list-disc ml-8 md:ml-14'><strong>With other users:</strong> when you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                            <li className='list-disc ml-8 md:ml-14'><strong>With your consent</strong>: We may disclose your personal information for any other purpose with your consent.</li>
                        </ul>
                        <br />
                        <h2 className='text-2xl font-semibold'>Retention of your Personal Data</h2>
                        <br />
                        <p>The Company will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                        <br />
                        <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                        <br />
                        <h2 className='text-2xl font-semibold'>Transfer of your Personal Data</h2>
                        <br />
                        <p>your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                        <br />
                        <p>your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                        <br />
                        <p>The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                        <br />
                        <h2 className='text-2xl font-semibold'>Delete your Personal Data</h2>
                        <br />
                        <p>you have the right to delete or request that We assist in deleting the Personal Data that We have collected about you.</p>
                        <br />
                        <p>Our Service may give you the ability to delete certain information about you from within the Service.</p>
                        <br />
                        <p>you may update, amend, or delete your information at any time by signing in to your Account, if you have one, and visiting the account settings section that allows you to manage your personal information. you may also contact Us to request access to, correct, or delete any personal information that you have provided to Us.</p>
                        <br />
                        <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                        <br />
                        <h2 className='text-2xl font-semibold'>Disclosure of your Personal Data</h2>
                        <br />
                        <h3 className='text-xl font-semibold'>Business Transactions</h3>
                        <br />
                        <p>If the Company is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                        <br />
                        <h3 className='text-xl font-semibold'>Law enforcement</h3>
                        <br />
                        <p>Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                        <br />
                        <h3 className='text-xl font-semibold'>Other legal requirements</h3>
                        <br />
                        <p>The Company may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                        <br />
                        <ul>
                            <li className='list-disc ml-8 md:ml-14'>Comply with a legal obligation</li>
                            <li className='list-disc ml-8 md:ml-14'>Protect and defend the rights or property of the Company</li>
                            <li className='list-disc ml-8 md:ml-14'>Prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li className='list-disc ml-8 md:ml-14'>Protect the personal safety of Users of the Service or the public</li>
                            <li className='list-disc ml-8 md:ml-14'>Protect against legal liability</li>
                        </ul>
                        <br />
                        <h2 className='text-2xl font-semibold'>Security of your Personal Data</h2>
                        <br />
                        <p>The security of your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect your Personal Data, We cannot guarantee its absolute security.</p>
                        <br />
                        <h1 className='text-3xl font-semibold'>Children's Privacy</h1>
                        <br />
                        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                        <br />
                        <p>If We need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, We may require your parent's consent before We collect and use that information.</p>
                        <br />
                        <h1 className='text-3xl font-semibold'>Links to Other Websites</h1>
                        <br />
                        <p>Our Service may contain links to other websites that are not operated by Us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                        <br />
                        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                        <br />
                        <h1>Changes to this Privacy Policy</h1>
                        <p>We may update Our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                        <br />
                        <p>We will let you know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
                        <br />
                        <p>you are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                        <br />
                        <h1>Contact Us</h1>
                        <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                        <br />
                        <ul>
                            <li>By email: <Link className='text-blue-700 hover:underline'>novashop@email.com</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Policy