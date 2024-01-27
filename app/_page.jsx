import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CurrentLive from "@/components/CurrentLive";
import LatestBuys from "@/components/LatestBuys";
import Newsletter from "@/components/Newsletter";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <main className="container-padding">
      <Banner />
      <Card />
      <CurrentLive />
      <Upcoming />
      <LatestBuys />
      <Newsletter />
    </main>
  );
}
