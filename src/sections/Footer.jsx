const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Ozair007"
          target="_blank"
          alt="github"
          className="social-icon cursor-pointer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/ozair-aziz-a09656147/"
          target="_blank"
          alt="linkedin"
          className="social-icon cursor-pointer"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.instagram.com/ozaiir_aziiz/"
          target="_blank"
          alt="instagram"
          className="social-icon cursor-pointer"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 Ozair Aziz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
