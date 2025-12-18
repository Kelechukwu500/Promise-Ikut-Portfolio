import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20 pt-28 sm:pt-32 lg:pt-36">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-10 text-center">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-600">
              Get in Touch
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I am always open to discussing new opportunities, supporting your
              projects, or providing clarity on any inquiries you may have.
              Whether you prefer email, a quick call, or filling out the form, I
              am available and ready to connect with you.
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span>Akoka, Yaba, Lagos, Nigeria</span>
              </p>

              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-yellow-600 text-xl" />
                <span>
                  <a
                    href="mailto:promiseikut766@gmail.com"
                    className="text-blue-600"
                  >
                    promiseikut766@gmail.com
                  </a>
                </span>
              </p>

              <p className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <span>
                  <a href="tel:+2347067065403" className="text-blue-600">
                    +234 706 706 5403
                  </a>
                </span>
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 border rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.312427120745!2d3.377862414769406!3d6.524348495287061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf49e907a7e33%3A0x7c44a6c2ff9e2ef6!2sAkoka%2C%20Yaba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697380000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
            >
              {success && (
                <p className="text-green-600 font-semibold text-center">
                  Your message has been sent successfully!
                </p>
              )}

              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
