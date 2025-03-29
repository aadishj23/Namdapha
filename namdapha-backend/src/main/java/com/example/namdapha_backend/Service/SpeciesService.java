package com.example.namdapha_backend.Service;

import com.example.namdapha_backend.Model.Event;
import com.example.namdapha_backend.Model.Image;
import com.example.namdapha_backend.Model.Species;
import com.example.namdapha_backend.Repository.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class SpeciesService {

    @Autowired
    private SpeciesRepository speciesRepository ;

    @Autowired
    private ImageService imageService ;

    public Species addSpecies(Species species, MultipartFile file) throws IOException {
        if(file!=null && !file.isEmpty()){
            Image uploadedImage = imageService.uploadImage(file,"Admin","event") ;
            species.setImage(uploadedImage) ;
        }
        return speciesRepository.save(species) ;
    }

    public void deleteSpecies(String speciesID){
        Species species = speciesRepository.findById(speciesID).orElseThrow(()-> new RuntimeException("News not found with :"+speciesID)) ;
        if(species.getImage()!=null){
            try {
                imageService.deleteImage(species.getImage().getId());
            } catch (IOException e) {
                throw new RuntimeException("Image not deleted") ;
            }
        }
        speciesRepository.deleteById(speciesID);
    }

    public List<Species> getSpeciesOfTheWeek(){
        return speciesRepository.findAll() ;
    }

}
