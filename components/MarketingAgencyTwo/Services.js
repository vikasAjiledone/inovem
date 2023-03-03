import React, { useState } from "react";
import Link from "next/link";

let text = `Are you looking to leverage social media to attract more
customers and increase production? Our team of experts at
Inovum understands your needs and develops the most
effective strategies to help you achieve your goals. With
our proven track record of success, we can generate targeted
content that resonates with your target audience and drives
measurable results, whether it be increased engagement,
website visits, or conversions. Try us today and see why
thousands of businesses have chosen Inovum as their go-to
social media marketing partner!`;

let Seo = `Struggling to get your website noticed? SEO! a process of
improving the online visibility of your website on search
engines which progressively boosts your sales. Inovum’s
committed SEO team makes sure that your content is presented
in a way that makes it simple for visitors to find the
information they need, resulting in a positive and beneficial
user experience.`;

let logo = ` We understand that logos are the first impression of your
company. Every brand has a unique story to tell. With our
technology-driven logo design services, you can create a
powerful impression and communicate your brand’s story with
ease. Our team of experts use the latest technologies to craft
logos that are not just visually appealing but also conveys
the desired message about your brand. Try us today`;

let paid = `Are you marketing your business to the right people? Paid
advertising is the best way to reach the greatest number of
people with your message. It can be done by ranking at the top
of the search engine results page and targeting pertinent
audiences based on location, demographics, interests, and
more. With a team focused on delivering results, we plan the
best channel for your goals, develop attractive collateral,
and relentlessly optimise to outperform the target return so
you can scale your campaigns. We are eager to become your
partner in producing quantifiable, long-lasting outcomes.`;

let email = ` Email marketing is a friendlier way to persuade people to buy
from you by educating them about the benefits of your
business. Inovum offers you the best email marketing strategy
that will greatly improve user engagement and assist you in
reaching your company's goals.`;

let Public = `Public relations (PR) is a critical component of any
organization's communications strategy. PR involves managing
the reputation of a company or individual by influencing
public opinion and creating a positive image. We give the
brand control over the positive information that is spread
about their enterprise. We also assist them in responding
appropriately and handling any unfavorable remarks. Our sole
responsibility as the provider is to draw attention to and
demonstrate how effective and well-known your company is. We
are firm believers in using creative concepts that come to
life across all media to convey distinct brand messages.`;

let web = ` Are you looking for a comprehensive website design solution to
meet all of your needs and more? Look no further. Our website
design service provides everything from planning and
development to launch and maintenance. Plus, we provide total
marketing support and custom programming, all in one easy
package. With us, you can take the worry out of website design
and trust that your project is in the right hands. Don't wait
- get the website you need today!`;

let branding = `Are you looking for an innovative way to give your business a
voice and personality that stands out from the competition?
Look no further! We specialize in creating memorable brands
that leave a lasting impact on the market, with a focus on
defining your brand position and proposition. With our help,
you can elevate your business and its personality to stand out
from the rest.`;

let photo = `Attention spans are shrinking, and you need to capture your
audience's attention quickly! Content is King and with our
photography and video services, you can be sure to capture
your audience’s attention instantly.. . Our solution offers
high-quality photography and video solutions. We make it easy
to create engaging visuals that tell your story in an
impactful way. With our services, you can create stunning
visuals that will boost website traffic, conversions, and
engagement. Let us help you create remarkable results!`;

let result = text.slice(0, 121);
let result1 = Seo.slice(0,121)
let result2 = logo.slice(0,121)
let result3 = paid.slice(0,121)
let result4 = email.slice(0,121)
let result5 = Public.slice(0,121)
let result6 = web.slice(0,121)
let result7 = branding.slice(0,121)
let result8 = photo.slice(0,121)

console.log(result);

const Services = () => {
  const [first, setfirst] = useState(result);
  const [seo, setSeo] = useState(result1);
  const [logo, setLogo] = useState(result2);
  const [paid, setPaid] = useState(result3);
  const [email, setEmail] = useState(result4);
  const [Public, setPublic] = useState(result5);
  const [web, setweb] = useState(result6);
  const [branding, setbranding] = useState(result7);
  const [photo, setphoto] = useState(result8);

  return (
    <>
      <div className="bg-fcfbfb ptb-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Inovum communications is a digital marketing agency that believes
              that every business needs an online presence, regardless of the
              industry in which it operates. We intend to assist your business
              by creating value where your brand starts anew.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-rocket bg-13c4a1"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>SEO Optimization</a>
                  </Link>
                </h3>
                <p>
                 {seo}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-diamond bg-6610f2"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Logo Designing</a>
                  </Link>
                </h3>
                <p>
                 {logo}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Social Media Marketing</a>
                  </Link>
                </h3>
                <p>{first}</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-target bg-fc3549"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a> Paid Advertising</a>
                  </Link>
                </h3>
                <p>
                 {paid}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-mail-open-file bg-00d280"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Email Marketing</a>
                  </Link>
                </h3>
                <p>
                  {email}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Public Relations</a>
                  </Link>
                </h3>
                <p>
                 {Public}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-global bg-fc3549"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Website Designing</a>
                  </Link>
                </h3>
                <p>
                  {web}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-display1 bg-00d280"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Branding</a>
                  </Link>
                </h3>
                <p>
                  {branding}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one white-bg text-center radius-10">
                <i className="pe-7s-photo bg-ff612f"></i>
                <h3>
                  <Link href="#">
                  {/* <Link href="/service-details"> */}
                    <a>Photography & Videography</a>
                  </Link>
                </h3>
                <p>
                  {photo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
