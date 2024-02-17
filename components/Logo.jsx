import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo_dh.png" width={150} height={85} priority alt="" className="image-container" />
    </Link>
  );
};

export default Logo;
