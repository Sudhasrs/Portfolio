import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  animatedBlobs,
  certificates,
  experiences,
  personalInfo,
  skills,
  socialLinks,
} from "./constants/data";
import {
  Trophy,
  User,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  Download,
  Award,
  Send,
  Heart,
} from "lucide-react";
import NavBar from "./components/NavBar";
import resumePDF from "./assets/Ragasudha_Sankar_Resume.pdf";

function App() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, ease: "easeOut", duration: 0.7 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.22, 1, 0.36, 1], duration: 0.5 },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Ragasudha_Sankar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 font-mono overflow-hidden">
        {animatedBlobs.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${blob.className}`}
            animate={blob.animate}
            transistion={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          ></motion.div>
        ))}
        <nav className="absolute top-0 left-0 right-0 text-sm text-white bg-[#0a0a0a]/80 backdrop-blur-md z-50 px-4 py-2 border-b border-white/10">
          <NavBar scrollToSection={scrollToSection} />
        </nav>
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="main-grid mt-20 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="card card-cyan md:col-span-1 row-span-4 flex flex-col justify-center gap-3"
          >
            <h2 className="user-name flex items-center">
              <p>{personalInfo.name}</p>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {personalInfo.role}
            </p>
            <p>{personalInfo.experience} Experience</p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <Mail size={20} className="text-green-400" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <Phone size={20} className="text-green-400" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <MapPin size={20} className="text-green-400" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            id="about"
            className="card card-green md:col-span-1 row-span-5 flex flex-col justify-center gap-3"
          >
            <h2 className="section-title">
              <User size={24} className="inline-block mb-1" />
              Get to know me
            </h2>
            <div className="text-slate-300 text-sm leading-relaxed space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            id="skills"
            className="mt-10 card card-violet md:col-span-1 row-span-3 flex flex-col gap-4"
          >
            <h2 className="section-title flex items-center">
              <Code size={24} className="inline-block mb-1" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-md bg-white/10 px-3 py-2 rounded-lg border border-white/20 text-slate-300 hover:border-green-400/50 hover:bg-white/15 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            id="experience"
            className="mt-10 card card-orange md:col-span-1 row-span-6 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Briefcase size={24} className="inline-block mb-1" />
              Experience
            </h2>
            <div className="space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-orange-400/50 transition-colors"
                >
                  <h3 className="text-md font-semibold text-orange-400">
                    {exp.title}
                  </h3>
                  <p className="text-md text-slate-400 mt-1">
                    {exp.company} • {exp.period}
                  </p>
                  {Array.isArray(exp.desc) ? (
                    <ul className="mt-2 text-sm text-slate-300 leading-relaxed list-disc list-inside space-y-1">
                      {exp.desc.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-md text-slate-300 leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                  {exp.stacks && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.stacks.map((stack, stackIndex) => (
                        <span
                          key={stackIndex}
                          className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded border border-orange-400/30"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-10 card card-yellow md:col-span-1 row-span-3 flex flex-col justify-center gap-4"
          >
            <h2 className="section-title">Social Links</h2>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-colors ${social.color}`}
                  >
                    <Icon size={20} />
                    <span className="text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            id="resume"
            className="mt-10 card card-blue md:col-span-1 row-span-2 flex flex-col justify-center gap-4"
          >
            <h2 className="section-title">
              <Download size={24} className="inline-block mb-1" />
              Resume
            </h2>
            <button
              onClick={handleDownloadResume}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            id="contact"
            className="mt-10 card card-cyan md:col-span-1 row-span-4 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Send size={24} className="inline-block mb-1" />
              Contact Me
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-lg transition-colors font-semibold"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={itemVariants}
            id="certifications"
            className="mt-10 card card-purple md:col-span-1 row-span-3 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Award size={24} className="inline-block mb-1" />
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-pink-400/50 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-pink-400">
                    {cert}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.main>
        <footer className="absolute bottom-4 left-0 right-0 text-center text-slate-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © 2026 Made with{" "}
            <Heart size={16} className="text-red-500 fill-red-500" /> using
            React & Tailwind CSS
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
