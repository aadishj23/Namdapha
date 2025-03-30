package com.example.namdapha_backend.Controller;

import com.example.namdapha_backend.Model.Event;
import com.example.namdapha_backend.Model.News;
import com.example.namdapha_backend.Service.EventService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/event")
public class EventController {


    @Autowired
    private EventService eventService ;

    @PostMapping("/add")
    public ResponseEntity<Event> addNews(@RequestParam("event") String eventJson, @RequestPart("file") MultipartFile file){

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Event event = objectMapper.readValue(eventJson, Event.class);

            Event savedEvent = eventService.addEvent(event,file);
            return ResponseEntity.ok(savedEvent) ;
        } catch (JsonProcessingException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }

    @DeleteMapping("/delete/{eventID}")
    public ResponseEntity<String> deleteNews(@PathVariable String eventID){
        try{
            eventService.deleteEvent(eventID);
            return ResponseEntity.ok("Event deleted successfully") ;
        }
        catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage()) ;
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().body("Failed to delete Event") ;
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Event>> getAllEvents(){
        List<Event> allEvents = eventService.getAllEvents() ;
        return ResponseEntity.ok(allEvents) ;
    }

}
