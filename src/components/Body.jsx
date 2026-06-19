import {HeroSection} from './HeroSection.jsx';
import {BrowseByCategory} from './browse_by_category.jsx';
import {Division1} from './Division1.jsx';
import {FeaturesDeals} from './FeaturesDeals.jsx';
import { Eat } from './Eat.jsx';
import { OurCollectiveImpact } from './Our_collective_Impact.jsx';
import { ReadyToRescue } from './Ready_to_rescue.jsx';


export const Body = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <HeroSection />
            <Division1 />
            <FeaturesDeals />
            <BrowseByCategory />
            <OurCollectiveImpact/>
            <Eat/>
            <ReadyToRescue/>
        </div>
    )
}