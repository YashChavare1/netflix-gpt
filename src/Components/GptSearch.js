import { POSTER_BACKGROUND } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img
                    className="object-cover h-screen md:object-contain md:w-full md:h-auto"
                    src={POSTER_BACKGROUND}
                    alt='background poster'
                />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch