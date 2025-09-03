import { PROJECTS } from "@/constants";
import GitGetThisRepo, { RepoInfo } from "@/lib/github";
import ProjectClient from "./ProjectsClient";

function isRepoInfo(project: RepoInfo | null): project is RepoInfo {
    return project != null
}

export default async function ProjectServer() {
    const projects = await Promise.all(
        Object.entries(PROJECTS).map(([repo_name, user_name]) => GitGetThisRepo(user_name, repo_name))
    );

    return <ProjectClient projects={projects.filter(isRepoInfo)} />

}