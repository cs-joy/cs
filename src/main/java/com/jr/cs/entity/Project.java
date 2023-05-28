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

    // project ticker
    // ex: BTC
    private String p_ticker;

    // project description
    @Column(length = 100)
    private String p_description;

    // project website url
    private String p_website_url;

    // project twitter url
    private String p_twitter_url;

    // project logo
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB", length = 1000)
    private String p_logo;

    // background-image url
    private String p_logo_url;

    // project category (ex: token or coin)
    private String p_category;

    public Project() {
    }

    public Project(String p_name, String p_ticker, String p_description, String p_website_url, String p_logo) {
        this.p_name = p_name;
        this.p_ticker = p_ticker;
        this.p_description = p_description;
        this.p_website_url = p_website_url;
        this.p_logo = p_logo;
    }

    public Project(String p_name, String p_ticker, String p_description, String p_website_url, String p_logo, String p_logo_url) {
        this.p_name = p_name;
        this.p_ticker = p_ticker;
        this.p_description = p_description;
        this.p_website_url = p_website_url;
        this.p_logo = p_logo;
        this.p_logo_url = p_logo_url;
    }

    public Project(String p_name, String p_category, String p_ticker, String p_description, String p_website_url, String p_logo, String p_logo_url) {
        this.p_name = p_name;
        this.p_category = p_category;
        this.p_ticker = p_ticker;
        this.p_description = p_description;
        this.p_website_url = p_website_url;
        this.p_logo = p_logo;
        this.p_logo_url = p_logo_url;
    }

    public Project(String p_name, String p_category, String p_ticker, String p_description, String p_website_url, String p_twitter_url, String p_logo, String p_logo_url) {
        this.p_name = p_name;
        this.p_category = p_category;
        this.p_ticker = p_ticker;
        this.p_description = p_description;
        this.p_website_url = p_website_url;
        this.p_twitter_url = p_twitter_url;
        this.p_logo = p_logo;
        this.p_logo_url = p_logo_url;
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

    public String getP_ticker() {
        return p_ticker;
    }

    public void setP_ticker(String p_ticker) {
        this.p_ticker = p_ticker;
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

    public String getP_logo_url() {
        return p_logo_url;
    }

    public void setP_logo_url(String p_logo_url) {
        this.p_logo_url = p_logo_url;
    }

    public String getP_category() {
        return p_category;
    }

    public void setP_category(String p_category) {
        this.p_category = p_category;
    }

    public String getP_twitter_url() {
        return p_twitter_url;
    }

    public void setP_twitter_url(String p_twitter_url) {
        this.p_twitter_url = p_twitter_url;
    }
}
