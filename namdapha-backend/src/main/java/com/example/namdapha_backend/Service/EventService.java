package com.example.namdapha_backend.Service;


import com.example.namdapha_backend.Model.Event;
import com.example.namdapha_backend.Model.Image;
import com.example.namdapha_backend.Model.News;
import com.example.namdapha_backend.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository ;

    @Autowired
    private ImageService imageService ;

    public Event addEvent(Event event, MultipartFile file) throws IOException {
        if(file!=null && !file.isEmpty()){
            Image uploadedImage = imageService.uploadImage(file,"Admin","event") ;
            event.setImage(uploadedImage) ;
        }
        return eventRepository.save(event) ;
    }

    public void deleteEvent(String eventID){
        Event event = eventRepository.findById(eventID).orElseThrow(()-> new RuntimeException("News not found with :"+eventID)) ;
        if(event.getImage()!=null){
            try {
                imageService.deleteImage(event.getImage().getId());
            } catch (IOException e) {
                throw new RuntimeException("Image not deleted") ;
            }
        }
        eventRepository.deleteById(eventID);
    }

    public List<Event> getAllEvents(){
        return eventRepository.findAll() ;
    }

}
