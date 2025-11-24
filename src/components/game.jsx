export default function Game(props) {
    return (
        <div className={`entry-container relative flex flex-col items-center rounded-2xl w-sm
        max-sm:w-3/4 h-96`}>
            <div
                style={{ backgroundImage: `url(${props.image})` }}
                className="absolute inset-0 bg-cover bg-center rounded-2xl entry-bg"
            />

            <div className="absolute rounded-2xl bg-gray-900/75 z-10 h-full w-full entry-overlay"></div>

            <div className="entry-text relative z-20 flex flex-col items-center justify-end p-8 h-full w-full">
                    
                <h3 className="entry-name text-2xl font-bold text-(--heading-color)
                max-[485px]:text-xl">{props.name}</h3>
                <p className="entry-description text-sm text-white
                max-[485px]:text-xs">{props.description}</p>

                <div className="link-button relative z-20 px-7 py-2 flex justify-center items-center rounded-full
                ring-2 ring-sky-400 hover:bg-sky-400">
                    <a href={props.link} target="_blank" className="text-md text-white
                    font-semibold">
                    Let's Play</a>
                </div>
            </div>
            
            
        </div>
    )
}