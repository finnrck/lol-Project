import { getLatestVersion } from "../../utils/config";
import { loadDataDragon } from "./loadDataDragon";

const versionURL = "https://ddragon.leagueoflegends.com/api/versions.json";

export async function checkDataVersion(){

    try{
        const response = await fetch(versionURL);
        const data = await response.json();
        const latestVersion = data[0];
        const savedVersion = getLatestVersion();

        if (latestVersion === savedVersion){
            console.log("Version uptodate");
            return;
        }
        console.log("Version", latestVersion , "is available")
        console.log("LatestVersion that was saved:",savedVersion)
        loadDataDragon(latestVersion);
    }
    catch (error){
        console.error("Failed to check data: ", error)
    }
}