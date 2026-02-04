import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Sun, 
  BookOpen, 
  ShieldCheck, 
  Video, 
  Users, 
  Smile, 
  Clock, 
  Calendar, 
  CheckCircle,
  ArrowRight,
  Heart,
  Star,
  Play
} from 'lucide-react';

// --- Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-white/50 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ subtitle, title, align = "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wider mb-2 uppercase">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
      {title}
    </h2>
    <div className={`mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:translate-y-0";
  const variants = {
    primary: "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:shadow-orange-200/50 hover:from-orange-500 hover:to-red-500",
    secondary: "bg-white text-blue-600 hover:bg-blue-50 border border-blue-100",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/20"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`absolute inset-0 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Sun size={24} fill="white" />
            </div>
            <div>
              <h1 className={`font-extrabold text-xl md:text-2xl leading-none ${scrolled ? 'text-gray-800' : 'text-gray-900'}`}>
                Muktha<span className="text-orange-500">Public</span>
              </h1>
              <p className={`text-xs font-medium tracking-wide ${scrolled ? 'text-gray-600' : 'text-gray-700'}`}>
                School
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold hover:text-orange-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:8466032289">
              <Button variant="primary" className="py-2 px-5 text-sm">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:8466032289" className="w-full">
            <Button variant="primary" className="w-full">Call Now: 8466032289</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[-100px] w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-[-100px] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-100px] left-20 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 backdrop-blur-sm border border-blue-200 text-blue-700 font-semibold text-sm mb-2">
              ✨ Admissions Open for 2024-25
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight">
              A Loving Start to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Your Child's
              </span> <br />
              Bright Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Muktha Public School offers a premium Day Care & Pre-Primary School (PP-I & PP-II) experience right here in Allwyn Colony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#admissions">
                <Button variant="primary" className="w-full sm:w-auto shadow-orange-300/50">
                  Enquire Now <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Visit Our School
                </Button>
              </a>
            </div>
            <p className="text-sm font-medium text-gray-500 mt-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} className="text-red-500" /> 
              Just 5 mins from Tulasivanam
            </p>
          </div>

          <div className="relative">
            {/* Main Hero Image Placeholder - Replace with real image */}
            <div className="relative z-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <GlassCard className="p-3 overflow-hidden">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                   {/* Abstract representation of happy kids */}
                   <svg className="w-full h-full object-cover" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                     <rect width="400" height="300" fill="#e0f2fe"/>
                     <circle cx="200" cy="150" r="80" fill="#fcd34d" opacity="0.5" />
                     <circle cx="280" cy="200" r="60" fill="#fca5a5" opacity="0.5" />
                     <circle cx="120" cy="200" r="60" fill="#86efac" opacity="0.5" />
                     <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#0f766e" fontSize="20" fontWeight="bold">Joyful Learning Environment</text>
                   </svg>
                </div>
              </GlassCard>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 md:right-10 z-20 animate-bounce-slow">
              <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Safety First</p>
                  <p className="text-sm font-bold text-gray-800">CCTV & Guards</p>
                </div>
              </div>
            </div>
            
             <div className="absolute -bottom-6 -left-6 md:left-0 z-20 animate-bounce-slow animation-delay-2000">
              <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <Smile size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Happy Kids</p>
                  <p className="text-sm font-bold text-gray-800">Play & Learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Users size={28} />, title: "Experienced Staff", desc: "Trained, caring teachers dedicated to child development.", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: <Video size={28} />, title: "CCTV Access", desc: "Complete transparency for parents to monitor their child.", color: "text-purple-500", bg: "bg-purple-100" },
    { icon: <Sun size={28} />, title: "Spacious & Airy", desc: "Well-ventilated classrooms with a pollution-free vibe.", color: "text-yellow-500", bg: "bg-yellow-100" },
    { icon: <ShieldCheck size={28} />, title: "Safe Campus", desc: "Hygienic environment with strict safety protocols.", color: "text-green-500", bg: "bg-green-100" },
    { icon: <Play size={28} />, title: "Activity Based", desc: "Curriculum focused on learning through play and doing.", color: "text-red-500", bg: "bg-red-100" },
    { icon: <Heart size={28} />, title: "Loving Care", desc: "A home away from home for your little ones.", color: "text-pink-500", bg: "bg-pink-100" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="Why Parents Choose Us" subtitle="Our Features" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <GlassCard key={idx} className="p-6 md:p-8 hover:-translate-y-2">
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-orange-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
             <GlassCard className="p-2 relative z-10 transform -rotate-2">
               <div className="rounded-2xl overflow-hidden aspect-video bg-gray-200">
                  <img src="/api/placeholder/600/400" alt="Classroom activities" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'}/>
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-300">
                    <Users size={64} />
                  </div>
               </div>
             </GlassCard>
          </div>
          
          <div className="order-1 md:order-2">
            <SectionTitle title="Nurturing Young Minds" subtitle="About Us" align="left" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At <strong className="text-gray-800">Muktha Public School</strong>, we believe every child is unique and deserves a loving, safe, and joyful environment to bloom. Our philosophy centers on holistic development, blending traditional values with modern activity-based learning.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Child-centric curriculum focusing on creativity",
                "Emphasis on social and emotional growth",
                "Transparent partnership with parents",
                "Warm, homely atmosphere"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact">
               <Button variant="outline" className="!text-orange-500 !border-orange-500 hover:!bg-orange-50">Learn More</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Day Care",
      age: "2+ Years",
      desc: "A safe haven where your child is cared for like family. Includes meals, nap time, and playful engagement.",
      icon: <Clock size={32} className="text-purple-500" />,
      color: "border-purple-200 hover:border-purple-400"
    },
    {
      title: "Pre-Primary I (PP-I)",
      age: "3-4 Years",
      desc: "Introducing structured learning through fun. Focus on language, motor skills, and social interaction.",
      icon: <Star size={32} className="text-orange-500" />,
      color: "border-orange-200 hover:border-orange-400"
    },
    {
      title: "Pre-Primary II (PP-II)",
      age: "4-5 Years",
      desc: "Preparing for formal schooling with foundation literacy, numeracy, and confidence building exercises.",
      icon: <BookOpen size={32} className="text-blue-500" />,
      color: "border-blue-200 hover:border-blue-400"
    }
  ];

  return (
    <section id="programs" className="py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Our Programs" subtitle="Curriculum" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <GlassCard key={idx} className={`p-8 text-center border-t-4 ${prog.color} flex flex-col items-center h-full`}>
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-6">
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{prog.title}</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4 tracking-wide uppercase">
                Age: {prog.age}
              </span>
              <p className="text-gray-600 mb-6 flex-grow">{prog.desc}</p>
              <a href="#admissions" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">
                Enroll Now <ArrowRight size={14} />
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="World-Class Facilities" subtitle="Campus" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {['Classrooms', 'Play Area', 'Toys & Books', 'Hygiene'].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                 {/* Placeholder for facility images */}
                 <div className={`w-full h-full bg-gradient-to-br ${idx % 2 === 0 ? 'from-green-100 to-emerald-200' : 'from-yellow-100 to-orange-200'} flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-110`}>
                    <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                       {idx === 0 && <Users className="text-emerald-600" />}
                       {idx === 1 && <Smile className="text-orange-600" />}
                       {idx === 2 && <BookOpen className="text-blue-600" />}
                       {idx === 3 && <ShieldCheck className="text-purple-600" />}
                    </div>
                    <p className="text-gray-500 text-xs italic">Tap to view</p>
                 </div>
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-bold text-lg">{item}</p>
                 </div>
              </div>
              <p className="text-center font-bold text-gray-700 mt-3 md:hidden">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl md:p-12 p-6 text-white relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Admissions Open!</h2>
              <p className="text-blue-100 text-lg mb-8">Join the Muktha family today. We are enrolling for Day Care, PP-I, and PP-II.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Enquire</h4>
                    <p className="text-blue-200 text-sm">Fill the form or call us directly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Campus</h4>
                    <p className="text-blue-200 text-sm">See our facilities and meet the teachers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Join Us</h4>
                    <p className="text-blue-200 text-sm">Complete registration and start the journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <GlassCard className="p-6 md:p-8 !bg-white/10 !border-white/20">
              <form className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Quick Enquiry</h3>
                <input type="text" placeholder="Parent's Name" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-all" />
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Child's Name" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-all" />
                   <input type="text" placeholder="Age" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-all" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-all" />
                <Button className="w-full !bg-white !text-blue-600 hover:!bg-blue-50 hover:shadow-lg">
                  Submit Enquiry
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get in Touch" subtitle="Contact Us" />
        
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="p-8 text-center flex flex-col items-center hover:scale-105">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4">Monday - Saturday (9AM - 6PM)</p>
            <a href="tel:8466032289" className="text-xl font-bold text-gray-800 hover:text-green-600">8466032289</a>
          </GlassCard>

          <GlassCard className="p-8 text-center flex flex-col items-center hover:scale-105">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">Allwyn Colony</p>
            <p className="text-gray-500 text-sm mt-1">(Near Tulasivanam)</p>
          </GlassCard>
          
           <GlassCard className="p-8 text-center flex flex-col items-center hover:scale-105">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-500 mb-4">Walk-ins welcome for admissions</p>
            <a href="#contact" className="text-blue-600 font-bold text-sm uppercase tracking-wide">Get Directions</a>
          </GlassCard>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-80 bg-gray-200 relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500 font-medium">Google Maps Embed would go here</p>
              <p className="text-sm text-gray-400">Allwyn Colony, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Sun size={18} />
              </div>
              <h2 className="font-bold text-xl">Muktha Public School</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing a safe, joyful, and activity-based learning environment for the leaders of tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-orange-400 transition-colors">Programs</a></li>
              <li><a href="#facilities" className="hover:text-orange-400 transition-colors">Facilities</a></li>
              <li><a href="#admissions" className="hover:text-orange-400 transition-colors">Admissions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span>Allwyn Colony, Near Tulasivanam, Hyderabad.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <span>+91 8466032289</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Muktha Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 md:hidden z-50 flex flex-col gap-3">
    <a 
      href="tel:8466032289" 
      className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200 animate-bounce-slow"
    >
      <Phone size={24} />
    </a>
  </div>
);

// --- Main App Component ---

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Programs />
      <Facilities />
      <Admissions />
      <Contact />
      <Footer />
      <FloatingCTA />
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </div>
  );
};

export default App;

