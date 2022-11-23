package projectegg.backendspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import projectegg.backendspringboot.model.Reviewer;

@Repository
public interface ReviewerRepository extends JpaRepository<Reviewer, Long>{
    
}
