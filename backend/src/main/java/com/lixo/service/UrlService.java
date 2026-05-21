package com.lixo.service;

import com.lixo.dto.ShortenRequest;
import com.lixo.dto.ShortenResponse;
import com.lixo.dto.StatsResponse;
import com.lixo.entity.UrlMapping;
import com.lixo.repository.UrlMappingRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class UrlService {

    private final UrlMappingRepository repository;

    @Value("${app.base-url:http://localhost:8080/}")
    private String baseUrl;

    public UrlService(UrlMappingRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public ShortenResponse shortenUrl(ShortenRequest request) {
        String shortCode;
        if (request.getAlias() != null && !request.getAlias().trim().isEmpty()) {
            shortCode = request.getAlias().trim();
            if (repository.findByShortCode(shortCode).isPresent()) {
                throw new RuntimeException("Alias already in use");
            }
        } else {
            shortCode = generateShortCode();
        }

        UrlMapping mapping = new UrlMapping(request.getUrl(), shortCode);
        repository.save(mapping);
        return new ShortenResponse(mapping.getOriginalUrl(), baseUrl + shortCode);
    }

    @Transactional
    public String getOriginalUrl(String shortCode) {
        Optional<UrlMapping> optionalMapping = repository.findByShortCode(shortCode);
        if (optionalMapping.isPresent()) {
            UrlMapping mapping = optionalMapping.get();
            mapping.setClickCount(mapping.getClickCount() + 1);
            repository.save(mapping);
            return mapping.getOriginalUrl();
        }
        throw new RuntimeException("URL not found");
    }

    public StatsResponse getStats(String shortCode) {
        UrlMapping mapping = repository.findByShortCode(shortCode)
                .orElseThrow(() -> new RuntimeException("URL not found"));
        
        return new StatsResponse(
                mapping.getOriginalUrl(),
                mapping.getShortCode(),
                mapping.getCreatedAt(),
                mapping.getClickCount()
        );
    }

    private String generateShortCode() {
        return UUID.randomUUID().toString().substring(0, 8);
    }
}
