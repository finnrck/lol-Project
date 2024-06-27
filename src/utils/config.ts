async function getStartConfig(): Promise<any> {
    try {
        const response = await fetch("startConfig.json");
        return await response.json();
    }catch(error){
        console.error("Fehler lol: ", error);
        return "lol";
    }
    
}

export async function getLatestVersion(): Promise<string> {

    try {
        const startConfig: any = await getStartConfig();
        return startConfig.latestVersion;
    } catch (error) {
        console.error("Failed to acquire latestVersion: ", error);
        return "failed";
    }

}

export async function setLatestVersion(newVersion: string) {

    try {
        const backendUrl = "";

        await fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ latestVersion: newVersion }),
        });

    } catch (error){
        console.error("Failed save latestVersion: ", error)
    }



}