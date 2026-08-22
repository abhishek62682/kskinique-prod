// Hero
// Contact Information
// Contact Form
// Location Map
// Frequently Asked Questions (FAQ) (Optional)


import ContactSection from "../components/contact/ContactSection"
import FaqSection from "../components/home/FaqSection"
import PageHero from "../components/common/PageHero"



const ContactUs = () => {
  return (
     <div className="page-content bg-surface-light relative z-[10] ">

    <PageHero
  breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
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