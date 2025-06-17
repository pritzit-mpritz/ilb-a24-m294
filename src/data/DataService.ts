async function performRequest(method: "POST" | "PUT" | "GET" | "DELETE", url: string, data: unknown | undefined = undefined) {
    const jsonString = data ? JSON.stringify(data) : undefined;

    console.log(jsonString);
    const result = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonString
    })

    if (!result) {
        const message = `Error executing request to [${method}] [${url}]: ${result}`;
        console.error(message, data);
        throw new Error(message);
    }

    return await result.json();
}

export async function performGet(url: string) {
    return await performRequest("GET", url);
}

export async function performPost(url: string, data: unknown) {
    return await performRequest("POST", url, data);
}

export async function performPut(url: string, data: unknown) {
    return await performRequest("PUT", url, data);
}

export async function performDelete(url: string) {
    return await performRequest("DELETE", url);
}