package com.jr.cs.controller;

import com.jr.cs.entity.Project;
import com.jr.cs.service.ProjectService;
import org.python.core.PyFunction;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Base64;

@Controller
//@RestController
//@RequestMapping("/cs")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    //test
    @GetMapping("/message")
    public String testPython(Model model) {
        PythonInterpreter interpreter = new PythonInterpreter();
        interpreter.execfile("src/main/resources/static/python/app.py");

        PyFunction func = interpreter.get("generate_text", PyFunction.class);
        PyObject pyobj = func.__call__();
        String msg = pyobj.toString();
        System.out.println(msg);
        model.addAttribute("mydata", msg);
        return "python";
    }

    // test 1
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
