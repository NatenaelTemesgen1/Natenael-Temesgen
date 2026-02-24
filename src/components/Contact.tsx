import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_dmtwyzq', 
      'template_co02jo6', 
      form.current!, 
      'PrkToXv9BwBqyb8qk'
    )
    .then(() => {
        setIsSent(true);
        setIsSending(false);
        form.current?.reset();
        setTimeout(() => setIsSent(false), 5000); 
    }, (error) => {
        console.error(error.text);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="-mt-140 pt-4 pb-24 bg-white px-4 relative z-10">    
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm currently available for new opportunities.
          </p>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards - This uses the Mail, Phone, and MapPin icons */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Me</h4>
                <p className="text-slate-600 text-sm">natenaeltemesgen1@gmail.com</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Me</h4>
                <p className="text-slate-600 text-sm">+251 934 075 339</p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Location</h4>
                <p className="text-slate-600 text-sm">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200"
          >
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-white space-y-4 py-12">
                <CheckCircle size={64} className="text-green-400" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-slate-400">Thank you, Natenael will get back to you soon.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input name="user_name" required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input name="user_email" required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea name="message" required rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button 
                  disabled={isSending}
                  type="submit" 
                  className="md:col-span-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;