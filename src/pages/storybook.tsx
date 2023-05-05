import ContactMiniCard from "components/interfaces/location/ContactMiniCard/ContactMiniCard";
import OpeningHours from "components/interfaces/location/OpeningHours";
import DaysCard from "components/interfaces/location/OpeningHours/DaysCard/DaysCard";
import Week from "components/interfaces/location/OpeningHours/DaysCard/Week";
import ServicesList from "components/interfaces/location/ServicesList/ServicesList";
import TeamList from "components/interfaces/location/TeamList/TeamList";
import ServiceCard from "components/interfaces/services/ServiceCard/ServiceCard";
import Footer from "components/layouts/Footer";
import Gallery from "components/layouts/Footer/Gallery/Gallery";
import ContactCard from "components/ui/ContactCard";
import LocationCard from "components/ui/LocationCard/LocationCard";
import TeamCard from "components/ui/TeamCard/TeamCard";
import React from "react";

const storybook = () => {
  return (
    <div className="bg-pri">
      <Gallery />
      <Footer />
      <ContactMiniCard />
      <TeamList />
      <ServicesList />
      <Week />
      <DaysCard />
      <OpeningHours />
      <ServiceCard />
      <ContactCard />
      <TeamCard />
      <LocationCard />
    </div>
  );
};

export default storybook;
