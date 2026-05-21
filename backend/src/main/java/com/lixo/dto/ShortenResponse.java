package com.lixo.dto;

public class ShortenResponse {
    private String originalUrl;
    private String shortUrl;

    public ShortenResponse(String originalUrl, String shortUrl) {
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
    }

    public String getOriginalUrl() { return originalUrl; }
    public String getShortUrl() { return shortUrl; }
}
