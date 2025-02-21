export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Contact</h1>
        <form name="contact" method="POST" data-netlify="true" className="mt-6 space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Name" className="p-2 w-full bg-gray-800 rounded" />
          <input type="email" name="email" placeholder="Email" className="p-2 w-full bg-gray-800 rounded" />
          <textarea name="message" placeholder="What's your nudge?" className="p-2 w-full bg-gray-800 rounded" />
          <button type="submit" className="px-4 py-2 bg-blue-500 rounded">Send</button>
        </form>
      </section>
    </main>
  );
} 