function Footer() {
  // Returned JSX
  return (
    <footer className="text-[1.2rem] p-10 bg-stone-100 dark:stone-950 text-stone-400 dark:text-stone-50">
      <div>
        Built by VSBroN as a practice project
        <br />
        This project is available on GitHub
        <br />
        &copy;{new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
