import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="flex justify-end">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10"> <Link href="/">Return</Link></button>
        </div>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="website" className="block font-medium mb-1">
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          
        </div>
      </section>
    </div>
  );
}
