import { useState, useRef, useEffect } from "react";

export default function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={menuRef} className="relative w-full sm:w-auto">
      {/* Main Resume Button – SAME STYLE AS LEARN MORE */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
      >
        <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
          <span className="relative flex items-center justify-center gap-2 text-white font-medium">
            <i className="fas fa-file-alt"></i>
            Resume
            <i
              className={`fas fa-chevron-down transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 sm:left-auto sm:right-0 mt-3 w-full sm:w-52 rounded-xl bg-gray-900 border border-gray-700 shadow-xl backdrop-blur-sm z-50 overflow-hidden animate__animated animate__fadeIn">
          {/* View */}
          <a
            href="/Zohaib_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
          >
            <i className="fas fa-eye text-blue-400"></i>
            View Resume
          </a>

          {/* Download */}
          <a
            href="/Zohaib_CV.pdf"
            download="Zohaib_CV.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition"
          >
            <i className="fas fa-download text-green-400"></i>
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
}
