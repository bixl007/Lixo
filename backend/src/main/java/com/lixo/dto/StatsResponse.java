package com.lixo.dto;

import java.time.LocalDateTime;

public class StatsResponse {
    private String originalUrl;
    private String shortCode;
    private LocalDateTime createdAt;
    private Long clickCount;

    public StatsResponse(String originalUrl, String shortCode, LocalDateTime createdAt, Long clickCount) {
        this.originalUrl = originalUrl;
        this.shortCode = shortCode;
        this.createdAt = createdAt;
        this.clickCount = clickCount;
    }

    public String getOriginalUrl() { return originalUrl; }
    public String getShortCode() { return shortCode; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public Long getClickCount() { return clickCount; }
}
