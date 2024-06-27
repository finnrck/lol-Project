const dragonUrl = "https://ddragon.leagueoflegends.com/cdn/";

export async function loadDataDragon(version:string) {
    console.log("loading data for version:", version)
    const downloadUrl = `${dragonUrl}dragontail-${version}.tgz`;
    const dataFolder = `./src/assets/dragontail-${version}`;

    console.log(downloadUrl);
    console.log(dataFolder);
}