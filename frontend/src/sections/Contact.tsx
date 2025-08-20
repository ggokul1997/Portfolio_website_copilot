
const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-24 glass fade-in" tabIndex={-1} aria-labelledby="contact-heading">
      <div className="container max-w-xl mx-auto px-4">
        <h2 id="contact-heading" className="text-3xl font-bold mb-8 text-primary">Contact</h2>
        <form
          className="flex flex-col gap-4"
          action="https://formspree.io/f/xwpqdqgk"
          method="POST"
        >
          <input
            className="rounded-glass bg-muted/60 border border-muted px-4 py-3 text-white focus-visible:outline-primary"
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            required
          />
          <input
            className="rounded-glass bg-muted/60 border border-muted px-4 py-3 text-white focus-visible:outline-primary"
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
          />
          <textarea
            className="rounded-glass bg-muted/60 border border-muted px-4 py-3 text-white focus-visible:outline-primary min-h-[120px]"
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-glass bg-primary text-white font-semibold shadow-glass hover:bg-red-700 focus-visible:outline-primary transition"
          >
            Send Message
          </button>
          <a
            href="mailto:ggokulcr77@gmail.com"
            className="text-primary underline text-sm mt-2"
            tabIndex={0}
          >
            Or email me directly
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
