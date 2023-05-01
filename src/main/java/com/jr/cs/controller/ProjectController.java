package com.jr.cs.controller;

import com.jr.cs.entity.Project;
import com.jr.cs.service.ProjectService;
import org.python.core.*;
import org.python.util.PythonInterpreter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Controller
//@RestController
//@RequestMapping("/cs")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    // chart
    @GetMapping("/check-chart")
    public String checkChart() {
        return "cmc_chart";
    }


    //test
    @GetMapping("/message")
    public String testPython(Model model) {
        PythonInterpreter interpreter = new PythonInterpreter();
        interpreter.execfile("src/main/resources/static/python/app.py");

        PyObject testNumpyFunc = interpreter.get("generate_text");
        PyObject po = testNumpyFunc.__call__();

        System.out.println(po.toString());
        model.addAttribute("mydata", po.toString());
        return "python";
    }

    // test running
    @GetMapping("/details")
    public String testDetails() {
        return "details";
    }

    // test 2
    @GetMapping("/project/edit/{id}")
    public String ePrDetails(@PathVariable Long id, Model model) {
        model.addAttribute("project", projectService.getProjectById(id));
        return "details";
    }

    @GetMapping("/")
    public String testFirst() {
        return "home";
    }

    // save project information's
    @PostMapping("/saveProject")
    public String addNewProject(@RequestBody Project project) {
        projectService.addProject(project);
        return "added " + project.getP_name() + " successfully!";
    }

    // test if link of image is working
    @GetMapping("/project-showing")
    public String showing(Model model) {
        model.addAttribute("projects", projectService.getAllProjects());
        return "stats";
    }

    // save project info with thymeleaf
    @GetMapping("/create-new")
    public String createNew() {
        return "create";
    }
    @PostMapping("/add-new-project")
    public String addNewProject(Model model,
                                @RequestParam("p_name") String p_name,
                                @RequestParam("p_ticker") String p_ticker,
                                @RequestParam("p_description") String p_description,
                                @RequestParam("p_website_url") String p_website_url,
                                @RequestParam("p_logo_url") String p_logo_url,
                                @RequestParam("p_logo") MultipartFile file) {
        String logoString = "";

        try {
            logoString = Base64.getEncoder().encodeToString(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        projectService.addProject(new Project(p_name, p_ticker, p_description, p_website_url, logoString, p_logo_url));
        return "redirect:/project-showing";
    }

    @GetMapping("/card")
    public String cardDisplay(Model model) {
        model.addAttribute("project", projectService.getAllProjects());
        return "img_card";
    }
}
