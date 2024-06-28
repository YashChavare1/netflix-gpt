import { ICON_PLAY, MORE_INFO } from "../utils/constants"

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[15%] pl-20 absolute px-6 text-white bg-gradient-to-r from-black">
            <h3 className="text-2xl md:text-6xl font-bold">{title}</h3>
            <p className="hidden  md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 flex">
                <button
                    className="bg-white text-black md:py-4 md:px-8 px-3 py-2 text-xl font-bold flex rounded-lg hover:bg-opacity-90 gap-2">
                    <img
                        className="w-7 h-8"
                        src={ICON_PLAY}
                        alt="Play Icon"
                    />
                    Play
                </button>
                <button
                    className="bg-gray-500 text-white p-4 px-10 text-xl font-bold flex rounded-lg bg-opacity-40 mx-3 items-center hover:bg-opacity-20 hidden md:inline-block"
                >
                    <span className="w-10 inline-block">{MORE_INFO}</span>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle