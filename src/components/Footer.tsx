export default function Footer() {
  return (
    <footer className="bg-[#050505] py-12 text-center border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-serif mb-5">Shubhda <span className="text-gold">Studios</span></div>
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://www.instagram.com/shubhdastudios/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full transition-all duration-300 hover:border-gold hover:text-gold"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@shubhdastudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full transition-all duration-300 hover:border-gold hover:text-gold"><i className="fab fa-youtube"></i></a>
        </div>
        <p className="text-gray-500 text-sm">Crafting Memories in Narnaul & Beyond</p>
        <div className="text-gray-600 text-xs mt-5 pt-5 border-t border-white/5">
          &copy; {new Date().getFullYear()} Shubhda Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
