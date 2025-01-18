import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-10 bg-primary text-white">
      <div className="container mx-auto">
        <Link href={"/admin"}>Админ</Link>
      </div>
    </footer>
  );
};

export default Footer;
