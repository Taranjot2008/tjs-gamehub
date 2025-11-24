export default function Header() {
    return (
        <header className="text-center mt-8 space-y-4 text-black w-full mb-20 max-sm:mb-12">
            <h1 className="text-8xl font-bold text-(--heading-color) font-(family-name:--heading-font)
            drop-shadow-fuchsia-50 max-[550px]:text-5xl">Gamables</h1>
            <p className="text-lg font-(family-name:--secondary-font) text-[#fafafa]
            max-[550px]:text-xs px-3">Your ultimate gaming destination. Game on, anytime, anywhere!</p>
        </header>
    )
}