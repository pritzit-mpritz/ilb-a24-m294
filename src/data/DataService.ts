export async function performGet(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching from " + url + ": " + response.status + "");
    }
    const data = await response.json();
    console.log("Fetched data: ", data);
    return data;
}

export async function performPost(url: string, data: unknown) {
    const jsonString = JSON.stringify(data);

    console.log(jsonString);
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonString
    })

    if(!result){
        console.error(`Error posting to [${url}]: ${result}`, data);
        throw new Error("Error posting to " + url);
    }

    return await result.json();
}

export async function performDelete(url: string) {
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        throw new Error("Error deleting from " + url + ": " + response.status + "");
    }
}