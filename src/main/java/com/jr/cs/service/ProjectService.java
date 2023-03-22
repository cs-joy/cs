package com.jr.cs.service;

import com.jr.cs.entity.Project;

import java.util.List;

public interface ProjectService {
    Project addProject(Project project);
    List<Project> getAllProjects();
    Project getProjectById(Long id);
    Project updateProjectInfo(Project project);
    void deleteProjectById(Long id);
}
