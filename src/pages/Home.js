
const Home = () => {
    return (
        <main className="bg-home-desktop md:bg-home-tablet sm:bg-home-mobile bg-cover bg-center bg-no-repeat h-screen flex justify-around items-end w-full md:flex-col">
            <section className="flex flex-col justify-center text-white w-1/3 mx-40 mb-40">
                <h5 className="text-xl tracking-widest font-barlow text-lightBlue">SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className="text-5xl font-bellefair">SPACE</h1>
                <p className="text-base text-lightBlue pr-2 tracking-wider leading-7">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </section>
            <section className="w-2/5 md:w-full flex justify-center mb-40">
                <button className="bg-white w-64 h-64 rounded-full text-2xl font-bellefair tracking-wider hover:shadow-3xl">EXPLORE</button>
            </section>
        </main>
    )
}

export default Home;