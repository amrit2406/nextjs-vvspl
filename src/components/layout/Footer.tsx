import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            VVSPL<span className="text-[#FF7E00]">TECH</span>
          </h2>
          <p className="mt-4 text-sm">
            We build scalable software and AI-powered solutions to help businesses grow smarter.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>AI Solutions</li>
            <li>SaaS Products</li>
            <li>Automation</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} VVSPLTECH. All rights reserved.
      </div>
    </footer>
  );
}