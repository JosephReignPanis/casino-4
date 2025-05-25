import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-zinc-600 flex flex-col justify-center items-center p-5 text-sm text-center">
      <Image
        src="/f_partners.png"
        width={1020}
        height={1000}
        alt="footer"
        className="pb-4"
      />
      <p className="max-w-screen-md px-4">
        Our website is a company operated under a formal license. You can enjoy
        a variety of games online, and we provide the best quality and the best
        mobile version. It also offers high odds and introduces new events every
        day. Start enjoying thousands of games today, including sports games,
        live casino slot games, mini games, and virtual games!
      </p>
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="footer logo"
        className="pt-4"
      />
    </footer>
  );
}
