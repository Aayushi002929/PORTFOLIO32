import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="mailto:aayushi003bteceai23@igdtuw.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/aayuushii-punia-870ba32a6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://www.github.com/Aayushi002929/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2025 Aayushi. All rights reserved.</p>
              <p className="text-sm">Built with ❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
