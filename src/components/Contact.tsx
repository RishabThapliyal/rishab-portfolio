export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>

        <p className="text-zinc-600 max-w-xl mx-auto leading-7">
          I'm currently open to full-time roles and internships. If you have an
          opportunity or just want to connect, feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 text-sm font-medium">
          <a
            href="mailto:rishabthapliyal04@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/rishab-thapliyal-b72514221/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rishabthapliyal"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
