export interface RepoInfo {
    name: string,
    url: string,
    description: string,
    language: string,
}

export default async function GitGetThisRepo(user_name: string, repo_name: string): Promise<RepoInfo | null> {
    let url: string = `https://api.github.com/repos/${user_name}/${repo_name}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        });

        if (!response.ok) {
            console.log(`GITHUB API ERROR: ${response.status} -> ${response.statusText}`)
            return null
        }
        const res = await response.json();

        return {
            name: res.name,
            url: res.html_url,
            description: res.description,
            language: res.language
        };

    } catch (err) {
        console.error(`REQUEST FAILED. URL: ${url} \n ERROR: ${err}`);
        return null
    }
}