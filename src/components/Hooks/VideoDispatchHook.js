import { useContext } from "react";
import VideoDispatchContext from "../../Context/VideosDispatchContext";


export default function useVideoDispatch()
{
    return useContext(VideoDispatchContext);
} 