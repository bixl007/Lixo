package com.lixo.dto;

import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.URL;

public class ShortenRequest {
    @NotBlank(message = "URL cannot be blank")
    @URL(message = "Invalid URL format")
    private String url;

    private String alias;

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getAlias() { return alias; }
    public void setAlias(String alias) { this.alias = alias; }
}
