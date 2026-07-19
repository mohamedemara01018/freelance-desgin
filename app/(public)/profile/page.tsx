"use client";

import React, { useState } from 'react';
import {
  Search,
  Bell,
  Settings,
  Pencil,
  BadgeCheck,
  MapPin,
  Clock,
  GraduationCap,
  Award,
  TrendingUp,
  Star,
  Globe,
  Terminal,
  Users,
  Share2,
} from 'lucide-react';

// Components
const TopNavBar = () => (
  <nav className="bg-surface border-b border-outline-variant shadow-sm docked w-full top-0 sticky z-50">
    <div className="flex justify-between items-center w-full px-[24px] max-w-[1280px] mx-auto h-16">
      <div className="flex items-center gap-[32px]">
        <span className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-primary">GigFlow</span>
        <div className="hidden md:flex gap-6 items-center">
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Browse</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">My Jobs</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Messages</a>
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="relative hidden sm:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
            <Search size={20} />
          </span>
          <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-[14px] leading-[20px] font-['Inter'] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Search jobs..." type="text" />
        </div>
        <button className="text-on-surface-variant hover:text-primary transition-colors"><Bell size={22} /></button>
        <button className="text-on-surface-variant hover:text-primary transition-colors"><Settings size={22} /></button>
        <div className="h-8 w-8 rounded-full bg-outline-variant overflow-hidden border border-outline cursor-pointer hover:opacity-80 transition-opacity">
          <img className="w-full h-full object-cover" alt="Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNAxXMzDLRgfdELYk1mXwnoY4DSq5Axa07KRgsc1ozexKMe2SCixe4Y43dhn2FJmiCP7_xDbj_iYDvTRWV-GZvMsVT8cy550EBwTHfELQxU_DpgP0TdxjVZGLeDwPourJT5n7b7qVV9kkUy6fVmCq4toT_o_cj1kFRdv4xPuM0Cd48m4ubbtXgxU523BodPGp-L39cZXKesr6WZtyyBaekpsVaR0Qi8P_EinbAWYlkSRRafKOs55TCMWxyKxY8KUvmfcRxVaxImq4" />
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative">
    <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden relative" style={{ boxShadow: 'var(--shadow-level-2)' }}>
      <div className="absolute inset-0 bg-primary/10"></div>
      <img className="w-full h-full object-cover" alt="Cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-jYpvrrKHWq6QH0bEtD4yMSO5a8vX04LmXrNWNHQLXqiFjY4bQpqBti1DQGRg6OCFZCgtDViQabvIiy-spv4XaT8x35xqJPgwXdTGmvZ1vUsKTM8Kv2FOC3Ip4JtN8yX-6Nm_eOvunzubqcns7VCDZR9FiOPRVLwqhMZDvQQMOAN2JRoRLa5v3OwNMwQ-hg9qP0Pf96pYto8xQ6rO1hlPnP6XY-YJgKAXdouE4FACRvBUOmK7s2moHdeSvRkFrWfCXBPzD0kRjKM" />
      <button className="absolute bottom-4 right-4 bg-surface/90 hover:bg-surface text-on-surface px-4 py-2 rounded-lg flex items-center gap-2 text-[14px] leading-[20px] font-['Geist'] font-medium transition-all hover:scale-105 active:scale-95">
        <Pencil size={18} />
        Edit Cover
      </button>
    </div>
    <div className="mt-[-80px] px-6 md:px-12 flex flex-col md:flex-row items-end md:items-center gap-[16px] relative z-10">
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface overflow-hidden bg-surface" style={{ boxShadow: 'var(--shadow-level-2)' }}>
          <img className="w-full h-full object-cover" alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQJOVzDpn4HRUQ995oDK8vNKEldnD0Vb_ZKIOFY-5251x_rTcJi3UMcPejacZ6ha9vAvgsnoW77j0mfzWS5-A5LkmhDKDHbynaLIPourfV2xS9bn2CdCZhFvwV91CcMAGbQKV_iMxq_9UcSMXqIxCcxf7jZu-SuWIc0KLd2FJu2cJHwd3uFonwt8Gzqizy9w9tBiuwlyef-4kXv_YtQ1tfeh2W2NmQHcRVZSyMXA3HtxRDHWznYSvknNbzV5N6aol7B-Ghwdf82c" />
        </div>
        <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-primary border-4 border-surface" title="Online Status"></div>
      </div>
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-['Geist'] font-semibold text-[32px] leading-[40px] text-on-surface">Alex Rivera</h1>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[12px] leading-[16px] font-['Geist'] font-semibold flex items-center gap-1">
            <BadgeCheck size={14} /> Verified
          </span>
          <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[12px] leading-[16px] font-['Geist'] font-bold">Available Now</span>
        </div>
        <p className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface-variant mt-1">Senior Full-stack Developer</p>
        <div className="flex items-center gap-4 mt-2 text-on-surface-variant">
          <div className="flex items-center gap-1">
            <MapPin size={18} />
            <span className="text-[14px] leading-[20px] font-['Geist'] font-medium">London, UK</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={18} />
            <span className="text-[14px] leading-[20px] font-['Geist'] font-medium">10:45 AM local time</span>
          </div>
        </div>
      </div>
      <div className="pb-2 flex gap-3 w-full md:w-auto">
        <button
          className="flex-1 md:flex-none text-on-primary px-6 py-2.5 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium transition-all hover:opacity-90 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
            boxShadow: 'var(--shadow-level-2)',
          }}
        >
          Edit Profile
        </button>
        <button className="flex-1 md:flex-none bg-surface border border-outline-variant text-on-surface px-6 py-2.5 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium transition-all hover:bg-surface-container-low active:scale-95">Public View</button>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
    {[
      { label: "Job Success", value: "98%", bar: true },
      { label: "Total Earnings", value: "$50k+", bar: false },
      { label: "Completed Jobs", value: "42", bar: false },
      { label: "Total Hours", value: "1,240", bar: false }
    ].map((stat, i) => (
      <div
        key={i}
        className="bg-surface-container-lowest border border-outline-variant p-[16px] rounded-xl hover:border-primary/30 transition-all cursor-default"
        style={{ boxShadow: 'var(--shadow-level-2)' }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-level-3)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-level-2)'; }}
      >
        <p className="text-on-surface-variant text-[12px] leading-[16px] font-['Geist'] font-semibold uppercase tracking-wider">{stat.label}</p>
        {stat.bar ? (
          <div className="flex items-end gap-2 mt-2">
            <h3 className="font-['Geist'] font-bold text-[48px] leading-[56px] text-primary">{stat.value}</h3>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-1">
              <div className="bg-primary h-full rounded-full" style={{ width: stat.value }}></div>
            </div>
          </div>
        ) : (
          <h3 className="font-['Geist'] font-bold text-[48px] leading-[56px] text-on-surface mt-2">{stat.value}</h3>
        )}
      </div>
    ))}
  </section>
);

const OverviewSection = () => (
  <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface">Professional Overview</h2>
      <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors"><Pencil size={20} /></button>
    </div>
    <div className="space-y-4 text-on-surface-variant leading-relaxed text-[16px] font-['Inter']">
      <p>I am a highly skilled Senior Full-stack Developer with over 8 years of experience building scalable web applications and enterprise solutions. My expertise lies in architecting robust backends with Node.js and Go, paired with high-performance, pixel-perfect frontends using React and Next.js.</p>
      <p>Throughout my career, I've helped startups and established enterprises alike deliver mission-critical features, optimize infrastructure costs, and lead engineering teams toward technical excellence. I specialize in turning complex requirements into elegant, maintainable codebases.</p>
      <p>Currently focusing on modern AI integration and cloud-native architectures.</p>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface">Portfolio</h2>
      <button className="bg-primary/5 text-primary px-4 py-1.5 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium hover:bg-primary/10 transition-colors">Add Project</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: "FinTech Analytics Platform", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC006dP7cCPU9xYkTLke4v50WeOREbReSY13ify8Bbjf7mO9Nbbwkc0d0Up94-5wxsEKGZsYsrqTKy1MjOaezFlgW8hIwNpgHihigOFd4tZcDbmQqBWSEa12jBSkcZEC1JgyYZlkI2omFaaWV4qJ8WRbS0-EJbrn-Z50CHem-Wj-wWFXuO3E3HGo8aWaMyKlI5UkPw1UzgqdyoYqpm7q-wXLVyqWsd1ltnRgAHr1Jo5C_P7M2gCQuA9G_yc9z8lT2qHMltn4sVNJw", tags: ["React", "Node.js", "AWS"] },
        { title: "Luxury E-commerce Suite", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8thgLc7EPtSMDF4_n4JgmloQ4gIwKGdQR_Hf057uD3I6byoU4NmgoxEZjfbPU_IZ3-xGZf5xHeZXJI94-FGWPaxC2erAclSgAhSEV4dc7KbId4Rr5kQnrlVTER7nql1ddlzNvYJreQbP6ipSzNTMo4axvUKytldElcMVUkF4ssp1ECU-fH-XsIVnxRTcrdfh16fK6VXv69H-vv04R1WEMWpqOK6AgUP_94XEvl6F69olMwWY5oiZdT51GbBYQ06QwUfsCDoIPt9w", tags: ["Next.js", "Shopify", "Tailwind"] }
      ].map((p, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-video rounded-xl overflow-hidden mb-3 border border-outline-variant relative">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={p.title} src={p.img} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-surface text-on-surface px-4 py-2 rounded-lg text-[14px] leading-[20px] font-['Geist'] font-medium">View Details</span>
            </div>
          </div>
          <h4 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface group-hover:text-primary transition-colors">{p.title}</h4>
          <div className="flex gap-2 mt-2">
            {p.tags.map(tag => (
              <span key={tag} className="bg-surface-container-high px-2 py-0.5 rounded text-[12px] text-on-surface-variant font-['Inter']">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EmploymentEducationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
      <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-6">Employment History</h2>
      <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
        <div className="pl-8 relative hover:-translate-y-1 transition-transform cursor-default">
          <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-surface"></div>
          <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">Lead Developer | InnovateX</h4>
          <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2020 — Present</p>
          <p className="text-[14px] leading-[20px] font-['Inter'] mt-2 text-on-surface-variant">Leading a team of 12 developers in building a cloud-native SaaS platform.</p>
        </div>
        <div className="pl-8 relative hover:-translate-y-1 transition-transform cursor-default">
          <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-outline border-2 border-surface"></div>
          <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">Senior Web Engineer | Flux Media</h4>
          <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2017 — 2020</p>
        </div>
      </div>
    </section>
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8" style={{ boxShadow: 'var(--shadow-level-2)' }}>
      <h2 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-6">Education</h2>
      <div className="space-y-6">
        <div className="flex gap-4 hover:-translate-y-1 transition-transform cursor-default">
          <span className="text-primary"><GraduationCap size={24} /></span>
          <div>
            <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">BSc Computer Science</h4>
            <p className="text-[14px] leading-[20px] font-['Inter'] text-on-surface-variant">University College London</p>
            <p className="text-[12px] leading-[16px] font-['Geist'] font-semibold text-on-surface-variant">2012 — 2016</p>
          </div>
        </div>
        <div className="flex gap-4 hover:-translate-y-1 transition-transform cursor-default">
          <span className="text-primary"><Award size={24} /></span>
          <div>
            <h4 className="font-bold font-['Inter'] text-[16px] text-on-surface">AWS Certified Solutions Architect</h4>
            <p className="text-[14px] leading-[20px] font-['Inter'] text-on-surface-variant">Amazon Web Services</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const StatisticsSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden group" style={{ boxShadow: 'var(--shadow-level-2)' }}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
      <h4 className="text-[14px] leading-[20px] font-['Geist'] font-medium text-on-surface-variant uppercase mb-4">Profile Views (Last 30 Days)</h4>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-on-surface font-['Geist']">1,482</span>
        <span className="text-primary text-[12px] leading-[16px] font-['Geist'] font-bold flex items-center">
          <TrendingUp size={16} /> 12%
        </span>
      </div>
      <div className="flex items-end gap-1 mt-6 h-12">
        {['40%', '60%', '35%', '80%', '95%', '70%', '100%'].map((h, i, arr) => (
          <div key={i} className={`flex-1 rounded-t transition-all duration-500 hover:opacity-80 cursor-pointer ${i === arr.length - 1 || i === arr.length - 2 ? 'bg-primary' : i === arr.length - 3 ? 'bg-primary/40' : 'bg-primary/20'}`} style={{ height: h }}></div>
        ))}
      </div>
    </div>
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden group" style={{ boxShadow: 'var(--shadow-level-2)' }}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
      <h4 className="text-[14px] leading-[20px] font-['Geist'] font-medium text-on-surface-variant uppercase mb-4">Client Satisfaction</h4>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-primary">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <span className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface">5.0</span>
      </div>
      <p className="text-[14px] leading-[20px] font-['Inter'] text-on-surface-variant">"Alex is one of the top developers we've worked with. Communication is 10/10."</p>
      <p className="text-[12px] leading-[16px] font-['Geist'] font-bold mt-2 text-on-surface">— TechFlow CEO</p>
    </div>
  </section>
);

const SidebarSection = () => {
  const [isHiring, setIsHiring] = useState(false);
  const [isMessaging, setIsMessaging] = useState(false);

  return (
    <aside className="w-full lg:w-[320px] space-y-[32px]">
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 transition-shadow" style={{ boxShadow: 'var(--shadow-level-2)' }}>
        <h3 className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface mb-2">$85.00/hr</h3>
        <p className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] mb-6">Expert level rate for senior consulting and development.</p>
        <div className="space-y-3">
          <button
            className="w-full text-on-primary py-3 rounded-lg font-bold transition-all hover:opacity-90 active:scale-95 flex justify-center items-center h-12"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)' }}
            onClick={() => { setIsHiring(true); setTimeout(() => setIsHiring(false), 1000); }}
          >
            {isHiring ? <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" /> : "Hire Me"}
          </button>
          <button
            className="w-full bg-surface-container-high hover:bg-surface-container-highest transition-all py-3 rounded-lg font-bold text-on-surface active:scale-95 flex justify-center items-center h-12"
            onClick={() => { setIsMessaging(true); setTimeout(() => setIsMessaging(false), 1000); }}
          >
            {isMessaging ? <div className="w-5 h-5 border-2 border-on-surface/30 border-t-on-surface rounded-full animate-spin" /> : "Send Message"}
          </button>
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface">Skills</h3>
          <button className="text-on-surface-variant hover:text-primary transition-colors"><Pencil size={18} /></button>
        </div>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "AWS"].map(skill => (
            <span key={skill} className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[12px] leading-[16px] font-['Geist'] font-medium hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 cursor-default transition-all">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
        <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface mb-4">Languages</h3>
        <div className="space-y-3">
          {[
            { lang: "English", level: "Native", highlight: true },
            { lang: "Spanish", level: "Bilingual", highlight: true },
            { lang: "German", level: "Basic", highlight: false }
          ].map(l => (
            <div key={l.lang} className="flex justify-between items-center group cursor-default hover:bg-primary/5 p-1 -mx-1 rounded transition-colors">
              <span className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] group-hover:text-on-surface">{l.lang}</span>
              <span className={`text-[12px] leading-[16px] font-['Geist'] ${l.highlight ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                {l.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6" style={{ boxShadow: 'var(--shadow-level-2)' }}>
        <h3 className="font-bold text-[18px] leading-[28px] font-['Inter'] text-on-surface mb-4">On the Web</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Portfolio", icon: <Globe size={20} /> },
            { label: "GitHub", icon: <Terminal size={20} /> },
            { label: "LinkedIn", icon: <Users size={20} /> },
            { label: "Dribbble", icon: <Share2 size={20} /> }
          ].map(link => (
            <a key={link.label} className="flex items-center gap-2 p-2 rounded-lg border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group active:scale-95" href="#">
              <span className="text-on-surface-variant group-hover:text-primary transition-colors">{link.icon}</span>
              <span className="text-[12px] leading-[16px] font-['Geist'] font-bold text-on-surface">{link.label}</span>
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
};

const Footer = () => (
  <footer className="bg-surface-container-lowest border-t border-outline-variant mt-[32px]">
    <div className="max-w-[1280px] mx-auto px-[24px] py-[32px] flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <span className="font-['Geist'] font-semibold text-[24px] leading-[32px] text-on-surface">GigFlow</span>
        <p className="text-on-surface-variant text-[14px] leading-[20px] font-['Inter'] mt-2">© 2024 GigFlow Global Inc. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["Sitemap", "Privacy Policy", "Terms of Service", "Cookie Settings"].map(link => (
          <a key={link} className="text-on-surface-variant hover:text-primary transition-colors text-[12px] leading-[16px] font-['Geist'] font-semibold uppercase tracking-wide" href="#">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function FreelancerProfile() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-['Inter'] selection:bg-primary/20">
      <TopNavBar />
      <main className="wrapper mx-auto px-[24px] py-[32px] space-y-[32px]">
        <HeroSection />
        <StatsSection />
        <div className="flex flex-col lg:flex-row gap-[24px]">
          <div className="flex-1 space-y-[32px]">
            <OverviewSection />
            <PortfolioSection />
            <EmploymentEducationSection />
            <StatisticsSection />
          </div>
          <SidebarSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}