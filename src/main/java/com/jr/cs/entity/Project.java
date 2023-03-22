package com.jr.cs.entity;

import javax.persistence.*;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // project id
    private Long id;

    // project name
    private String p_name;

    // project description
    @Column(length = 1000)
    private String p_description;

    // project website url
    private String p_website_url;

    // project logo
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB", length = 1000)
    private String p_logo;

    public Project() {
    }

    public Project(String p_name, String p_description, String p_website_url, String p_logo) {
        this.p_name = p_name;
        this.p_description = p_description;
        this.p_website_url = p_website_url;
        this.p_logo = p_logo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }

    public String getP_description() {
        return p_description;
    }

    public void setP_description(String p_description) {
        this.p_description = p_description;
    }

    public String getP_website_url() {
        return p_website_url;
    }

    public void setP_website_url(String p_website_url) {
        this.p_website_url = p_website_url;
    }

    public String getP_logo() {
        return p_logo;
    }

    public void setP_logo(String p_logo) {
        this.p_logo = p_logo;
    }
}
