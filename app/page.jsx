import BannerSecond from "@/components/BannerSecond";
import Media from "@/components/Media";
import Newsletter from "@/components/Newsletter";
import NftMining from "@/components/NftMining";

export default function Home() {
  return (
    <main className="container-padding">
      <BannerSecond />
      <NftMining />
      <Media />
      <Newsletter />
    </main>
  );
}
