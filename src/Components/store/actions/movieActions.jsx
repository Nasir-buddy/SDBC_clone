export { removemovie } from '../reducers/movieSlice';
import axios from "../../../utils/axios";
import { loadmovie } from '../reducers/movieSlice';


export const asyncloadmovie = (id) => async (dispatch, getState)=>{
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`)
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        let thebigdata = {
            details: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results ,
            translations: translations.data.translations.map(trans => trans.name),
            videos: videos.data.results.find(t => t.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN,
        }
        dispatch(loadmovie(thebigdata));
        
    } catch (error) {
        console.log("Error : ", error);
        
    }
}