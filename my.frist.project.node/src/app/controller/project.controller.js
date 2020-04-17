class ProjectController {
  async store(request, response) {
    const { title, owner } = request.body;

    projects.push(title);

    return response.status(200).json({ projects });
  }
}

export default new ProjectController();
