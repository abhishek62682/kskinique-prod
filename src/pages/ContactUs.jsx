// Hero
// Contact Information
// Contact Form
// Location Map
// Frequently Asked Questions (FAQ) (Optional)


import ContactSection from "../components/contact/ContactSection"
import FaqSection from "../components/home/FaqSection"
import PageHero from "../components/common/PageHero"
import SEO from "../components/seo/SEO"
import { buildBreadcrumbSchema } from "../config/seo"

const contactBreadcrumbs = [{ label: "Home", to: "/" }, { label: "Contact" }];

const ContactUs = () => {
  return (
     <div className="page-content bg-surface-light relative z-[10] ">

    <SEO
      title="Contact Skinique Dermatology | Book a Consultation"
      description="Contact Skinique Dermatology & Aesthetics in Navi Mumbai to enquire about skin, hair and laser treatments or book a consultation."
      canonical="/contact"
      schema={buildBreadcrumbSchema(contactBreadcrumbs, "/contact")}
    />

    <PageHero
  breadcrumbs={contactBreadcrumbs}
  badgeText="Get In Touch"
  heading={
    <>
      Let's talk about your <span className="text-primary-label">skin</span> goals.
    </>
  }
  description="Have a question or ready to book a consultation? Reach out and our team will get back to you shortly."
  descriptionMaxWidth="max-w-[560px]"
/>


    <div className="spacer ">

      <ContactSection />

      <FaqSection />

    </div>
   </div>
  )
}

export default ContactUs