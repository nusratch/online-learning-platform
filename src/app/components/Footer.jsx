function Footer() {
  
  return (
    <footer className="bg-base-200 p-5 text-center md:text-left">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <p className="font-bold">SkillSphere</p>
          <p className="text-sm">skillsphere@gmail.com</p>
        </div>

        <div className="flex gap-4">
          <p>Terms</p>
          <p>Privacy</p>
        </div>

      </div>

      <p className="text-center mt-4 text-sm">
        © 2026 All rights reserved
      </p>

    </footer>
  );
}

export default Footer;