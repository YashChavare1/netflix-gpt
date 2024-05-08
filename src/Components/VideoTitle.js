import { ICON_PLAY, MORE_INFO } from "../utils/constants"

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[15%] pl-20 absolute text-white bg-gradient-to-r from-black">
            <h3 className="text-6xl font-bold">{title}</h3>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="my-4 flex">
                <button
                    className="bg-white text-black p-4 px-8 text-xl font-bold flex rounded-lg hover:bg-opacity-90 gap-2">
                    <img
                        className="w-10 h-8"
                        src={ICON_PLAY}
                        alt="Play Icon"
                    />
                    Play
                </button>
                <button
                    className="bg-gray-500 text-white p-4 px-10 text-xl font-bold flex rounded-lg bg-opacity-40 mx-3 items-center hover:bg-opacity-20"
                >
                    <span className="w-10">{MORE_INFO}</span>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle