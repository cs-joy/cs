package com.jr.cs.service.service_implements;

import com.jr.cs.entity.Project;
import com.jr.cs.repository.ProjectRepository;
import com.jr.cs.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImplements implements ProjectService {
    @Autowired
    private ProjectRepository projectRepository;
    @Override
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id).get();
    }

    @Override
    public Project updateProjectInfo(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public void deleteProjectById(Long id) {
        projectRepository.deleteById(id);
    }
}
