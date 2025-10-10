import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Rocket, Calendar, BookOpen, ChevronRight, Check, Mail, MapPin, HelpCircle, Linkedin, ExternalLink } from 'lucide-react';
import ContactForm from './components/ContactForm';

const App = () => {
  const CALENDAR_LINK = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0PSO0iD617Y9PVQEH9tAQiqCl795tLSaWIyq7tMNwiWEG4FU4cZ936P5jdAMT52wYPltH1FBkO";
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      title: "Academic Foundation + Life Skills Bootcamp",
      icon: <Rocket className="w-8 h-8" />,
      price: "$165",
      sessions: "4 × 1-hour sessions",
      savings: "save $15",
      description: "Perfect for: Getting started, specific assignments, building core skills",
      features: [
        "Your personal thinking style",
        "Flow state creation",
        "Strategic communication",
        "Reflective growth practices"
      ],
      color: "from-blue-600 to-indigo-600",
      highlight: false
    },
    {
      title: "Research Mastery + Professional Readiness",
      icon: <BookOpen className="w-8 h-8" />,
      price: "$210",
      sessions: "3 × 2-hour sessions",
      savings: "save $15",
      description: "Perfect for: Complex research projects, major papers, thesis work",
      features: [
        "Information intelligence & source evaluation",
        "Synthesis & strategic frameworks",
        "Professional communication skills"
      ],
      color: "from-blue-600 to-indigo-700",
      highlight: true
    },
    {
      title: "Term Partnership: Academic + Career Development",
      icon: <Zap className="w-8 h-8" />,
      price: "$280/mo",
      sessions: "4 hours + async support",
      savings: "",
      description: "Perfect for: Ongoing support throughout semester",
      features: [
        "2 × 2-hour sessions per month (flexible scheduling)",
        "Unlimited email check-ins",
        "Monthly life skills reflection",
        "Resource library access"
      ],
      color: "from-purple-600 to-pink-600",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-indigo-900/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5 text-white">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="font-light text-sm tracking-widest">
                ACADEMIC <span className="text-blue-400">+</span> <span className="font-semibold">BEYOND</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#services" className="text-white hover:text-indigo-200 transition-colors">
                Services
              </a>
              <a href="#about" className="text-white hover:text-indigo-200 transition-colors">
                About
              </a>
              <Link to="/blog" className="text-white hover:text-indigo-200 transition-colors">
                Blog
              </Link>
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight animate-fade-in">
              ACADEMIC + BEYOND
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-200 mb-8 font-light animate-fade-in-delay">
              Skills for school. Tools for life.
            </p>
            <p className="text-lg md:text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Academic writing mentorship that teaches thinking skills for life success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <a
                href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer"
                className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="relative z-10">
          <svg className="w-full h-16 md:h-24 fill-current text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Brain className="w-10 h-10" />,
              title: "Metacognition",
              subtitle: "Know Your Mind",
              description: "Learn how your brain works best and optimize your thinking processes."
            },
            {
              icon: <Zap className="w-10 h-10" />,
              title: "Flow States",
              subtitle: "Find Your Flow",
              description: "Create conditions for deep focus and sustained productivity."
            },
            {
              icon: <Rocket className="w-10 h-10" />,
              title: "Transferable Skills",
              subtitle: "Beyond Academics",
              description: "Every skill you learn applies to professional and personal success."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              id={`value-${idx}`}
              data-animate
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible[`value-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.title}</h3>
              <p className="text-indigo-600 font-medium mb-3">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              id="about-title"
              data-animate
              className={`text-4xl md:text-5xl font-light text-indigo-900 mb-8 text-center transition-all duration-700 ${
                isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Hi, I'm Sanaphay Rattanavong
            </h2>

            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <img
                src="/profile.jpg"
                alt="Sanaphay Rattanavong"
                className="w-48 h-48 rounded-full object-cover shadow-xl ring-4 ring-indigo-100"
              />
            </div>

            <div
              id="about-content"
              data-animate
              className={`space-y-6 text-lg text-gray-700 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p>
                As a cultural writer with expertise across multiple disciplines, I bring a non-parochial perspective to academic writing mentorship. I understand the challenges international students face—not just with language, but with navigating different academic cultures and communication expectations.
              </p>

              <p>
                My approach goes beyond traditional tutoring. I teach <span className="font-semibold text-indigo-700">metacognition</span> (thinking about thinking) and help students develop <span className="font-semibold text-indigo-700">flow states</span> for optimal learning and productivity.
              </p>

              <p className="text-xl font-medium text-indigo-900">
                Every skill you learn with me transfers to your professional career and personal life. This isn't just about better grades—it's about becoming a better thinker.
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mt-8">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Background:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Extensive experience in creative writing pedagogy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Expertise in metacognitive learning strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Cultural writing across diverse subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Serving Toronto in-person & students worldwide online</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Struggling with Academic Writing?</h2>
            <p className="text-2xl mb-8 text-indigo-200">The problem isn't your English—it's the strategy.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-xl mb-6 leading-relaxed">Most tutoring teaches you <span className="font-bold">what to write</span>.</p>
              <p className="text-2xl font-light text-indigo-100">We teach you <span className="font-bold text-white">how to think</span>.</p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-light mb-6">You'll Learn Skills That Transfer:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Academic papers & research",
                  "Professional presentations",
                  "Career success strategies",
                  "Personal goal achievement"
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            id="services-title"
            data-animate
            className={`text-4xl md:text-5xl font-light text-indigo-900 mb-4 text-center transition-all duration-700 ${
              isVisible['services-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 text-center mb-2">Select the option that matches your goals and timeline</p>
          <p className="text-sm text-gray-500 text-center mb-16">All prices in CAD</p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={`service-${idx}`}
                data-animate
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden ${
                  service.highlight ? 'ring-4 ring-blue-600 md:scale-105' : ''
                } ${
                  isVisible[`service-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    MOST POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-indigo-900">{service.price}</span>
                      {service.savings && (
                        <span className="text-green-600 font-medium">({service.savings})</span>
                      )}
                    </div>
                    <p className="text-gray-600 font-medium">{service.sessions}</p>
                  </div>

                  <p className="text-indigo-700 font-medium mb-6 pb-6 border-b border-gray-200">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      service.highlight
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Single Sessions */}
          <div
            id="single-sessions"
            data-animate
            className={`mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 transition-all duration-700 ${
              isVisible['single-sessions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-purple-900 mb-4">Single Sessions</h3>
              <p className="text-xl text-purple-700 mb-6">$45/hour or $75/2 hours</p>
              <p className="text-gray-700 text-lg">
                Great for: One-off questions, quick feedback, trying before committing to a package
              </p>
              <a
                href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-6 bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Book Single Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-indigo-900 mb-16 text-center">
              Your Journey to Academic Excellence
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Free 30-Minute Consultation",
                  description: "We assess your challenges, demonstrate strategies, and find the right fit"
                },
                {
                  step: "2",
                  title: "Choose Your Package",
                  description: "Select the option that matches your goals and timeline"
                },
                {
                  step: "3",
                  title: "Start Learning",
                  description: "In-person (Toronto) or online via Google Meet"
                },
                {
                  step: "4",
                  title: "Build Skills for Life",
                  description: "Watch your academic confidence and life skills grow together"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  id={`step-${idx}`}
                  data-animate
                  className={`flex gap-6 items-start transition-all duration-700 ${
                    isVisible[`step-${idx}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-indigo-900 mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Think Differently?</h2>
            <p className="text-xl text-indigo-200 mb-8">
              Book your free 30-minute consultation today
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold mb-6">In this session, you'll:</h3>
              <ul className="space-y-4 text-left max-w-xl mx-auto text-lg">
                {[
                  "Discover your learning style",
                  "Get immediate strategies you can use",
                  "Explore how skills transfer to your career",
                  "Find the right package for your needs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-indigo-200 italic">
                No pressure. Just valuable insights you can use whether or not we work together.
              </p>
            </div>

            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-indigo-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Calendar className="w-6 h-6" />
              Book Your Free Consultation
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 mb-8 flex items-center gap-2">
                  <HelpCircle className="w-8 h-8 text-indigo-600" />
                  Common Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "What does a typical session look like?",
                      a: "Sessions are conversational and collaborative. We'll work through your specific challenges, develop strategies together, and practice new skills in real-time."
                    },
                    {
                      q: "Do you edit my work for me?",
                      a: "No—I teach you how to edit and improve your own work. You'll leave with skills, not just a corrected paper."
                    },
                    {
                      q: "What should I bring to my first session?",
                      a: "Just your current assignment or project (if you have one) and an open mind! We'll start where you are."
                    },
                    {
                      q: "Are sessions in-person or online?",
                      a: "Both! I offer in-person sessions in Toronto and online sessions via Google Meet for students worldwide."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="font-semibold text-indigo-900 mb-2">{item.q}</h3>
                      <p className="text-gray-600">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm
                  title="Still Have Questions?"
                  subtitle="I'm here to help!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-light mb-4">ACADEMIC + BEYOND</h3>
            <p className="text-xl text-indigo-300 mb-8">Skills for school. Tools for life.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-gray-300">
              <a href="mailto:academicplusbeyond@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
                academicplusbeyond@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Serving Toronto & students worldwide
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Perfect for international students at UofT, York, TMU, George Brown & beyond.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/rattanavong/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-800 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://sanaphay.portfolio.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-800 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Writing Portfolio</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
              © 2025 Academic + Beyond
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
