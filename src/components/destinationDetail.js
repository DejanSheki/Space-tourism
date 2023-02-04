
const DestinationDetail = (props) => {
    return (
        <main className="flex justify-around items-center h-4/6">
            <section className='w-6/12 flex justify-center ml-14'>
                <img src={props.img} alt="moon" />
            </section>
            <section className='flex flex-col justify-center w-4/12 h-full pr-6'>
                <h1 className='text-white font-bellefair text-4xl'>{props.name}</h1>
                <p className='text-base text-lightBlue tracking-wider leading-7'>{props.description}</p>
                <div className="bg-gray h-px w-full mt-9 mb-6"></div>
                <div className='flex items-end'>
                    <div>
                        <p className='text-lightBlue text-sm font-barlow tracking-widest'>AVG. DISTANCE</p>
                        <h5 className='text-white font-bellefair text-xl'>{props.distance}</h5>
                    </div>
                    <div className='ml-16'>
                        <p className='text-lightBlue text-sm font-barlow uppercase tracking-widest'>Est. travel time</p>
                        <h5 className='text-white font-bellefair text-xl'>{props.travel}</h5>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DestinationDetail;