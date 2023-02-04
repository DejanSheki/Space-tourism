
import DestinationNav from '../components/destinationNav';
import DestinationDetail from '../components/destinationDetail';
import data from '../assets/data.json';
import moon from '../assets/destination/image-moon.webp';

const Destinations = () => {
    return (
        <div className='bg-destination-desktop bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-between items-start'>
            <header className='flex justify-end items-end h-1/6 w-34-r mt-28'>
                <h5 className="text-xl tracking-widest font-barlow text-white uppercase"><span className="text-gray font-bold opacity-60">01</span> Pick your destination</h5>
            </header>
            <DestinationNav />
            <DestinationDetail
                img={moon}
                name={data.destinations[0].name}
                description={data.destinations[0].description}
                distance={data.destinations[0].distance}
                travel={data.destinations[0].travel}
            />
        </div>
    )
}

export default Destinations; 