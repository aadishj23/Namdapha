package com.example.namdapha_backend.Controller;


import com.example.namdapha_backend.Model.News;
import com.example.namdapha_backend.Model.Species;
import com.example.namdapha_backend.Service.SpeciesService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/species")
public class SpeciesController {

    @Autowired
    private SpeciesService speciesService ;

    @PostMapping("/add")
    public ResponseEntity<Species> addNews(@RequestParam("species") String newsJson, @RequestPart("file") MultipartFile file){

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Species species = objectMapper.readValue(newsJson, Species.class);

            Species savedspecies = speciesService.addSpecies(species,file);
            return ResponseEntity.ok(species) ;
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @DeleteMapping("/delete/{speciesID}")
    public ResponseEntity<String> deleteNews(@PathVariable String newsId){
        try{
            speciesService.deleteSpecies(newsId);
            return ResponseEntity.ok("Species deleted successfully") ;
        }
        catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage()) ;
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().body("Failed to delete specie") ;
        }
    }

    @GetMapping("/get")
    public ResponseEntity<List<Species>> getSpecie(){
        List<Species> speciesList = speciesService.getSpeciesOfTheWeek() ;
        return ResponseEntity.ok(speciesList) ;
    }
}
