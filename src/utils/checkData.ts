import axios from "axios";
import fs from "fs-extra";
import tar from "tar";
import path from "path";

const versionUrl = "https://ddragon.leagueoflegends.com/api/versions.json";
const baseUrl = "https://ddragon.leagueoflegends.com/cdn/";
const configFile = "./startConfig.json";

export const checkData = async (): Promise<void> => {
    try {
    const response = await axios.get<string[]>(versionUrl);
    const latestVersion = response.data[0];

    let config: { latestVersion?: string } = {};
    if (fs.existsSync(configFile)) {
        config = await fs.readJson(configFile);
        console.log("Config states: ", config);
    }

    if (config.latestVersion === latestVersion) {
        console.log("Data already uptodate");
        return;
    }

    const downloadUrl = `${baseUrl}dragontail-${latestVersion}.tgz`;
    const downloadPath = `/data/dragontail-${latestVersion}.tgz`;

    const writer = fs.createWriteStream(downloadPath);
    const downloadResponse = await axios({
        url: downloadUrl,
        method: "GET",
        responseType: "stream",
    });

    downloadResponse.data.pipe(writer);

    writer.on("finish", async () => {
        const extractPath = `/data/${latestVersion}`;
        await tar.x({
            file: downloadPath,
            cwd: "./data",
            filter: (filePath) => filePath.includes("data/images/champion"),
            strip: 1,
        });

        const championImagesPath = path.join(extractPath, 'data', 'images', 'champion');
        const targetPath = "./championImages"
        await fs.emptyDir(targetPath); 
        await fs.copy(championImagesPath, targetPath); 

        await fs.remove(downloadPath);
        await fs.remove(extractPath);

    
        config.latestVersion = latestVersion;
        await fs.writeJson(configFile, config);

        console.log("Data updated to version: ", latestVersion);
    });
    writer.on("error", (error) => {
        console.error("Download error: ", error)
    })
    } catch (error){
        console.error("Fetching Data or Version failed: ", error)
    }
};
