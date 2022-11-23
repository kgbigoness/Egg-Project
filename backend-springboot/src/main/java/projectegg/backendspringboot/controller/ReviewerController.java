package projectegg.backendspringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import projectegg.backendspringboot.model.Reviewer;
import projectegg.backendspringboot.repository.ReviewerRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/")
public class ReviewerController {

    @Autowired
    private ReviewerRepository reviewerRepository;

    // get all reviewers api
    @GetMapping("/reviewers")
    public List<Reviewer> getAllReviewers() {
        return reviewerRepository.findAll();
    }

    // create reviewer api
    @PostMapping("/reviewers")
    public Reviewer createReviewer(@RequestBody Reviewer reviewer) {
        return reviewerRepository.save(reviewer);
    }
    
}
